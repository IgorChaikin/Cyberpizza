(self["webpackChunkreact_boilerplate"] = self["webpackChunkreact_boilerplate"] || []).push([["vendors.jest-worker"],{

/***/ "./node_modules/jest-worker/build/Farm.js":
/*!************************************************!*\
  !*** ./node_modules/jest-worker/build/Farm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _FifoQueue = _interopRequireDefault(__webpack_require__(/*! ./FifoQueue */ "./node_modules/jest-worker/build/FifoQueue.js"));

var _types = __webpack_require__(/*! ./types */ "./node_modules/jest-worker/build/types.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class Farm {
  constructor(_numOfWorkers, _callback, options = {}) {
    var _options$workerSchedu, _options$taskQueue;

    this._numOfWorkers = _numOfWorkers;
    this._callback = _callback;

    _defineProperty(this, '_computeWorkerKey', void 0);

    _defineProperty(this, '_workerSchedulingPolicy', void 0);

    _defineProperty(this, '_cacheKeys', Object.create(null));

    _defineProperty(this, '_locks', []);

    _defineProperty(this, '_offset', 0);

    _defineProperty(this, '_taskQueue', void 0);

    this._computeWorkerKey = options.computeWorkerKey;
    this._workerSchedulingPolicy =
      (_options$workerSchedu = options.workerSchedulingPolicy) !== null &&
      _options$workerSchedu !== void 0
        ? _options$workerSchedu
        : 'round-robin';
    this._taskQueue =
      (_options$taskQueue = options.taskQueue) !== null &&
      _options$taskQueue !== void 0
        ? _options$taskQueue
        : new _FifoQueue.default();
  }

  doWork(method, ...args) {
    const customMessageListeners = new Set();

    const addCustomMessageListener = listener => {
      customMessageListeners.add(listener);
      return () => {
        customMessageListeners.delete(listener);
      };
    };

    const onCustomMessage = message => {
      customMessageListeners.forEach(listener => listener(message));
    };

    const promise = new Promise( // Bind args to this function so it won't reference to the parent scope.
      // This prevents a memory leak in v8, because otherwise the function will
      // retaine args for the closure.
      ((args, resolve, reject) => {
        const computeWorkerKey = this._computeWorkerKey;
        const request = [_types.CHILD_MESSAGE_CALL, false, method, args];
        let worker = null;
        let hash = null;

        if (computeWorkerKey) {
          hash = computeWorkerKey.call(this, method, ...args);
          worker = hash == null ? null : this._cacheKeys[hash];
        }

        const onStart = worker => {
          if (hash != null) {
            this._cacheKeys[hash] = worker;
          }
        };

        const onEnd = (error, result) => {
          customMessageListeners.clear();

          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        };

        const task = {
          onCustomMessage,
          onEnd,
          onStart,
          request
        };

        if (worker) {
          this._taskQueue.enqueue(task, worker.getWorkerId());

          this._process(worker.getWorkerId());
        } else {
          this._push(task);
        }
      }).bind(null, args)
    );
    promise.UNSTABLE_onCustomMessage = addCustomMessageListener;
    return promise;
  }

  _process(workerId) {
    if (this._isLocked(workerId)) {
      return this;
    }

    const task = this._taskQueue.dequeue(workerId);

    if (!task) {
      return this;
    }

    if (task.request[1]) {
      throw new Error('Queue implementation returned processed task');
    } // Reference the task object outside so it won't be retained by onEnd,
    // and other properties of the task object, such as task.request can be
    // garbage collected.

    const taskOnEnd = task.onEnd;

    const onEnd = (error, result) => {
      taskOnEnd(error, result);

      this._unlock(workerId);

      this._process(workerId);
    };

    task.request[1] = true;

    this._lock(workerId);

    this._callback(
      workerId,
      task.request,
      task.onStart,
      onEnd,
      task.onCustomMessage
    );

    return this;
  }

  _push(task) {
    this._taskQueue.enqueue(task);

    const offset = this._getNextWorkerOffset();

    for (let i = 0; i < this._numOfWorkers; i++) {
      this._process((offset + i) % this._numOfWorkers);

      if (task.request[1]) {
        break;
      }
    }

    return this;
  } // Typescript ensures that the switch statement is exhaustive.
  // Adding an explicit return at the end would disable the exhaustive check void.
  // eslint-disable-next-line consistent-return

  _getNextWorkerOffset() {
    switch (this._workerSchedulingPolicy) {
      case 'in-order':
        return 0;

      case 'round-robin':
        return this._offset++;
    }
  }

  _lock(workerId) {
    this._locks[workerId] = true;
  }

  _unlock(workerId) {
    this._locks[workerId] = false;
  }

  _isLocked(workerId) {
    return this._locks[workerId];
  }
}

exports.default = Farm;


/***/ }),

/***/ "./node_modules/jest-worker/build/FifoQueue.js":
/*!*****************************************************!*\
  !*** ./node_modules/jest-worker/build/FifoQueue.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * First-in, First-out task queue that manages a dedicated pool
 * for each worker as well as a shared queue. The FIFO ordering is guaranteed
 * across the worker specific and shared queue.
 */
class FifoQueue {
  constructor() {
    _defineProperty(this, '_workerQueues', []);

    _defineProperty(this, '_sharedQueue', new InternalQueue());
  }

  enqueue(task, workerId) {
    if (workerId == null) {
      this._sharedQueue.enqueue(task);

      return;
    }

    let workerQueue = this._workerQueues[workerId];

    if (workerQueue == null) {
      workerQueue = this._workerQueues[workerId] = new InternalQueue();
    }

    const sharedTop = this._sharedQueue.peekLast();

    const item = {
      previousSharedTask: sharedTop,
      task
    };
    workerQueue.enqueue(item);
  }

