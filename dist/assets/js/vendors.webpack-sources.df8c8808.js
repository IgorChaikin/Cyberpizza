(self["webpackChunkreact_boilerplate"] = self["webpackChunkreact_boilerplate"] || []).push([["vendors.webpack-sources"],{

/***/ "./node_modules/webpack-sources/lib/CachedSource.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-sources/lib/CachedSource.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");
const { SourceMapConsumer, SourceNode } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { SourceListMap, fromStringWithSourceMap } = __webpack_require__(/*! source-list-map */ "./node_modules/source-list-map/lib/index.js");

const LIST_MAP_OPTIONS = { columns: false };

const mapToBufferedMap = map => {
	if (typeof map !== "object" || !map) return map;
	const bufferedMap = Object.assign({}, map);
	if (map.mappings) {
		bufferedMap.mappings = Buffer.from(map.mappings, "utf-8");
	}
	if (map.sourcesContent) {
		bufferedMap.sourcesContent = map.sourcesContent.map(
			str => str && Buffer.from(str, "utf-8")
		);
	}
	return bufferedMap;
};

const bufferedMapToMap = bufferedMap => {
	if (typeof bufferedMap !== "object" || !bufferedMap) return bufferedMap;
	const map = Object.assign({}, bufferedMap);
	if (bufferedMap.mappings) {
		map.mappings = bufferedMap.mappings.toString("utf-8");
	}
	if (bufferedMap.sourcesContent) {
		map.sourcesContent = bufferedMap.sourcesContent.map(
			buffer => buffer && buffer.toString("utf-8")
		);
	}
	return map;
};

const sourceAndMapToNode = (source, map) => {
	if (map) {
		return SourceNode.fromStringWithSourceMap(
			source,
			new SourceMapConsumer(map)
		);
	} else {
		return new SourceNode(null, null, null, source);
	}
};

const sourceAndMapToListMap = (source, map) => {
	if (map) {
		return fromStringWithSourceMap(source, map);
	} else {
		return new SourceListMap(source);
	}
};

class CachedSource extends Source {
	constructor(source, cachedData) {
		super();
		this._source = source;
		this._cachedSourceType = cachedData ? cachedData.source : undefined;
		this._cachedSource = undefined;
		this._cachedBuffer = cachedData ? cachedData.buffer : undefined;
		this._cachedSize = cachedData ? cachedData.size : undefined;
		this._cachedMaps = cachedData ? cachedData.maps : new Map();
		this._cachedHashUpdate = cachedData ? cachedData.hash : undefined;
	}

	getCachedData() {
		const bufferedMaps = new Map();
		for (const pair of this._cachedMaps) {
			let cacheEntry = pair[1];
			if (cacheEntry.bufferedMap === undefined) {
				cacheEntry.bufferedMap = mapToBufferedMap(
					this._getMapFromCacheEntry(cacheEntry)
				);
			}
			bufferedMaps.set(pair[0], {
				map: undefined,
				node: undefined,
				listMap: undefined,
				bufferedMap: cacheEntry.bufferedMap
			});
		}
		// We don't want to cache strings
		// So if we have a caches sources
		// create a buffer from it and only store
		// if it was a Buffer or string
		if (this._cachedSource) {
			this.buffer();
		}
		return {
			buffer: this._cachedBuffer,
			source:
				this._cachedSourceType !== undefined
					? this._cachedSourceType
					: typeof this._cachedSource === "string"
					? true
					: Buffer.isBuffer(this._cachedSource)
					? false
					: undefined,
			size: this._cachedSize,
			maps: bufferedMaps,
			hash: this._cachedHashUpdate
		};
	}

	originalLazy() {
		return this._source;
	}

	original() {
		if (typeof this._source === "function") this._source = this._source();
		return this._source;
	}

	source() {
		const source = this._getCachedSource();
		if (source !== undefined) return source;
		return (this._cachedSource = this.original().source());
	}

	_getMapFromCacheEntry(cacheEntry) {
		if (cacheEntry.map !== undefined) {
			return cacheEntry.map;
		} else if (cacheEntry.bufferedMap !== undefined) {
			return (cacheEntry.map = bufferedMapToMap(cacheEntry.bufferedMap));
		} else if (cacheEntry.node !== undefined) {
			const result = cacheEntry.node.toStringWithSourceMap({
				file: "x"
			});
			if (this._cachedSource === undefined) this._cachedSource = result.code;
			return (cacheEntry.map = result.map.toJSON());
		} else if (cacheEntry.listMap !== undefined) {
			const result = cacheEntry.listMap.toStringWithSourceMap({
				file: "x"
			});
			if (this._cachedSource === undefined) this._cachedSource = result.source;
			return (cacheEntry.map = result.map);
		}
	}

	_getCachedSource() {
		if (this._cachedSource !== undefined) return this._cachedSource;
		if (this._cachedBuffer && this._cachedSourceType !== undefined) {
			return (this._cachedSource = this._cachedSourceType
				? this._cachedBuffer.toString("utf-8")
				: this._cachedBuffer);
		}
		for (const cacheEntry of this._cachedMaps.values()) {
			if (cacheEntry.node !== undefined) {
				return (this._cachedSource = cacheEntry.node.toString());
			}
			if (cacheEntry.listMap !== undefined) {
				return (this._cachedSource = cacheEntry.listMap.toString());
			}
		}
	}

	buffer() {
		if (this._cachedBuffer !== undefined) return this._cachedBuffer;
		if (this._cachedSource !== undefined) {
			if (Buffer.isBuffer(this._cachedSource)) {
				return (this._cachedBuffer = this._cachedSource);
			}
			return (this._cachedBuffer = Buffer.from(this._cachedSource, "utf-8"));
		}
		if (typeof this.original().buffer === "function") {
			return (this._cachedBuffer = this.original().buffer());
		}
		const bufferOrString = this.source();
		if (Buffer.isBuffer(bufferOrString)) {
			return (this._cachedBuffer = bufferOrString);
		}
		return (this._cachedBuffer = Buffer.from(bufferOrString, "utf-8"));
	}

	size() {
		if (this._cachedSize !== undefined) return this._cachedSize;
		if (this._cachedBuffer !== undefined) {
			return (this._cachedSize = this._cachedBuffer.length);
		}
		const source = this._getCachedSource();
		if (source !== undefined) {
			return (this._cachedSize = Buffer.byteLength(source));
		}
		return (this._cachedSize = this.original().size());
	}

	sourceAndMap(options) {
		const key = options ? JSON.stringify(options) : "{}";
		const cacheEntry = this._cachedMaps.get(key);
		// Look for a cached map
		if (cacheEntry !== undefined) {
			// We have a cached map in some representation
			const map = this._getMapFromCacheEntry(cacheEntry);
			// Either get the cached source or compute it
			return { source: this.source(), map };
		}
		// Look for a cached source
		let source = this._getCachedSource();
		// Compute the map
		let map;
		if (source !== undefined) {
			map = this.original().map(options);
		} else {
			// Compute the source and map together.
			const sourceAndMap = this.original().sourceAndMap(options);
			source = sourceAndMap.source;
			map = sourceAndMap.map;
			this._cachedSource = source;
		}
		this._cachedMaps.set(key, {
			map,
			node: undefined,
			listMap: undefined,
			bufferedMap: undefined
		});
		return { source, map };
	}

	node(options) {
		const key = options ? JSON.stringify(options) : "{}";
		let cacheEntry = this._cachedMaps.get(key);
		// Check cache
		if (cacheEntry !== undefined) {
			// Directly cached
			if (cacheEntry.node) return cacheEntry.node;
			// Construct from cached map
			const map = this._getMapFromCacheEntry(cacheEntry);
			const source = this.source();
			const node = sourceAndMapToNode(source, map);
			cacheEntry.node = node;
			return node;
		}
		let node;
		const original = this.original();
		if (typeof original.node === "function") {
			node = original.node(options);
			this._cachedMaps.set(key, {
				map: undefined,
				node,
				listMap: undefined,
				bufferedMap: undefined
			});
		} else {
			const sourceAndMap = this.sourceAndMap(options);
			node = sourceAndMapToNode(sourceAndMap.source, sourceAndMap.map);
			this._cachedMaps.get(key).node = node;
		}
		return node;
	}

	listMap(options) {
		let key;
		// Enforce options must include columns: false
		if (!options) {
			key = '{"columns":false}';
			options = LIST_MAP_OPTIONS;
		} else {
			if (options.columns !== false) {
				options = Object.assign({}, options, LIST_MAP_OPTIONS);
			}
			key = JSON.stringify(options);
		}
		// Check cache
		let cacheEntry = this._cachedMaps.get(key);
		if (cacheEntry !== undefined) {
			// Directly cached
			if (cacheEntry.listMap) return cacheEntry.listMap;
			// Construct from cached map
			const map = this._getMapFromCacheEntry(cacheEntry);
			const source = this.source();
			const listMap = sourceAndMapToListMap(source, map);
			cacheEntry.listMap = listMap;
			return listMap;
		}
		let listMap;
		const original = this.original();
		if (typeof original.listMap === "function") {
			listMap = original.listMap(options);
			this._cachedMaps.set(key, {
				map: undefined,
				node: undefined,
				listMap,
				bufferedMap: undefined
			});
		} else {
			const sourceAndMap = this.sourceAndMap(options);
			listMap = sourceAndMapToListMap(sourceAndMap.source, sourceAndMap.map);
			this._cachedMaps.get(key).listMap = listMap;
		}
		return listMap;
	}

	map(options) {
		const key = options ? JSON.stringify(options) : "{}";
		const cacheEntry = this._cachedMaps.get(key);
		if (cacheEntry !== undefined) {
			return this._getMapFromCacheEntry(cacheEntry);
		}
		const map = this.original().map(options);
		this._cachedMaps.set(key, {
			map,
			node: undefined,
			listMap: undefined,
			bufferedMap: undefined
		});
		return map;
	}

	updateHash(hash) {
		if (this._cachedHashUpdate !== undefined) {
			for (const item of this._cachedHashUpdate) hash.update(item);
			return;
		}
		const update = [];
		let currentString = undefined;
		const tracker = {
			update: item => {
				if (typeof item === "string" && item.length < 10240) {
					if (currentString === undefined) {
						currentString = item;
					} else {
						currentString += item;
						if (currentString > 102400) {
							update.push(Buffer.from(currentString));
							currentString = undefined;
						}
					}
				} else {
					if (currentString !== undefined) {
						update.push(Buffer.from(currentString));
						currentString = undefined;
					}
					update.push(item);
				}
			}
		};
		this.original().updateHash(tracker);
		if (currentString !== undefined) {
			update.push(Buffer.from(currentString));
		}
		for (const item of update) hash.update(item);
		this._cachedHashUpdate = update;
	}
}

module.exports = CachedSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/CompatSource.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-sources/lib/CompatSource.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");

class CompatSource extends Source {
	static from(sourceLike) {
		return sourceLike instanceof Source
			? sourceLike
			: new CompatSource(sourceLike);
	}

	constructor(sourceLike) {
		super();
		this._sourceLike = sourceLike;
	}

	source() {
		return this._sourceLike.source();
	}

	buffer() {
		if (typeof this._sourceLike.buffer === "function") {
			return this._sourceLike.buffer();
		}
		return super.buffer();
	}

	size() {
		if (typeof this._sourceLike.size === "function") {
			return this._sourceLike.size();
		}
		return super.size();
	}

	map(options) {
		if (typeof this._sourceLike.map === "function") {
			return this._sourceLike.map(options);
		}
		return super.map(options);
	}

	sourceAndMap(options) {
		if (typeof this._sourceLike.sourceAndMap === "function") {
			return this._sourceLike.sourceAndMap(options);
		}
		return super.sourceAndMap(options);
	}

	updateHash(hash) {
		if (typeof this._sourceLike.updateHash === "function") {
			return this._sourceLike.updateHash(hash);
		}
		if (typeof this._sourceLike.map === "function") {
			throw new Error(
				"A Source-like object with a 'map' method must also provide an 'updateHash' method"
			);
		}
		hash.update(this.buffer());
	}
}

module.exports = CompatSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/ConcatSource.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-sources/lib/ConcatSource.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");
const RawSource = __webpack_require__(/*! ./RawSource */ "./node_modules/webpack-sources/lib/RawSource.js");
const { SourceNode, SourceMapConsumer } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { SourceListMap, fromStringWithSourceMap } = __webpack_require__(/*! source-list-map */ "./node_modules/source-list-map/lib/index.js");
const { getSourceAndMap, getMap } = __webpack_require__(/*! ./helpers */ "./node_modules/webpack-sources/lib/helpers.js");

const stringsAsRawSources = new WeakSet();

class ConcatSource extends Source {
	constructor() {
		super();
		this._children = [];
		for (let i = 0; i < arguments.length; i++) {
			const item = arguments[i];
			if (item instanceof ConcatSource) {
				for (const child of item._children) {
					this._children.push(child);
				}
			} else {
				this._children.push(item);
			}
		}
		this._isOptimized = arguments.length === 0;
	}

	getChildren() {
		if (!this._isOptimized) this._optimize();
		return this._children;
	}

	add(item) {
		if (item instanceof ConcatSource) {
			for (const child of item._children) {
				this._children.push(child);
			}
		} else {
			this._children.push(item);
		}
		this._isOptimized = false;
	}

	addAllSkipOptimizing(items) {
		for (const item of items) {
			this._children.push(item);
		}
	}

	buffer() {
		if (!this._isOptimized) this._optimize();
		const buffers = [];
		for (const child of this._children) {
			if (typeof child.buffer === "function") {
				buffers.push(child.buffer());
			} else {
				const bufferOrString = child.source();
				if (Buffer.isBuffer(bufferOrString)) {
					buffers.push(bufferOrString);
				} else {
					buffers.push(Buffer.from(bufferOrString, "utf-8"));
				}
			}
		}
		return Buffer.concat(buffers);
	}

	source() {
		if (!this._isOptimized) this._optimize();
		let source = "";
		for (const child of this._children) {
			source += child.source();
		}
		return source;
	}

	size() {
		if (!this._isOptimized) this._optimize();
		let size = 0;
		for (const child of this._children) {
			size += child.size();
		}
		return size;
	}

	map(options) {
		return getMap(this, options);
	}

	sourceAndMap(options) {
		return getSourceAndMap(this, options);
	}

	node(options) {
		if (!this._isOptimized) this._optimize();
		const node = new SourceNode(
			null,
			null,
			null,
			this._children.map(function (item) {
				if (typeof item.node === "function") return item.node(options);
				const sourceAndMap = item.sourceAndMap(options);
				if (sourceAndMap.map) {
					return SourceNode.fromStringWithSourceMap(
						sourceAndMap.source,
						new SourceMapConsumer(sourceAndMap.map)
					);
				} else {
					return sourceAndMap.source;
				}
			})
		);
		return node;
	}

	listMap(options) {
		if (!this._isOptimized) this._optimize();
		const map = new SourceListMap();
		for (const item of this._children) {
			if (typeof item === "string") {
				map.add(item);
			} else if (typeof item.listMap === "function") {
				map.add(item.listMap(options));
			} else {
				const sourceAndMap = item.sourceAndMap(options);
				if (sourceAndMap.map) {
					map.add(
						fromStringWithSourceMap(sourceAndMap.source, sourceAndMap.map)
					);
				} else {
					map.add(sourceAndMap.source);
				}
			}
		}
		return map;
	}

	updateHash(hash) {
		if (!this._isOptimized) this._optimize();
		hash.update("ConcatSource");
		for (const item of this._children) {
			item.updateHash(hash);
		}
	}

	_optimize() {
		const newChildren = [];
		let currentString = undefined;
		let currentRawSources = undefined;
		const addStringToRawSources = string => {
			if (currentRawSources === undefined) {
				currentRawSources = string;
			} else if (Array.isArray(currentRawSources)) {
				currentRawSources.push(string);
			} else {
				currentRawSources = [
					typeof currentRawSources === "string"
						? currentRawSources
						: currentRawSources.source(),
					string
				];
			}
		};
		const addSourceToRawSources = source => {
			if (currentRawSources === undefined) {
				currentRawSources = source;
			} else if (Array.isArray(currentRawSources)) {
				currentRawSources.push(source.source());
			} else {
				currentRawSources = [
					typeof currentRawSources === "string"
						? currentRawSources
						: currentRawSources.source(),
					source.source()
				];
			}
		};
		const mergeRawSources = () => {
			if (Array.isArray(currentRawSources)) {
				const rawSource = new RawSource(currentRawSources.join(""));
				stringsAsRawSources.add(rawSource);
				newChildren.push(rawSource);
			} else if (typeof currentRawSources === "string") {
				const rawSource = new RawSource(currentRawSources);
				stringsAsRawSources.add(rawSource);
				newChildren.push(rawSource);
			} else {
				newChildren.push(currentRawSources);
			}
		};
		for (const child of this._children) {
			if (typeof child === "string") {
				if (currentString === undefined) {
					currentString = child;
				} else {
					currentString += child;
				}
			} else {
				if (currentString !== undefined) {
					addStringToRawSources(currentString);
					currentString = undefined;
				}
				if (stringsAsRawSources.has(child)) {
					addSourceToRawSources(child);
				} else {
					if (currentRawSources !== undefined) {
						mergeRawSources();
						currentRawSources = undefined;
					}
					newChildren.push(child);
				}
			}
		}
		if (currentString !== undefined) {
			addStringToRawSources(currentString);
		}
		if (currentRawSources !== undefined) {
			mergeRawSources();
		}
		this._children = newChildren;
		this._isOptimized = true;
	}
}

module.exports = ConcatSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/OriginalSource.js":
/*!************************************************************!*\
  !*** ./node_modules/webpack-sources/lib/OriginalSource.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");
const { SourceNode } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { SourceListMap } = __webpack_require__(/*! source-list-map */ "./node_modules/source-list-map/lib/index.js");
const { getSourceAndMap, getMap } = __webpack_require__(/*! ./helpers */ "./node_modules/webpack-sources/lib/helpers.js");

const SPLIT_REGEX = /(?!$)[^\n\r;{}]*[\n\r;{}]*/g;

function _splitCode(code) {
	return code.match(SPLIT_REGEX) || [];
}

class OriginalSource extends Source {
	constructor(value, name) {
		super();
		const isBuffer = Buffer.isBuffer(value);
		this._value = isBuffer ? undefined : value;
		this._valueAsBuffer = isBuffer ? value : undefined;
		this._name = name;
	}

	getName() {
		return this._name;
	}

	source() {
		if (this._value === undefined) {
			this._value = this._valueAsBuffer.toString("utf-8");
		}
		return this._value;
	}

	buffer() {
		if (this._valueAsBuffer === undefined) {
			this._valueAsBuffer = Buffer.from(this._value, "utf-8");
		}
		return this._valueAsBuffer;
	}

	map(options) {
		return getMap(this, options);
	}

	sourceAndMap(options) {
		return getSourceAndMap(this, options);
	}

	node(options) {
		if (this._value === undefined) {
			this._value = this._valueAsBuffer.toString("utf-8");
		}
		const value = this._value;
		const name = this._name;
		const lines = value.split("\n");
		const node = new SourceNode(
			null,
			null,
			null,
			lines.map(function (line, idx) {
				let pos = 0;
				if (options && options.columns === false) {
					const content = line + (idx !== lines.length - 1 ? "\n" : "");
					return new SourceNode(idx + 1, 0, name, content);
				}
				return new SourceNode(
					null,
					null,
					null,
					_splitCode(line + (idx !== lines.length - 1 ? "\n" : "")).map(
						function (item) {
							if (/^\s*$/.test(item)) {
								pos += item.length;
								return item;
							}
							const res = new SourceNode(idx + 1, pos, name, item);
							pos += item.length;
							return res;
						}
					)
				);
			})
		);
		node.setSourceContent(name, value);
		return node;
	}

	listMap(options) {
		if (this._value === undefined) {
			this._value = this._valueAsBuffer.toString("utf-8");
		}
		return new SourceListMap(this._value, this._name, this._value);
	}

	updateHash(hash) {
		if (this._valueAsBuffer === undefined) {
			this._valueAsBuffer = Buffer.from(this._value, "utf-8");
		}
		hash.update("OriginalSource");
		hash.update(this._valueAsBuffer);
		hash.update(this._name || "");
	}
}

module.exports = OriginalSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/PrefixSource.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-sources/lib/PrefixSource.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");
const RawSource = __webpack_require__(/*! ./RawSource */ "./node_modules/webpack-sources/lib/RawSource.js");
const { SourceNode } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { getSourceAndMap, getMap } = __webpack_require__(/*! ./helpers */ "./node_modules/webpack-sources/lib/helpers.js");

const REPLACE_REGEX = /\n(?=.|\s)/g;

class PrefixSource extends Source {
	constructor(prefix, source) {
		super();
		this._source =
			typeof source === "string" || Buffer.isBuffer(source)
				? new RawSource(source, true)
				: source;
		this._prefix = prefix;
	}

	getPrefix() {
		return this._prefix;
	}

	original() {
		return this._source;
	}

	source() {
		const node = this._source.source();
		const prefix = this._prefix;
		return prefix + node.replace(REPLACE_REGEX, "\n" + prefix);
	}

	// TODO efficient buffer() implementation

	map(options) {
		return getMap(this, options);
	}

	sourceAndMap(options) {
		return getSourceAndMap(this, options);
	}

	node(options) {
		const node = this._source.node(options);
		const prefix = this._prefix;
		const output = [];
		const result = new SourceNode();
		node.walkSourceContents(function (source, content) {
			result.setSourceContent(source, content);
		});
		let needPrefix = true;
		node.walk(function (chunk, mapping) {
			const parts = chunk.split(/(\n)/);
			for (let i = 0; i < parts.length; i += 2) {
				const nl = i + 1 < parts.length;
				const part = parts[i] + (nl ? "\n" : "");
				if (part) {
					if (needPrefix) {
						output.push(prefix);
					}
					output.push(
						new SourceNode(
							mapping.line,
							mapping.column,
							mapping.source,
							part,
							mapping.name
						)
					);
					needPrefix = nl;
				}
			}
		});
		result.add(output);
		return result;
	}

	listMap(options) {
		const prefix = this._prefix;
		const map = this._source.listMap(options);
		let prefixNextLine = true;
		return map.mapGeneratedCode(function (code) {
			let updatedCode = code.replace(REPLACE_REGEX, "\n" + prefix);
			if (prefixNextLine) updatedCode = prefix + updatedCode;
			prefixNextLine = code.charCodeAt(code.length - 1) === 10; // === /\n$/.test(code)
			return updatedCode;
		});
	}

	updateHash(hash) {
		hash.update("PrefixSource");
		this._source.updateHash(hash);
		hash.update(this._prefix);
	}
}

module.exports = PrefixSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/RawSource.js":
/*!*******************************************************!*\
  !*** ./node_modules/webpack-sources/lib/RawSource.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");
const { SourceNode } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { SourceListMap } = __webpack_require__(/*! source-list-map */ "./node_modules/source-list-map/lib/index.js");