  dequeue(workerId) {
    var _this$_workerQueues$w, _workerTop$previousSh, _workerTop$previousSh2;

    const workerTop =
      (_this$_workerQueues$w = this._workerQueues[workerId]) === null ||
      _this$_workerQueues$w === void 0
        ? void 0
        : _this$_workerQueues$w.peek();
    const sharedTaskIsProcessed =
      (_workerTop$previousSh =
        workerTop === null || workerTop === void 0
          ? void 0
          : (_workerTop$previousSh2 = workerTop.previousSharedTask) === null ||
            _workerTop$previousSh2 === void 0
          ? void 0
          : _workerTop$previousSh2.request[1]) !== null &&
      _workerTop$previousSh !== void 0
        ? _workerTop$previousSh
        : true; // Process the top task from the shared queue if
    // - there's no task in the worker specific queue or
    // - if the non-worker-specific task after which this worker specifif task
    //   hasn been queued wasn't processed yet

    if (workerTop != null && sharedTaskIsProcessed) {
      var _this$_workerQueues$w2,
        _this$_workerQueues$w3,
        _this$_workerQueues$w4;

      return (_this$_workerQueues$w2 =
        (_this$_workerQueues$w3 = this._workerQueues[workerId]) === null ||
        _this$_workerQueues$w3 === void 0
          ? void 0
          : (_this$_workerQueues$w4 = _this$_workerQueues$w3.dequeue()) ===
              null || _this$_workerQueues$w4 === void 0
          ? void 0
          : _this$_workerQueues$w4.task) !== null &&
        _this$_workerQueues$w2 !== void 0
        ? _this$_workerQueues$w2
        : null;
    }

    return this._sharedQueue.dequeue();
  }
}

exports.default = FifoQueue;

/**
 * FIFO queue for a single worker / shared queue.
 */
class InternalQueue {
  constructor() {
    _defineProperty(this, '_head', null);

    _defineProperty(this, '_last', null);
  }

  enqueue(value) {
    const item = {
      next: null,
      value
    };

    if (this._last == null) {
      this._head = item;
    } else {
      this._last.next = item;
    }

    this._last = item;
  }

  dequeue() {
    if (this._head == null) {
      return null;
    }

    const item = this._head;
    this._head = item.next;

    if (this._head == null) {
      this._last = null;
    }

    return item.value;
  }

  peek() {
    var _this$_head$value, _this$_head;

    return (_this$_head$value =
      (_this$_head = this._head) === null || _this$_head === void 0
        ? void 0
        : _this$_head.value) !== null && _this$_head$value !== void 0
      ? _this$_head$value
      : null;
  }

  peekLast() {
    var _this$_last$value, _this$_last;

    return (_this$_last$value =
      (_this$_last = this._last) === null || _this$_last === void 0
        ? void 0
        : _this$_last.value) !== null && _this$_last$value !== void 0
      ? _this$_last$value
      : null;
  }
}


/***/ }),

/***/ "./node_modules/jest-worker/build/PriorityQueue.js":
/*!*********************************************************!*\
  !*** ./node_modules/jest-worker/build/PriorityQueue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Priority queue that processes tasks in natural ordering (lower priority first)
 * accoridng to the priority computed by the function passed in the constructor.
 *
 * FIFO ordering isn't guaranteed for tasks with the same priority.
 *
 * Worker specific tasks with the same priority as a non-worker specific task
 * are always processed first.
 */
class PriorityQueue {
  constructor(_computePriority) {
    this._computePriority = _computePriority;

    _defineProperty(this, '_queue', []);

    _defineProperty(this, '_sharedQueue', new MinHeap());
  }

  enqueue(task, workerId) {
    if (workerId == null) {
      this._enqueue(task, this._sharedQueue);
    } else {
      const queue = this._getWorkerQueue(workerId);

      this._enqueue(task, queue);
    }
  }

  _enqueue(task, queue) {
    const item = {
      priority: this._computePriority(task.request[2], ...task.request[3]),
      task
    };
    queue.add(item);
  }

  dequeue(workerId) {
    const workerQueue = this._getWorkerQueue(workerId);

    const workerTop = workerQueue.peek();

    const sharedTop = this._sharedQueue.peek(); // use the task from the worker queue if there's no task in the shared queue
    // or if the priority of the worker queue is smaller or equal to the
    // priority of the top task in the shared queue. The tasks of the
    // worker specific queue are preferred because no other worker can pick this
    // specific task up.

    if (
      sharedTop == null ||
      (workerTop != null && workerTop.priority <= sharedTop.priority)
    ) {
      var _workerQueue$poll$tas, _workerQueue$poll;

      return (_workerQueue$poll$tas =
        (_workerQueue$poll = workerQueue.poll()) === null ||
        _workerQueue$poll === void 0
          ? void 0
          : _workerQueue$poll.task) !== null && _workerQueue$poll$tas !== void 0
        ? _workerQueue$poll$tas
        : null;
    }

    return this._sharedQueue.poll().task;
  }

  _getWorkerQueue(workerId) {
    let queue = this._queue[workerId];

    if (queue == null) {
      queue = this._queue[workerId] = new MinHeap();
    }

    return queue;
  }
}

exports.default = PriorityQueue;

class MinHeap {
  constructor() {
    _defineProperty(this, '_heap', []);
  }

  peek() {
    var _this$_heap$;

    return (_this$_heap$ = this._heap[0]) !== null && _this$_heap$ !== void 0
      ? _this$_heap$
      : null;
  }

  add(item) {
    const nodes = this._heap;
    nodes.push(item);

    if (nodes.length === 1) {
      return;
    }

    let currentIndex = nodes.length - 1; // Bubble up the added node as long as the parent is bigger

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex + 1) / 2) - 1;
      const parent = nodes[parentIndex];

      if (parent.priority <= item.priority) {
        break;
      }

      nodes[currentIndex] = parent;
      nodes[parentIndex] = item;
      currentIndex = parentIndex;
    }
  }

  poll() {
    const nodes = this._heap;
    const result = nodes[0];
    const lastElement = nodes.pop(); // heap was empty or removed the last element

    if (result == null || nodes.length === 0) {
      return result !== null && result !== void 0 ? result : null;
    }

    let index = 0;
    nodes[0] =
      lastElement !== null && lastElement !== void 0 ? lastElement : null;
    const element = nodes[0];

    while (true) {
      let swapIndex = null;
      const rightChildIndex = (index + 1) * 2;
      const leftChildIndex = rightChildIndex - 1;
      const rightChild = nodes[rightChildIndex];
      const leftChild = nodes[leftChildIndex]; // if the left child is smaller, swap with the left

      if (leftChild != null && leftChild.priority < element.priority) {
        swapIndex = leftChildIndex;
      } // If the right child is smaller or the right child is smaller than the left
      // then swap with the right child

      if (
        rightChild != null &&
        rightChild.priority < (swapIndex == null ? element : leftChild).priority
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex == null) {
        break;
      }

      nodes[index] = nodes[swapIndex];
      nodes[swapIndex] = element;
      index = swapIndex;
    }

    return result;
  }
}


/***/ }),

/***/ "./node_modules/jest-worker/build/WorkerPool.js":
/*!******************************************************!*\
  !*** ./node_modules/jest-worker/build/WorkerPool.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _BaseWorkerPool = _interopRequireDefault(__webpack_require__(/*! ./base/BaseWorkerPool */ "./node_modules/jest-worker/build/base/BaseWorkerPool.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const canUseWorkerThreads = () => {
  try {
    __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'worker_threads'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    return true;
  } catch {
    return false;
  }
};

class WorkerPool extends _BaseWorkerPool.default {
  send(workerId, request, onStart, onEnd, onCustomMessage) {
    this.getWorkerById(workerId).send(request, onStart, onEnd, onCustomMessage);
  }

  createWorker(workerOptions) {
    let Worker;

    if (this._options.enableWorkerThreads && canUseWorkerThreads()) {
      Worker = __webpack_require__(/*! ./workers/NodeThreadsWorker */ "./node_modules/jest-worker/build/workers/NodeThreadsWorker.js").default;
    } else {
      Worker = __webpack_require__(/*! ./workers/ChildProcessWorker */ "./node_modules/jest-worker/build/workers/ChildProcessWorker.js").default;
    }

    return new Worker(workerOptions);
  }
}

var _default = WorkerPool;
exports.default = _default;


/***/ }),

/***/ "./node_modules/jest-worker/build/base/BaseWorkerPool.js":
/*!***************************************************************!*\
  !*** ./node_modules/jest-worker/build/base/BaseWorkerPool.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function path() {
  const data = _interopRequireWildcard(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

  path = function () {
    return data;
  };

  return data;
}

function _mergeStream() {
  const data = _interopRequireDefault(__webpack_require__(/*! merge-stream */ "./node_modules/merge-stream/index.js"));

  _mergeStream = function () {
    return data;
  };

  return data;
}

function _types() {
  const data = __webpack_require__(/*! ../types */ "./node_modules/jest-worker/build/types.js");

  _types = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// How long to wait for the child process to terminate
// after CHILD_MESSAGE_END before sending force exiting.
const FORCE_EXIT_DELAY = 500;
/* istanbul ignore next */

const emptyMethod = () => {};

class BaseWorkerPool {
  constructor(workerPath, options) {
    _defineProperty(this, '_stderr', void 0);

    _defineProperty(this, '_stdout', void 0);

    _defineProperty(this, '_options', void 0);

    _defineProperty(this, '_workers', void 0);

    this._options = options;
    this._workers = new Array(options.numWorkers);

    if (!path().isAbsolute(workerPath)) {
      workerPath = /*require.resolve*/(__webpack_require__("./node_modules/jest-worker/build/base sync recursive").resolve(workerPath));
    }

    const stdout = (0, _mergeStream().default)();
    const stderr = (0, _mergeStream().default)();
    const {forkOptions, maxRetries, resourceLimits, setupArgs} = options;

    for (let i = 0; i < options.numWorkers; i++) {
      const workerOptions = {
        forkOptions,
        maxRetries,
        resourceLimits,
        setupArgs,
        workerId: i,
        workerPath
      };
      const worker = this.createWorker(workerOptions);
      const workerStdout = worker.getStdout();
      const workerStderr = worker.getStderr();

      if (workerStdout) {
        stdout.add(workerStdout);
      }

      if (workerStderr) {
        stderr.add(workerStderr);
      }

      this._workers[i] = worker;
    }

    this._stdout = stdout;
    this._stderr = stderr;
  }

  getStderr() {
    return this._stderr;
  }

  getStdout() {
    return this._stdout;
  }

  getWorkers() {
    return this._workers;
  }

  getWorkerById(workerId) {
    return this._workers[workerId];
  }

  createWorker(_workerOptions) {
    throw Error('Missing method createWorker in WorkerPool');
  }

  async end() {
    // We do not cache the request object here. If so, it would only be only
    // processed by one of the workers, and we want them all to close.
    const workerExitPromises = this._workers.map(async worker => {
      worker.send(
        [_types().CHILD_MESSAGE_END, false],
        emptyMethod,
        emptyMethod,
        emptyMethod
      ); // Schedule a force exit in case worker fails to exit gracefully so
      // await worker.waitForExit() never takes longer than FORCE_EXIT_DELAY

      let forceExited = false;
      const forceExitTimeout = setTimeout(() => {
        worker.forceExit();
        forceExited = true;
      }, FORCE_EXIT_DELAY);
      await worker.waitForExit(); // Worker ideally exited gracefully, don't send force exit then

      clearTimeout(forceExitTimeout);
      return forceExited;
    });

    const workerExits = await Promise.all(workerExitPromises);
    return workerExits.reduce(
      (result, forceExited) => ({
        forceExited: result.forceExited || forceExited
      }),
      {
        forceExited: false
      }
    );
  }
}

exports.default = BaseWorkerPool;


/***/ }),