class RawSource extends Source {
	constructor(value, convertToString = false) {
		super();
		const isBuffer = Buffer.isBuffer(value);
		if (!isBuffer && typeof value !== "string") {
			throw new TypeError("argument 'value' must be either string of Buffer");
		}
		this._valueIsBuffer = !convertToString && isBuffer;
		this._value = convertToString && isBuffer ? undefined : value;
		this._valueAsBuffer = isBuffer ? value : undefined;
	}

	isBuffer() {
		return this._valueIsBuffer;
	}

	source() {
		if (this._value === undefined) {
			this._value = this._valueAsBuffer.toString("utf-8");
		}
		return this._value;
	}

	buffer() {
		if (this._valueAsBuffer === undefined) {
			this._valueAsBuffer = Buffer.from(this._value, "utf-8");
		}
		return this._valueAsBuffer;
	}

	map(options) {
		return null;
	}

	node(options) {
		if (this._value === undefined) {
			this._value = this._valueAsBuffer.toString("utf-8");
		}
		return new SourceNode(null, null, null, this._value);
	}

	listMap(options) {
		if (this._value === undefined) {
			this._value = this._valueAsBuffer.toString("utf-8");
		}
		return new SourceListMap(this._value);
	}

	updateHash(hash) {
		if (this._valueAsBuffer === undefined) {
			this._valueAsBuffer = Buffer.from(this._value, "utf-8");
		}
		hash.update("RawSource");
		hash.update(this._valueAsBuffer);
	}
}

module.exports = RawSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/ReplaceSource.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-sources/lib/ReplaceSource.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");
const { SourceNode } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { getSourceAndMap, getMap, getNode, getListMap } = __webpack_require__(/*! ./helpers */ "./node_modules/webpack-sources/lib/helpers.js");

class Replacement {
	constructor(start, end, content, insertIndex, name) {
		this.start = start;
		this.end = end;
		this.content = content;
		this.insertIndex = insertIndex;
		this.name = name;
	}
}

class ReplaceSource extends Source {
	constructor(source, name) {
		super();
		this._source = source;
		this._name = name;
		/** @type {Replacement[]} */
		this._replacements = [];
		this._isSorted = true;
	}

	getName() {
		return this._name;
	}

	getReplacements() {
		const replacements = Array.from(this._replacements);
		replacements.sort((a, b) => {
			return a.insertIndex - b.insertIndex;
		});
		return replacements;
	}

	replace(start, end, newValue, name) {
		if (typeof newValue !== "string")
			throw new Error(
				"insertion must be a string, but is a " + typeof newValue
			);
		this._replacements.push(
			new Replacement(start, end, newValue, this._replacements.length, name)
		);
		this._isSorted = false;
	}

	insert(pos, newValue, name) {
		if (typeof newValue !== "string")
			throw new Error(
				"insertion must be a string, but is a " +
					typeof newValue +
					": " +
					newValue
			);
		this._replacements.push(
			new Replacement(pos, pos - 1, newValue, this._replacements.length, name)
		);
		this._isSorted = false;
	}