/***/ "./node_modules/jest-worker/build/index.js":
/*!*************************************************!*\
  !*** ./node_modules/jest-worker/build/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "PriorityQueue", ({
  enumerable: true,
  get: function () {
    return _PriorityQueue.default;
  }
}));
Object.defineProperty(exports, "FifoQueue", ({
  enumerable: true,
  get: function () {
    return _FifoQueue.default;
  }
}));
Object.defineProperty(exports, "messageParent", ({
  enumerable: true,
  get: function () {
    return _messageParent.default;
  }
}));
exports.Worker = void 0;

function _os() {
  const data = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'os'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  _os = function () {
    return data;
  };

  return data;
}

var _Farm = _interopRequireDefault(__webpack_require__(/*! ./Farm */ "./node_modules/jest-worker/build/Farm.js"));

var _WorkerPool = _interopRequireDefault(__webpack_require__(/*! ./WorkerPool */ "./node_modules/jest-worker/build/WorkerPool.js"));

var _PriorityQueue = _interopRequireDefault(__webpack_require__(/*! ./PriorityQueue */ "./node_modules/jest-worker/build/PriorityQueue.js"));

var _FifoQueue = _interopRequireDefault(__webpack_require__(/*! ./FifoQueue */ "./node_modules/jest-worker/build/FifoQueue.js"));

var _messageParent = _interopRequireDefault(__webpack_require__(/*! ./workers/messageParent */ "./node_modules/jest-worker/build/workers/messageParent.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function getExposedMethods(workerPath, options) {
  let exposedMethods = options.exposedMethods; // If no methods list is given, try getting it by auto-requiring the module.

  if (!exposedMethods) {
    const module = __webpack_require__("./node_modules/jest-worker/build sync recursive")(workerPath);

    exposedMethods = Object.keys(module).filter(
      // @ts-expect-error: no index
      name => typeof module[name] === 'function'
    );

    if (typeof module === 'function') {
      exposedMethods = [...exposedMethods, 'default'];
    }
  }

  return exposedMethods;
}
/**
 * The Jest farm (publicly called "Worker") is a class that allows you to queue
 * methods across multiple child processes, in order to parallelize work. This
 * is done by providing an absolute path to a module that will be loaded on each
 * of the child processes, and bridged to the main process.
 *
 * Bridged methods are specified by using the "exposedMethods" property of the
 * "options" object. This is an array of strings, where each of them corresponds
 * to the exported name in the loaded module.
 *
 * You can also control the amount of workers by using the "numWorkers" property
 * of the "options" object, and the settings passed to fork the process through
 * the "forkOptions" property. The amount of workers defaults to the amount of
 * CPUS minus one.
 *
 * Queueing calls can be done in two ways:
 *   - Standard method: calls will be redirected to the first available worker,
 *     so they will get executed as soon as they can.
 *
 *   - Sticky method: if a "computeWorkerKey" method is provided within the
 *     config, the resulting string of this method will be used as a key.
 *     Every time this key is returned, it is guaranteed that your job will be
 *     processed by the same worker. This is specially useful if your workers
 *     are caching results.
 */

class Worker {
  constructor(workerPath, options) {
    var _this$_options$enable,
      _this$_options$forkOp,
      _this$_options$maxRet,
      _this$_options$numWor,
      _this$_options$resour,
      _this$_options$setupA;

    _defineProperty(this, '_ending', void 0);

    _defineProperty(this, '_farm', void 0);

    _defineProperty(this, '_options', void 0);

    _defineProperty(this, '_workerPool', void 0);

    this._options = {...options};
    this._ending = false;
    const workerPoolOptions = {
      enableWorkerThreads:
        (_this$_options$enable = this._options.enableWorkerThreads) !== null &&
        _this$_options$enable !== void 0
          ? _this$_options$enable
          : false,
      forkOptions:
        (_this$_options$forkOp = this._options.forkOptions) !== null &&
        _this$_options$forkOp !== void 0
          ? _this$_options$forkOp
          : {},
      maxRetries:
        (_this$_options$maxRet = this._options.maxRetries) !== null &&
        _this$_options$maxRet !== void 0
          ? _this$_options$maxRet
          : 3,
      numWorkers:
        (_this$_options$numWor = this._options.numWorkers) !== null &&
        _this$_options$numWor !== void 0
          ? _this$_options$numWor
          : Math.max((0, _os().cpus)().length - 1, 1),
      resourceLimits:
        (_this$_options$resour = this._options.resourceLimits) !== null &&
        _this$_options$resour !== void 0
          ? _this$_options$resour
          : {},
      setupArgs:
        (_this$_options$setupA = this._options.setupArgs) !== null &&
        _this$_options$setupA !== void 0
          ? _this$_options$setupA
          : []
    };

    if (this._options.WorkerPool) {
      // @ts-expect-error: constructor target any?
      this._workerPool = new this._options.WorkerPool(
        workerPath,
        workerPoolOptions
      );
    } else {
      this._workerPool = new _WorkerPool.default(workerPath, workerPoolOptions);
    }

    this._farm = new _Farm.default(
      workerPoolOptions.numWorkers,
      this._workerPool.send.bind(this._workerPool),
      {
        computeWorkerKey: this._options.computeWorkerKey,
        taskQueue: this._options.taskQueue,
        workerSchedulingPolicy: this._options.workerSchedulingPolicy
      }
    );

    this._bindExposedWorkerMethods(workerPath, this._options);
  }

  _bindExposedWorkerMethods(workerPath, options) {
    getExposedMethods(workerPath, options).forEach(name => {
      if (name.startsWith('_')) {
        return;
      }

      if (this.constructor.prototype.hasOwnProperty(name)) {
        throw new TypeError('Cannot define a method called ' + name);
      } // @ts-expect-error: dynamic extension of the class instance is expected.

      this[name] = this._callFunctionWithArgs.bind(this, name);
    });
  }

  _callFunctionWithArgs(method, ...args) {
    if (this._ending) {
      throw new Error('Farm is ended, no more calls can be done to it');
    }

    return this._farm.doWork(method, ...args);
  }

  getStderr() {
    return this._workerPool.getStderr();
  }

  getStdout() {
    return this._workerPool.getStdout();
  }

  async end() {
    if (this._ending) {
      throw new Error('Farm is ended, no more calls can be done to it');
    }

    this._ending = true;
    return this._workerPool.end();
  }
}

exports.Worker = Worker;


/***/ }),