	source() {
		return this._replaceString(this._source.source());
	}

	map(options) {
		if (this._replacements.length === 0) {
			return this._source.map(options);
		}
		return getMap(this, options);
	}

	sourceAndMap(options) {
		if (this._replacements.length === 0) {
			return this._source.sourceAndMap(options);
		}
		return getSourceAndMap(this, options);
	}

	original() {
		return this._source;
	}

	_sortReplacements() {
		if (this._isSorted) return;
		this._replacements.sort(function (a, b) {
			const diff1 = b.end - a.end;
			if (diff1 !== 0) return diff1;
			const diff2 = b.start - a.start;
			if (diff2 !== 0) return diff2;
			return b.insertIndex - a.insertIndex;
		});
		this._isSorted = true;
	}

	_replaceString(str) {
		if (typeof str !== "string")
			throw new Error(
				"str must be a string, but is a " + typeof str + ": " + str
			);
		this._sortReplacements();
		const result = [str];
		this._replacements.forEach(function (repl) {
			const remSource = result.pop();
			const splitted1 = this._splitString(remSource, Math.floor(repl.end + 1));
			const splitted2 = this._splitString(splitted1[0], Math.floor(repl.start));
			result.push(splitted1[1], repl.content, splitted2[0]);
		}, this);

		// write out result array in reverse order
		let resultStr = "";
		for (let i = result.length - 1; i >= 0; --i) {
			resultStr += result[i];
		}
		return resultStr;
	}

	node(options) {
		const node = getNode(this._source, options);
		if (this._replacements.length === 0) {
			return node;
		}
		this._sortReplacements();
		const replace = new ReplacementEnumerator(this._replacements);
		const output = [];
		let position = 0;
		const sources = Object.create(null);
		const sourcesInLines = Object.create(null);

		// We build a new list of SourceNodes in "output"
		// from the original mapping data

		const result = new SourceNode();

		// We need to add source contents manually
		// because "walk" will not handle it
		node.walkSourceContents(function (sourceFile, sourceContent) {
			result.setSourceContent(sourceFile, sourceContent);
			sources["$" + sourceFile] = sourceContent;
		});

		const replaceInStringNode = this._replaceInStringNode.bind(
			this,
			output,
			replace,
			function getOriginalSource(mapping) {
				const key = "$" + mapping.source;
				let lines = sourcesInLines[key];
				if (!lines) {
					const source = sources[key];
					if (!source) return null;
					lines = source.split("\n").map(function (line) {
						return line + "\n";
					});
					sourcesInLines[key] = lines;
				}
				// line is 1-based
				if (mapping.line > lines.length) return null;
				const line = lines[mapping.line - 1];
				return line.substr(mapping.column);
			}
		);

		node.walk(function (chunk, mapping) {
			position = replaceInStringNode(chunk, position, mapping);
		});

		// If any replacements occur after the end of the original file, then we append them
		// directly to the end of the output
		const remaining = replace.footer();
		if (remaining) {
			output.push(remaining);
		}

		result.add(output);

		return result;
	}

	listMap(options) {
		let map = getListMap(this._source, options);
		this._sortReplacements();
		let currentIndex = 0;
		const replacements = this._replacements;
		let idxReplacement = replacements.length - 1;
		let removeChars = 0;
		map = map.mapGeneratedCode(function (str) {
			const newCurrentIndex = currentIndex + str.length;
			if (removeChars > str.length) {
				removeChars -= str.length;
				str = "";
			} else {
				if (removeChars > 0) {
					str = str.substr(removeChars);
					currentIndex += removeChars;
					removeChars = 0;
				}
				let finalStr = "";
				while (
					idxReplacement >= 0 &&
					replacements[idxReplacement].start < newCurrentIndex
				) {
					const repl = replacements[idxReplacement];
					const start = Math.floor(repl.start);
					const end = Math.floor(repl.end + 1);
					const before = str.substr(0, Math.max(0, start - currentIndex));
					if (end <= newCurrentIndex) {
						const after = str.substr(Math.max(0, end - currentIndex));
						finalStr += before + repl.content;
						str = after;
						currentIndex = Math.max(currentIndex, end);
					} else {
						finalStr += before + repl.content;
						str = "";
						removeChars = end - newCurrentIndex;
					}
					idxReplacement--;
				}
				str = finalStr + str;
			}
			currentIndex = newCurrentIndex;
			return str;
		});
		let extraCode = "";
		while (idxReplacement >= 0) {
			extraCode += replacements[idxReplacement].content;
			idxReplacement--;
		}
		if (extraCode) {
			map.add(extraCode);
		}
		return map;
	}

	_splitString(str, position) {
		return position <= 0
			? ["", str]
			: [str.substr(0, position), str.substr(position)];
	}

	_replaceInStringNode(
		output,
		replace,
		getOriginalSource,
		node,
		position,
		mapping
	) {
		let original = undefined;

		do {
			let splitPosition = replace.position - position;
			// If multiple replaces occur in the same location then the splitPosition may be
			// before the current position for the subsequent splits. Ensure it is >= 0
			if (splitPosition < 0) {
				splitPosition = 0;
			}
			if (splitPosition >= node.length || replace.done) {
				if (replace.emit) {
					const nodeEnd = new SourceNode(
						mapping.line,
						mapping.column,
						mapping.source,
						node,
						mapping.name
					);
					output.push(nodeEnd);
				}
				return position + node.length;
			}

			const originalColumn = mapping.column;

			// Try to figure out if generated code matches original code of this segement
			// If this is the case we assume that it's allowed to move mapping.column
			// Because getOriginalSource can be expensive we only do it when neccessary

			let nodePart;
			if (splitPosition > 0) {
				nodePart = node.slice(0, splitPosition);
				if (original === undefined) {
					original = getOriginalSource(mapping);
				}
				if (
					original &&
					original.length >= splitPosition &&
					original.startsWith(nodePart)
				) {
					mapping.column += splitPosition;
					original = original.substr(splitPosition);
				}
			}

			const emit = replace.next();
			if (!emit) {
				// Stop emitting when we have found the beginning of the string to replace.
				// Emit the part of the string before splitPosition
				if (splitPosition > 0) {
					const nodeStart = new SourceNode(
						mapping.line,
						originalColumn,
						mapping.source,
						nodePart,
						mapping.name
					);
					output.push(nodeStart);
				}

				// Emit the replacement value
				if (replace.value) {
					output.push(
						new SourceNode(
							mapping.line,
							mapping.column,
							mapping.source,
							replace.value,
							mapping.name || replace.name
						)
					);
				}
			}

			// Recurse with remainder of the string as there may be multiple replaces within a single node
			node = node.substr(splitPosition);
			position += splitPosition;
			// eslint-disable-next-line no-constant-condition
		} while (true);
	}

	updateHash(hash) {
		this._sortReplacements();
		hash.update("ReplaceSource");
		this._source.updateHash(hash);
		hash.update(this._name || "");
		for (const repl of this._replacements) {
			hash.update(`${repl.start}`);
			hash.update(`${repl.end}`);
			hash.update(`${repl.content}`);
			hash.update(`${repl.insertIndex}`);
			hash.update(`${repl.name}`);
		}
	}
}

class ReplacementEnumerator {
	/**
	 * @param {Replacement[]} replacements list of replacements
	 */
	constructor(replacements) {
		this.replacements = replacements || [];
		this.index = this.replacements.length;
		this.done = false;
		this.emit = false;
		// Set initial start position
		this.next();
	}