/***/ "./node_modules/jest-worker/build/types.js":
/*!*************************************************!*\
  !*** ./node_modules/jest-worker/build/types.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PARENT_MESSAGE_CUSTOM =
  exports.PARENT_MESSAGE_SETUP_ERROR =
  exports.PARENT_MESSAGE_CLIENT_ERROR =
  exports.PARENT_MESSAGE_OK =
  exports.CHILD_MESSAGE_END =
  exports.CHILD_MESSAGE_CALL =
  exports.CHILD_MESSAGE_INITIALIZE =
    void 0;

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// import type {ResourceLimits} from 'worker_threads';
// This is not present in the Node 12 typings
// Because of the dynamic nature of a worker communication process, all messages
// coming from any of the other processes cannot be typed. Thus, many types
// include "unknown" as a TS type, which is (unfortunately) correct here.
const CHILD_MESSAGE_INITIALIZE = 0;
exports.CHILD_MESSAGE_INITIALIZE = CHILD_MESSAGE_INITIALIZE;
const CHILD_MESSAGE_CALL = 1;
exports.CHILD_MESSAGE_CALL = CHILD_MESSAGE_CALL;
const CHILD_MESSAGE_END = 2;
exports.CHILD_MESSAGE_END = CHILD_MESSAGE_END;
const PARENT_MESSAGE_OK = 0;
exports.PARENT_MESSAGE_OK = PARENT_MESSAGE_OK;
const PARENT_MESSAGE_CLIENT_ERROR = 1;
exports.PARENT_MESSAGE_CLIENT_ERROR = PARENT_MESSAGE_CLIENT_ERROR;
const PARENT_MESSAGE_SETUP_ERROR = 2;
exports.PARENT_MESSAGE_SETUP_ERROR = PARENT_MESSAGE_SETUP_ERROR;
const PARENT_MESSAGE_CUSTOM = 3;
exports.PARENT_MESSAGE_CUSTOM = PARENT_MESSAGE_CUSTOM;


/***/ }),

/***/ "./node_modules/jest-worker/build/workers/ChildProcessWorker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jest-worker/build/workers/ChildProcessWorker.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function _child_process() {
  const data = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'child_process'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  _child_process = function () {
    return data;
  };

  return data;
}

function _stream() {
  const data = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  _stream = function () {
    return data;
  };

  return data;
}

function _mergeStream() {
  const data = _interopRequireDefault(__webpack_require__(/*! merge-stream */ "./node_modules/merge-stream/index.js"));

  _mergeStream = function () {
    return data;
  };

  return data;
}

function _supportsColor() {
  const data = __webpack_require__(/*! supports-color */ "./node_modules/jest-worker/node_modules/supports-color/browser.js");

  _supportsColor = function () {
    return data;
  };

  return data;
}

function _types() {
  const data = __webpack_require__(/*! ../types */ "./node_modules/jest-worker/build/types.js");

  _types = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

const SIGNAL_BASE_EXIT_CODE = 128;
const SIGKILL_EXIT_CODE = SIGNAL_BASE_EXIT_CODE + 9;
const SIGTERM_EXIT_CODE = SIGNAL_BASE_EXIT_CODE + 15; // How long to wait after SIGTERM before sending SIGKILL

const SIGKILL_DELAY = 500;
/**
 * This class wraps the child process and provides a nice interface to
 * communicate with. It takes care of:
 *
 *  - Re-spawning the process if it dies.
 *  - Queues calls while the worker is busy.
 *  - Re-sends the requests if the worker blew up.
 *
 * The reason for queueing them here (since childProcess.send also has an
 * internal queue) is because the worker could be doing asynchronous work, and
 * this would lead to the child process to read its receiving buffer and start a
 * second call. By queueing calls here, we don't send the next call to the
 * children until we receive the result of the previous one.
 *
 * As soon as a request starts to be processed by a worker, its "processed"
 * field is changed to "true", so that other workers which might encounter the
 * same call skip it.
 */

class ChildProcessWorker {
  constructor(options) {
    _defineProperty(this, '_child', void 0);

    _defineProperty(this, '_options', void 0);

    _defineProperty(this, '_request', void 0);

    _defineProperty(this, '_retries', void 0);

    _defineProperty(this, '_onProcessEnd', void 0);

    _defineProperty(this, '_onCustomMessage', void 0);

    _defineProperty(this, '_fakeStream', void 0);

    _defineProperty(this, '_stdout', void 0);

    _defineProperty(this, '_stderr', void 0);

    _defineProperty(this, '_exitPromise', void 0);

    _defineProperty(this, '_resolveExitPromise', void 0);

    this._options = options;
    this._request = null;
    this._fakeStream = null;
    this._stdout = null;
    this._stderr = null;
    this._exitPromise = new Promise(resolve => {
      this._resolveExitPromise = resolve;
    });
    this.initialize();
  }

  initialize() {
    const forceColor = _supportsColor().stdout
      ? {
          FORCE_COLOR: '1'
        }
      : {};
    const child = (0, _child_process().fork)(
      /*require.resolve*/(/*! ./processChild */ "./node_modules/jest-worker/build/workers/processChild.js"),
      [],
      {
        cwd: process.cwd(),
        env: {
          ...process.env,
          JEST_WORKER_ID: String(this._options.workerId + 1),
          // 0-indexed workerId, 1-indexed JEST_WORKER_ID
          ...forceColor
        },
        // Suppress --debug / --inspect flags while preserving others (like --harmony).
        execArgv: process.execArgv.filter(v => !/^--(debug|inspect)/.test(v)),
        silent: true,
        ...this._options.forkOptions
      }
    );

    if (child.stdout) {
      if (!this._stdout) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stdout = (0, _mergeStream().default)(this._getFakeStream());
      }

      this._stdout.add(child.stdout);
    }

    if (child.stderr) {
      if (!this._stderr) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stderr = (0, _mergeStream().default)(this._getFakeStream());
      }

      this._stderr.add(child.stderr);
    }

    child.on('message', this._onMessage.bind(this));
    child.on('exit', this._onExit.bind(this));
    child.send([
      _types().CHILD_MESSAGE_INITIALIZE,
      false,
      this._options.workerPath,
      this._options.setupArgs
    ]);
    this._child = child;
    this._retries++; // If we exceeded the amount of retries, we will emulate an error reply
    // coming from the child. This avoids code duplication related with cleaning
    // the queue, and scheduling the next call.

    if (this._retries > this._options.maxRetries) {
      const error = new Error(
        `Jest worker encountered ${this._retries} child process exceptions, exceeding retry limit`
      );

      this._onMessage([
        _types().PARENT_MESSAGE_CLIENT_ERROR,
        error.name,
        error.message,
        error.stack,
        {
          type: 'WorkerError'
        }
      ]);
    }
  }

  _shutdown() {
    // End the temporary streams so the merged streams end too
    if (this._fakeStream) {
      this._fakeStream.end();

      this._fakeStream = null;
    }

    this._resolveExitPromise();
  }

  _onMessage(response) {
    // TODO: Add appropriate type check
    let error;

    switch (response[0]) {
      case _types().PARENT_MESSAGE_OK:
        this._onProcessEnd(null, response[1]);

        break;

      case _types().PARENT_MESSAGE_CLIENT_ERROR:
        error = response[4];

        if (error != null && typeof error === 'object') {
          const extra = error; // @ts-expect-error: no index

          const NativeCtor = __webpack_require__.g[response[1]];
          const Ctor = typeof NativeCtor === 'function' ? NativeCtor : Error;
          error = new Ctor(response[2]);
          error.type = response[1];
          error.stack = response[3];

          for (const key in extra) {
            error[key] = extra[key];
          }
        }

        this._onProcessEnd(error, null);

        break;

      case _types().PARENT_MESSAGE_SETUP_ERROR:
        error = new Error('Error when calling setup: ' + response[2]);
        error.type = response[1];
        error.stack = response[3];

        this._onProcessEnd(error, null);

        break;

      case _types().PARENT_MESSAGE_CUSTOM:
        this._onCustomMessage(response[1]);

        break;

      default:
        throw new TypeError('Unexpected response from worker: ' + response[0]);
    }
  }

  _onExit(exitCode) {
    if (
      exitCode !== 0 &&
      exitCode !== null &&
      exitCode !== SIGTERM_EXIT_CODE &&
      exitCode !== SIGKILL_EXIT_CODE
    ) {
      this.initialize();

      if (this._request) {
        this._child.send(this._request);
      }
    } else {
      this._shutdown();
    }
  }

  send(request, onProcessStart, onProcessEnd, onCustomMessage) {
    onProcessStart(this);

    this._onProcessEnd = (...args) => {
      // Clean the request to avoid sending past requests to workers that fail
      // while waiting for a new request (timers, unhandled rejections...)
      this._request = null;
      return onProcessEnd(...args);
    };

    this._onCustomMessage = (...arg) => onCustomMessage(...arg);

    this._request = request;
    this._retries = 0;

    this._child.send(request, () => {});
  }

  waitForExit() {
    return this._exitPromise;
  }

  forceExit() {
    this._child.kill('SIGTERM');

    const sigkillTimeout = setTimeout(
      () => this._child.kill('SIGKILL'),
      SIGKILL_DELAY
    );

    this._exitPromise.then(() => clearTimeout(sigkillTimeout));
  }

  getWorkerId() {
    return this._options.workerId;
  }

  getStdout() {
    return this._stdout;
  }

  getStderr() {
    return this._stderr;
  }

  _getFakeStream() {
    if (!this._fakeStream) {
      this._fakeStream = new (_stream().PassThrough)();
    }

    return this._fakeStream;
  }
}

exports.default = ChildProcessWorker;


/***/ }),

/***/ "./node_modules/jest-worker/build/workers/NodeThreadsWorker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jest-worker/build/workers/NodeThreadsWorker.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __dirname = "/";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

function path() {
  const data = _interopRequireWildcard(__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'path'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));

  path = function () {
    return data;
  };

  return data;
}

function _stream() {
  const data = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'stream'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  _stream = function () {
    return data;
  };

  return data;
}

function _worker_threads() {
  const data = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'worker_threads'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

  _worker_threads = function () {
    return data;
  };

  return data;
}