	next() {
		if (this.done) return true;
		if (this.emit) {
			// Start point found. stop emitting. set position to find end
			const repl = this.replacements[this.index];
			const end = Math.floor(repl.end + 1);
			this.position = end;
			this.value = repl.content;
			this.name = repl.name;
		} else {
			// End point found. start emitting. set position to find next start
			this.index--;
			if (this.index < 0) {
				this.done = true;
			} else {
				const nextRepl = this.replacements[this.index];
				const start = Math.floor(nextRepl.start);
				this.position = start;
			}
		}
		if (this.position < 0) this.position = 0;
		this.emit = !this.emit;
		return this.emit;
	}

	footer() {
		if (!this.done && !this.emit) this.next(); // If we finished _replaceInNode mid emit we advance to next entry
		if (this.done) {
			return [];
		} else {
			let resultStr = "";
			for (let i = this.index; i >= 0; i--) {
				const repl = this.replacements[i];
				// this doesn't need to handle repl.name, because in SourceMaps generated code
				// without pointer to original source can't have a name
				resultStr += repl.content;
			}
			return resultStr;
		}
	}
}

module.exports = ReplaceSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/SizeOnlySource.js":
/*!************************************************************!*\
  !*** ./node_modules/webpack-sources/lib/SizeOnlySource.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");

class SizeOnlySource extends Source {
	constructor(size) {
		super();
		this._size = size;
	}

	_error() {
		return new Error(
			"Content and Map of this Source is not available (only size() is supported)"
		);
	}

	size() {
		return this._size;
	}

	source() {
		throw this._error();
	}

	buffer() {
		throw this._error();
	}

	map(options) {
		throw this._error();
	}

	updateHash() {
		throw this._error();
	}
}

module.exports = SizeOnlySource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/Source.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack-sources/lib/Source.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


class Source {
	source() {
		throw new Error("Abstract");
	}

	buffer() {
		const source = this.source();
		if (Buffer.isBuffer(source)) return source;
		return Buffer.from(source, "utf-8");
	}

	size() {
		return this.buffer().length;
	}

	map(options) {
		return null;
	}

	sourceAndMap(options) {
		return {
			source: this.source(),
			map: this.map(options)
		};
	}

	updateHash(hash) {
		throw new Error("Abstract");
	}
}

module.exports = Source;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/SourceMapSource.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-sources/lib/SourceMapSource.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const Source = __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js");
const { SourceNode, SourceMapConsumer } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { SourceListMap, fromStringWithSourceMap } = __webpack_require__(/*! source-list-map */ "./node_modules/source-list-map/lib/index.js");
const { getSourceAndMap, getMap } = __webpack_require__(/*! ./helpers */ "./node_modules/webpack-sources/lib/helpers.js");
const applySourceMap = __webpack_require__(/*! ./applySourceMap */ "./node_modules/webpack-sources/lib/applySourceMap.js");

class SourceMapSource extends Source {
	constructor(
		value,
		name,
		sourceMap,
		originalSource,
		innerSourceMap,
		removeOriginalSource
	) {
		super();
		const valueIsBuffer = Buffer.isBuffer(value);
		this._valueAsString = valueIsBuffer ? undefined : value;
		this._valueAsBuffer = valueIsBuffer ? value : undefined;

		this._name = name;

		this._hasSourceMap = !!sourceMap;
		const sourceMapIsBuffer = Buffer.isBuffer(sourceMap);
		const sourceMapIsString = typeof sourceMap === "string";
		this._sourceMapAsObject =
			sourceMapIsBuffer || sourceMapIsString ? undefined : sourceMap;
		this._sourceMapAsString = sourceMapIsString ? sourceMap : undefined;
		this._sourceMapAsBuffer = sourceMapIsBuffer ? sourceMap : undefined;

		this._hasOriginalSource = !!originalSource;
		const originalSourceIsBuffer = Buffer.isBuffer(originalSource);
		this._originalSourceAsString = originalSourceIsBuffer
			? undefined
			: originalSource;
		this._originalSourceAsBuffer = originalSourceIsBuffer
			? originalSource
			: undefined;

		this._hasInnerSourceMap = !!innerSourceMap;
		const innerSourceMapIsBuffer = Buffer.isBuffer(innerSourceMap);
		const innerSourceMapIsString = typeof innerSourceMap === "string";
		this._innerSourceMapAsObject =
			innerSourceMapIsBuffer || innerSourceMapIsString
				? undefined
				: innerSourceMap;
		this._innerSourceMapAsString = innerSourceMapIsString
			? innerSourceMap
			: undefined;
		this._innerSourceMapAsBuffer = innerSourceMapIsBuffer
			? innerSourceMap
			: undefined;

		this._removeOriginalSource = removeOriginalSource;
	}

	_ensureValueBuffer() {
		if (this._valueAsBuffer === undefined) {
			this._valueAsBuffer = Buffer.from(this._valueAsString, "utf-8");
		}
	}

	_ensureValueString() {
		if (this._valueAsString === undefined) {
			this._valueAsString = this._valueAsBuffer.toString("utf-8");
		}
	}

	_ensureOriginalSourceBuffer() {
		if (this._originalSourceAsBuffer === undefined && this._hasOriginalSource) {
			this._originalSourceAsBuffer = Buffer.from(
				this._originalSourceAsString,
				"utf-8"
			);
		}
	}

	_ensureOriginalSourceString() {
		if (this._originalSourceAsString === undefined && this._hasOriginalSource) {
			this._originalSourceAsString = this._originalSourceAsBuffer.toString(
				"utf-8"
			);
		}
	}

	_ensureInnerSourceMapObject() {
		if (this._innerSourceMapAsObject === undefined && this._hasInnerSourceMap) {
			this._ensureInnerSourceMapString();
			this._innerSourceMapAsObject = JSON.parse(this._innerSourceMapAsString);
		}
	}

	_ensureInnerSourceMapBuffer() {
		if (this._innerSourceMapAsBuffer === undefined && this._hasInnerSourceMap) {
			this._ensureInnerSourceMapString();
			this._innerSourceMapAsBuffer = Buffer.from(
				this._innerSourceMapAsString,
				"utf-8"
			);
		}
	}

	_ensureInnerSourceMapString() {
		if (this._innerSourceMapAsString === undefined && this._hasInnerSourceMap) {
			if (this._innerSourceMapAsBuffer !== undefined) {
				this._innerSourceMapAsString = this._innerSourceMapAsBuffer.toString(
					"utf-8"
				);
			} else {
				this._innerSourceMapAsString = JSON.stringify(
					this._innerSourceMapAsObject
				);
			}
		}
	}

	_ensureSourceMapObject() {
		if (this._sourceMapAsObject === undefined) {
			this._ensureSourceMapString();
			this._sourceMapAsObject = JSON.parse(this._sourceMapAsString);
		}
	}

	_ensureSourceMapBuffer() {
		if (this._sourceMapAsBuffer === undefined) {
			this._ensureSourceMapString();
			this._sourceMapAsBuffer = Buffer.from(this._sourceMapAsString, "utf-8");
		}
	}

	_ensureSourceMapString() {
		if (this._sourceMapAsString === undefined) {
			if (this._sourceMapAsBuffer !== undefined) {
				this._sourceMapAsString = this._sourceMapAsBuffer.toString("utf-8");
			} else {
				this._sourceMapAsString = JSON.stringify(this._sourceMapAsObject);
			}
		}
	}

	getArgsAsBuffers() {
		this._ensureValueBuffer();
		this._ensureSourceMapBuffer();
		this._ensureOriginalSourceBuffer();
		this._ensureInnerSourceMapBuffer();
		return [
			this._valueAsBuffer,
			this._name,
			this._sourceMapAsBuffer,
			this._originalSourceAsBuffer,
			this._innerSourceMapAsBuffer,
			this._removeOriginalSource
		];
	}

	source() {
		this._ensureValueString();
		return this._valueAsString;
	}

	map(options) {
		if (!this._hasInnerSourceMap) {
			this._ensureSourceMapObject();
			return this._sourceMapAsObject;
		}
		return getMap(this, options);
	}

	sourceAndMap(options) {
		if (!this._hasInnerSourceMap) {
			this._ensureValueString();
			this._ensureSourceMapObject();
			return {
				source: this._valueAsString,
				map: this._sourceMapAsObject
			};
		}
		return getSourceAndMap(this, options);
	}

	node(options) {
		this._ensureValueString();
		this._ensureSourceMapObject();
		this._ensureOriginalSourceString();
		let node = SourceNode.fromStringWithSourceMap(
			this._valueAsString,
			new SourceMapConsumer(this._sourceMapAsObject)
		);
		node.setSourceContent(this._name, this._originalSourceAsString);
		if (this._hasInnerSourceMap) {
			this._ensureInnerSourceMapObject();
			node = applySourceMap(
				node,
				new SourceMapConsumer(this._innerSourceMapAsObject),
				this._name,
				this._removeOriginalSource
			);
		}
		return node;
	}

	listMap(options) {
		this._ensureValueString();
		this._ensureSourceMapObject();
		options = options || {};
		if (options.module === false)
			return new SourceListMap(
				this._valueAsString,
				this._name,
				this._valueAsString
			);

		return fromStringWithSourceMap(
			this._valueAsString,
			this._sourceMapAsObject
		);
	}

	updateHash(hash) {
		this._ensureValueBuffer();
		this._ensureSourceMapBuffer();
		this._ensureOriginalSourceBuffer();
		this._ensureInnerSourceMapBuffer();

		hash.update("SourceMapSource");

		hash.update(this._valueAsBuffer);

		hash.update(this._sourceMapAsBuffer);

		if (this._hasOriginalSource) {
			hash.update(this._originalSourceAsBuffer);
		}

		if (this._hasInnerSourceMap) {
			hash.update(this._innerSourceMapAsBuffer);
		}

		hash.update(this._removeOriginalSource ? "true" : "false");
	}
}

module.exports = SourceMapSource;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/applySourceMap.js":
/*!************************************************************!*\
  !*** ./node_modules/webpack-sources/lib/applySourceMap.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



const SourceNode = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js").SourceNode;
const SourceMapConsumer = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js").SourceMapConsumer;

const applySourceMap = function (
	sourceNode,
	sourceMapConsumer,
	sourceFile,
	removeGeneratedCodeForSourceFile
) {
	// The following notations are used to name stuff:
	// Left <------------> Middle <-------------------> Right
	// Input arguments:
	//        sourceNode                                       - Code mapping from Left to Middle
	//                   sourceFile                            - Name of a Middle file
	//                              sourceMapConsumer          - Code mapping from Middle to Right
	// Variables:
	//           l2m                      m2r
	// Left <-----------------------------------------> Right
	// Variables:
	//                       l2r

	const l2rResult = new SourceNode();
	const l2rOutput = [];

	const middleSourceContents = {};

	const m2rMappingsByLine = {};

	const rightSourceContentsSet = {};
	const rightSourceContentsLines = {};

	// Store all mappings by generated line
	sourceMapConsumer.eachMapping(
		function (mapping) {
			(m2rMappingsByLine[mapping.generatedLine] =
				m2rMappingsByLine[mapping.generatedLine] || []).push(mapping);
		},
		null,
		SourceMapConsumer.GENERATED_ORDER
	);

	const findM2rMapping = (line, column) => {
		const m2rMappings = m2rMappingsByLine[line];
		let l = 0;
		let r = m2rMappings.length;
		while (l < r) {
			let m = (l + r) >> 1;
			if (m2rMappings[m].generatedColumn <= column) {
				l = m + 1;
			} else {
				r = m;
			}
		}
		if (l === 0) return undefined;
		return m2rMappings[l - 1];
	};

	// Store all source contents
	sourceNode.walkSourceContents(function (source, content) {
		middleSourceContents["$" + source] = content;
	});

	const middleSource = middleSourceContents["$" + sourceFile];
	const middleSourceLines = middleSource ? middleSource.split("\n") : undefined;

	// Walk all left to middle mappings
	sourceNode.walk(function (chunk, middleMapping) {
		// Find a mapping from middle to right
		if (
			middleMapping.source === sourceFile &&
			middleMapping.line &&
			m2rMappingsByLine[middleMapping.line]
		) {
			// For minimized sources this is performance-relevant,
			// since all mappings are in a single line, use a binary search
			let m2rBestFit = findM2rMapping(middleMapping.line, middleMapping.column);
			if (m2rBestFit) {
				let allowMiddleName = false;
				let middleLine;
				let rightSourceContent;
				let rightSourceContentLines;
				const rightSource = m2rBestFit.source;
				// Check if we have middle and right source for this mapping
				// Then we could have an "identify" mapping
				if (
					middleSourceLines &&
					rightSource &&
					(middleLine = middleSourceLines[m2rBestFit.generatedLine - 1]) &&
					((rightSourceContentLines = rightSourceContentsLines[rightSource]) ||
						(rightSourceContent = sourceMapConsumer.sourceContentFor(
							rightSource,
							true
						)))
				) {
					if (!rightSourceContentLines) {
						rightSourceContentLines = rightSourceContentsLines[
							rightSource
						] = rightSourceContent.split("\n");
					}
					const rightLine =
						rightSourceContentLines[m2rBestFit.originalLine - 1];
					if (rightLine) {
						const offset = middleMapping.column - m2rBestFit.generatedColumn;
						if (offset > 0) {
							const middlePart = middleLine.slice(
								m2rBestFit.generatedColumn,
								middleMapping.column
							);
							const rightPart = rightLine.slice(
								m2rBestFit.originalColumn,
								m2rBestFit.originalColumn + offset
							);
							if (middlePart === rightPart) {
								// When original and generated code is equal we assume we have an "identity" mapping
								// In this case we can offset the original position
								m2rBestFit = Object.assign({}, m2rBestFit, {
									originalColumn: m2rBestFit.originalColumn + offset,
									generatedColumn: middleMapping.column,
									name: undefined
								});
							}
						}
						if (!m2rBestFit.name && middleMapping.name) {
							allowMiddleName =
								rightLine.slice(
									m2rBestFit.originalColumn,
									m2rBestFit.originalColumn + middleMapping.name.length
								) === middleMapping.name;
						}
					}
				}

				// Construct a left to right node from the found middle to right mapping
				let source = m2rBestFit.source;
				// Workaround for bug in source-map
				// null sources are incorrectly normalized to "."
				if (source && source !== ".") {
					l2rOutput.push(
						new SourceNode(
							m2rBestFit.originalLine,
							m2rBestFit.originalColumn,
							source,
							chunk,
							allowMiddleName ? middleMapping.name : m2rBestFit.name
						)
					);

					// Set the source contents once
					if (!("$" + source in rightSourceContentsSet)) {
						rightSourceContentsSet["$" + source] = true;
						const sourceContent = sourceMapConsumer.sourceContentFor(
							source,
							true
						);
						if (sourceContent) {
							l2rResult.setSourceContent(source, sourceContent);
						}
					}
					return;
				}
			}
		}

		if (
			(removeGeneratedCodeForSourceFile &&
				middleMapping.source === sourceFile) ||
			!middleMapping.source
		) {
			// Construct a left to middle node with only generated code
			// Because user do not want mappings to middle sources
			// Or this chunk has no mapping
			l2rOutput.push(chunk);
			return;
		}

		// Construct a left to middle node
		const source = middleMapping.source;
		l2rOutput.push(
			new SourceNode(
				middleMapping.line,
				middleMapping.column,
				source,
				chunk,
				middleMapping.name
			)
		);
		if ("$" + source in middleSourceContents) {
			if (!("$" + source in rightSourceContentsSet)) {
				l2rResult.setSourceContent(source, middleSourceContents["$" + source]);
				delete middleSourceContents["$" + source];
			}
		}
	});

	// Put output into the resulting SourceNode
	l2rResult.add(l2rOutput);
	return l2rResult;
};

module.exports = applySourceMap;


/***/ }),