function _mergeStream() {
  const data = _interopRequireDefault(__webpack_require__(/*! merge-stream */ "./node_modules/merge-stream/index.js"));

  _mergeStream = function () {
    return data;
  };

  return data;
}

function _types() {
  const data = __webpack_require__(/*! ../types */ "./node_modules/jest-worker/build/types.js");

  _types = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj};
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return {default: obj};
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

class ExperimentalWorker {
  constructor(options) {
    _defineProperty(this, '_worker', void 0);

    _defineProperty(this, '_options', void 0);

    _defineProperty(this, '_request', void 0);

    _defineProperty(this, '_retries', void 0);

    _defineProperty(this, '_onProcessEnd', void 0);

    _defineProperty(this, '_onCustomMessage', void 0);

    _defineProperty(this, '_fakeStream', void 0);

    _defineProperty(this, '_stdout', void 0);

    _defineProperty(this, '_stderr', void 0);

    _defineProperty(this, '_exitPromise', void 0);

    _defineProperty(this, '_resolveExitPromise', void 0);

    _defineProperty(this, '_forceExited', void 0);

    this._options = options;
    this._request = null;
    this._fakeStream = null;
    this._stdout = null;
    this._stderr = null;
    this._exitPromise = new Promise(resolve => {
      this._resolveExitPromise = resolve;
    });
    this._forceExited = false;
    this.initialize();
  }

  initialize() {
    this._worker = new (_worker_threads().Worker)(
      path().resolve(__dirname, './threadChild.js'),
      {
        eval: false,
        // @ts-expect-error: added in newer versions
        resourceLimits: this._options.resourceLimits,
        stderr: true,
        stdout: true,
        workerData: {
          cwd: process.cwd(),
          env: {
            ...process.env,
            JEST_WORKER_ID: String(this._options.workerId + 1) // 0-indexed workerId, 1-indexed JEST_WORKER_ID
          },
          // Suppress --debug / --inspect flags while preserving others (like --harmony).
          execArgv: process.execArgv.filter(v => !/^--(debug|inspect)/.test(v)),
          silent: true,
          ...this._options.forkOptions
        }
      }
    );

    if (this._worker.stdout) {
      if (!this._stdout) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stdout = (0, _mergeStream().default)(this._getFakeStream());
      }

      this._stdout.add(this._worker.stdout);
    }

    if (this._worker.stderr) {
      if (!this._stderr) {
        // We need to add a permanent stream to the merged stream to prevent it
        // from ending when the subprocess stream ends
        this._stderr = (0, _mergeStream().default)(this._getFakeStream());
      }

      this._stderr.add(this._worker.stderr);
    }

    this._worker.on('message', this._onMessage.bind(this));

    this._worker.on('exit', this._onExit.bind(this));

    this._worker.postMessage([
      _types().CHILD_MESSAGE_INITIALIZE,
      false,
      this._options.workerPath,
      this._options.setupArgs
    ]);

    this._retries++; // If we exceeded the amount of retries, we will emulate an error reply
    // coming from the child. This avoids code duplication related with cleaning
    // the queue, and scheduling the next call.

    if (this._retries > this._options.maxRetries) {
      const error = new Error('Call retries were exceeded');

      this._onMessage([
        _types().PARENT_MESSAGE_CLIENT_ERROR,
        error.name,
        error.message,
        error.stack,
        {
          type: 'WorkerError'
        }
      ]);
    }
  }

  _shutdown() {
    // End the permanent stream so the merged stream end too
    if (this._fakeStream) {
      this._fakeStream.end();

      this._fakeStream = null;
    }

    this._resolveExitPromise();
  }

  _onMessage(response) {
    let error;

    switch (response[0]) {
      case _types().PARENT_MESSAGE_OK:
        this._onProcessEnd(null, response[1]);

        break;

      case _types().PARENT_MESSAGE_CLIENT_ERROR:
        error = response[4];

        if (error != null && typeof error === 'object') {
          const extra = error; // @ts-expect-error: no index

          const NativeCtor = __webpack_require__.g[response[1]];
          const Ctor = typeof NativeCtor === 'function' ? NativeCtor : Error;
          error = new Ctor(response[2]);
          error.type = response[1];
          error.stack = response[3];

          for (const key in extra) {
            // @ts-expect-error: no index
            error[key] = extra[key];
          }
        }

        this._onProcessEnd(error, null);

        break;

      case _types().PARENT_MESSAGE_SETUP_ERROR:
        error = new Error('Error when calling setup: ' + response[2]); // @ts-expect-error: adding custom properties to errors.

        error.type = response[1];
        error.stack = response[3];

        this._onProcessEnd(error, null);

        break;

      case _types().PARENT_MESSAGE_CUSTOM:
        this._onCustomMessage(response[1]);

        break;

      default:
        throw new TypeError('Unexpected response from worker: ' + response[0]);
    }
  }

  _onExit(exitCode) {
    if (exitCode !== 0 && !this._forceExited) {
      this.initialize();

      if (this._request) {
        this._worker.postMessage(this._request);
      }
    } else {
      this._shutdown();
    }
  }

  waitForExit() {
    return this._exitPromise;
  }

  forceExit() {
    this._forceExited = true;

    this._worker.terminate();
  }

  send(request, onProcessStart, onProcessEnd, onCustomMessage) {
    onProcessStart(this);

    this._onProcessEnd = (...args) => {
      var _onProcessEnd;

      // Clean the request to avoid sending past requests to workers that fail
      // while waiting for a new request (timers, unhandled rejections...)
      this._request = null;
      const res =
        (_onProcessEnd = onProcessEnd) === null || _onProcessEnd === void 0
          ? void 0
          : _onProcessEnd(...args); // Clean up the reference so related closures can be garbage collected.

      onProcessEnd = null;
      return res;
    };

    this._onCustomMessage = (...arg) => onCustomMessage(...arg);

    this._request = request;
    this._retries = 0;

    this._worker.postMessage(request);
  }

  getWorkerId() {
    return this._options.workerId;
  }

  getStdout() {
    return this._stdout;
  }

  getStderr() {
    return this._stderr;
  }

  _getFakeStream() {
    if (!this._fakeStream) {
      this._fakeStream = new (_stream().PassThrough)();
    }

    return this._fakeStream;
  }
}