/***/ "./node_modules/webpack-sources/lib/helpers.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack-sources/lib/helpers.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/


const { SourceNode, SourceMapConsumer } = __webpack_require__(/*! source-map */ "./node_modules/source-map/source-map.js");
const { SourceListMap, fromStringWithSourceMap } = __webpack_require__(/*! source-list-map */ "./node_modules/source-list-map/lib/index.js");

exports.getSourceAndMap = (inputSource, options) => {
	let source;
	let map;
	if (options && options.columns === false) {
		const res = inputSource.listMap(options).toStringWithSourceMap({
			file: "x"
		});
		source = res.source;
		map = res.map;
	} else {
		const res = inputSource.node(options).toStringWithSourceMap({
			file: "x"
		});
		source = res.code;
		map = res.map.toJSON();
	}
	if (!map || !map.sources || map.sources.length === 0) map = null;

	return {
		source,
		map
	};
};

exports.getMap = (source, options) => {
	let map;
	if (options && options.columns === false) {
		map = source.listMap(options).toStringWithSourceMap({
			file: "x"
		}).map;
	} else {
		map = source
			.node(options)
			.toStringWithSourceMap({
				file: "x"
			})
			.map.toJSON();
	}
	if (!map || !map.sources || map.sources.length === 0) return null;
	return map;
};

exports.getNode = (source, options) => {
	if (typeof source.node === "function") {
		return source.node(options);
	} else {
		const sourceAndMap = source.sourceAndMap(options);
		if (sourceAndMap.map) {
			return SourceNode.fromStringWithSourceMap(
				sourceAndMap.source,
				new SourceMapConsumer(sourceAndMap.map)
			);
		} else {
			return new SourceNode(null, null, null, sourceAndMap.source);
		}
	}
};

exports.getListMap = (source, options) => {
	if (typeof source.listMap === "function") {
		return source.listMap(options);
	} else {
		const sourceAndMap = source.sourceAndMap(options);
		if (sourceAndMap.map) {
			return fromStringWithSourceMap(sourceAndMap.source, sourceAndMap.map);
		} else {
			return new SourceListMap(sourceAndMap.source);
		}
	}
};


/***/ }),

/***/ "./node_modules/webpack-sources/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/webpack-sources/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

const defineExport = (name, fn) => {
	let value;
	Object.defineProperty(exports, name, {
		get: () => {
			if (fn !== undefined) {
				value = fn();
				fn = undefined;
			}
			return value;
		},
		configurable: true
	});
};

defineExport("Source", () => __webpack_require__(/*! ./Source */ "./node_modules/webpack-sources/lib/Source.js"));

defineExport("RawSource", () => __webpack_require__(/*! ./RawSource */ "./node_modules/webpack-sources/lib/RawSource.js"));
defineExport("OriginalSource", () => __webpack_require__(/*! ./OriginalSource */ "./node_modules/webpack-sources/lib/OriginalSource.js"));
defineExport("SourceMapSource", () => __webpack_require__(/*! ./SourceMapSource */ "./node_modules/webpack-sources/lib/SourceMapSource.js"));
defineExport("CachedSource", () => __webpack_require__(/*! ./CachedSource */ "./node_modules/webpack-sources/lib/CachedSource.js"));
defineExport("ConcatSource", () => __webpack_require__(/*! ./ConcatSource */ "./node_modules/webpack-sources/lib/ConcatSource.js"));
defineExport("ReplaceSource", () => __webpack_require__(/*! ./ReplaceSource */ "./node_modules/webpack-sources/lib/ReplaceSource.js"));
defineExport("PrefixSource", () => __webpack_require__(/*! ./PrefixSource */ "./node_modules/webpack-sources/lib/PrefixSource.js"));
defineExport("SizeOnlySource", () => __webpack_require__(/*! ./SizeOnlySource */ "./node_modules/webpack-sources/lib/SizeOnlySource.js"));
defineExport("CompatSource", () => __webpack_require__(/*! ./CompatSource */ "./node_modules/webpack-sources/lib/CompatSource.js"));


/***/ })

}]);
//# sourceMappingURL=vendors.webpack-sources.df8c8808.js.map