exports.default = ExperimentalWorker;


/***/ }),

/***/ "./node_modules/jest-worker/build/workers/messageParent.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jest-worker/build/workers/messageParent.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = messageParent;

function _types() {
  const data = __webpack_require__(/*! ../types */ "./node_modules/jest-worker/build/types.js");

  _types = function () {
    return data;
  };

  return data;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const isWorkerThread = (() => {
  try {
    // `Require` here to support Node v10
    const {isMainThread, parentPort} = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'worker_threads'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

    return !isMainThread && parentPort != null;
  } catch {
    return false;
  }
})();

function messageParent(message, parentProcess = process) {
  if (isWorkerThread) {
    // `Require` here to support Node v10
    const {parentPort} = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'worker_threads'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())); // ! is safe due to `null` check in `isWorkerThread`

    parentPort.postMessage([_types().PARENT_MESSAGE_CUSTOM, message]);
  } else if (typeof parentProcess.send === 'function') {
    parentProcess.send([_types().PARENT_MESSAGE_CUSTOM, message]);
  } else {
    throw new Error('"messageParent" can only be used inside a worker');
  }
}


/***/ }),

/***/ "./node_modules/jest-worker/build/workers/processChild.js":
/*!****************************************************************!*\
  !*** ./node_modules/jest-worker/build/workers/processChild.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function _types() {
  const data = __webpack_require__(/*! ../types */ "./node_modules/jest-worker/build/types.js");

  _types = function () {
    return data;
  };

  return data;
}

/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
let file = null;
let setupArgs = [];
let initialized = false;
/**
 * This file is a small bootstrapper for workers. It sets up the communication
 * between the worker and the parent process, interpreting parent messages and
 * sending results back.
 *
 * The file loaded will be lazily initialized the first time any of the workers
 * is called. This is done for optimal performance: if the farm is initialized,
 * but no call is made to it, child Node processes will be consuming the least
 * possible amount of memory.
 *
 * If an invalid message is detected, the child will exit (by throwing) with a
 * non-zero exit code.
 */

const messageListener = request => {
  switch (request[0]) {
    case _types().CHILD_MESSAGE_INITIALIZE:
      const init = request;
      file = init[2];
      setupArgs = request[3];
      break;

    case _types().CHILD_MESSAGE_CALL:
      const call = request;
      execMethod(call[2], call[3]);
      break;

    case _types().CHILD_MESSAGE_END:
      end();
      break;

    default:
      throw new TypeError(
        'Unexpected request from parent process: ' + request[0]
      );
  }
};

process.on('message', messageListener);

function reportSuccess(result) {
  if (!process || !process.send) {
    throw new Error('Child can only be used on a forked process');
  }

  process.send([_types().PARENT_MESSAGE_OK, result]);
}

function reportClientError(error) {
  return reportError(error, _types().PARENT_MESSAGE_CLIENT_ERROR);
}

function reportInitializeError(error) {
  return reportError(error, _types().PARENT_MESSAGE_SETUP_ERROR);
}

function reportError(error, type) {
  if (!process || !process.send) {
    throw new Error('Child can only be used on a forked process');
  }

  if (error == null) {
    error = new Error('"null" or "undefined" thrown');
  }

  process.send([
    type,
    error.constructor && error.constructor.name,
    error.message,
    error.stack,
    typeof error === 'object' ? {...error} : error
  ]);
}

function end() {
  const main = __webpack_require__("./node_modules/jest-worker/build/workers sync recursive")(file);

  if (!main.teardown) {
    exitProcess();
    return;
  }

  execFunction(main.teardown, main, [], exitProcess, exitProcess);
}

function exitProcess() {
  // Clean up open handles so the process ideally exits gracefully
  process.removeListener('message', messageListener);
}

function execMethod(method, args) {
  const main = __webpack_require__("./node_modules/jest-worker/build/workers sync recursive")(file);

  let fn;

  if (method === 'default') {
    fn = main.__esModule ? main['default'] : main;
  } else {
    fn = main[method];
  }

  function execHelper() {
    execFunction(fn, main, args, reportSuccess, reportClientError);
  }

  if (initialized || !main.setup) {
    execHelper();
    return;
  }

  initialized = true;
  execFunction(main.setup, main, setupArgs, execHelper, reportInitializeError);
}

const isPromise = obj =>
  !!obj &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

function execFunction(fn, ctx, args, onResult, onError) {
  let result;

  try {
    result = fn.apply(ctx, args);
  } catch (err) {
    onError(err);
    return;
  }

  if (isPromise(result)) {
    result.then(onResult, onError);
  } else {
    onResult(result);
  }
}


/***/ }),

/***/ "./node_modules/jest-worker/node_modules/supports-color/browser.js":
/*!*************************************************************************!*\
  !*** ./node_modules/jest-worker/node_modules/supports-color/browser.js ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
/* eslint-env browser */


function getChromeVersion() {
	const matches = /(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);

	if (!matches) {
		return;
	}

	return Number.parseInt(matches.groups.chromeVersion, 10);
}

const colorSupport = getChromeVersion() >= 69 ? {
	level: 1,
	hasBasic: true,
	has256: false,
	has16m: false
} : false;

module.exports = {
	stdout: colorSupport,
	stderr: colorSupport
};


/***/ })

}]);
//# sourceMappingURL=vendors.jest-worker.814c9c86.js.map