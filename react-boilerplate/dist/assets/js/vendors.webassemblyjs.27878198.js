(self["webpackChunkreact_boilerplate"] = self["webpackChunkreact_boilerplate"] || []).push([["vendors.webassemblyjs"],{

/***/ "./node_modules/@webassemblyjs/ast/esm/clone.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/clone.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneNode": () => (/* binding */ cloneNode)
/* harmony export */ });
function cloneNode(n) {
  return Object.assign({}, n);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assertBinaryModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertBinaryModule),
/* harmony export */   "assertBlockComment": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertBlockComment),
/* harmony export */   "assertBlockInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertBlockInstruction),
/* harmony export */   "assertByteArray": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertByteArray),
/* harmony export */   "assertCallIndirectInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertCallIndirectInstruction),
/* harmony export */   "assertCallInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertCallInstruction),
/* harmony export */   "assertData": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertData),
/* harmony export */   "assertElem": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertElem),
/* harmony export */   "assertFloatLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFloatLiteral),
/* harmony export */   "assertFunc": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFunc),
/* harmony export */   "assertFuncImportDescr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFuncImportDescr),
/* harmony export */   "assertFunctionNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertFunctionNameMetadata),
/* harmony export */   "assertGlobal": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertGlobal),
/* harmony export */   "assertGlobalType": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertGlobalType),
/* harmony export */   "assertIdentifier": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertIdentifier),
/* harmony export */   "assertIfInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertIfInstruction),
/* harmony export */   "assertIndexInFuncSection": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertIndexInFuncSection),
/* harmony export */   "assertInstr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInstr),
/* harmony export */   "assertInternalBrUnless": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalBrUnless),
/* harmony export */   "assertInternalCallExtern": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalCallExtern),
/* harmony export */   "assertInternalEndAndReturn": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalEndAndReturn),
/* harmony export */   "assertInternalGoto": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertInternalGoto),
/* harmony export */   "assertLeadingComment": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLeadingComment),
/* harmony export */   "assertLimit": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLimit),
/* harmony export */   "assertLocalNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLocalNameMetadata),
/* harmony export */   "assertLongNumberLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLongNumberLiteral),
/* harmony export */   "assertLoopInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertLoopInstruction),
/* harmony export */   "assertMemory": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertMemory),
/* harmony export */   "assertModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModule),
/* harmony export */   "assertModuleExport": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleExport),
/* harmony export */   "assertModuleExportDescr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleExportDescr),
/* harmony export */   "assertModuleImport": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleImport),
/* harmony export */   "assertModuleMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleMetadata),
/* harmony export */   "assertModuleNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertModuleNameMetadata),
/* harmony export */   "assertNumberLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertNumberLiteral),
/* harmony export */   "assertProducerMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProducerMetadata),
/* harmony export */   "assertProducerMetadataVersionedName": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProducerMetadataVersionedName),
/* harmony export */   "assertProducersSectionMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProducersSectionMetadata),
/* harmony export */   "assertProgram": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertProgram),
/* harmony export */   "assertQuoteModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertQuoteModule),
/* harmony export */   "assertSectionMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertSectionMetadata),
/* harmony export */   "assertSignature": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertSignature),
/* harmony export */   "assertStart": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertStart),
/* harmony export */   "assertStringLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertStringLiteral),
/* harmony export */   "assertTable": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertTable),
/* harmony export */   "assertTypeInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertTypeInstruction),
/* harmony export */   "assertValtypeLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.assertValtypeLiteral),
/* harmony export */   "binaryModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.binaryModule),
/* harmony export */   "blockComment": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.blockComment),
/* harmony export */   "blockInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.blockInstruction),
/* harmony export */   "byteArray": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.byteArray),
/* harmony export */   "callIndirectInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.callIndirectInstruction),
/* harmony export */   "callInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.callInstruction),
/* harmony export */   "data": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.data),
/* harmony export */   "elem": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.elem),
/* harmony export */   "floatLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.floatLiteral),
/* harmony export */   "func": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.func),
/* harmony export */   "funcImportDescr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.funcImportDescr),
/* harmony export */   "functionNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.functionNameMetadata),
/* harmony export */   "global": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.global),
/* harmony export */   "globalType": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.globalType),
/* harmony export */   "identifier": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.identifier),
/* harmony export */   "ifInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.ifInstruction),
/* harmony export */   "indexInFuncSection": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.indexInFuncSection),
/* harmony export */   "instr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.instr),
/* harmony export */   "internalBrUnless": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalBrUnless),
/* harmony export */   "internalCallExtern": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalCallExtern),
/* harmony export */   "internalEndAndReturn": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalEndAndReturn),
/* harmony export */   "internalGoto": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.internalGoto),
/* harmony export */   "isBinaryModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBinaryModule),
/* harmony export */   "isBlock": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBlock),
/* harmony export */   "isBlockComment": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBlockComment),
/* harmony export */   "isBlockInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isBlockInstruction),
/* harmony export */   "isByteArray": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isByteArray),
/* harmony export */   "isCallIndirectInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isCallIndirectInstruction),
/* harmony export */   "isCallInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isCallInstruction),
/* harmony export */   "isData": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isData),
/* harmony export */   "isElem": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isElem),
/* harmony export */   "isExpression": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isExpression),
/* harmony export */   "isFloatLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFloatLiteral),
/* harmony export */   "isFunc": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFunc),
/* harmony export */   "isFuncImportDescr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFuncImportDescr),
/* harmony export */   "isFunctionNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isFunctionNameMetadata),
/* harmony export */   "isGlobal": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isGlobal),
/* harmony export */   "isGlobalType": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isGlobalType),
/* harmony export */   "isIdentifier": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIdentifier),
/* harmony export */   "isIfInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIfInstruction),
/* harmony export */   "isImportDescr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isImportDescr),
/* harmony export */   "isIndexInFuncSection": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIndexInFuncSection),
/* harmony export */   "isInstr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInstr),
/* harmony export */   "isInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInstruction),
/* harmony export */   "isInternalBrUnless": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalBrUnless),
/* harmony export */   "isInternalCallExtern": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalCallExtern),
/* harmony export */   "isInternalEndAndReturn": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalEndAndReturn),
/* harmony export */   "isInternalGoto": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isInternalGoto),
/* harmony export */   "isIntrinsic": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isIntrinsic),
/* harmony export */   "isLeadingComment": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLeadingComment),
/* harmony export */   "isLimit": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLimit),
/* harmony export */   "isLocalNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLocalNameMetadata),
/* harmony export */   "isLongNumberLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLongNumberLiteral),
/* harmony export */   "isLoopInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isLoopInstruction),
/* harmony export */   "isMemory": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isMemory),
/* harmony export */   "isModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModule),
/* harmony export */   "isModuleExport": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleExport),
/* harmony export */   "isModuleExportDescr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleExportDescr),
/* harmony export */   "isModuleImport": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleImport),
/* harmony export */   "isModuleMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleMetadata),
/* harmony export */   "isModuleNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isModuleNameMetadata),
/* harmony export */   "isNode": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isNode),
/* harmony export */   "isNumberLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isNumberLiteral),
/* harmony export */   "isNumericLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isNumericLiteral),
/* harmony export */   "isProducerMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProducerMetadata),
/* harmony export */   "isProducerMetadataVersionedName": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProducerMetadataVersionedName),
/* harmony export */   "isProducersSectionMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProducersSectionMetadata),
/* harmony export */   "isProgram": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isProgram),
/* harmony export */   "isQuoteModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isQuoteModule),
/* harmony export */   "isSectionMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isSectionMetadata),
/* harmony export */   "isSignature": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isSignature),
/* harmony export */   "isStart": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isStart),
/* harmony export */   "isStringLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isStringLiteral),
/* harmony export */   "isTable": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isTable),
/* harmony export */   "isTypeInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isTypeInstruction),
/* harmony export */   "isValtypeLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.isValtypeLiteral),
/* harmony export */   "leadingComment": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.leadingComment),
/* harmony export */   "limit": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.limit),
/* harmony export */   "localNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.localNameMetadata),
/* harmony export */   "longNumberLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.longNumberLiteral),
/* harmony export */   "loopInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.loopInstruction),
/* harmony export */   "memory": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.memory),
/* harmony export */   "module": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.module),
/* harmony export */   "moduleExport": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleExport),
/* harmony export */   "moduleExportDescr": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleExportDescr),
/* harmony export */   "moduleImport": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleImport),
/* harmony export */   "moduleMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata),
/* harmony export */   "moduleNameMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.moduleNameMetadata),
/* harmony export */   "nodeAndUnionTypes": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.nodeAndUnionTypes),
/* harmony export */   "numberLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.numberLiteral),
/* harmony export */   "producerMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.producerMetadata),
/* harmony export */   "producerMetadataVersionedName": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.producerMetadataVersionedName),
/* harmony export */   "producersSectionMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.producersSectionMetadata),
/* harmony export */   "program": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.program),
/* harmony export */   "quoteModule": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.quoteModule),
/* harmony export */   "sectionMetadata": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.sectionMetadata),
/* harmony export */   "signature": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.signature),
/* harmony export */   "start": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.start),
/* harmony export */   "stringLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.stringLiteral),
/* harmony export */   "table": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.table),
/* harmony export */   "typeInstruction": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.typeInstruction),
/* harmony export */   "unionTypesMap": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.unionTypesMap),
/* harmony export */   "valtypeLiteral": () => (/* reexport safe */ _nodes__WEBPACK_IMPORTED_MODULE_0__.valtypeLiteral),
/* harmony export */   "numberLiteralFromRaw": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.numberLiteralFromRaw),
/* harmony export */   "withLoc": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.withLoc),
/* harmony export */   "withRaw": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.withRaw),
/* harmony export */   "funcParam": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.funcParam),
/* harmony export */   "indexLiteral": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.indexLiteral),
/* harmony export */   "memIndexLiteral": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.memIndexLiteral),
/* harmony export */   "instruction": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.instruction),
/* harmony export */   "objectInstruction": () => (/* reexport safe */ _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__.objectInstruction),
/* harmony export */   "traverse": () => (/* reexport safe */ _traverse__WEBPACK_IMPORTED_MODULE_2__.traverse),
/* harmony export */   "signatures": () => (/* reexport safe */ _signatures__WEBPACK_IMPORTED_MODULE_3__.signatures),
/* harmony export */   "assertHasLoc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.assertHasLoc),
/* harmony export */   "getEndBlockByteOffset": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getEndBlockByteOffset),
/* harmony export */   "getEndByteOffset": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getEndByteOffset),
/* harmony export */   "getEndOfSection": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getEndOfSection),
/* harmony export */   "getFunctionBeginingByteOffset": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getFunctionBeginingByteOffset),
/* harmony export */   "getSectionMetadata": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getSectionMetadata),
/* harmony export */   "getSectionMetadatas": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getSectionMetadatas),
/* harmony export */   "getStartBlockByteOffset": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getStartBlockByteOffset),
/* harmony export */   "getStartByteOffset": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getStartByteOffset),
/* harmony export */   "getUniqueNameGenerator": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.getUniqueNameGenerator),
/* harmony export */   "isAnonymous": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.isAnonymous),
/* harmony export */   "orderedInsertNode": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.orderedInsertNode),
/* harmony export */   "shiftLoc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.shiftLoc),
/* harmony export */   "shiftSection": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.shiftSection),
/* harmony export */   "signatureForOpcode": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.signatureForOpcode),
/* harmony export */   "sortSectionMetadata": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.sortSectionMetadata),
/* harmony export */   "cloneNode": () => (/* reexport safe */ _clone__WEBPACK_IMPORTED_MODULE_5__.cloneNode),
/* harmony export */   "moduleContextFromModuleAST": () => (/* reexport safe */ _transform_ast_module_to_module_context__WEBPACK_IMPORTED_MODULE_6__.moduleContextFromModuleAST)
/* harmony export */ });
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nodes */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");
/* harmony import */ var _node_helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node-helpers.js */ "./node_modules/@webassemblyjs/ast/esm/node-helpers.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traverse */ "./node_modules/@webassemblyjs/ast/esm/traverse.js");
/* harmony import */ var _signatures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signatures */ "./node_modules/@webassemblyjs/ast/esm/signatures.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@webassemblyjs/ast/esm/utils.js");
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ "./node_modules/@webassemblyjs/ast/esm/clone.js");
/* harmony import */ var _transform_ast_module_to_module_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transform/ast-module-to-module-context */ "./node_modules/@webassemblyjs/ast/esm/transform/ast-module-to-module-context/index.js");








/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/node-helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/node-helpers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "numberLiteralFromRaw": () => (/* binding */ numberLiteralFromRaw),
/* harmony export */   "instruction": () => (/* binding */ instruction),
/* harmony export */   "objectInstruction": () => (/* binding */ objectInstruction),
/* harmony export */   "withLoc": () => (/* binding */ withLoc),
/* harmony export */   "withRaw": () => (/* binding */ withRaw),
/* harmony export */   "funcParam": () => (/* binding */ funcParam),
/* harmony export */   "indexLiteral": () => (/* binding */ indexLiteral),
/* harmony export */   "memIndexLiteral": () => (/* binding */ memIndexLiteral)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/helper-numbers */ "./node_modules/@webassemblyjs/helper-numbers/esm/index.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");


function numberLiteralFromRaw(rawValue) {
  var instructionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i32";
  var original = rawValue; // Remove numeric separators _

  if (typeof rawValue === "string") {
    rawValue = rawValue.replace(/_/g, "");
  }

  if (typeof rawValue === "number") {
    return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.numberLiteral)(rawValue, String(original));
  } else {
    switch (instructionType) {
      case "i32":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.numberLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse32I)(rawValue), String(original));
        }

      case "u32":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.numberLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parseU32)(rawValue), String(original));
        }

      case "i64":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.longNumberLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse64I)(rawValue), String(original));
        }

      case "f32":
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.floatLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse32F)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isNanLiteral)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isInfLiteral)(rawValue), String(original));
        }
      // f64

      default:
        {
          return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.floatLiteral)((0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.parse64F)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isNanLiteral)(rawValue), (0,_webassemblyjs_helper_numbers__WEBPACK_IMPORTED_MODULE_0__.isInfLiteral)(rawValue), String(original));
        }
    }
  }
}
function instruction(id) {
  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var namedArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.instr)(id, undefined, args, namedArgs);
}
function objectInstruction(id, object) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var namedArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0,_nodes__WEBPACK_IMPORTED_MODULE_1__.instr)(id, object, args, namedArgs);
}
/**
 * Decorators
 */

function withLoc(n, end, start) {
  var loc = {
    start: start,
    end: end
  };
  n.loc = loc;
  return n;
}
function withRaw(n, raw) {
  n.raw = raw;
  return n;
}
function funcParam(valtype, id) {
  return {
    id: id,
    valtype: valtype
  };
}
function indexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}
function memIndexLiteral(value) {
  // $FlowIgnore
  var x = numberLiteralFromRaw(value, "u32");
  return x;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/node-path.js":
/*!**********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/node-path.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPath": () => (/* binding */ createPath)
/* harmony export */ });
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function findParent(_ref, cb) {
  var parentPath = _ref.parentPath;

  if (parentPath == null) {
    throw new Error("node is root");
  }

  var currentPath = parentPath;

  while (cb(currentPath) !== false) {
    // Hit the root node, stop
    // $FlowIgnore
    if (currentPath.parentPath == null) {
      return null;
    } // $FlowIgnore


    currentPath = currentPath.parentPath;
  }

  return currentPath.node;
}

function insertBefore(context, newNode) {
  return insert(context, newNode);
}

function insertAfter(context, newNode) {
  return insert(context, newNode, 1);
}

function insert(_ref2, newNode) {
  var node = _ref2.node,
      inList = _ref2.inList,
      parentPath = _ref2.parentPath,
      parentKey = _ref2.parentKey;
  var indexOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!inList) {
    throw new Error('inList' + " error: " + ("insert can only be used for nodes that are within lists" || 0));
  }

  if (!(parentPath != null)) {
    throw new Error('parentPath != null' + " error: " + ("Can not remove root node" || 0));
  }

  // $FlowIgnore
  var parentList = parentPath.node[parentKey];
  var indexInList = parentList.findIndex(function (n) {
    return n === node;
  });
  parentList.splice(indexInList + indexOffset, 0, newNode);
}

function remove(_ref3) {
  var node = _ref3.node,
      parentKey = _ref3.parentKey,
      parentPath = _ref3.parentPath;

  if (!(parentPath != null)) {
    throw new Error('parentPath != null' + " error: " + ("Can not remove root node" || 0));
  }

  // $FlowIgnore
  var parentNode = parentPath.node; // $FlowIgnore

  var parentProperty = parentNode[parentKey];

  if (Array.isArray(parentProperty)) {
    // $FlowIgnore
    parentNode[parentKey] = parentProperty.filter(function (n) {
      return n !== node;
    });
  } else {
    // $FlowIgnore
    delete parentNode[parentKey];
  }

  node._deleted = true;
}

function stop(context) {
  context.shouldStop = true;
}

function replaceWith(context, newNode) {
  // $FlowIgnore
  var parentNode = context.parentPath.node; // $FlowIgnore

  var parentProperty = parentNode[context.parentKey];

  if (Array.isArray(parentProperty)) {
    var indexInList = parentProperty.findIndex(function (n) {
      return n === context.node;
    });
    parentProperty.splice(indexInList, 1, newNode);
  } else {
    // $FlowIgnore
    parentNode[context.parentKey] = newNode;
  }

  context.node._deleted = true;
  context.node = newNode;
} // bind the context to the first argument of node operations


function bindNodeOperations(operations, context) {
  var keys = Object.keys(operations);
  var boundOperations = {};
  keys.forEach(function (key) {
    boundOperations[key] = operations[key].bind(null, context);
  });
  return boundOperations;
}

function createPathOperations(context) {
  // $FlowIgnore
  return bindNodeOperations({
    findParent: findParent,
    replaceWith: replaceWith,
    remove: remove,
    insertBefore: insertBefore,
    insertAfter: insertAfter,
    stop: stop
  }, context);
}

function createPath(context) {
  var path = _extends({}, context); // $FlowIgnore


  Object.assign(path, createPathOperations(path)); // $FlowIgnore

  return path;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/nodes.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/nodes.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "module": () => (/* binding */ module),
/* harmony export */   "moduleMetadata": () => (/* binding */ moduleMetadata),
/* harmony export */   "moduleNameMetadata": () => (/* binding */ moduleNameMetadata),
/* harmony export */   "functionNameMetadata": () => (/* binding */ functionNameMetadata),
/* harmony export */   "localNameMetadata": () => (/* binding */ localNameMetadata),
/* harmony export */   "binaryModule": () => (/* binding */ binaryModule),
/* harmony export */   "quoteModule": () => (/* binding */ quoteModule),
/* harmony export */   "sectionMetadata": () => (/* binding */ sectionMetadata),
/* harmony export */   "producersSectionMetadata": () => (/* binding */ producersSectionMetadata),
/* harmony export */   "producerMetadata": () => (/* binding */ producerMetadata),
/* harmony export */   "producerMetadataVersionedName": () => (/* binding */ producerMetadataVersionedName),
/* harmony export */   "loopInstruction": () => (/* binding */ loopInstruction),
/* harmony export */   "instr": () => (/* binding */ instr),
/* harmony export */   "ifInstruction": () => (/* binding */ ifInstruction),
/* harmony export */   "stringLiteral": () => (/* binding */ stringLiteral),
/* harmony export */   "numberLiteral": () => (/* binding */ numberLiteral),
/* harmony export */   "longNumberLiteral": () => (/* binding */ longNumberLiteral),
/* harmony export */   "floatLiteral": () => (/* binding */ floatLiteral),
/* harmony export */   "elem": () => (/* binding */ elem),
/* harmony export */   "indexInFuncSection": () => (/* binding */ indexInFuncSection),
/* harmony export */   "valtypeLiteral": () => (/* binding */ valtypeLiteral),
/* harmony export */   "typeInstruction": () => (/* binding */ typeInstruction),
/* harmony export */   "start": () => (/* binding */ start),
/* harmony export */   "globalType": () => (/* binding */ globalType),
/* harmony export */   "leadingComment": () => (/* binding */ leadingComment),
/* harmony export */   "blockComment": () => (/* binding */ blockComment),
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "global": () => (/* binding */ global),
/* harmony export */   "table": () => (/* binding */ table),
/* harmony export */   "memory": () => (/* binding */ memory),
/* harmony export */   "funcImportDescr": () => (/* binding */ funcImportDescr),
/* harmony export */   "moduleImport": () => (/* binding */ moduleImport),
/* harmony export */   "moduleExportDescr": () => (/* binding */ moduleExportDescr),
/* harmony export */   "moduleExport": () => (/* binding */ moduleExport),
/* harmony export */   "limit": () => (/* binding */ limit),
/* harmony export */   "signature": () => (/* binding */ signature),
/* harmony export */   "program": () => (/* binding */ program),
/* harmony export */   "identifier": () => (/* binding */ identifier),
/* harmony export */   "blockInstruction": () => (/* binding */ blockInstruction),
/* harmony export */   "callInstruction": () => (/* binding */ callInstruction),
/* harmony export */   "callIndirectInstruction": () => (/* binding */ callIndirectInstruction),
/* harmony export */   "byteArray": () => (/* binding */ byteArray),
/* harmony export */   "func": () => (/* binding */ func),
/* harmony export */   "internalBrUnless": () => (/* binding */ internalBrUnless),
/* harmony export */   "internalGoto": () => (/* binding */ internalGoto),
/* harmony export */   "internalCallExtern": () => (/* binding */ internalCallExtern),
/* harmony export */   "internalEndAndReturn": () => (/* binding */ internalEndAndReturn),
/* harmony export */   "isModule": () => (/* binding */ isModule),
/* harmony export */   "isModuleMetadata": () => (/* binding */ isModuleMetadata),
/* harmony export */   "isModuleNameMetadata": () => (/* binding */ isModuleNameMetadata),
/* harmony export */   "isFunctionNameMetadata": () => (/* binding */ isFunctionNameMetadata),
/* harmony export */   "isLocalNameMetadata": () => (/* binding */ isLocalNameMetadata),
/* harmony export */   "isBinaryModule": () => (/* binding */ isBinaryModule),
/* harmony export */   "isQuoteModule": () => (/* binding */ isQuoteModule),
/* harmony export */   "isSectionMetadata": () => (/* binding */ isSectionMetadata),
/* harmony export */   "isProducersSectionMetadata": () => (/* binding */ isProducersSectionMetadata),
/* harmony export */   "isProducerMetadata": () => (/* binding */ isProducerMetadata),
/* harmony export */   "isProducerMetadataVersionedName": () => (/* binding */ isProducerMetadataVersionedName),
/* harmony export */   "isLoopInstruction": () => (/* binding */ isLoopInstruction),
/* harmony export */   "isInstr": () => (/* binding */ isInstr),
/* harmony export */   "isIfInstruction": () => (/* binding */ isIfInstruction),
/* harmony export */   "isStringLiteral": () => (/* binding */ isStringLiteral),
/* harmony export */   "isNumberLiteral": () => (/* binding */ isNumberLiteral),
/* harmony export */   "isLongNumberLiteral": () => (/* binding */ isLongNumberLiteral),
/* harmony export */   "isFloatLiteral": () => (/* binding */ isFloatLiteral),
/* harmony export */   "isElem": () => (/* binding */ isElem),
/* harmony export */   "isIndexInFuncSection": () => (/* binding */ isIndexInFuncSection),
/* harmony export */   "isValtypeLiteral": () => (/* binding */ isValtypeLiteral),
/* harmony export */   "isTypeInstruction": () => (/* binding */ isTypeInstruction),
/* harmony export */   "isStart": () => (/* binding */ isStart),
/* harmony export */   "isGlobalType": () => (/* binding */ isGlobalType),
/* harmony export */   "isLeadingComment": () => (/* binding */ isLeadingComment),
/* harmony export */   "isBlockComment": () => (/* binding */ isBlockComment),
/* harmony export */   "isData": () => (/* binding */ isData),
/* harmony export */   "isGlobal": () => (/* binding */ isGlobal),
/* harmony export */   "isTable": () => (/* binding */ isTable),
/* harmony export */   "isMemory": () => (/* binding */ isMemory),
/* harmony export */   "isFuncImportDescr": () => (/* binding */ isFuncImportDescr),
/* harmony export */   "isModuleImport": () => (/* binding */ isModuleImport),
/* harmony export */   "isModuleExportDescr": () => (/* binding */ isModuleExportDescr),
/* harmony export */   "isModuleExport": () => (/* binding */ isModuleExport),
/* harmony export */   "isLimit": () => (/* binding */ isLimit),
/* harmony export */   "isSignature": () => (/* binding */ isSignature),
/* harmony export */   "isProgram": () => (/* binding */ isProgram),
/* harmony export */   "isIdentifier": () => (/* binding */ isIdentifier),
/* harmony export */   "isBlockInstruction": () => (/* binding */ isBlockInstruction),
/* harmony export */   "isCallInstruction": () => (/* binding */ isCallInstruction),
/* harmony export */   "isCallIndirectInstruction": () => (/* binding */ isCallIndirectInstruction),
/* harmony export */   "isByteArray": () => (/* binding */ isByteArray),
/* harmony export */   "isFunc": () => (/* binding */ isFunc),
/* harmony export */   "isInternalBrUnless": () => (/* binding */ isInternalBrUnless),
/* harmony export */   "isInternalGoto": () => (/* binding */ isInternalGoto),
/* harmony export */   "isInternalCallExtern": () => (/* binding */ isInternalCallExtern),
/* harmony export */   "isInternalEndAndReturn": () => (/* binding */ isInternalEndAndReturn),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isBlock": () => (/* binding */ isBlock),
/* harmony export */   "isInstruction": () => (/* binding */ isInstruction),
/* harmony export */   "isExpression": () => (/* binding */ isExpression),
/* harmony export */   "isNumericLiteral": () => (/* binding */ isNumericLiteral),
/* harmony export */   "isImportDescr": () => (/* binding */ isImportDescr),
/* harmony export */   "isIntrinsic": () => (/* binding */ isIntrinsic),
/* harmony export */   "assertModule": () => (/* binding */ assertModule),
/* harmony export */   "assertModuleMetadata": () => (/* binding */ assertModuleMetadata),
/* harmony export */   "assertModuleNameMetadata": () => (/* binding */ assertModuleNameMetadata),
/* harmony export */   "assertFunctionNameMetadata": () => (/* binding */ assertFunctionNameMetadata),
/* harmony export */   "assertLocalNameMetadata": () => (/* binding */ assertLocalNameMetadata),
/* harmony export */   "assertBinaryModule": () => (/* binding */ assertBinaryModule),
/* harmony export */   "assertQuoteModule": () => (/* binding */ assertQuoteModule),
/* harmony export */   "assertSectionMetadata": () => (/* binding */ assertSectionMetadata),
/* harmony export */   "assertProducersSectionMetadata": () => (/* binding */ assertProducersSectionMetadata),
/* harmony export */   "assertProducerMetadata": () => (/* binding */ assertProducerMetadata),
/* harmony export */   "assertProducerMetadataVersionedName": () => (/* binding */ assertProducerMetadataVersionedName),
/* harmony export */   "assertLoopInstruction": () => (/* binding */ assertLoopInstruction),
/* harmony export */   "assertInstr": () => (/* binding */ assertInstr),
/* harmony export */   "assertIfInstruction": () => (/* binding */ assertIfInstruction),
/* harmony export */   "assertStringLiteral": () => (/* binding */ assertStringLiteral),
/* harmony export */   "assertNumberLiteral": () => (/* binding */ assertNumberLiteral),
/* harmony export */   "assertLongNumberLiteral": () => (/* binding */ assertLongNumberLiteral),
/* harmony export */   "assertFloatLiteral": () => (/* binding */ assertFloatLiteral),
/* harmony export */   "assertElem": () => (/* binding */ assertElem),
/* harmony export */   "assertIndexInFuncSection": () => (/* binding */ assertIndexInFuncSection),
/* harmony export */   "assertValtypeLiteral": () => (/* binding */ assertValtypeLiteral),
/* harmony export */   "assertTypeInstruction": () => (/* binding */ assertTypeInstruction),
/* harmony export */   "assertStart": () => (/* binding */ assertStart),
/* harmony export */   "assertGlobalType": () => (/* binding */ assertGlobalType),
/* harmony export */   "assertLeadingComment": () => (/* binding */ assertLeadingComment),
/* harmony export */   "assertBlockComment": () => (/* binding */ assertBlockComment),
/* harmony export */   "assertData": () => (/* binding */ assertData),
/* harmony export */   "assertGlobal": () => (/* binding */ assertGlobal),
/* harmony export */   "assertTable": () => (/* binding */ assertTable),
/* harmony export */   "assertMemory": () => (/* binding */ assertMemory),
/* harmony export */   "assertFuncImportDescr": () => (/* binding */ assertFuncImportDescr),
/* harmony export */   "assertModuleImport": () => (/* binding */ assertModuleImport),
/* harmony export */   "assertModuleExportDescr": () => (/* binding */ assertModuleExportDescr),
/* harmony export */   "assertModuleExport": () => (/* binding */ assertModuleExport),
/* harmony export */   "assertLimit": () => (/* binding */ assertLimit),
/* harmony export */   "assertSignature": () => (/* binding */ assertSignature),
/* harmony export */   "assertProgram": () => (/* binding */ assertProgram),
/* harmony export */   "assertIdentifier": () => (/* binding */ assertIdentifier),
/* harmony export */   "assertBlockInstruction": () => (/* binding */ assertBlockInstruction),
/* harmony export */   "assertCallInstruction": () => (/* binding */ assertCallInstruction),
/* harmony export */   "assertCallIndirectInstruction": () => (/* binding */ assertCallIndirectInstruction),
/* harmony export */   "assertByteArray": () => (/* binding */ assertByteArray),
/* harmony export */   "assertFunc": () => (/* binding */ assertFunc),
/* harmony export */   "assertInternalBrUnless": () => (/* binding */ assertInternalBrUnless),
/* harmony export */   "assertInternalGoto": () => (/* binding */ assertInternalGoto),
/* harmony export */   "assertInternalCallExtern": () => (/* binding */ assertInternalCallExtern),
/* harmony export */   "assertInternalEndAndReturn": () => (/* binding */ assertInternalEndAndReturn),
/* harmony export */   "unionTypesMap": () => (/* binding */ unionTypesMap),
/* harmony export */   "nodeAndUnionTypes": () => (/* binding */ nodeAndUnionTypes)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// THIS FILE IS AUTOGENERATED
// see scripts/generateNodeUtils.js
function isTypeOf(t) {
  return function (n) {
    return n.type === t;
  };
}

function assertTypeOf(t) {
  return function (n) {
    return function () {
      if (!(n.type === t)) {
        throw new Error('n.type === t' + " error: " + (undefined || "unknown"));
      }
    }();
  };
}

function module(id, fields, metadata) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
    }
  }

  if (!(_typeof(fields) === "object" && typeof fields.length !== "undefined")) {
    throw new Error('typeof fields === "object" && typeof fields.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Module",
    id: id,
    fields: fields
  };

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}
function moduleMetadata(sections, functionNames, localNames, producers) {
  if (!(_typeof(sections) === "object" && typeof sections.length !== "undefined")) {
    throw new Error('typeof sections === "object" && typeof sections.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (functionNames !== null && functionNames !== undefined) {
    if (!(_typeof(functionNames) === "object" && typeof functionNames.length !== "undefined")) {
      throw new Error('typeof functionNames === "object" && typeof functionNames.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  if (localNames !== null && localNames !== undefined) {
    if (!(_typeof(localNames) === "object" && typeof localNames.length !== "undefined")) {
      throw new Error('typeof localNames === "object" && typeof localNames.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  if (producers !== null && producers !== undefined) {
    if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
      throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "ModuleMetadata",
    sections: sections
  };

  if (typeof functionNames !== "undefined" && functionNames.length > 0) {
    node.functionNames = functionNames;
  }

  if (typeof localNames !== "undefined" && localNames.length > 0) {
    node.localNames = localNames;
  }

  if (typeof producers !== "undefined" && producers.length > 0) {
    node.producers = producers;
  }

  return node;
}
function moduleNameMetadata(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "ModuleNameMetadata",
    value: value
  };
  return node;
}
function functionNameMetadata(value, index) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  if (!(typeof index === "number")) {
    throw new Error('typeof index === "number"' + " error: " + ("Argument index must be of type number, given: " + _typeof(index) || 0));
  }

  var node = {
    type: "FunctionNameMetadata",
    value: value,
    index: index
  };
  return node;
}
function localNameMetadata(value, localIndex, functionIndex) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  if (!(typeof localIndex === "number")) {
    throw new Error('typeof localIndex === "number"' + " error: " + ("Argument localIndex must be of type number, given: " + _typeof(localIndex) || 0));
  }

  if (!(typeof functionIndex === "number")) {
    throw new Error('typeof functionIndex === "number"' + " error: " + ("Argument functionIndex must be of type number, given: " + _typeof(functionIndex) || 0));
  }

  var node = {
    type: "LocalNameMetadata",
    value: value,
    localIndex: localIndex,
    functionIndex: functionIndex
  };
  return node;
}
function binaryModule(id, blob) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
    }
  }

  if (!(_typeof(blob) === "object" && typeof blob.length !== "undefined")) {
    throw new Error('typeof blob === "object" && typeof blob.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "BinaryModule",
    id: id,
    blob: blob
  };
  return node;
}
function quoteModule(id, string) {
  if (id !== null && id !== undefined) {
    if (!(typeof id === "string")) {
      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
    }
  }

  if (!(_typeof(string) === "object" && typeof string.length !== "undefined")) {
    throw new Error('typeof string === "object" && typeof string.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "QuoteModule",
    id: id,
    string: string
  };
  return node;
}
function sectionMetadata(section, startOffset, size, vectorOfSize) {
  if (!(typeof startOffset === "number")) {
    throw new Error('typeof startOffset === "number"' + " error: " + ("Argument startOffset must be of type number, given: " + _typeof(startOffset) || 0));
  }

  var node = {
    type: "SectionMetadata",
    section: section,
    startOffset: startOffset,
    size: size,
    vectorOfSize: vectorOfSize
  };
  return node;
}
function producersSectionMetadata(producers) {
  if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
    throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ProducersSectionMetadata",
    producers: producers
  };
  return node;
}
function producerMetadata(language, processedBy, sdk) {
  if (!(_typeof(language) === "object" && typeof language.length !== "undefined")) {
    throw new Error('typeof language === "object" && typeof language.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(processedBy) === "object" && typeof processedBy.length !== "undefined")) {
    throw new Error('typeof processedBy === "object" && typeof processedBy.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(sdk) === "object" && typeof sdk.length !== "undefined")) {
    throw new Error('typeof sdk === "object" && typeof sdk.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ProducerMetadata",
    language: language,
    processedBy: processedBy,
    sdk: sdk
  };
  return node;
}
function producerMetadataVersionedName(name, version) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || 0));
  }

  if (!(typeof version === "string")) {
    throw new Error('typeof version === "string"' + " error: " + ("Argument version must be of type string, given: " + _typeof(version) || 0));
  }

  var node = {
    type: "ProducerMetadataVersionedName",
    name: name,
    version: version
  };
  return node;
}
function loopInstruction(label, resulttype, instr) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "LoopInstruction",
    id: "loop",
    label: label,
    resulttype: resulttype,
    instr: instr
  };
  return node;
}
function instr(id, object, args, namedArgs) {
  if (!(typeof id === "string")) {
    throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || 0));
  }

  if (!(_typeof(args) === "object" && typeof args.length !== "undefined")) {
    throw new Error('typeof args === "object" && typeof args.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Instr",
    id: id,
    args: args
  };

  if (typeof object !== "undefined") {
    node.object = object;
  }

  if (typeof namedArgs !== "undefined" && Object.keys(namedArgs).length !== 0) {
    node.namedArgs = namedArgs;
  }

  return node;
}
function ifInstruction(testLabel, test, result, consequent, alternate) {
  if (!(_typeof(test) === "object" && typeof test.length !== "undefined")) {
    throw new Error('typeof test === "object" && typeof test.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(consequent) === "object" && typeof consequent.length !== "undefined")) {
    throw new Error('typeof consequent === "object" && typeof consequent.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(alternate) === "object" && typeof alternate.length !== "undefined")) {
    throw new Error('typeof alternate === "object" && typeof alternate.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "IfInstruction",
    id: "if",
    testLabel: testLabel,
    test: test,
    result: result,
    consequent: consequent,
    alternate: alternate
  };
  return node;
}
function stringLiteral(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "StringLiteral",
    value: value
  };
  return node;
}
function numberLiteral(value, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || 0));
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
  }

  var node = {
    type: "NumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}
function longNumberLiteral(value, raw) {
  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
  }

  var node = {
    type: "LongNumberLiteral",
    value: value,
    raw: raw
  };
  return node;
}
function floatLiteral(value, nan, inf, raw) {
  if (!(typeof value === "number")) {
    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || 0));
  }

  if (nan !== null && nan !== undefined) {
    if (!(typeof nan === "boolean")) {
      throw new Error('typeof nan === "boolean"' + " error: " + ("Argument nan must be of type boolean, given: " + _typeof(nan) || 0));
    }
  }

  if (inf !== null && inf !== undefined) {
    if (!(typeof inf === "boolean")) {
      throw new Error('typeof inf === "boolean"' + " error: " + ("Argument inf must be of type boolean, given: " + _typeof(inf) || 0));
    }
  }

  if (!(typeof raw === "string")) {
    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
  }

  var node = {
    type: "FloatLiteral",
    value: value,
    raw: raw
  };

  if (nan === true) {
    node.nan = true;
  }

  if (inf === true) {
    node.inf = true;
  }

  return node;
}
function elem(table, offset, funcs) {
  if (!(_typeof(offset) === "object" && typeof offset.length !== "undefined")) {
    throw new Error('typeof offset === "object" && typeof offset.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(funcs) === "object" && typeof funcs.length !== "undefined")) {
    throw new Error('typeof funcs === "object" && typeof funcs.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Elem",
    table: table,
    offset: offset,
    funcs: funcs
  };
  return node;
}
function indexInFuncSection(index) {
  var node = {
    type: "IndexInFuncSection",
    index: index
  };
  return node;
}
function valtypeLiteral(name) {
  var node = {
    type: "ValtypeLiteral",
    name: name
  };
  return node;
}
function typeInstruction(id, functype) {
  var node = {
    type: "TypeInstruction",
    id: id,
    functype: functype
  };
  return node;
}
function start(index) {
  var node = {
    type: "Start",
    index: index
  };
  return node;
}
function globalType(valtype, mutability) {
  var node = {
    type: "GlobalType",
    valtype: valtype,
    mutability: mutability
  };
  return node;
}
function leadingComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "LeadingComment",
    value: value
  };
  return node;
}
function blockComment(value) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  var node = {
    type: "BlockComment",
    value: value
  };
  return node;
}
function data(memoryIndex, offset, init) {
  var node = {
    type: "Data",
    memoryIndex: memoryIndex,
    offset: offset,
    init: init
  };
  return node;
}
function global(globalType, init, name) {
  if (!(_typeof(init) === "object" && typeof init.length !== "undefined")) {
    throw new Error('typeof init === "object" && typeof init.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Global",
    globalType: globalType,
    init: init,
    name: name
  };
  return node;
}
function table(elementType, limits, name, elements) {
  if (!(limits.type === "Limit")) {
    throw new Error('limits.type === "Limit"' + " error: " + ("Argument limits must be of type Limit, given: " + limits.type || 0));
  }

  if (elements !== null && elements !== undefined) {
    if (!(_typeof(elements) === "object" && typeof elements.length !== "undefined")) {
      throw new Error('typeof elements === "object" && typeof elements.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "Table",
    elementType: elementType,
    limits: limits,
    name: name
  };

  if (typeof elements !== "undefined" && elements.length > 0) {
    node.elements = elements;
  }

  return node;
}
function memory(limits, id) {
  var node = {
    type: "Memory",
    limits: limits,
    id: id
  };
  return node;
}
function funcImportDescr(id, signature) {
  var node = {
    type: "FuncImportDescr",
    id: id,
    signature: signature
  };
  return node;
}
function moduleImport(module, name, descr) {
  if (!(typeof module === "string")) {
    throw new Error('typeof module === "string"' + " error: " + ("Argument module must be of type string, given: " + _typeof(module) || 0));
  }

  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || 0));
  }

  var node = {
    type: "ModuleImport",
    module: module,
    name: name,
    descr: descr
  };
  return node;
}
function moduleExportDescr(exportType, id) {
  var node = {
    type: "ModuleExportDescr",
    exportType: exportType,
    id: id
  };
  return node;
}
function moduleExport(name, descr) {
  if (!(typeof name === "string")) {
    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || 0));
  }

  var node = {
    type: "ModuleExport",
    name: name,
    descr: descr
  };
  return node;
}
function limit(min, max, shared) {
  if (!(typeof min === "number")) {
    throw new Error('typeof min === "number"' + " error: " + ("Argument min must be of type number, given: " + _typeof(min) || 0));
  }

  if (max !== null && max !== undefined) {
    if (!(typeof max === "number")) {
      throw new Error('typeof max === "number"' + " error: " + ("Argument max must be of type number, given: " + _typeof(max) || 0));
    }
  }

  if (shared !== null && shared !== undefined) {
    if (!(typeof shared === "boolean")) {
      throw new Error('typeof shared === "boolean"' + " error: " + ("Argument shared must be of type boolean, given: " + _typeof(shared) || 0));
    }
  }

  var node = {
    type: "Limit",
    min: min
  };

  if (typeof max !== "undefined") {
    node.max = max;
  }

  if (shared === true) {
    node.shared = true;
  }

  return node;
}
function signature(params, results) {
  if (!(_typeof(params) === "object" && typeof params.length !== "undefined")) {
    throw new Error('typeof params === "object" && typeof params.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (!(_typeof(results) === "object" && typeof results.length !== "undefined")) {
    throw new Error('typeof results === "object" && typeof results.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Signature",
    params: params,
    results: results
  };
  return node;
}
function program(body) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "Program",
    body: body
  };
  return node;
}
function identifier(value, raw) {
  if (!(typeof value === "string")) {
    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || 0));
  }

  if (raw !== null && raw !== undefined) {
    if (!(typeof raw === "string")) {
      throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || 0));
    }
  }

  var node = {
    type: "Identifier",
    value: value
  };

  if (typeof raw !== "undefined") {
    node.raw = raw;
  }

  return node;
}
function blockInstruction(label, instr, result) {
  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "BlockInstruction",
    id: "block",
    label: label,
    instr: instr,
    result: result
  };
  return node;
}
function callInstruction(index, instrArgs, numeric) {
  if (instrArgs !== null && instrArgs !== undefined) {
    if (!(_typeof(instrArgs) === "object" && typeof instrArgs.length !== "undefined")) {
      throw new Error('typeof instrArgs === "object" && typeof instrArgs.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "CallInstruction",
    id: "call",
    index: index
  };

  if (typeof instrArgs !== "undefined" && instrArgs.length > 0) {
    node.instrArgs = instrArgs;
  }

  if (typeof numeric !== "undefined") {
    node.numeric = numeric;
  }

  return node;
}
function callIndirectInstruction(signature, intrs) {
  if (intrs !== null && intrs !== undefined) {
    if (!(_typeof(intrs) === "object" && typeof intrs.length !== "undefined")) {
      throw new Error('typeof intrs === "object" && typeof intrs.length !== "undefined"' + " error: " + (undefined || "unknown"));
    }
  }

  var node = {
    type: "CallIndirectInstruction",
    id: "call_indirect",
    signature: signature
  };

  if (typeof intrs !== "undefined" && intrs.length > 0) {
    node.intrs = intrs;
  }

  return node;
}
function byteArray(values) {
  if (!(_typeof(values) === "object" && typeof values.length !== "undefined")) {
    throw new Error('typeof values === "object" && typeof values.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  var node = {
    type: "ByteArray",
    values: values
  };
  return node;
}
function func(name, signature, body, isExternal, metadata) {
  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + (undefined || "unknown"));
  }

  if (isExternal !== null && isExternal !== undefined) {
    if (!(typeof isExternal === "boolean")) {
      throw new Error('typeof isExternal === "boolean"' + " error: " + ("Argument isExternal must be of type boolean, given: " + _typeof(isExternal) || 0));
    }
  }

  var node = {
    type: "Func",
    name: name,
    signature: signature,
    body: body
  };

  if (isExternal === true) {
    node.isExternal = true;
  }

  if (typeof metadata !== "undefined") {
    node.metadata = metadata;
  }

  return node;
}
function internalBrUnless(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || 0));
  }

  var node = {
    type: "InternalBrUnless",
    target: target
  };
  return node;
}
function internalGoto(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || 0));
  }

  var node = {
    type: "InternalGoto",
    target: target
  };
  return node;
}
function internalCallExtern(target) {
  if (!(typeof target === "number")) {
    throw new Error('typeof target === "number"' + " error: " + ("Argument target must be of type number, given: " + _typeof(target) || 0));
  }

  var node = {
    type: "InternalCallExtern",
    target: target
  };
  return node;
}
function internalEndAndReturn() {
  var node = {
    type: "InternalEndAndReturn"
  };
  return node;
}
var isModule = isTypeOf("Module");
var isModuleMetadata = isTypeOf("ModuleMetadata");
var isModuleNameMetadata = isTypeOf("ModuleNameMetadata");
var isFunctionNameMetadata = isTypeOf("FunctionNameMetadata");
var isLocalNameMetadata = isTypeOf("LocalNameMetadata");
var isBinaryModule = isTypeOf("BinaryModule");
var isQuoteModule = isTypeOf("QuoteModule");
var isSectionMetadata = isTypeOf("SectionMetadata");
var isProducersSectionMetadata = isTypeOf("ProducersSectionMetadata");
var isProducerMetadata = isTypeOf("ProducerMetadata");
var isProducerMetadataVersionedName = isTypeOf("ProducerMetadataVersionedName");
var isLoopInstruction = isTypeOf("LoopInstruction");
var isInstr = isTypeOf("Instr");
var isIfInstruction = isTypeOf("IfInstruction");
var isStringLiteral = isTypeOf("StringLiteral");
var isNumberLiteral = isTypeOf("NumberLiteral");
var isLongNumberLiteral = isTypeOf("LongNumberLiteral");
var isFloatLiteral = isTypeOf("FloatLiteral");
var isElem = isTypeOf("Elem");
var isIndexInFuncSection = isTypeOf("IndexInFuncSection");
var isValtypeLiteral = isTypeOf("ValtypeLiteral");
var isTypeInstruction = isTypeOf("TypeInstruction");
var isStart = isTypeOf("Start");
var isGlobalType = isTypeOf("GlobalType");
var isLeadingComment = isTypeOf("LeadingComment");
var isBlockComment = isTypeOf("BlockComment");
var isData = isTypeOf("Data");
var isGlobal = isTypeOf("Global");
var isTable = isTypeOf("Table");
var isMemory = isTypeOf("Memory");
var isFuncImportDescr = isTypeOf("FuncImportDescr");
var isModuleImport = isTypeOf("ModuleImport");
var isModuleExportDescr = isTypeOf("ModuleExportDescr");
var isModuleExport = isTypeOf("ModuleExport");
var isLimit = isTypeOf("Limit");
var isSignature = isTypeOf("Signature");
var isProgram = isTypeOf("Program");
var isIdentifier = isTypeOf("Identifier");
var isBlockInstruction = isTypeOf("BlockInstruction");
var isCallInstruction = isTypeOf("CallInstruction");
var isCallIndirectInstruction = isTypeOf("CallIndirectInstruction");
var isByteArray = isTypeOf("ByteArray");
var isFunc = isTypeOf("Func");
var isInternalBrUnless = isTypeOf("InternalBrUnless");
var isInternalGoto = isTypeOf("InternalGoto");
var isInternalCallExtern = isTypeOf("InternalCallExtern");
var isInternalEndAndReturn = isTypeOf("InternalEndAndReturn");
var isNode = function isNode(node) {
  return isModule(node) || isModuleMetadata(node) || isModuleNameMetadata(node) || isFunctionNameMetadata(node) || isLocalNameMetadata(node) || isBinaryModule(node) || isQuoteModule(node) || isSectionMetadata(node) || isProducersSectionMetadata(node) || isProducerMetadata(node) || isProducerMetadataVersionedName(node) || isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isElem(node) || isIndexInFuncSection(node) || isValtypeLiteral(node) || isTypeInstruction(node) || isStart(node) || isGlobalType(node) || isLeadingComment(node) || isBlockComment(node) || isData(node) || isGlobal(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node) || isModuleImport(node) || isModuleExportDescr(node) || isModuleExport(node) || isLimit(node) || isSignature(node) || isProgram(node) || isIdentifier(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node) || isByteArray(node) || isFunc(node) || isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};
var isBlock = function isBlock(node) {
  return isLoopInstruction(node) || isBlockInstruction(node) || isFunc(node);
};
var isInstruction = function isInstruction(node) {
  return isLoopInstruction(node) || isInstr(node) || isIfInstruction(node) || isTypeInstruction(node) || isBlockInstruction(node) || isCallInstruction(node) || isCallIndirectInstruction(node);
};
var isExpression = function isExpression(node) {
  return isInstr(node) || isStringLiteral(node) || isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node) || isValtypeLiteral(node) || isIdentifier(node);
};
var isNumericLiteral = function isNumericLiteral(node) {
  return isNumberLiteral(node) || isLongNumberLiteral(node) || isFloatLiteral(node);
};
var isImportDescr = function isImportDescr(node) {
  return isGlobalType(node) || isTable(node) || isMemory(node) || isFuncImportDescr(node);
};
var isIntrinsic = function isIntrinsic(node) {
  return isInternalBrUnless(node) || isInternalGoto(node) || isInternalCallExtern(node) || isInternalEndAndReturn(node);
};
var assertModule = assertTypeOf("Module");
var assertModuleMetadata = assertTypeOf("ModuleMetadata");
var assertModuleNameMetadata = assertTypeOf("ModuleNameMetadata");
var assertFunctionNameMetadata = assertTypeOf("FunctionNameMetadata");
var assertLocalNameMetadata = assertTypeOf("LocalNameMetadata");
var assertBinaryModule = assertTypeOf("BinaryModule");
var assertQuoteModule = assertTypeOf("QuoteModule");
var assertSectionMetadata = assertTypeOf("SectionMetadata");
var assertProducersSectionMetadata = assertTypeOf("ProducersSectionMetadata");
var assertProducerMetadata = assertTypeOf("ProducerMetadata");
var assertProducerMetadataVersionedName = assertTypeOf("ProducerMetadataVersionedName");
var assertLoopInstruction = assertTypeOf("LoopInstruction");
var assertInstr = assertTypeOf("Instr");
var assertIfInstruction = assertTypeOf("IfInstruction");
var assertStringLiteral = assertTypeOf("StringLiteral");
var assertNumberLiteral = assertTypeOf("NumberLiteral");
var assertLongNumberLiteral = assertTypeOf("LongNumberLiteral");
var assertFloatLiteral = assertTypeOf("FloatLiteral");
var assertElem = assertTypeOf("Elem");
var assertIndexInFuncSection = assertTypeOf("IndexInFuncSection");
var assertValtypeLiteral = assertTypeOf("ValtypeLiteral");
var assertTypeInstruction = assertTypeOf("TypeInstruction");
var assertStart = assertTypeOf("Start");
var assertGlobalType = assertTypeOf("GlobalType");
var assertLeadingComment = assertTypeOf("LeadingComment");
var assertBlockComment = assertTypeOf("BlockComment");
var assertData = assertTypeOf("Data");
var assertGlobal = assertTypeOf("Global");
var assertTable = assertTypeOf("Table");
var assertMemory = assertTypeOf("Memory");
var assertFuncImportDescr = assertTypeOf("FuncImportDescr");
var assertModuleImport = assertTypeOf("ModuleImport");
var assertModuleExportDescr = assertTypeOf("ModuleExportDescr");
var assertModuleExport = assertTypeOf("ModuleExport");
var assertLimit = assertTypeOf("Limit");
var assertSignature = assertTypeOf("Signature");
var assertProgram = assertTypeOf("Program");
var assertIdentifier = assertTypeOf("Identifier");
var assertBlockInstruction = assertTypeOf("BlockInstruction");
var assertCallInstruction = assertTypeOf("CallInstruction");
var assertCallIndirectInstruction = assertTypeOf("CallIndirectInstruction");
var assertByteArray = assertTypeOf("ByteArray");
var assertFunc = assertTypeOf("Func");
var assertInternalBrUnless = assertTypeOf("InternalBrUnless");
var assertInternalGoto = assertTypeOf("InternalGoto");
var assertInternalCallExtern = assertTypeOf("InternalCallExtern");
var assertInternalEndAndReturn = assertTypeOf("InternalEndAndReturn");
var unionTypesMap = {
  Module: ["Node"],
  ModuleMetadata: ["Node"],
  ModuleNameMetadata: ["Node"],
  FunctionNameMetadata: ["Node"],
  LocalNameMetadata: ["Node"],
  BinaryModule: ["Node"],
  QuoteModule: ["Node"],
  SectionMetadata: ["Node"],
  ProducersSectionMetadata: ["Node"],
  ProducerMetadata: ["Node"],
  ProducerMetadataVersionedName: ["Node"],
  LoopInstruction: ["Node", "Block", "Instruction"],
  Instr: ["Node", "Expression", "Instruction"],
  IfInstruction: ["Node", "Instruction"],
  StringLiteral: ["Node", "Expression"],
  NumberLiteral: ["Node", "NumericLiteral", "Expression"],
  LongNumberLiteral: ["Node", "NumericLiteral", "Expression"],
  FloatLiteral: ["Node", "NumericLiteral", "Expression"],
  Elem: ["Node"],
  IndexInFuncSection: ["Node"],
  ValtypeLiteral: ["Node", "Expression"],
  TypeInstruction: ["Node", "Instruction"],
  Start: ["Node"],
  GlobalType: ["Node", "ImportDescr"],
  LeadingComment: ["Node"],
  BlockComment: ["Node"],
  Data: ["Node"],
  Global: ["Node"],
  Table: ["Node", "ImportDescr"],
  Memory: ["Node", "ImportDescr"],
  FuncImportDescr: ["Node", "ImportDescr"],
  ModuleImport: ["Node"],
  ModuleExportDescr: ["Node"],
  ModuleExport: ["Node"],
  Limit: ["Node"],
  Signature: ["Node"],
  Program: ["Node"],
  Identifier: ["Node", "Expression"],
  BlockInstruction: ["Node", "Block", "Instruction"],
  CallInstruction: ["Node", "Instruction"],
  CallIndirectInstruction: ["Node", "Instruction"],
  ByteArray: ["Node"],
  Func: ["Node", "Block"],
  InternalBrUnless: ["Node", "Intrinsic"],
  InternalGoto: ["Node", "Intrinsic"],
  InternalCallExtern: ["Node", "Intrinsic"],
  InternalEndAndReturn: ["Node", "Intrinsic"]
};
var nodeAndUnionTypes = ["Module", "ModuleMetadata", "ModuleNameMetadata", "FunctionNameMetadata", "LocalNameMetadata", "BinaryModule", "QuoteModule", "SectionMetadata", "ProducersSectionMetadata", "ProducerMetadata", "ProducerMetadataVersionedName", "LoopInstruction", "Instr", "IfInstruction", "StringLiteral", "NumberLiteral", "LongNumberLiteral", "FloatLiteral", "Elem", "IndexInFuncSection", "ValtypeLiteral", "TypeInstruction", "Start", "GlobalType", "LeadingComment", "BlockComment", "Data", "Global", "Table", "Memory", "FuncImportDescr", "ModuleImport", "ModuleExportDescr", "ModuleExport", "Limit", "Signature", "Program", "Identifier", "BlockInstruction", "CallInstruction", "CallIndirectInstruction", "ByteArray", "Func", "InternalBrUnless", "InternalGoto", "InternalCallExtern", "InternalEndAndReturn", "Node", "Block", "Instruction", "Expression", "NumericLiteral", "ImportDescr", "Intrinsic"];

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/signatures.js":
/*!***********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/signatures.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signatures": () => (/* binding */ signatures)
/* harmony export */ });
function sign(input, output) {
  return [input, output];
}

var u32 = "u32";
var i32 = "i32";
var i64 = "i64";
var f32 = "f32";
var f64 = "f64";

var vector = function vector(t) {
  var vecType = [t]; // $FlowIgnore

  vecType.vector = true;
  return vecType;
};

var controlInstructions = {
  unreachable: sign([], []),
  nop: sign([], []),
  // block ?
  // loop ?
  // if ?
  // if else ?
  br: sign([u32], []),
  br_if: sign([u32], []),
  br_table: sign(vector(u32), []),
  return: sign([], []),
  call: sign([u32], []),
  call_indirect: sign([u32], [])
};
var parametricInstructions = {
  drop: sign([], []),
  select: sign([], [])
};
var variableInstructions = {
  get_local: sign([u32], []),
  set_local: sign([u32], []),
  tee_local: sign([u32], []),
  get_global: sign([u32], []),
  set_global: sign([u32], [])
};
var memoryInstructions = {
  "i32.load": sign([u32, u32], [i32]),
  "i64.load": sign([u32, u32], []),
  "f32.load": sign([u32, u32], []),
  "f64.load": sign([u32, u32], []),
  "i32.load8_s": sign([u32, u32], [i32]),
  "i32.load8_u": sign([u32, u32], [i32]),
  "i32.load16_s": sign([u32, u32], [i32]),
  "i32.load16_u": sign([u32, u32], [i32]),
  "i64.load8_s": sign([u32, u32], [i64]),
  "i64.load8_u": sign([u32, u32], [i64]),
  "i64.load16_s": sign([u32, u32], [i64]),
  "i64.load16_u": sign([u32, u32], [i64]),
  "i64.load32_s": sign([u32, u32], [i64]),
  "i64.load32_u": sign([u32, u32], [i64]),
  "i32.store": sign([u32, u32], []),
  "i64.store": sign([u32, u32], []),
  "f32.store": sign([u32, u32], []),
  "f64.store": sign([u32, u32], []),
  "i32.store8": sign([u32, u32], []),
  "i32.store16": sign([u32, u32], []),
  "i64.store8": sign([u32, u32], []),
  "i64.store16": sign([u32, u32], []),
  "i64.store32": sign([u32, u32], []),
  current_memory: sign([], []),
  grow_memory: sign([], [])
};
var numericInstructions = {
  "i32.const": sign([i32], [i32]),
  "i64.const": sign([i64], [i64]),
  "f32.const": sign([f32], [f32]),
  "f64.const": sign([f64], [f64]),
  "i32.eqz": sign([i32], [i32]),
  "i32.eq": sign([i32, i32], [i32]),
  "i32.ne": sign([i32, i32], [i32]),
  "i32.lt_s": sign([i32, i32], [i32]),
  "i32.lt_u": sign([i32, i32], [i32]),
  "i32.gt_s": sign([i32, i32], [i32]),
  "i32.gt_u": sign([i32, i32], [i32]),
  "i32.le_s": sign([i32, i32], [i32]),
  "i32.le_u": sign([i32, i32], [i32]),
  "i32.ge_s": sign([i32, i32], [i32]),
  "i32.ge_u": sign([i32, i32], [i32]),
  "i64.eqz": sign([i64], [i64]),
  "i64.eq": sign([i64, i64], [i32]),
  "i64.ne": sign([i64, i64], [i32]),
  "i64.lt_s": sign([i64, i64], [i32]),
  "i64.lt_u": sign([i64, i64], [i32]),
  "i64.gt_s": sign([i64, i64], [i32]),
  "i64.gt_u": sign([i64, i64], [i32]),
  "i64.le_s": sign([i64, i64], [i32]),
  "i64.le_u": sign([i64, i64], [i32]),
  "i64.ge_s": sign([i64, i64], [i32]),
  "i64.ge_u": sign([i64, i64], [i32]),
  "f32.eq": sign([f32, f32], [i32]),
  "f32.ne": sign([f32, f32], [i32]),
  "f32.lt": sign([f32, f32], [i32]),
  "f32.gt": sign([f32, f32], [i32]),
  "f32.le": sign([f32, f32], [i32]),
  "f32.ge": sign([f32, f32], [i32]),
  "f64.eq": sign([f64, f64], [i32]),
  "f64.ne": sign([f64, f64], [i32]),
  "f64.lt": sign([f64, f64], [i32]),
  "f64.gt": sign([f64, f64], [i32]),
  "f64.le": sign([f64, f64], [i32]),
  "f64.ge": sign([f64, f64], [i32]),
  "i32.clz": sign([i32], [i32]),
  "i32.ctz": sign([i32], [i32]),
  "i32.popcnt": sign([i32], [i32]),
  "i32.add": sign([i32, i32], [i32]),
  "i32.sub": sign([i32, i32], [i32]),
  "i32.mul": sign([i32, i32], [i32]),
  "i32.div_s": sign([i32, i32], [i32]),
  "i32.div_u": sign([i32, i32], [i32]),
  "i32.rem_s": sign([i32, i32], [i32]),
  "i32.rem_u": sign([i32, i32], [i32]),
  "i32.and": sign([i32, i32], [i32]),
  "i32.or": sign([i32, i32], [i32]),
  "i32.xor": sign([i32, i32], [i32]),
  "i32.shl": sign([i32, i32], [i32]),
  "i32.shr_s": sign([i32, i32], [i32]),
  "i32.shr_u": sign([i32, i32], [i32]),
  "i32.rotl": sign([i32, i32], [i32]),
  "i32.rotr": sign([i32, i32], [i32]),
  "i64.clz": sign([i64], [i64]),
  "i64.ctz": sign([i64], [i64]),
  "i64.popcnt": sign([i64], [i64]),
  "i64.add": sign([i64, i64], [i64]),
  "i64.sub": sign([i64, i64], [i64]),
  "i64.mul": sign([i64, i64], [i64]),
  "i64.div_s": sign([i64, i64], [i64]),
  "i64.div_u": sign([i64, i64], [i64]),
  "i64.rem_s": sign([i64, i64], [i64]),
  "i64.rem_u": sign([i64, i64], [i64]),
  "i64.and": sign([i64, i64], [i64]),
  "i64.or": sign([i64, i64], [i64]),
  "i64.xor": sign([i64, i64], [i64]),
  "i64.shl": sign([i64, i64], [i64]),
  "i64.shr_s": sign([i64, i64], [i64]),
  "i64.shr_u": sign([i64, i64], [i64]),
  "i64.rotl": sign([i64, i64], [i64]),
  "i64.rotr": sign([i64, i64], [i64]),
  "f32.abs": sign([f32], [f32]),
  "f32.neg": sign([f32], [f32]),
  "f32.ceil": sign([f32], [f32]),
  "f32.floor": sign([f32], [f32]),
  "f32.trunc": sign([f32], [f32]),
  "f32.nearest": sign([f32], [f32]),
  "f32.sqrt": sign([f32], [f32]),
  "f32.add": sign([f32, f32], [f32]),
  "f32.sub": sign([f32, f32], [f32]),
  "f32.mul": sign([f32, f32], [f32]),
  "f32.div": sign([f32, f32], [f32]),
  "f32.min": sign([f32, f32], [f32]),
  "f32.max": sign([f32, f32], [f32]),
  "f32.copysign": sign([f32, f32], [f32]),
  "f64.abs": sign([f64], [f64]),
  "f64.neg": sign([f64], [f64]),
  "f64.ceil": sign([f64], [f64]),
  "f64.floor": sign([f64], [f64]),
  "f64.trunc": sign([f64], [f64]),
  "f64.nearest": sign([f64], [f64]),
  "f64.sqrt": sign([f64], [f64]),
  "f64.add": sign([f64, f64], [f64]),
  "f64.sub": sign([f64, f64], [f64]),
  "f64.mul": sign([f64, f64], [f64]),
  "f64.div": sign([f64, f64], [f64]),
  "f64.min": sign([f64, f64], [f64]),
  "f64.max": sign([f64, f64], [f64]),
  "f64.copysign": sign([f64, f64], [f64]),
  "i32.wrap/i64": sign([i64], [i32]),
  "i32.trunc_s/f32": sign([f32], [i32]),
  "i32.trunc_u/f32": sign([f32], [i32]),
  "i32.trunc_s/f64": sign([f32], [i32]),
  "i32.trunc_u/f64": sign([f64], [i32]),
  "i64.extend_s/i32": sign([i32], [i64]),
  "i64.extend_u/i32": sign([i32], [i64]),
  "i64.trunc_s/f32": sign([f32], [i64]),
  "i64.trunc_u/f32": sign([f32], [i64]),
  "i64.trunc_s/f64": sign([f64], [i64]),
  "i64.trunc_u/f64": sign([f64], [i64]),
  "f32.convert_s/i32": sign([i32], [f32]),
  "f32.convert_u/i32": sign([i32], [f32]),
  "f32.convert_s/i64": sign([i64], [f32]),
  "f32.convert_u/i64": sign([i64], [f32]),
  "f32.demote/f64": sign([f64], [f32]),
  "f64.convert_s/i32": sign([i32], [f64]),
  "f64.convert_u/i32": sign([i32], [f64]),
  "f64.convert_s/i64": sign([i64], [f64]),
  "f64.convert_u/i64": sign([i64], [f64]),
  "f64.promote/f32": sign([f32], [f64]),
  "i32.reinterpret/f32": sign([f32], [i32]),
  "i64.reinterpret/f64": sign([f64], [i64]),
  "f32.reinterpret/i32": sign([i32], [f32]),
  "f64.reinterpret/i64": sign([i64], [f64])
};
var signatures = Object.assign({}, controlInstructions, parametricInstructions, variableInstructions, memoryInstructions, numericInstructions);

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/transform/ast-module-to-module-context/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/transform/ast-module-to-module-context/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moduleContextFromModuleAST": () => (/* binding */ moduleContextFromModuleAST),
/* harmony export */   "ModuleContext": () => (/* binding */ ModuleContext)
/* harmony export */ });
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../nodes.js */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// TODO(sven): add flow in here

function moduleContextFromModuleAST(m) {
  var moduleContext = new ModuleContext();

  if (!(m.type === "Module")) {
    throw new Error('m.type === "Module"' + " error: " + (undefined || "unknown"));
  }

  m.fields.forEach(function (field) {
    switch (field.type) {
      case "Start":
        {
          moduleContext.setStart(field.index);
          break;
        }

      case "TypeInstruction":
        {
          moduleContext.addType(field);
          break;
        }

      case "Func":
        {
          moduleContext.addFunction(field);
          break;
        }

      case "Global":
        {
          moduleContext.defineGlobal(field);
          break;
        }

      case "ModuleImport":
        {
          switch (field.descr.type) {
            case "GlobalType":
              {
                moduleContext.importGlobal(field.descr.valtype, field.descr.mutability);
                break;
              }

            case "Memory":
              {
                moduleContext.addMemory(field.descr.limits.min, field.descr.limits.max);
                break;
              }

            case "FuncImportDescr":
              {
                moduleContext.importFunction(field.descr);
                break;
              }

            case "Table":
              {
                // FIXME(sven): not implemented yet
                break;
              }

            default:
              throw new Error("Unsupported ModuleImport of type " + JSON.stringify(field.descr.type));
          }

          break;
        }

      case "Memory":
        {
          moduleContext.addMemory(field.limits.min, field.limits.max);
          break;
        }
    }
  });
  return moduleContext;
}
/**
 * Module context for type checking
 */

var ModuleContext =
/*#__PURE__*/
function () {
  function ModuleContext() {
    _classCallCheck(this, ModuleContext);

    this.funcs = [];
    this.funcsOffsetByIdentifier = [];
    this.types = [];
    this.globals = [];
    this.globalsOffsetByIdentifier = [];
    this.mems = []; // Current stack frame

    this.locals = [];
    this.labels = [];
    this.return = [];
    this.debugName = "unknown";
    this.start = null;
  }
  /**
   * Set start segment
   */


  _createClass(ModuleContext, [{
    key: "setStart",
    value: function setStart(index) {
      this.start = index.value;
    }
    /**
     * Get start function
     */

  }, {
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
    /**
     * Reset the active stack frame
     */

  }, {
    key: "newContext",
    value: function newContext(debugName, expectedResult) {
      this.locals = [];
      this.labels = [expectedResult];
      this.return = expectedResult;
      this.debugName = debugName;
    }
    /**
     * Functions
     */

  }, {
    key: "addFunction",
    value: function addFunction(func
    /*: Func*/
    ) {
      // eslint-disable-next-line prefer-const
      var _ref = func.signature || {},
          _ref$params = _ref.params,
          args = _ref$params === void 0 ? [] : _ref$params,
          _ref$results = _ref.results,
          result = _ref$results === void 0 ? [] : _ref$results;

      args = args.map(function (arg) {
        return arg.valtype;
      });
      this.funcs.push({
        args: args,
        result: result
      });

      if (typeof func.name !== "undefined") {
        this.funcsOffsetByIdentifier[func.name.value] = this.funcs.length - 1;
      }
    }
  }, {
    key: "importFunction",
    value: function importFunction(funcimport) {
      if ((0,_nodes_js__WEBPACK_IMPORTED_MODULE_0__.isSignature)(funcimport.signature)) {
        // eslint-disable-next-line prefer-const
        var _funcimport$signature = funcimport.signature,
            args = _funcimport$signature.params,
            result = _funcimport$signature.results;
        args = args.map(function (arg) {
          return arg.valtype;
        });
        this.funcs.push({
          args: args,
          result: result
        });
      } else {
        if (!(0,_nodes_js__WEBPACK_IMPORTED_MODULE_0__.isNumberLiteral)(funcimport.signature)) {
          throw new Error('isNumberLiteral(funcimport.signature)' + " error: " + (undefined || "unknown"));
        }

        var typeId = funcimport.signature.value;

        if (!this.hasType(typeId)) {
          throw new Error('this.hasType(typeId)' + " error: " + (undefined || "unknown"));
        }

        var signature = this.getType(typeId);
        this.funcs.push({
          args: signature.params.map(function (arg) {
            return arg.valtype;
          }),
          result: signature.results
        });
      }

      if (typeof funcimport.id !== "undefined") {
        // imports are first, we can assume their index in the array
        this.funcsOffsetByIdentifier[funcimport.id.value] = this.funcs.length - 1;
      }
    }
  }, {
    key: "hasFunction",
    value: function hasFunction(index) {
      return typeof this.getFunction(index) !== "undefined";
    }
  }, {
    key: "getFunction",
    value: function getFunction(index) {
      if (typeof index !== "number") {
        throw new Error("getFunction only supported for number index");
      }

      return this.funcs[index];
    }
  }, {
    key: "getFunctionOffsetByIdentifier",
    value: function getFunctionOffsetByIdentifier(name) {
      if (!(typeof name === "string")) {
        throw new Error('typeof name === "string"' + " error: " + (undefined || "unknown"));
      }

      return this.funcsOffsetByIdentifier[name];
    }
    /**
     * Labels
     */

  }, {
    key: "addLabel",
    value: function addLabel(result) {
      this.labels.unshift(result);
    }
  }, {
    key: "hasLabel",
    value: function hasLabel(index) {
      return this.labels.length > index && index >= 0;
    }
  }, {
    key: "getLabel",
    value: function getLabel(index) {
      return this.labels[index];
    }
  }, {
    key: "popLabel",
    value: function popLabel() {
      this.labels.shift();
    }
    /**
     * Locals
     */

  }, {
    key: "hasLocal",
    value: function hasLocal(index) {
      return typeof this.getLocal(index) !== "undefined";
    }
  }, {
    key: "getLocal",
    value: function getLocal(index) {
      return this.locals[index];
    }
  }, {
    key: "addLocal",
    value: function addLocal(type) {
      this.locals.push(type);
    }
    /**
     * Types
     */

  }, {
    key: "addType",
    value: function addType(type) {
      if (!(type.functype.type === "Signature")) {
        throw new Error('type.functype.type === "Signature"' + " error: " + (undefined || "unknown"));
      }

      this.types.push(type.functype);
    }
  }, {
    key: "hasType",
    value: function hasType(index) {
      return this.types[index] !== undefined;
    }
  }, {
    key: "getType",
    value: function getType(index) {
      return this.types[index];
    }
    /**
     * Globals
     */

  }, {
    key: "hasGlobal",
    value: function hasGlobal(index) {
      return this.globals.length > index && index >= 0;
    }
  }, {
    key: "getGlobal",
    value: function getGlobal(index) {
      return this.globals[index].type;
    }
  }, {
    key: "getGlobalOffsetByIdentifier",
    value: function getGlobalOffsetByIdentifier(name) {
      if (!(typeof name === "string")) {
        throw new Error('typeof name === "string"' + " error: " + (undefined || "unknown"));
      }

      return this.globalsOffsetByIdentifier[name];
    }
  }, {
    key: "defineGlobal",
    value: function defineGlobal(global
    /*: Global*/
    ) {
      var type = global.globalType.valtype;
      var mutability = global.globalType.mutability;
      this.globals.push({
        type: type,
        mutability: mutability
      });

      if (typeof global.name !== "undefined") {
        this.globalsOffsetByIdentifier[global.name.value] = this.globals.length - 1;
      }
    }
  }, {
    key: "importGlobal",
    value: function importGlobal(type, mutability) {
      this.globals.push({
        type: type,
        mutability: mutability
      });
    }
  }, {
    key: "isMutableGlobal",
    value: function isMutableGlobal(index) {
      return this.globals[index].mutability === "var";
    }
  }, {
    key: "isImmutableGlobal",
    value: function isImmutableGlobal(index) {
      return this.globals[index].mutability === "const";
    }
    /**
     * Memories
     */

  }, {
    key: "hasMemory",
    value: function hasMemory(index) {
      return this.mems.length > index && index >= 0;
    }
  }, {
    key: "addMemory",
    value: function addMemory(min, max) {
      this.mems.push({
        min: min,
        max: max
      });
    }
  }, {
    key: "getMemory",
    value: function getMemory(index) {
      return this.mems[index];
    }
  }]);

  return ModuleContext;
}();

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/traverse.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/traverse.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverse": () => (/* binding */ traverse)
/* harmony export */ });
/* harmony import */ var _node_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-path */ "./node_modules/@webassemblyjs/ast/esm/node-path.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodes */ "./node_modules/@webassemblyjs/ast/esm/nodes.js");

 // recursively walks the AST starting at the given node. The callback is invoked for
// and object that has a 'type' property.

function walk(context, callback) {
  var stop = false;

  function innerWalk(context, callback) {
    if (stop) {
      return;
    }

    var node = context.node;

    if (node === undefined) {
      console.warn("traversing with an empty context");
      return;
    }

    if (node._deleted === true) {
      return;
    }

    var path = (0,_node_path__WEBPACK_IMPORTED_MODULE_0__.createPath)(context);
    callback(node.type, path);

    if (path.shouldStop) {
      stop = true;
      return;
    }

    Object.keys(node).forEach(function (prop) {
      var value = node[prop];

      if (value === null || value === undefined) {
        return;
      }

      var valueAsArray = Array.isArray(value) ? value : [value];
      valueAsArray.forEach(function (childNode) {
        if (typeof childNode.type === "string") {
          var childContext = {
            node: childNode,
            parentKey: prop,
            parentPath: path,
            shouldStop: false,
            inList: Array.isArray(value)
          };
          innerWalk(childContext, callback);
        }
      });
    });
  }

  innerWalk(context, callback);
}

var noop = function noop() {};

function traverse(node, visitors) {
  var before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
  var after = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  Object.keys(visitors).forEach(function (visitor) {
    if (!_nodes__WEBPACK_IMPORTED_MODULE_1__.nodeAndUnionTypes.includes(visitor)) {
      throw new Error("Unexpected visitor ".concat(visitor));
    }
  });
  var context = {
    node: node,
    inList: false,
    shouldStop: false,
    parentPath: null,
    parentKey: null
  };
  walk(context, function (type, path) {
    if (typeof visitors[type] === "function") {
      before(type, path);
      visitors[type](path);
      after(type, path);
    }

    var unionTypes = _nodes__WEBPACK_IMPORTED_MODULE_1__.unionTypesMap[type];

    if (!unionTypes) {
      throw new Error("Unexpected node type ".concat(type));
    }

    unionTypes.forEach(function (unionType) {
      if (typeof visitors[unionType] === "function") {
        before(unionType, path);
        visitors[unionType](path);
        after(unionType, path);
      }
    });
  });
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/esm/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/esm/utils.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAnonymous": () => (/* binding */ isAnonymous),
/* harmony export */   "getSectionMetadata": () => (/* binding */ getSectionMetadata),
/* harmony export */   "getSectionMetadatas": () => (/* binding */ getSectionMetadatas),
/* harmony export */   "sortSectionMetadata": () => (/* binding */ sortSectionMetadata),
/* harmony export */   "orderedInsertNode": () => (/* binding */ orderedInsertNode),
/* harmony export */   "assertHasLoc": () => (/* binding */ assertHasLoc),
/* harmony export */   "getEndOfSection": () => (/* binding */ getEndOfSection),
/* harmony export */   "shiftLoc": () => (/* binding */ shiftLoc),
/* harmony export */   "shiftSection": () => (/* binding */ shiftSection),
/* harmony export */   "signatureForOpcode": () => (/* binding */ signatureForOpcode),
/* harmony export */   "getUniqueNameGenerator": () => (/* binding */ getUniqueNameGenerator),
/* harmony export */   "getStartByteOffset": () => (/* binding */ getStartByteOffset),
/* harmony export */   "getEndByteOffset": () => (/* binding */ getEndByteOffset),
/* harmony export */   "getFunctionBeginingByteOffset": () => (/* binding */ getFunctionBeginingByteOffset),
/* harmony export */   "getEndBlockByteOffset": () => (/* binding */ getEndBlockByteOffset),
/* harmony export */   "getStartBlockByteOffset": () => (/* binding */ getStartBlockByteOffset)
/* harmony export */ });
/* harmony import */ var _signatures__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signatures */ "./node_modules/@webassemblyjs/ast/esm/signatures.js");
/* harmony import */ var _traverse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traverse */ "./node_modules/@webassemblyjs/ast/esm/traverse.js");
/* harmony import */ var _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js");
function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





function isAnonymous(ident) {
  return ident.raw === "";
}
function getSectionMetadata(ast, name) {
  var section;
  (0,_traverse__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, {
    SectionMetadata: function (_SectionMetadata) {
      function SectionMetadata(_x) {
        return _SectionMetadata.apply(this, arguments);
      }

      SectionMetadata.toString = function () {
        return _SectionMetadata.toString();
      };

      return SectionMetadata;
    }(function (_ref) {
      var node = _ref.node;

      if (node.section === name) {
        section = node;
      }
    })
  });
  return section;
}
function getSectionMetadatas(ast, name) {
  var sections = [];
  (0,_traverse__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, {
    SectionMetadata: function (_SectionMetadata2) {
      function SectionMetadata(_x2) {
        return _SectionMetadata2.apply(this, arguments);
      }

      SectionMetadata.toString = function () {
        return _SectionMetadata2.toString();
      };

      return SectionMetadata;
    }(function (_ref2) {
      var node = _ref2.node;

      if (node.section === name) {
        sections.push(node);
      }
    })
  });
  return sections;
}
function sortSectionMetadata(m) {
  if (m.metadata == null) {
    console.warn("sortSectionMetadata: no metadata to sort");
    return;
  } // $FlowIgnore


  m.metadata.sections.sort(function (a, b) {
    var aId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__.default.sections[a.section];
    var bId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__.default.sections[b.section];

    if (typeof aId !== "number" || typeof bId !== "number") {
      throw new Error("Section id not found");
    }

    return aId - bId;
  });
}
function orderedInsertNode(m, n) {
  assertHasLoc(n);
  var didInsert = false;

  if (n.type === "ModuleExport") {
    m.fields.push(n);
    return;
  }

  m.fields = m.fields.reduce(function (acc, field) {
    var fieldEndCol = Infinity;

    if (field.loc != null) {
      // $FlowIgnore
      fieldEndCol = field.loc.end.column;
    } // $FlowIgnore: assertHasLoc ensures that


    if (didInsert === false && n.loc.start.column < fieldEndCol) {
      didInsert = true;
      acc.push(n);
    }

    acc.push(field);
    return acc;
  }, []); // Handles empty modules or n is the last element

  if (didInsert === false) {
    m.fields.push(n);
  }
}
function assertHasLoc(n) {
  if (n.loc == null || n.loc.start == null || n.loc.end == null) {
    throw new Error("Internal failure: node (".concat(JSON.stringify(n.type), ") has no location information"));
  }
}
function getEndOfSection(s) {
  assertHasLoc(s.size);
  return s.startOffset + s.size.value + ( // $FlowIgnore
  s.size.loc.end.column - s.size.loc.start.column);
}
function shiftLoc(node, delta) {
  // $FlowIgnore
  node.loc.start.column += delta; // $FlowIgnore

  node.loc.end.column += delta;
}
function shiftSection(ast, node, delta) {
  if (node.type !== "SectionMetadata") {
    throw new Error("Can not shift node " + JSON.stringify(node.type));
  }

  node.startOffset += delta;

  if (_typeof(node.size.loc) === "object") {
    shiftLoc(node.size, delta);
  } // Custom sections doesn't have vectorOfSize


  if (_typeof(node.vectorOfSize) === "object" && _typeof(node.vectorOfSize.loc) === "object") {
    shiftLoc(node.vectorOfSize, delta);
  }

  var sectionName = node.section; // shift node locations within that section

  (0,_traverse__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, {
    Node: function Node(_ref3) {
      var node = _ref3.node;
      var section = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__.getSectionForNode)(node);

      if (section === sectionName && _typeof(node.loc) === "object") {
        shiftLoc(node, delta);
      }
    }
  });
}
function signatureForOpcode(object, name) {
  var opcodeName = name;

  if (object !== undefined && object !== "") {
    opcodeName = object + "." + name;
  }

  var sign = _signatures__WEBPACK_IMPORTED_MODULE_0__.signatures[opcodeName];

  if (sign == undefined) {
    // TODO: Uncomment this when br_table and others has been done
    //throw new Error("Invalid opcode: "+opcodeName);
    return [object, object];
  }

  return sign[0];
}
function getUniqueNameGenerator() {
  var inc = {};
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "temp";

    if (!(prefix in inc)) {
      inc[prefix] = 0;
    } else {
      inc[prefix] = inc[prefix] + 1;
    }

    return prefix + "_" + inc[prefix];
  };
}
function getStartByteOffset(n) {
  // $FlowIgnore
  if (typeof n.loc === "undefined" || typeof n.loc.start === "undefined") {
    throw new Error( // $FlowIgnore
    "Can not get byte offset without loc informations, node: " + String(n.id));
  }

  return n.loc.start.column;
}
function getEndByteOffset(n) {
  // $FlowIgnore
  if (typeof n.loc === "undefined" || typeof n.loc.end === "undefined") {
    throw new Error("Can not get byte offset without loc informations, node: " + n.type);
  }

  return n.loc.end.column;
}
function getFunctionBeginingByteOffset(n) {
  if (!(n.body.length > 0)) {
    throw new Error('n.body.length > 0' + " error: " + (undefined || "unknown"));
  }

  var _n$body = _slicedToArray(n.body, 1),
      firstInstruction = _n$body[0];

  return getStartByteOffset(firstInstruction);
}
function getEndBlockByteOffset(n) {
  // $FlowIgnore
  if (!(n.instr.length > 0 || n.body.length > 0)) {
    throw new Error('n.instr.length > 0 || n.body.length > 0' + " error: " + (undefined || "unknown"));
  }

  var lastInstruction;

  if (n.instr) {
    // $FlowIgnore
    lastInstruction = n.instr[n.instr.length - 1];
  }

  if (n.body) {
    // $FlowIgnore
    lastInstruction = n.body[n.body.length - 1];
  }

  if (!(_typeof(lastInstruction) === "object")) {
    throw new Error('typeof lastInstruction === "object"' + " error: " + (undefined || "unknown"));
  }

  // $FlowIgnore
  return getStartByteOffset(lastInstruction);
}
function getStartBlockByteOffset(n) {
  // $FlowIgnore
  if (!(n.instr.length > 0 || n.body.length > 0)) {
    throw new Error('n.instr.length > 0 || n.body.length > 0' + " error: " + (undefined || "unknown"));
  }

  var fistInstruction;

  if (n.instr) {
    // $FlowIgnore
    var _n$instr = _slicedToArray(n.instr, 1);

    fistInstruction = _n$instr[0];
  }

  if (n.body) {
    // $FlowIgnore
    var _n$body2 = _slicedToArray(n.body, 1);

    fistInstruction = _n$body2[0];
  }

  if (!(_typeof(fistInstruction) === "object")) {
    throw new Error('typeof fistInstruction === "object"' + " error: " + (undefined || "unknown"));
  }

  // $FlowIgnore
  return getStartByteOffset(fistInstruction);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ast/lib/clone.js":
/*!******************************************************!*\
  !*** ./node_modules/@webassemblyjs/ast/lib/clone.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.cloneNode = cloneNode;

function cloneNode(n) {
  return Object.assign({}, n);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/floating-point-hex-parser/esm/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@webassemblyjs/floating-point-hex-parser/esm/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parse)
/* harmony export */ });
function parse(input) {
  input = input.toUpperCase();
  var splitIndex = input.indexOf("P");
  var mantissa, exponent;

  if (splitIndex !== -1) {
    mantissa = input.substring(0, splitIndex);
    exponent = parseInt(input.substring(splitIndex + 1));
  } else {
    mantissa = input;
    exponent = 0;
  }

  var dotIndex = mantissa.indexOf(".");

  if (dotIndex !== -1) {
    var integerPart = parseInt(mantissa.substring(0, dotIndex), 16);
    var sign = Math.sign(integerPart);
    integerPart = sign * integerPart;
    var fractionLength = mantissa.length - dotIndex - 1;
    var fractionalPart = parseInt(mantissa.substring(dotIndex + 1), 16);
    var fraction = fractionLength > 0 ? fractionalPart / Math.pow(16, fractionLength) : 0;

    if (sign === 0) {
      if (fraction === 0) {
        mantissa = sign;
      } else {
        if (Object.is(sign, -0)) {
          mantissa = -fraction;
        } else {
          mantissa = fraction;
        }
      }
    } else {
      mantissa = sign * (integerPart + fraction);
    }
  } else {
    mantissa = parseInt(mantissa, 16);
  }

  return mantissa * (splitIndex !== -1 ? Math.pow(2, exponent) : 1);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-api-error/esm/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-api-error/esm/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuntimeError": () => (/* binding */ RuntimeError),
/* harmony export */   "CompileError": () => (/* binding */ CompileError),
/* harmony export */   "LinkError": () => (/* binding */ LinkError)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RuntimeError =
/*#__PURE__*/
function (_Error) {
  _inherits(RuntimeError, _Error);

  function RuntimeError() {
    _classCallCheck(this, RuntimeError);

    return _possibleConstructorReturn(this, (RuntimeError.__proto__ || Object.getPrototypeOf(RuntimeError)).apply(this, arguments));
  }

  return RuntimeError;
}(Error);
var CompileError =
/*#__PURE__*/
function (_Error2) {
  _inherits(CompileError, _Error2);

  function CompileError() {
    _classCallCheck(this, CompileError);

    return _possibleConstructorReturn(this, (CompileError.__proto__ || Object.getPrototypeOf(CompileError)).apply(this, arguments));
  }

  return CompileError;
}(Error);
var LinkError =
/*#__PURE__*/
function (_Error3) {
  _inherits(LinkError, _Error3);

  function LinkError() {
    _classCallCheck(this, LinkError);

    return _possibleConstructorReturn(this, (LinkError.__proto__ || Object.getPrototypeOf(LinkError)).apply(this, arguments));
  }

  return LinkError;
}(Error);

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-buffer/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-buffer/esm/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overrideBytesInBuffer": () => (/* binding */ overrideBytesInBuffer),
/* harmony export */   "makeBuffer": () => (/* binding */ makeBuffer),
/* harmony export */   "fromHexdump": () => (/* binding */ fromHexdump)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function concatUint8Arrays() {
  for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  var totalLength = arrays.reduce(function (a, b) {
    return a + b.length;
  }, 0);
  var result = new Uint8Array(totalLength);
  var offset = 0;

  for (var _i = 0; _i < arrays.length; _i++) {
    var arr = arrays[_i];

    if (arr instanceof Uint8Array === false) {
      throw new Error("arr must be of type Uint8Array");
    }

    result.set(arr, offset);
    offset += arr.length;
  }

  return result;
}

function overrideBytesInBuffer(buffer, startLoc, endLoc, newBytes) {
  var beforeBytes = buffer.slice(0, startLoc);
  var afterBytes = buffer.slice(endLoc, buffer.length); // replacement is empty, we can omit it

  if (newBytes.length === 0) {
    return concatUint8Arrays(beforeBytes, afterBytes);
  }

  var replacement = Uint8Array.from(newBytes);
  return concatUint8Arrays(beforeBytes, replacement, afterBytes);
}
function makeBuffer() {
  for (var _len2 = arguments.length, splitedBytes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    splitedBytes[_key2] = arguments[_key2];
  }

  var bytes = [].concat.apply([], splitedBytes);
  return new Uint8Array(bytes).buffer;
}
function fromHexdump(str) {
  var lines = str.split("\n"); // remove any leading left whitespace

  lines = lines.map(function (line) {
    return line.trim();
  });
  var bytes = lines.reduce(function (acc, line) {
    var cols = line.split(" "); // remove the offset, left column

    cols.shift();
    cols = cols.filter(function (x) {
      return x !== "";
    });
    var bytes = cols.map(function (x) {
      return parseInt(x, 16);
    });
    acc.push.apply(acc, _toConsumableArray(bytes));
    return acc;
  }, []);
  return Buffer.from(bytes);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-numbers/esm/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-numbers/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parse32F": () => (/* binding */ parse32F),
/* harmony export */   "parse64F": () => (/* binding */ parse64F),
/* harmony export */   "parse32I": () => (/* binding */ parse32I),
/* harmony export */   "parseU32": () => (/* binding */ parseU32),
/* harmony export */   "parse64I": () => (/* binding */ parse64I),
/* harmony export */   "isInfLiteral": () => (/* binding */ isInfLiteral),
/* harmony export */   "isNanLiteral": () => (/* binding */ isNanLiteral)
/* harmony export */ });
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xtuc/long */ "./node_modules/@xtuc/long/src/long.js");
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xtuc_long__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/floating-point-hex-parser */ "./node_modules/@webassemblyjs/floating-point-hex-parser/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/helper-api-error */ "./node_modules/@webassemblyjs/helper-api-error/esm/index.js");



function parse32F(sourceString) {
  if (isHexLiteral(sourceString)) {
    return (0,_webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__.default)(sourceString);
  }

  if (isInfLiteral(sourceString)) {
    return sourceString[0] === "-" ? -1 : 1;
  }

  if (isNanLiteral(sourceString)) {
    return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 0x400000);
  }

  return parseFloat(sourceString);
}
function parse64F(sourceString) {
  if (isHexLiteral(sourceString)) {
    return (0,_webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__.default)(sourceString);
  }

  if (isInfLiteral(sourceString)) {
    return sourceString[0] === "-" ? -1 : 1;
  }

  if (isNanLiteral(sourceString)) {
    return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 0x8000000000000);
  }

  if (isHexLiteral(sourceString)) {
    return (0,_webassemblyjs_floating_point_hex_parser__WEBPACK_IMPORTED_MODULE_1__.default)(sourceString);
  }

  return parseFloat(sourceString);
}
function parse32I(sourceString) {
  var value = 0;

  if (isHexLiteral(sourceString)) {
    value = ~~parseInt(sourceString, 16);
  } else if (isDecimalExponentLiteral(sourceString)) {
    throw new Error("This number literal format is yet to be implemented.");
  } else {
    value = parseInt(sourceString, 10);
  }

  return value;
}
function parseU32(sourceString) {
  var value = parse32I(sourceString);

  if (value < 0) {
    throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_2__.CompileError("Illegal value for u32: " + sourceString);
  }

  return value;
}
function parse64I(sourceString) {
  var long;

  if (isHexLiteral(sourceString)) {
    long = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromString(sourceString, false, 16);
  } else if (isDecimalExponentLiteral(sourceString)) {
    throw new Error("This number literal format is yet to be implemented.");
  } else {
    long = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromString(sourceString);
  }

  return {
    high: long.high,
    low: long.low
  };
}
var NAN_WORD = /^\+?-?nan/;
var INF_WORD = /^\+?-?inf/;
function isInfLiteral(sourceString) {
  return INF_WORD.test(sourceString.toLowerCase());
}
function isNanLiteral(sourceString) {
  return NAN_WORD.test(sourceString.toLowerCase());
}

function isDecimalExponentLiteral(sourceString) {
  return !isHexLiteral(sourceString) && sourceString.toUpperCase().includes("E");
}

function isHexLiteral(sourceString) {
  return sourceString.substring(0, 2).toUpperCase() === "0X" || sourceString.substring(0, 3).toUpperCase() === "-0X";
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getSectionForNode": () => (/* reexport safe */ _section__WEBPACK_IMPORTED_MODULE_0__.getSectionForNode)
/* harmony export */ });
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/section.js");
var illegalop = "illegal";
var magicModuleHeader = [0x00, 0x61, 0x73, 0x6d];
var moduleVersion = [0x01, 0x00, 0x00, 0x00];

function invertMap(obj) {
  var keyModifierFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (k) {
    return k;
  };
  var result = {};
  var keys = Object.keys(obj);

  for (var i = 0, length = keys.length; i < length; i++) {
    result[keyModifierFn(obj[keys[i]])] = keys[i];
  }

  return result;
}

function createSymbolObject(name
/*: string */
, object
/*: string */
)
/*: Symbol*/
{
  var numberOfArgs
  /*: number*/
  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return {
    name: name,
    object: object,
    numberOfArgs: numberOfArgs
  };
}

function createSymbol(name
/*: string */
)
/*: Symbol*/
{
  var numberOfArgs
  /*: number*/
  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    name: name,
    numberOfArgs: numberOfArgs
  };
}

var types = {
  func: 0x60,
  result: 0x40
};
var exportTypes = {
  0x00: "Func",
  0x01: "Table",
  0x02: "Mem",
  0x03: "Global"
};
var exportTypesByName = invertMap(exportTypes);
var valtypes = {
  0x7f: "i32",
  0x7e: "i64",
  0x7d: "f32",
  0x7c: "f64",
  0x7b: "v128"
};
var valtypesByString = invertMap(valtypes);
var tableTypes = {
  0x70: "anyfunc"
};
var blockTypes = Object.assign({}, valtypes, {
  // https://webassembly.github.io/spec/core/binary/types.html#binary-blocktype
  0x40: null,
  // https://webassembly.github.io/spec/core/binary/types.html#binary-valtype
  0x7f: "i32",
  0x7e: "i64",
  0x7d: "f32",
  0x7c: "f64"
});
var globalTypes = {
  0x00: "const",
  0x01: "var"
};
var globalTypesByString = invertMap(globalTypes);
var importTypes = {
  0x00: "func",
  0x01: "table",
  0x02: "mem",
  0x03: "global"
};
var sections = {
  custom: 0,
  type: 1,
  import: 2,
  func: 3,
  table: 4,
  memory: 5,
  global: 6,
  export: 7,
  start: 8,
  element: 9,
  code: 10,
  data: 11
};
var symbolsByByte = {
  0x00: createSymbol("unreachable"),
  0x01: createSymbol("nop"),
  0x02: createSymbol("block"),
  0x03: createSymbol("loop"),
  0x04: createSymbol("if"),
  0x05: createSymbol("else"),
  0x06: illegalop,
  0x07: illegalop,
  0x08: illegalop,
  0x09: illegalop,
  0x0a: illegalop,
  0x0b: createSymbol("end"),
  0x0c: createSymbol("br", 1),
  0x0d: createSymbol("br_if", 1),
  0x0e: createSymbol("br_table"),
  0x0f: createSymbol("return"),
  0x10: createSymbol("call", 1),
  0x11: createSymbol("call_indirect", 2),
  0x12: illegalop,
  0x13: illegalop,
  0x14: illegalop,
  0x15: illegalop,
  0x16: illegalop,
  0x17: illegalop,
  0x18: illegalop,
  0x19: illegalop,
  0x1a: createSymbol("drop"),
  0x1b: createSymbol("select"),
  0x1c: illegalop,
  0x1d: illegalop,
  0x1e: illegalop,
  0x1f: illegalop,
  0x20: createSymbol("get_local", 1),
  0x21: createSymbol("set_local", 1),
  0x22: createSymbol("tee_local", 1),
  0x23: createSymbol("get_global", 1),
  0x24: createSymbol("set_global", 1),
  0x25: illegalop,
  0x26: illegalop,
  0x27: illegalop,
  0x28: createSymbolObject("load", "u32", 1),
  0x29: createSymbolObject("load", "u64", 1),
  0x2a: createSymbolObject("load", "f32", 1),
  0x2b: createSymbolObject("load", "f64", 1),
  0x2c: createSymbolObject("load8_s", "u32", 1),
  0x2d: createSymbolObject("load8_u", "u32", 1),
  0x2e: createSymbolObject("load16_s", "u32", 1),
  0x2f: createSymbolObject("load16_u", "u32", 1),
  0x30: createSymbolObject("load8_s", "u64", 1),
  0x31: createSymbolObject("load8_u", "u64", 1),
  0x32: createSymbolObject("load16_s", "u64", 1),
  0x33: createSymbolObject("load16_u", "u64", 1),
  0x34: createSymbolObject("load32_s", "u64", 1),
  0x35: createSymbolObject("load32_u", "u64", 1),
  0x36: createSymbolObject("store", "u32", 1),
  0x37: createSymbolObject("store", "u64", 1),
  0x38: createSymbolObject("store", "f32", 1),
  0x39: createSymbolObject("store", "f64", 1),
  0x3a: createSymbolObject("store8", "u32", 1),
  0x3b: createSymbolObject("store16", "u32", 1),
  0x3c: createSymbolObject("store8", "u64", 1),
  0x3d: createSymbolObject("store16", "u64", 1),
  0x3e: createSymbolObject("store32", "u64", 1),
  0x3f: createSymbolObject("current_memory"),
  0x40: createSymbolObject("grow_memory"),
  0x41: createSymbolObject("const", "i32", 1),
  0x42: createSymbolObject("const", "i64", 1),
  0x43: createSymbolObject("const", "f32", 1),
  0x44: createSymbolObject("const", "f64", 1),
  0x45: createSymbolObject("eqz", "i32"),
  0x46: createSymbolObject("eq", "i32"),
  0x47: createSymbolObject("ne", "i32"),
  0x48: createSymbolObject("lt_s", "i32"),
  0x49: createSymbolObject("lt_u", "i32"),
  0x4a: createSymbolObject("gt_s", "i32"),
  0x4b: createSymbolObject("gt_u", "i32"),
  0x4c: createSymbolObject("le_s", "i32"),
  0x4d: createSymbolObject("le_u", "i32"),
  0x4e: createSymbolObject("ge_s", "i32"),
  0x4f: createSymbolObject("ge_u", "i32"),
  0x50: createSymbolObject("eqz", "i64"),
  0x51: createSymbolObject("eq", "i64"),
  0x52: createSymbolObject("ne", "i64"),
  0x53: createSymbolObject("lt_s", "i64"),
  0x54: createSymbolObject("lt_u", "i64"),
  0x55: createSymbolObject("gt_s", "i64"),
  0x56: createSymbolObject("gt_u", "i64"),
  0x57: createSymbolObject("le_s", "i64"),
  0x58: createSymbolObject("le_u", "i64"),
  0x59: createSymbolObject("ge_s", "i64"),
  0x5a: createSymbolObject("ge_u", "i64"),
  0x5b: createSymbolObject("eq", "f32"),
  0x5c: createSymbolObject("ne", "f32"),
  0x5d: createSymbolObject("lt", "f32"),
  0x5e: createSymbolObject("gt", "f32"),
  0x5f: createSymbolObject("le", "f32"),
  0x60: createSymbolObject("ge", "f32"),
  0x61: createSymbolObject("eq", "f64"),
  0x62: createSymbolObject("ne", "f64"),
  0x63: createSymbolObject("lt", "f64"),
  0x64: createSymbolObject("gt", "f64"),
  0x65: createSymbolObject("le", "f64"),
  0x66: createSymbolObject("ge", "f64"),
  0x67: createSymbolObject("clz", "i32"),
  0x68: createSymbolObject("ctz", "i32"),
  0x69: createSymbolObject("popcnt", "i32"),
  0x6a: createSymbolObject("add", "i32"),
  0x6b: createSymbolObject("sub", "i32"),
  0x6c: createSymbolObject("mul", "i32"),
  0x6d: createSymbolObject("div_s", "i32"),
  0x6e: createSymbolObject("div_u", "i32"),
  0x6f: createSymbolObject("rem_s", "i32"),
  0x70: createSymbolObject("rem_u", "i32"),
  0x71: createSymbolObject("and", "i32"),
  0x72: createSymbolObject("or", "i32"),
  0x73: createSymbolObject("xor", "i32"),
  0x74: createSymbolObject("shl", "i32"),
  0x75: createSymbolObject("shr_s", "i32"),
  0x76: createSymbolObject("shr_u", "i32"),
  0x77: createSymbolObject("rotl", "i32"),
  0x78: createSymbolObject("rotr", "i32"),
  0x79: createSymbolObject("clz", "i64"),
  0x7a: createSymbolObject("ctz", "i64"),
  0x7b: createSymbolObject("popcnt", "i64"),
  0x7c: createSymbolObject("add", "i64"),
  0x7d: createSymbolObject("sub", "i64"),
  0x7e: createSymbolObject("mul", "i64"),
  0x7f: createSymbolObject("div_s", "i64"),
  0x80: createSymbolObject("div_u", "i64"),
  0x81: createSymbolObject("rem_s", "i64"),
  0x82: createSymbolObject("rem_u", "i64"),
  0x83: createSymbolObject("and", "i64"),
  0x84: createSymbolObject("or", "i64"),
  0x85: createSymbolObject("xor", "i64"),
  0x86: createSymbolObject("shl", "i64"),
  0x87: createSymbolObject("shr_s", "i64"),
  0x88: createSymbolObject("shr_u", "i64"),
  0x89: createSymbolObject("rotl", "i64"),
  0x8a: createSymbolObject("rotr", "i64"),
  0x8b: createSymbolObject("abs", "f32"),
  0x8c: createSymbolObject("neg", "f32"),
  0x8d: createSymbolObject("ceil", "f32"),
  0x8e: createSymbolObject("floor", "f32"),
  0x8f: createSymbolObject("trunc", "f32"),
  0x90: createSymbolObject("nearest", "f32"),
  0x91: createSymbolObject("sqrt", "f32"),
  0x92: createSymbolObject("add", "f32"),
  0x93: createSymbolObject("sub", "f32"),
  0x94: createSymbolObject("mul", "f32"),
  0x95: createSymbolObject("div", "f32"),
  0x96: createSymbolObject("min", "f32"),
  0x97: createSymbolObject("max", "f32"),
  0x98: createSymbolObject("copysign", "f32"),
  0x99: createSymbolObject("abs", "f64"),
  0x9a: createSymbolObject("neg", "f64"),
  0x9b: createSymbolObject("ceil", "f64"),
  0x9c: createSymbolObject("floor", "f64"),
  0x9d: createSymbolObject("trunc", "f64"),
  0x9e: createSymbolObject("nearest", "f64"),
  0x9f: createSymbolObject("sqrt", "f64"),
  0xa0: createSymbolObject("add", "f64"),
  0xa1: createSymbolObject("sub", "f64"),
  0xa2: createSymbolObject("mul", "f64"),
  0xa3: createSymbolObject("div", "f64"),
  0xa4: createSymbolObject("min", "f64"),
  0xa5: createSymbolObject("max", "f64"),
  0xa6: createSymbolObject("copysign", "f64"),
  0xa7: createSymbolObject("wrap/i64", "i32"),
  0xa8: createSymbolObject("trunc_s/f32", "i32"),
  0xa9: createSymbolObject("trunc_u/f32", "i32"),
  0xaa: createSymbolObject("trunc_s/f64", "i32"),
  0xab: createSymbolObject("trunc_u/f64", "i32"),
  0xac: createSymbolObject("extend_s/i32", "i64"),
  0xad: createSymbolObject("extend_u/i32", "i64"),
  0xae: createSymbolObject("trunc_s/f32", "i64"),
  0xaf: createSymbolObject("trunc_u/f32", "i64"),
  0xb0: createSymbolObject("trunc_s/f64", "i64"),
  0xb1: createSymbolObject("trunc_u/f64", "i64"),
  0xb2: createSymbolObject("convert_s/i32", "f32"),
  0xb3: createSymbolObject("convert_u/i32", "f32"),
  0xb4: createSymbolObject("convert_s/i64", "f32"),
  0xb5: createSymbolObject("convert_u/i64", "f32"),
  0xb6: createSymbolObject("demote/f64", "f32"),
  0xb7: createSymbolObject("convert_s/i32", "f64"),
  0xb8: createSymbolObject("convert_u/i32", "f64"),
  0xb9: createSymbolObject("convert_s/i64", "f64"),
  0xba: createSymbolObject("convert_u/i64", "f64"),
  0xbb: createSymbolObject("promote/f32", "f64"),
  0xbc: createSymbolObject("reinterpret/f32", "i32"),
  0xbd: createSymbolObject("reinterpret/f64", "i64"),
  0xbe: createSymbolObject("reinterpret/i32", "f32"),
  0xbf: createSymbolObject("reinterpret/i64", "f64"),
  // Atomic Memory Instructions
  0xfe00: createSymbol("memory.atomic.notify", 1),
  0xfe01: createSymbol("memory.atomic.wait32", 1),
  0xfe02: createSymbol("memory.atomic.wait64", 1),
  0xfe10: createSymbolObject("atomic.load", "i32", 1),
  0xfe11: createSymbolObject("atomic.load", "i64", 1),
  0xfe12: createSymbolObject("atomic.load8_u", "i32", 1),
  0xfe13: createSymbolObject("atomic.load16_u", "i32", 1),
  0xfe14: createSymbolObject("atomic.load8_u", "i64", 1),
  0xfe15: createSymbolObject("atomic.load16_u", "i64", 1),
  0xfe16: createSymbolObject("atomic.load32_u", "i64", 1),
  0xfe17: createSymbolObject("atomic.store", "i32", 1),
  0xfe18: createSymbolObject("atomic.store", "i64", 1),
  0xfe19: createSymbolObject("atomic.store8_u", "i32", 1),
  0xfe1a: createSymbolObject("atomic.store16_u", "i32", 1),
  0xfe1b: createSymbolObject("atomic.store8_u", "i64", 1),
  0xfe1c: createSymbolObject("atomic.store16_u", "i64", 1),
  0xfe1d: createSymbolObject("atomic.store32_u", "i64", 1),
  0xfe1e: createSymbolObject("atomic.rmw.add", "i32", 1),
  0xfe1f: createSymbolObject("atomic.rmw.add", "i64", 1),
  0xfe20: createSymbolObject("atomic.rmw8_u.add_u", "i32", 1),
  0xfe21: createSymbolObject("atomic.rmw16_u.add_u", "i32", 1),
  0xfe22: createSymbolObject("atomic.rmw8_u.add_u", "i64", 1),
  0xfe23: createSymbolObject("atomic.rmw16_u.add_u", "i64", 1),
  0xfe24: createSymbolObject("atomic.rmw32_u.add_u", "i64", 1),
  0xfe25: createSymbolObject("atomic.rmw.sub", "i32", 1),
  0xfe26: createSymbolObject("atomic.rmw.sub", "i64", 1),
  0xfe27: createSymbolObject("atomic.rmw8_u.sub_u", "i32", 1),
  0xfe28: createSymbolObject("atomic.rmw16_u.sub_u", "i32", 1),
  0xfe29: createSymbolObject("atomic.rmw8_u.sub_u", "i64", 1),
  0xfe2a: createSymbolObject("atomic.rmw16_u.sub_u", "i64", 1),
  0xfe2b: createSymbolObject("atomic.rmw32_u.sub_u", "i64", 1),
  0xfe2c: createSymbolObject("atomic.rmw.and", "i32", 1),
  0xfe2d: createSymbolObject("atomic.rmw.and", "i64", 1),
  0xfe2e: createSymbolObject("atomic.rmw8_u.and_u", "i32", 1),
  0xfe2f: createSymbolObject("atomic.rmw16_u.and_u", "i32", 1),
  0xfe30: createSymbolObject("atomic.rmw8_u.and_u", "i64", 1),
  0xfe31: createSymbolObject("atomic.rmw16_u.and_u", "i64", 1),
  0xfe32: createSymbolObject("atomic.rmw32_u.and_u", "i64", 1),
  0xfe33: createSymbolObject("atomic.rmw.or", "i32", 1),
  0xfe34: createSymbolObject("atomic.rmw.or", "i64", 1),
  0xfe35: createSymbolObject("atomic.rmw8_u.or_u", "i32", 1),
  0xfe36: createSymbolObject("atomic.rmw16_u.or_u", "i32", 1),
  0xfe37: createSymbolObject("atomic.rmw8_u.or_u", "i64", 1),
  0xfe38: createSymbolObject("atomic.rmw16_u.or_u", "i64", 1),
  0xfe39: createSymbolObject("atomic.rmw32_u.or_u", "i64", 1),
  0xfe3a: createSymbolObject("atomic.rmw.xor", "i32", 1),
  0xfe3b: createSymbolObject("atomic.rmw.xor", "i64", 1),
  0xfe3c: createSymbolObject("atomic.rmw8_u.xor_u", "i32", 1),
  0xfe3d: createSymbolObject("atomic.rmw16_u.xor_u", "i32", 1),
  0xfe3e: createSymbolObject("atomic.rmw8_u.xor_u", "i64", 1),
  0xfe3f: createSymbolObject("atomic.rmw16_u.xor_u", "i64", 1),
  0xfe40: createSymbolObject("atomic.rmw32_u.xor_u", "i64", 1),
  0xfe41: createSymbolObject("atomic.rmw.xchg", "i32", 1),
  0xfe42: createSymbolObject("atomic.rmw.xchg", "i64", 1),
  0xfe43: createSymbolObject("atomic.rmw8_u.xchg_u", "i32", 1),
  0xfe44: createSymbolObject("atomic.rmw16_u.xchg_u", "i32", 1),
  0xfe45: createSymbolObject("atomic.rmw8_u.xchg_u", "i64", 1),
  0xfe46: createSymbolObject("atomic.rmw16_u.xchg_u", "i64", 1),
  0xfe47: createSymbolObject("atomic.rmw32_u.xchg_u", "i64", 1),
  0xfe48: createSymbolObject("atomic.rmw.cmpxchg", "i32", 1),
  0xfe49: createSymbolObject("atomic.rmw.cmpxchg", "i64", 1),
  0xfe4a: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i32", 1),
  0xfe4b: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i32", 1),
  0xfe4c: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i64", 1),
  0xfe4d: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i64", 1),
  0xfe4e: createSymbolObject("atomic.rmw32_u.cmpxchg_u", "i64", 1)
};
var symbolsByName = invertMap(symbolsByByte, function (obj) {
  if (typeof obj.object === "string") {
    return "".concat(obj.object, ".").concat(obj.name);
  }

  return obj.name;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  symbolsByByte: symbolsByByte,
  sections: sections,
  magicModuleHeader: magicModuleHeader,
  moduleVersion: moduleVersion,
  types: types,
  valtypes: valtypes,
  exportTypes: exportTypes,
  blockTypes: blockTypes,
  tableTypes: tableTypes,
  globalTypes: globalTypes,
  importTypes: importTypes,
  valtypesByString: valtypesByString,
  globalTypesByString: globalTypesByString,
  exportTypesByName: exportTypesByName,
  symbolsByName: symbolsByName
});


/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/section.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/section.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSectionForNode": () => (/* binding */ getSectionForNode)
/* harmony export */ });
function getSectionForNode(n) {
  switch (n.type) {
    case "ModuleImport":
      return "import";

    case "CallInstruction":
    case "CallIndirectInstruction":
    case "Func":
    case "Instr":
      return "code";

    case "ModuleExport":
      return "export";

    case "Start":
      return "start";

    case "TypeInstruction":
      return "type";

    case "IndexInFuncSection":
      return "func";

    case "Global":
      return "global";
    // No section

    default:
      return;
  }
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-section/esm/create.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-section/esm/create.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEmptySection": () => (/* binding */ createEmptySection)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/wasm-gen */ "./node_modules/@webassemblyjs/wasm-gen/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/helper-buffer */ "./node_modules/@webassemblyjs/helper-buffer/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js");
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






function findLastSection(ast, forSection) {
  var targetSectionId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__.default.sections[forSection]; // $FlowIgnore: metadata can not be empty

  var moduleSections = ast.body[0].metadata.sections;
  var lastSection;
  var lastId = 0;

  for (var i = 0, len = moduleSections.length; i < len; i++) {
    var section = moduleSections[i]; // Ignore custom section since they can actually occur everywhere

    if (section.section === "custom") {
      continue;
    }

    var sectionId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_2__.default.sections[section.section];

    if (targetSectionId > lastId && targetSectionId < sectionId) {
      return lastSection;
    }

    lastId = sectionId;
    lastSection = section;
  }

  return lastSection;
}

function createEmptySection(ast, uint8Buffer, section) {
  // previous section after which we are going to insert our section
  var lastSection = findLastSection(ast, section);
  var start, end;
  /**
   * It's the first section
   */

  if (lastSection == null || lastSection.section === "custom") {
    start = 8
    /* wasm header size */
    ;
    end = start;
  } else {
    start = lastSection.startOffset + lastSection.size.value + 1;
    end = start;
  } // section id


  start += 1;
  var sizeStartLoc = {
    line: -1,
    column: start
  };
  var sizeEndLoc = {
    line: -1,
    column: start + 1
  }; // 1 byte for the empty vector

  var size = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(1), sizeEndLoc, sizeStartLoc);
  var vectorOfSizeStartLoc = {
    line: -1,
    column: sizeEndLoc.column
  };
  var vectorOfSizeEndLoc = {
    line: -1,
    column: sizeEndLoc.column + 1
  };
  var vectorOfSize = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(0), vectorOfSizeEndLoc, vectorOfSizeStartLoc);
  var sectionMetadata = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata(section, start, size, vectorOfSize);
  var sectionBytes = (0,_webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__.encodeNode)(sectionMetadata);
  uint8Buffer = (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_1__.overrideBytesInBuffer)(uint8Buffer, start - 1, end, sectionBytes); // Add section into the AST for later lookups

  if (_typeof(ast.body[0].metadata) === "object") {
    // $FlowIgnore: metadata can not be empty
    ast.body[0].metadata.sections.push(sectionMetadata);
    _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sortSectionMetadata(ast.body[0]);
  }
  /**
   * Update AST
   */
  // Once we hit our section every that is after needs to be shifted by the delta


  var deltaBytes = +sectionBytes.length;
  var encounteredSection = false;
  _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.traverse(ast, {
    SectionMetadata: function SectionMetadata(path) {
      if (path.node.section === section) {
        encounteredSection = true;
        return;
      }

      if (encounteredSection === true) {
        _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.shiftSection(ast, path.node, deltaBytes);
      }
    }
  });
  return {
    uint8Buffer: uint8Buffer,
    sectionMetadata: sectionMetadata
  };
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-section/esm/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-section/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resizeSectionByteSize": () => (/* reexport safe */ _resize__WEBPACK_IMPORTED_MODULE_0__.resizeSectionByteSize),
/* harmony export */   "resizeSectionVecSize": () => (/* reexport safe */ _resize__WEBPACK_IMPORTED_MODULE_0__.resizeSectionVecSize),
/* harmony export */   "createEmptySection": () => (/* reexport safe */ _create__WEBPACK_IMPORTED_MODULE_1__.createEmptySection),
/* harmony export */   "removeSections": () => (/* reexport safe */ _remove__WEBPACK_IMPORTED_MODULE_2__.removeSections)
/* harmony export */ });
/* harmony import */ var _resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize */ "./node_modules/@webassemblyjs/helper-wasm-section/esm/resize.js");
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ "./node_modules/@webassemblyjs/helper-wasm-section/esm/create.js");
/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ "./node_modules/@webassemblyjs/helper-wasm-section/esm/remove.js");




/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-section/esm/remove.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-section/esm/remove.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeSections": () => (/* binding */ removeSections)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/helper-buffer */ "./node_modules/@webassemblyjs/helper-buffer/esm/index.js");


function removeSections(ast, uint8Buffer, section) {
  var sectionMetadatas = (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__.getSectionMetadatas)(ast, section);

  if (sectionMetadatas.length === 0) {
    throw new Error("Section metadata not found");
  }

  return sectionMetadatas.reverse().reduce(function (uint8Buffer, sectionMetadata) {
    var startsIncludingId = sectionMetadata.startOffset - 1;
    var ends = section === "start" ? sectionMetadata.size.loc.end.column + 1 : sectionMetadata.startOffset + sectionMetadata.size.value + 1;
    var delta = -(ends - startsIncludingId);
    /**
     * update AST
     */
    // Once we hit our section every that is after needs to be shifted by the delta

    var encounteredSection = false;
    (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__.traverse)(ast, {
      SectionMetadata: function SectionMetadata(path) {
        if (path.node.section === section) {
          encounteredSection = true;
          return path.remove();
        }

        if (encounteredSection === true) {
          (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__.shiftSection)(ast, path.node, delta);
        }
      }
    }); // replacement is nothing

    var replacement = [];
    return (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_1__.overrideBytesInBuffer)(uint8Buffer, startsIncludingId, ends, replacement);
  }, uint8Buffer);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/helper-wasm-section/esm/resize.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@webassemblyjs/helper-wasm-section/esm/resize.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resizeSectionByteSize": () => (/* binding */ resizeSectionByteSize),
/* harmony export */   "resizeSectionVecSize": () => (/* binding */ resizeSectionVecSize)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/wasm-gen */ "./node_modules/@webassemblyjs/wasm-gen/esm/index.js");
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/helper-buffer */ "./node_modules/@webassemblyjs/helper-buffer/esm/index.js");



function resizeSectionByteSize(ast, uint8Buffer, section, deltaBytes) {
  var sectionMetadata = (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.getSectionMetadata)(ast, section);

  if (typeof sectionMetadata === "undefined") {
    throw new Error("Section metadata not found");
  }

  if (typeof sectionMetadata.size.loc === "undefined") {
    throw new Error("SectionMetadata " + section + " has no loc");
  } // keep old node location to be overriden


  var start = sectionMetadata.size.loc.start.column;
  var end = sectionMetadata.size.loc.end.column;
  var newSectionSize = sectionMetadata.size.value + deltaBytes;
  var newBytes = (0,_webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__.encodeU32)(newSectionSize);
  /**
   * update AST
   */

  sectionMetadata.size.value = newSectionSize;
  var oldu32EncodedLen = end - start;
  var newu32EncodedLen = newBytes.length; // the new u32 has a different encoded length

  if (newu32EncodedLen !== oldu32EncodedLen) {
    var deltaInSizeEncoding = newu32EncodedLen - oldu32EncodedLen;
    sectionMetadata.size.loc.end.column = start + newu32EncodedLen;
    deltaBytes += deltaInSizeEncoding; // move the vec size pointer size the section size is now smaller

    sectionMetadata.vectorOfSize.loc.start.column += deltaInSizeEncoding;
    sectionMetadata.vectorOfSize.loc.end.column += deltaInSizeEncoding;
  } // Once we hit our section every that is after needs to be shifted by the delta


  var encounteredSection = false;
  (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, {
    SectionMetadata: function SectionMetadata(path) {
      if (path.node.section === section) {
        encounteredSection = true;
        return;
      }

      if (encounteredSection === true) {
        (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.shiftSection)(ast, path.node, deltaBytes);
      }
    }
  });
  return (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_2__.overrideBytesInBuffer)(uint8Buffer, start, end, newBytes);
}
function resizeSectionVecSize(ast, uint8Buffer, section, deltaElements) {
  var sectionMetadata = (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.getSectionMetadata)(ast, section);

  if (typeof sectionMetadata === "undefined") {
    throw new Error("Section metadata not found");
  }

  if (typeof sectionMetadata.vectorOfSize.loc === "undefined") {
    throw new Error("SectionMetadata " + section + " has no loc");
  } // Section has no vector


  if (sectionMetadata.vectorOfSize.value === -1) {
    return uint8Buffer;
  } // keep old node location to be overriden


  var start = sectionMetadata.vectorOfSize.loc.start.column;
  var end = sectionMetadata.vectorOfSize.loc.end.column;
  var newValue = sectionMetadata.vectorOfSize.value + deltaElements;
  var newBytes = (0,_webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__.encodeU32)(newValue); // Update AST

  sectionMetadata.vectorOfSize.value = newValue;
  sectionMetadata.vectorOfSize.loc.end.column = start + newBytes.length;
  return (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_2__.overrideBytesInBuffer)(uint8Buffer, start, end, newBytes);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/ieee754/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@webassemblyjs/ieee754/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NUMBER_OF_BYTE_F32": () => (/* binding */ NUMBER_OF_BYTE_F32),
/* harmony export */   "NUMBER_OF_BYTE_F64": () => (/* binding */ NUMBER_OF_BYTE_F64),
/* harmony export */   "SINGLE_PRECISION_MANTISSA": () => (/* binding */ SINGLE_PRECISION_MANTISSA),
/* harmony export */   "DOUBLE_PRECISION_MANTISSA": () => (/* binding */ DOUBLE_PRECISION_MANTISSA),
/* harmony export */   "encodeF32": () => (/* binding */ encodeF32),
/* harmony export */   "encodeF64": () => (/* binding */ encodeF64),
/* harmony export */   "decodeF32": () => (/* binding */ decodeF32),
/* harmony export */   "decodeF64": () => (/* binding */ decodeF64)
/* harmony export */ });
/* harmony import */ var _xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xtuc/ieee754 */ "./node_modules/@xtuc/ieee754/index.js");

/**
 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
 * n = 32/8
 */

var NUMBER_OF_BYTE_F32 = 4;
/**
 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
 * n = 64/8
 */

var NUMBER_OF_BYTE_F64 = 8;
var SINGLE_PRECISION_MANTISSA = 23;
var DOUBLE_PRECISION_MANTISSA = 52;
function encodeF32(v) {
  var buffer = [];
  (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.write)(buffer, v, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
  return buffer;
}
function encodeF64(v) {
  var buffer = [];
  (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.write)(buffer, v, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
  return buffer;
}
function decodeF32(bytes) {
  var buffer = Buffer.from(bytes);
  return (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.read)(buffer, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
}
function decodeF64(bytes) {
  var buffer = Buffer.from(bytes);
  return (0,_xtuc_ieee754__WEBPACK_IMPORTED_MODULE_0__.read)(buffer, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/bits.js":
/*!********************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/bits.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extract": () => (/* binding */ extract),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "getSign": () => (/* binding */ getSign),
/* harmony export */   "highOrder": () => (/* binding */ highOrder)
/* harmony export */ });
// Copyright 2012 The Obvious Corporation.

/*
 * bits: Bitwise buffer utilities. The utilities here treat a buffer
 * as a little-endian bigint, so the lowest-order bit is bit #0 of
 * `buffer[0]`, and the highest-order bit is bit #7 of
 * `buffer[buffer.length - 1]`.
 */

/*
 * Modules used
 */

/*
 * Exported bindings
 */

/**
 * Extracts the given number of bits from the buffer at the indicated
 * index, returning a simple number as the result. If bits are requested
 * that aren't covered by the buffer, the `defaultBit` is used as their
 * value.
 *
 * The `bitLength` must be no more than 32. The `defaultBit` if not
 * specified is taken to be `0`.
 */

function extract(buffer, bitIndex, bitLength, defaultBit) {
  if (bitLength < 0 || bitLength > 32) {
    throw new Error("Bad value for bitLength.");
  }

  if (defaultBit === undefined) {
    defaultBit = 0;
  } else if (defaultBit !== 0 && defaultBit !== 1) {
    throw new Error("Bad value for defaultBit.");
  }

  var defaultByte = defaultBit * 0xff;
  var result = 0; // All starts are inclusive. The {endByte, endBit} pair is exclusive, but
  // if endBit !== 0, then endByte is inclusive.

  var lastBit = bitIndex + bitLength;
  var startByte = Math.floor(bitIndex / 8);
  var startBit = bitIndex % 8;
  var endByte = Math.floor(lastBit / 8);
  var endBit = lastBit % 8;

  if (endBit !== 0) {
    // `(1 << endBit) - 1` is the mask of all bits up to but not including
    // the endBit.
    result = get(endByte) & (1 << endBit) - 1;
  }

  while (endByte > startByte) {
    endByte--;
    result = result << 8 | get(endByte);
  }

  result >>>= startBit;
  return result;

  function get(index) {
    var result = buffer[index];
    return result === undefined ? defaultByte : result;
  }
}
/**
 * Injects the given bits into the given buffer at the given index. Any
 * bits in the value beyond the length to set are ignored.
 */

function inject(buffer, bitIndex, bitLength, value) {
  if (bitLength < 0 || bitLength > 32) {
    throw new Error("Bad value for bitLength.");
  }

  var lastByte = Math.floor((bitIndex + bitLength - 1) / 8);

  if (bitIndex < 0 || lastByte >= buffer.length) {
    throw new Error("Index out of range.");
  } // Just keeping it simple, until / unless profiling shows that this
  // is a problem.


  var atByte = Math.floor(bitIndex / 8);
  var atBit = bitIndex % 8;

  while (bitLength > 0) {
    if (value & 1) {
      buffer[atByte] |= 1 << atBit;
    } else {
      buffer[atByte] &= ~(1 << atBit);
    }

    value >>= 1;
    bitLength--;
    atBit = (atBit + 1) % 8;

    if (atBit === 0) {
      atByte++;
    }
  }
}
/**
 * Gets the sign bit of the given buffer.
 */

function getSign(buffer) {
  return buffer[buffer.length - 1] >>> 7;
}
/**
 * Gets the zero-based bit number of the highest-order bit with the
 * given value in the given buffer.
 *
 * If the buffer consists entirely of the other bit value, then this returns
 * `-1`.
 */

function highOrder(bit, buffer) {
  var length = buffer.length;
  var fullyWrongByte = (bit ^ 1) * 0xff; // the other-bit extended to a full byte

  while (length > 0 && buffer[length - 1] === fullyWrongByte) {
    length--;
  }

  if (length === 0) {
    // Degenerate case. The buffer consists entirely of ~bit.
    return -1;
  }

  var byteToCheck = buffer[length - 1];
  var result = length * 8 - 1;

  for (var i = 7; i > 0; i--) {
    if ((byteToCheck >> i & 1) === bit) {
      break;
    }

    result--;
  }

  return result;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/bufs.js":
/*!********************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/bufs.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alloc": () => (/* binding */ alloc),
/* harmony export */   "free": () => (/* binding */ free),
/* harmony export */   "resize": () => (/* binding */ resize),
/* harmony export */   "readInt": () => (/* binding */ readInt),
/* harmony export */   "readUInt": () => (/* binding */ readUInt),
/* harmony export */   "writeInt64": () => (/* binding */ writeInt64),
/* harmony export */   "writeUInt64": () => (/* binding */ writeUInt64)
/* harmony export */ });
// Copyright 2012 The Obvious Corporation.

/*
 * bufs: Buffer utilities.
 */

/*
 * Module variables
 */

/** Pool of buffers, where `bufPool[x].length === x`. */
var bufPool = [];
/** Maximum length of kept temporary buffers. */

var TEMP_BUF_MAXIMUM_LENGTH = 20;
/** Minimum exactly-representable 64-bit int. */

var MIN_EXACT_INT64 = -0x8000000000000000;
/** Maximum exactly-representable 64-bit int. */

var MAX_EXACT_INT64 = 0x7ffffffffffffc00;
/** Maximum exactly-representable 64-bit uint. */

var MAX_EXACT_UINT64 = 0xfffffffffffff800;
/**
 * The int value consisting just of a 1 in bit #32 (that is, one more
 * than the maximum 32-bit unsigned value).
 */

var BIT_32 = 0x100000000;
/**
 * The int value consisting just of a 1 in bit #64 (that is, one more
 * than the maximum 64-bit unsigned value).
 */

var BIT_64 = 0x10000000000000000;
/*
 * Helper functions
 */

/**
 * Masks off all but the lowest bit set of the given number.
 */

function lowestBit(num) {
  return num & -num;
}
/**
 * Gets whether trying to add the second number to the first is lossy
 * (inexact). The first number is meant to be an accumulated result.
 */


function isLossyToAdd(accum, num) {
  if (num === 0) {
    return false;
  }

  var lowBit = lowestBit(num);
  var added = accum + lowBit;

  if (added === accum) {
    return true;
  }

  if (added - lowBit !== accum) {
    return true;
  }

  return false;
}
/*
 * Exported functions
 */

/**
 * Allocates a buffer of the given length, which is initialized
 * with all zeroes. This returns a buffer from the pool if it is
 * available, or a freshly-allocated buffer if not.
 */


function alloc(length) {
  var result = bufPool[length];

  if (result) {
    bufPool[length] = undefined;
  } else {
    result = new Buffer(length);
  }

  result.fill(0);
  return result;
}
/**
 * Releases a buffer back to the pool.
 */

function free(buffer) {
  var length = buffer.length;

  if (length < TEMP_BUF_MAXIMUM_LENGTH) {
    bufPool[length] = buffer;
  }
}
/**
 * Resizes a buffer, returning a new buffer. Returns the argument if
 * the length wouldn't actually change. This function is only safe to
 * use if the given buffer was allocated within this module (since
 * otherwise the buffer might possibly be shared externally).
 */

function resize(buffer, length) {
  if (length === buffer.length) {
    return buffer;
  }

  var newBuf = alloc(length);
  buffer.copy(newBuf);
  free(buffer);
  return newBuf;
}
/**
 * Reads an arbitrary signed int from a buffer.
 */

function readInt(buffer) {
  var length = buffer.length;
  var positive = buffer[length - 1] < 0x80;
  var result = positive ? 0 : -1;
  var lossy = false; // Note: We can't use bit manipulation here, since that stops
  // working if the result won't fit in a 32-bit int.

  if (length < 7) {
    // Common case which can't possibly be lossy (because the result has
    // no more than 48 bits, and loss only happens with 54 or more).
    for (var i = length - 1; i >= 0; i--) {
      result = result * 0x100 + buffer[i];
    }
  } else {
    for (var _i = length - 1; _i >= 0; _i--) {
      var one = buffer[_i];
      result *= 0x100;

      if (isLossyToAdd(result, one)) {
        lossy = true;
      }

      result += one;
    }
  }

  return {
    value: result,
    lossy: lossy
  };
}
/**
 * Reads an arbitrary unsigned int from a buffer.
 */

function readUInt(buffer) {
  var length = buffer.length;
  var result = 0;
  var lossy = false; // Note: See above in re bit manipulation.

  if (length < 7) {
    // Common case which can't possibly be lossy (see above).
    for (var i = length - 1; i >= 0; i--) {
      result = result * 0x100 + buffer[i];
    }
  } else {
    for (var _i2 = length - 1; _i2 >= 0; _i2--) {
      var one = buffer[_i2];
      result *= 0x100;

      if (isLossyToAdd(result, one)) {
        lossy = true;
      }

      result += one;
    }
  }

  return {
    value: result,
    lossy: lossy
  };
}
/**
 * Writes a little-endian 64-bit signed int into a buffer.
 */

function writeInt64(value, buffer) {
  if (value < MIN_EXACT_INT64 || value > MAX_EXACT_INT64) {
    throw new Error("Value out of range.");
  }

  if (value < 0) {
    value += BIT_64;
  }

  writeUInt64(value, buffer);
}
/**
 * Writes a little-endian 64-bit unsigned int into a buffer.
 */

function writeUInt64(value, buffer) {
  if (value < 0 || value > MAX_EXACT_UINT64) {
    throw new Error("Value out of range.");
  }

  var lowWord = value % BIT_32;
  var highWord = Math.floor(value / BIT_32);
  buffer.writeUInt32LE(lowWord, 0);
  buffer.writeUInt32LE(highWord, 4);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAX_NUMBER_OF_BYTE_U32": () => (/* binding */ MAX_NUMBER_OF_BYTE_U32),
/* harmony export */   "MAX_NUMBER_OF_BYTE_U64": () => (/* binding */ MAX_NUMBER_OF_BYTE_U64),
/* harmony export */   "decodeInt64": () => (/* binding */ decodeInt64),
/* harmony export */   "decodeUInt64": () => (/* binding */ decodeUInt64),
/* harmony export */   "decodeInt32": () => (/* binding */ decodeInt32),
/* harmony export */   "decodeUInt32": () => (/* binding */ decodeUInt32),
/* harmony export */   "encodeU32": () => (/* binding */ encodeU32),
/* harmony export */   "encodeI32": () => (/* binding */ encodeI32),
/* harmony export */   "encodeI64": () => (/* binding */ encodeI64)
/* harmony export */ });
/* harmony import */ var _leb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leb */ "./node_modules/@webassemblyjs/leb128/esm/leb.js");

/**
 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
 * max = ceil(32/7)
 */

var MAX_NUMBER_OF_BYTE_U32 = 5;
/**
 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
 * max = ceil(64/7)
 */

var MAX_NUMBER_OF_BYTE_U64 = 10;
function decodeInt64(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__.default.decodeInt64(encodedBuffer, index);
}
function decodeUInt64(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__.default.decodeUInt64(encodedBuffer, index);
}
function decodeInt32(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__.default.decodeInt32(encodedBuffer, index);
}
function decodeUInt32(encodedBuffer, index) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__.default.decodeUInt32(encodedBuffer, index);
}
function encodeU32(v) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__.default.encodeUInt32(v);
}
function encodeI32(v) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__.default.encodeInt32(v);
}
function encodeI64(v) {
  return _leb__WEBPACK_IMPORTED_MODULE_0__.default.encodeInt64(v);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/leb128/esm/leb.js":
/*!*******************************************************!*\
  !*** ./node_modules/@webassemblyjs/leb128/esm/leb.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @xtuc/long */ "./node_modules/@xtuc/long/src/long.js");
/* harmony import */ var _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_xtuc_long__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bits */ "./node_modules/@webassemblyjs/leb128/esm/bits.js");
/* harmony import */ var _bufs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bufs */ "./node_modules/@webassemblyjs/leb128/esm/bufs.js");
// Copyright 2012 The Obvious Corporation.

/*
 * leb: LEB128 utilities.
 */

/*
 * Modules used
 */





/*
 * Module variables
 */

/** The minimum possible 32-bit signed int. */

var MIN_INT32 = -0x80000000;
/** The maximum possible 32-bit signed int. */

var MAX_INT32 = 0x7fffffff;
/** The maximum possible 32-bit unsigned int. */

var MAX_UINT32 = 0xffffffff;
/** The minimum possible 64-bit signed int. */
// const MIN_INT64 = -0x8000000000000000;

/**
 * The maximum possible 64-bit signed int that is representable as a
 * JavaScript number.
 */
// const MAX_INT64 = 0x7ffffffffffffc00;

/**
 * The maximum possible 64-bit unsigned int that is representable as a
 * JavaScript number.
 */
// const MAX_UINT64 = 0xfffffffffffff800;

/*
 * Helper functions
 */

/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as a signed value. The buffer is
 * taken to represent a signed number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order non-sign-matching bit, plus two. For example:
 *
 *   11111011 01110101
 *   high          low
 *
 * The sign bit here is 1 (that is, it's a negative number). The highest
 * bit number that doesn't match the sign is bit #10 (where the lowest-order
 * bit is bit #0). So, we have to encode at least 12 bits total.
 *
 * As a special degenerate case, the numbers 0 and -1 each require just one bit.
 */

function signedBitCount(buffer) {
  return _bits__WEBPACK_IMPORTED_MODULE_1__.highOrder(_bits__WEBPACK_IMPORTED_MODULE_1__.getSign(buffer) ^ 1, buffer) + 2;
}
/**
 * Determines the number of bits required to encode the number
 * represented in the given buffer as an unsigned value. The buffer is
 * taken to represent an unsigned number in little-endian form.
 *
 * The number of bits to encode is the (zero-based) bit number of the
 * highest-order 1 bit, plus one. For example:
 *
 *   00011000 01010011
 *   high          low
 *
 * The highest-order 1 bit here is bit #12 (where the lowest-order bit
 * is bit #0). So, we have to encode at least 13 bits total.
 *
 * As a special degenerate case, the number 0 requires 1 bit.
 */


function unsignedBitCount(buffer) {
  var result = _bits__WEBPACK_IMPORTED_MODULE_1__.highOrder(1, buffer) + 1;
  return result ? result : 1;
}
/**
 * Common encoder for both signed and unsigned ints. This takes a
 * bigint-ish buffer, returning an LEB128-encoded buffer.
 */


function encodeBufferCommon(buffer, signed) {
  var signBit;
  var bitCount;

  if (signed) {
    signBit = _bits__WEBPACK_IMPORTED_MODULE_1__.getSign(buffer);
    bitCount = signedBitCount(buffer);
  } else {
    signBit = 0;
    bitCount = unsignedBitCount(buffer);
  }

  var byteCount = Math.ceil(bitCount / 7);
  var result = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(byteCount);

  for (var i = 0; i < byteCount; i++) {
    var payload = _bits__WEBPACK_IMPORTED_MODULE_1__.extract(buffer, i * 7, 7, signBit);
    result[i] = payload | 0x80;
  } // Mask off the top bit of the last byte, to indicate the end of the
  // encoding.


  result[byteCount - 1] &= 0x7f;
  return result;
}
/**
 * Gets the byte-length of the value encoded in the given buffer at
 * the given index.
 */


function encodedLength(encodedBuffer, index) {
  var result = 0;

  while (encodedBuffer[index + result] >= 0x80) {
    result++;
  }

  result++; // to account for the last byte

  if (index + result > encodedBuffer.length) {// FIXME(sven): seems to cause false positives
    // throw new Error("integer representation too long");
  }

  return result;
}
/**
 * Common decoder for both signed and unsigned ints. This takes an
 * LEB128-encoded buffer, returning a bigint-ish buffer.
 */


function decodeBufferCommon(encodedBuffer, index, signed) {
  index = index === undefined ? 0 : index;
  var length = encodedLength(encodedBuffer, index);
  var bitLength = length * 7;
  var byteLength = Math.ceil(bitLength / 8);
  var result = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(byteLength);
  var outIndex = 0;

  while (length > 0) {
    _bits__WEBPACK_IMPORTED_MODULE_1__.inject(result, outIndex, 7, encodedBuffer[index]);
    outIndex += 7;
    index++;
    length--;
  }

  var signBit;
  var signByte;

  if (signed) {
    // Sign-extend the last byte.
    var lastByte = result[byteLength - 1];
    var endBit = outIndex % 8;

    if (endBit !== 0) {
      var shift = 32 - endBit; // 32 because JS bit ops work on 32-bit ints.

      lastByte = result[byteLength - 1] = lastByte << shift >> shift & 0xff;
    }

    signBit = lastByte >> 7;
    signByte = signBit * 0xff;
  } else {
    signBit = 0;
    signByte = 0;
  } // Slice off any superfluous bytes, that is, ones that add no meaningful
  // bits (because the value would be the same if they were removed).


  while (byteLength > 1 && result[byteLength - 1] === signByte && (!signed || result[byteLength - 2] >> 7 === signBit)) {
    byteLength--;
  }

  result = _bufs__WEBPACK_IMPORTED_MODULE_2__.resize(result, byteLength);
  return {
    value: result,
    nextIndex: index
  };
}
/*
 * Exported bindings
 */


function encodeIntBuffer(buffer) {
  return encodeBufferCommon(buffer, true);
}

function decodeIntBuffer(encodedBuffer, index) {
  return decodeBufferCommon(encodedBuffer, index, true);
}

function encodeInt32(num) {
  var buf = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(4);
  buf.writeInt32LE(num, 0);
  var result = encodeIntBuffer(buf);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(buf);
  return result;
}

function decodeInt32(encodedBuffer, index) {
  var result = decodeIntBuffer(encodedBuffer, index);
  var parsed = _bufs__WEBPACK_IMPORTED_MODULE_2__.readInt(result.value);
  var value = parsed.value;
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);

  if (value < MIN_INT32 || value > MAX_INT32) {
    throw new Error("integer too large");
  }

  return {
    value: value,
    nextIndex: result.nextIndex
  };
}

function encodeInt64(num) {
  var buf = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(8);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.writeInt64(num, buf);
  var result = encodeIntBuffer(buf);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(buf);
  return result;
}

function decodeInt64(encodedBuffer, index) {
  var result = decodeIntBuffer(encodedBuffer, index);
  var value = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromBytesLE(result.value, false);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);
  return {
    value: value,
    nextIndex: result.nextIndex,
    lossy: false
  };
}

function encodeUIntBuffer(buffer) {
  return encodeBufferCommon(buffer, false);
}

function decodeUIntBuffer(encodedBuffer, index) {
  return decodeBufferCommon(encodedBuffer, index, false);
}

function encodeUInt32(num) {
  var buf = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(4);
  buf.writeUInt32LE(num, 0);
  var result = encodeUIntBuffer(buf);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(buf);
  return result;
}

function decodeUInt32(encodedBuffer, index) {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var parsed = _bufs__WEBPACK_IMPORTED_MODULE_2__.readUInt(result.value);
  var value = parsed.value;
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);

  if (value > MAX_UINT32) {
    throw new Error("integer too large");
  }

  return {
    value: value,
    nextIndex: result.nextIndex
  };
}

function encodeUInt64(num) {
  var buf = _bufs__WEBPACK_IMPORTED_MODULE_2__.alloc(8);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.writeUInt64(num, buf);
  var result = encodeUIntBuffer(buf);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(buf);
  return result;
}

function decodeUInt64(encodedBuffer, index) {
  var result = decodeUIntBuffer(encodedBuffer, index);
  var value = _xtuc_long__WEBPACK_IMPORTED_MODULE_0___default().fromBytesLE(result.value, true);
  _bufs__WEBPACK_IMPORTED_MODULE_2__.free(result.value);
  return {
    value: value,
    nextIndex: result.nextIndex,
    lossy: false
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  decodeInt32: decodeInt32,
  decodeInt64: decodeInt64,
  decodeIntBuffer: decodeIntBuffer,
  decodeUInt32: decodeUInt32,
  decodeUInt64: decodeUInt64,
  decodeUIntBuffer: decodeUIntBuffer,
  encodeInt32: encodeInt32,
  encodeInt64: encodeInt64,
  encodeIntBuffer: encodeIntBuffer,
  encodeUInt32: encodeUInt32,
  encodeUInt64: encodeUInt64,
  encodeUIntBuffer: encodeUIntBuffer
});

/***/ }),

/***/ "./node_modules/@webassemblyjs/utf8/esm/decoder.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/utf8/esm/decoder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function con(b) {
  if ((b & 0xc0) === 0x80) {
    return b & 0x3f;
  } else {
    throw new Error("invalid UTF-8 encoding");
  }
}

function code(min, n) {
  if (n < min || 0xd800 <= n && n < 0xe000 || n >= 0x10000) {
    throw new Error("invalid UTF-8 encoding");
  } else {
    return n;
  }
}

function decode(bytes) {
  return _decode(bytes).map(function (x) {
    return String.fromCharCode(x);
  }).join("");
}

function _decode(bytes) {
  if (bytes.length === 0) {
    return [];
  }
  /**
   * 1 byte
   */


  {
    var _bytes = _toArray(bytes),
        b1 = _bytes[0],
        bs = _bytes.slice(1);

    if (b1 < 0x80) {
      return [code(0x0, b1)].concat(_toConsumableArray(_decode(bs)));
    }

    if (b1 < 0xc0) {
      throw new Error("invalid UTF-8 encoding");
    }
  }
  /**
   * 2 bytes
   */

  {
    var _bytes2 = _toArray(bytes),
        _b = _bytes2[0],
        b2 = _bytes2[1],
        _bs = _bytes2.slice(2);

    if (_b < 0xe0) {
      return [code(0x80, ((_b & 0x1f) << 6) + con(b2))].concat(_toConsumableArray(_decode(_bs)));
    }
  }
  /**
   * 3 bytes
   */

  {
    var _bytes3 = _toArray(bytes),
        _b2 = _bytes3[0],
        _b3 = _bytes3[1],
        b3 = _bytes3[2],
        _bs2 = _bytes3.slice(3);

    if (_b2 < 0xf0) {
      return [code(0x800, ((_b2 & 0x0f) << 12) + (con(_b3) << 6) + con(b3))].concat(_toConsumableArray(_decode(_bs2)));
    }
  }
  /**
   * 4 bytes
   */

  {
    var _bytes4 = _toArray(bytes),
        _b4 = _bytes4[0],
        _b5 = _bytes4[1],
        _b6 = _bytes4[2],
        b4 = _bytes4[3],
        _bs3 = _bytes4.slice(4);

    if (_b4 < 0xf8) {
      return [code(0x10000, (((_b4 & 0x07) << 18) + con(_b5) << 12) + (con(_b6) << 6) + con(b4))].concat(_toConsumableArray(_decode(_bs3)));
    }
  }
  throw new Error("invalid UTF-8 encoding");
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/utf8/esm/encoder.js":
/*!*********************************************************!*\
  !*** ./node_modules/@webassemblyjs/utf8/esm/encoder.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encode": () => (/* binding */ encode)
/* harmony export */ });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function con(n) {
  return 0x80 | n & 0x3f;
}

function encode(str) {
  var arr = str.split("").map(function (x) {
    return x.charCodeAt(0);
  });
  return _encode(arr);
}

function _encode(arr) {
  if (arr.length === 0) {
    return [];
  }

  var _arr = _toArray(arr),
      n = _arr[0],
      ns = _arr.slice(1);

  if (n < 0) {
    throw new Error("utf8");
  }

  if (n < 0x80) {
    return [n].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x800) {
    return [0xc0 | n >>> 6, con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x10000) {
    return [0xe0 | n >>> 12, con(n >>> 6), con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  if (n < 0x110000) {
    return [0xf0 | n >>> 18, con(n >>> 12), con(n >>> 6), con(n)].concat(_toConsumableArray(_encode(ns)));
  }

  throw new Error("utf8");
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/utf8/esm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@webassemblyjs/utf8/esm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* reexport safe */ _decoder__WEBPACK_IMPORTED_MODULE_0__.decode),
/* harmony export */   "encode": () => (/* reexport safe */ _encoder__WEBPACK_IMPORTED_MODULE_1__.encode)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./node_modules/@webassemblyjs/utf8/esm/decoder.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encoder */ "./node_modules/@webassemblyjs/utf8/esm/encoder.js");



/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-edit/esm/apply.js":
/*!************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-edit/esm/apply.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "applyOperations": () => (/* binding */ applyOperations)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/wasm-gen */ "./node_modules/@webassemblyjs/wasm-gen/esm/index.js");
/* harmony import */ var _webassemblyjs_wasm_gen_lib_encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/wasm-gen/lib/encoder */ "./node_modules/@webassemblyjs/wasm-gen/lib/encoder/index.js");
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_wasm_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-section */ "./node_modules/@webassemblyjs/helper-wasm-section/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @webassemblyjs/helper-buffer */ "./node_modules/@webassemblyjs/helper-buffer/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js");
function _sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _slicedToArray(arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return _sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }








function shiftLocNodeByDelta(node, delta) {
  (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.assertHasLoc)(node); // $FlowIgnore: assertHasLoc ensures that

  node.loc.start.column += delta; // $FlowIgnore: assertHasLoc ensures that

  node.loc.end.column += delta;
}

function applyUpdate(ast, uint8Buffer, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      oldNode = _ref2[0],
      newNode = _ref2[1];

  var deltaElements = 0;
  (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.assertHasLoc)(oldNode);
  var sectionName = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.getSectionForNode)(newNode);
  var replacementByteArray = (0,_webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__.encodeNode)(newNode);
  /**
   * Replace new node as bytes
   */

  uint8Buffer = (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_4__.overrideBytesInBuffer)(uint8Buffer, // $FlowIgnore: assertHasLoc ensures that
  oldNode.loc.start.column, // $FlowIgnore: assertHasLoc ensures that
  oldNode.loc.end.column, replacementByteArray);
  /**
   * Update function body size if needed
   */

  if (sectionName === "code") {
    // Find the parent func
    (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.traverse)(ast, {
      Func: function Func(_ref3) {
        var node = _ref3.node;
        var funcHasThisIntr = node.body.find(function (n) {
          return n === newNode;
        }) !== undefined; // Update func's body size if needed

        if (funcHasThisIntr === true) {
          // These are the old functions locations informations
          (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.assertHasLoc)(node);
          var oldNodeSize = (0,_webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__.encodeNode)(oldNode).length;
          var bodySizeDeltaBytes = replacementByteArray.length - oldNodeSize;

          if (bodySizeDeltaBytes !== 0) {
            var newValue = node.metadata.bodySize + bodySizeDeltaBytes;
            var newByteArray = (0,_webassemblyjs_wasm_gen_lib_encoder__WEBPACK_IMPORTED_MODULE_1__.encodeU32)(newValue); // function body size byte
            // FIXME(sven): only handles one byte u32

            var start = node.loc.start.column;
            var end = start + 1;
            uint8Buffer = (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_4__.overrideBytesInBuffer)(uint8Buffer, start, end, newByteArray);
          }
        }
      }
    });
  }
  /**
   * Update section size
   */


  var deltaBytes = replacementByteArray.length - ( // $FlowIgnore: assertHasLoc ensures that
  oldNode.loc.end.column - oldNode.loc.start.column); // Init location informations

  newNode.loc = {
    start: {
      line: -1,
      column: -1
    },
    end: {
      line: -1,
      column: -1
    }
  }; // Update new node end position
  // $FlowIgnore: assertHasLoc ensures that

  newNode.loc.start.column = oldNode.loc.start.column; // $FlowIgnore: assertHasLoc ensures that

  newNode.loc.end.column = // $FlowIgnore: assertHasLoc ensures that
  oldNode.loc.start.column + replacementByteArray.length;
  return {
    uint8Buffer: uint8Buffer,
    deltaBytes: deltaBytes,
    deltaElements: deltaElements
  };
}

function applyDelete(ast, uint8Buffer, node) {
  var deltaElements = -1; // since we removed an element

  (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.assertHasLoc)(node);
  var sectionName = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.getSectionForNode)(node);

  if (sectionName === "start") {
    var sectionMetadata = (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.getSectionMetadata)(ast, "start");
    /**
     * The start section only contains one element,
     * we need to remove the whole section
     */

    uint8Buffer = (0,_webassemblyjs_helper_wasm_section__WEBPACK_IMPORTED_MODULE_3__.removeSections)(ast, uint8Buffer, "start");

    var _deltaBytes = -(sectionMetadata.size.value + 1);
    /* section id */


    return {
      uint8Buffer: uint8Buffer,
      deltaBytes: _deltaBytes,
      deltaElements: deltaElements
    };
  } // replacement is nothing


  var replacement = [];
  uint8Buffer = (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_4__.overrideBytesInBuffer)(uint8Buffer, // $FlowIgnore: assertHasLoc ensures that
  node.loc.start.column, // $FlowIgnore: assertHasLoc ensures that
  node.loc.end.column, replacement);
  /**
   * Update section
   */
  // $FlowIgnore: assertHasLoc ensures that

  var deltaBytes = -(node.loc.end.column - node.loc.start.column);
  return {
    uint8Buffer: uint8Buffer,
    deltaBytes: deltaBytes,
    deltaElements: deltaElements
  };
}

function applyAdd(ast, uint8Buffer, node) {
  var deltaElements = +1; // since we added an element

  var sectionName = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.getSectionForNode)(node);
  var sectionMetadata = (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.getSectionMetadata)(ast, sectionName); // Section doesn't exists, we create an empty one

  if (typeof sectionMetadata === "undefined") {
    var res = (0,_webassemblyjs_helper_wasm_section__WEBPACK_IMPORTED_MODULE_3__.createEmptySection)(ast, uint8Buffer, sectionName);
    uint8Buffer = res.uint8Buffer;
    sectionMetadata = res.sectionMetadata;
  }
  /**
   * check that the expressions were ended
   */


  if ((0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.isFunc)(node)) {
    // $FlowIgnore
    var body = node.body;

    if (body.length === 0 || body[body.length - 1].id !== "end") {
      throw new Error("expressions must be ended");
    }
  }

  if ((0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.isGlobal)(node)) {
    // $FlowIgnore
    var body = node.init;

    if (body.length === 0 || body[body.length - 1].id !== "end") {
      throw new Error("expressions must be ended");
    }
  }
  /**
   * Add nodes
   */


  var newByteArray = (0,_webassemblyjs_wasm_gen__WEBPACK_IMPORTED_MODULE_0__.encodeNode)(node); // The size of the section doesn't include the storage of the size itself
  // we need to manually add it here

  var start = (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.getEndOfSection)(sectionMetadata);
  var end = start;
  /**
   * Update section
   */

  var deltaBytes = newByteArray.length;
  uint8Buffer = (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_4__.overrideBytesInBuffer)(uint8Buffer, start, end, newByteArray);
  node.loc = {
    start: {
      line: -1,
      column: start
    },
    end: {
      line: -1,
      column: start + deltaBytes
    }
  }; // for func add the additional metadata in the AST

  if (node.type === "Func") {
    // the size is the first byte
    // FIXME(sven): handle LEB128 correctly here
    var bodySize = newByteArray[0];
    node.metadata = {
      bodySize: bodySize
    };
  }

  if (node.type !== "IndexInFuncSection") {
    (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_2__.orderedInsertNode)(ast.body[0], node);
  }

  return {
    uint8Buffer: uint8Buffer,
    deltaBytes: deltaBytes,
    deltaElements: deltaElements
  };
}

function applyOperations(ast, uint8Buffer, ops) {
  ops.forEach(function (op) {
    var state;
    var sectionName;

    switch (op.kind) {
      case "update":
        state = applyUpdate(ast, uint8Buffer, [op.oldNode, op.node]);
        sectionName = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.getSectionForNode)(op.node);
        break;

      case "delete":
        state = applyDelete(ast, uint8Buffer, op.node);
        sectionName = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.getSectionForNode)(op.node);
        break;

      case "add":
        state = applyAdd(ast, uint8Buffer, op.node);
        sectionName = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.getSectionForNode)(op.node);
        break;

      default:
        throw new Error("Unknown operation");
    }
    /**
     * Resize section vec size.
     * If the length of the LEB-encoded size changes, this can change
     * the byte length of the section and the offset for nodes in the
     * section. So we do this first before resizing section byte size
     * or shifting following operations' nodes.
     */


    if (state.deltaElements !== 0 && sectionName !== "start") {
      var oldBufferLength = state.uint8Buffer.length;
      state.uint8Buffer = (0,_webassemblyjs_helper_wasm_section__WEBPACK_IMPORTED_MODULE_3__.resizeSectionVecSize)(ast, state.uint8Buffer, sectionName, state.deltaElements); // Infer bytes added/removed by comparing buffer lengths

      state.deltaBytes += state.uint8Buffer.length - oldBufferLength;
    }
    /**
     * Resize section byte size.
     * If the length of the LEB-encoded size changes, this can change
     * the offset for nodes in the section. So we do this before
     * shifting following operations' nodes.
     */


    if (state.deltaBytes !== 0 && sectionName !== "start") {
      var _oldBufferLength = state.uint8Buffer.length;
      state.uint8Buffer = (0,_webassemblyjs_helper_wasm_section__WEBPACK_IMPORTED_MODULE_3__.resizeSectionByteSize)(ast, state.uint8Buffer, sectionName, state.deltaBytes); // Infer bytes added/removed by comparing buffer lengths

      state.deltaBytes += state.uint8Buffer.length - _oldBufferLength;
    }
    /**
     * Shift following operation's nodes
     */


    if (state.deltaBytes !== 0) {
      ops.forEach(function (op) {
        // We don't need to handle add ops, they are positioning independent
        switch (op.kind) {
          case "update":
            shiftLocNodeByDelta(op.oldNode, state.deltaBytes);
            break;

          case "delete":
            shiftLocNodeByDelta(op.node, state.deltaBytes);
            break;
        }
      });
    }

    uint8Buffer = state.uint8Buffer;
  });
  return uint8Buffer;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-edit/esm/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-edit/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edit": () => (/* binding */ edit),
/* harmony export */   "editWithAST": () => (/* binding */ editWithAST),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addWithAST": () => (/* binding */ addWithAST)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_wasm_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/wasm-parser */ "./node_modules/@webassemblyjs/wasm-parser/esm/index.js");
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");
/* harmony import */ var _webassemblyjs_ast_lib_clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/ast/lib/clone */ "./node_modules/@webassemblyjs/ast/lib/clone.js");
/* harmony import */ var _webassemblyjs_wasm_opt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webassemblyjs/wasm-opt */ "./node_modules/@webassemblyjs/wasm-opt/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js");
/* harmony import */ var _apply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apply */ "./node_modules/@webassemblyjs/wasm-edit/esm/apply.js");








function hashNode(node) {
  return JSON.stringify(node);
}

function preprocess(ab) {
  var optBin = (0,_webassemblyjs_wasm_opt__WEBPACK_IMPORTED_MODULE_3__.shrinkPaddedLEB128)(new Uint8Array(ab));
  return optBin.buffer;
}

function sortBySectionOrder(nodes) {
  var originalOrder = new Map();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _node = _step.value;
      originalOrder.set(_node, originalOrder.size);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  nodes.sort(function (a, b) {
    var sectionA = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_4__.getSectionForNode)(a);
    var sectionB = (0,_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_4__.getSectionForNode)(b);
    var aId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_4__.default.sections[sectionA];
    var bId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_4__.default.sections[sectionB];

    if (typeof aId !== "number" || typeof bId !== "number") {
      throw new Error("Section id not found");
    }

    if (aId === bId) {
      // $FlowIgnore originalOrder is filled for all nodes
      return originalOrder.get(a) - originalOrder.get(b);
    }

    return aId - bId;
  });
}

function edit(ab, visitors) {
  ab = preprocess(ab);
  var ast = (0,_webassemblyjs_wasm_parser__WEBPACK_IMPORTED_MODULE_0__.decode)(ab);
  return editWithAST(ast, ab, visitors);
}
function editWithAST(ast, ab, visitors) {
  var operations = [];
  var uint8Buffer = new Uint8Array(ab);
  var nodeBefore;

  function before(type, path) {
    nodeBefore = (0,_webassemblyjs_ast_lib_clone__WEBPACK_IMPORTED_MODULE_2__.cloneNode)(path.node);
  }

  function after(type, path) {
    if (path.node._deleted === true) {
      operations.push({
        kind: "delete",
        node: path.node
      }); // $FlowIgnore
    } else if (hashNode(nodeBefore) !== hashNode(path.node)) {
      operations.push({
        kind: "update",
        oldNode: nodeBefore,
        node: path.node
      });
    }
  }

  (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse)(ast, visitors, before, after);
  uint8Buffer = (0,_apply__WEBPACK_IMPORTED_MODULE_5__.applyOperations)(ast, uint8Buffer, operations);
  return uint8Buffer.buffer;
}
function add(ab, newNodes) {
  ab = preprocess(ab);
  var ast = (0,_webassemblyjs_wasm_parser__WEBPACK_IMPORTED_MODULE_0__.decode)(ab);
  return addWithAST(ast, ab, newNodes);
}
function addWithAST(ast, ab, newNodes) {
  // Sort nodes by insertion order
  sortBySectionOrder(newNodes);
  var uint8Buffer = new Uint8Array(ab); // Map node into operations

  var operations = newNodes.map(function (n) {
    return {
      kind: "add",
      node: n
    };
  });
  uint8Buffer = (0,_apply__WEBPACK_IMPORTED_MODULE_5__.applyOperations)(ast, uint8Buffer, operations);
  return uint8Buffer.buffer;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-gen/esm/encoder/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-gen/esm/encoder/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeVersion": () => (/* binding */ encodeVersion),
/* harmony export */   "encodeHeader": () => (/* binding */ encodeHeader),
/* harmony export */   "encodeU32": () => (/* binding */ encodeU32),
/* harmony export */   "encodeI32": () => (/* binding */ encodeI32),
/* harmony export */   "encodeI64": () => (/* binding */ encodeI64),
/* harmony export */   "encodeVec": () => (/* binding */ encodeVec),
/* harmony export */   "encodeValtype": () => (/* binding */ encodeValtype),
/* harmony export */   "encodeMutability": () => (/* binding */ encodeMutability),
/* harmony export */   "encodeUTF8Vec": () => (/* binding */ encodeUTF8Vec),
/* harmony export */   "encodeLimits": () => (/* binding */ encodeLimits),
/* harmony export */   "encodeModuleImport": () => (/* binding */ encodeModuleImport),
/* harmony export */   "encodeSectionMetadata": () => (/* binding */ encodeSectionMetadata),
/* harmony export */   "encodeCallInstruction": () => (/* binding */ encodeCallInstruction),
/* harmony export */   "encodeCallIndirectInstruction": () => (/* binding */ encodeCallIndirectInstruction),
/* harmony export */   "encodeModuleExport": () => (/* binding */ encodeModuleExport),
/* harmony export */   "encodeTypeInstruction": () => (/* binding */ encodeTypeInstruction),
/* harmony export */   "encodeInstr": () => (/* binding */ encodeInstr),
/* harmony export */   "encodeStringLiteral": () => (/* binding */ encodeStringLiteral),
/* harmony export */   "encodeGlobal": () => (/* binding */ encodeGlobal),
/* harmony export */   "encodeFuncBody": () => (/* binding */ encodeFuncBody),
/* harmony export */   "encodeIndexInFuncSection": () => (/* binding */ encodeIndexInFuncSection),
/* harmony export */   "encodeElem": () => (/* binding */ encodeElem)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/leb128 */ "./node_modules/@webassemblyjs/leb128/esm/index.js");
/* harmony import */ var _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/ieee754 */ "./node_modules/@webassemblyjs/ieee754/esm/index.js");
/* harmony import */ var _webassemblyjs_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/utf8 */ "./node_modules/@webassemblyjs/utf8/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../index */ "./node_modules/@webassemblyjs/wasm-gen/esm/index.js");
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







function assertNotIdentifierNode(n) {
  if (n.type === "Identifier") {
    throw new Error("Unsupported node Identifier");
  }
}

function encodeVersion(v) {
  var bytes = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__.default.moduleVersion;
  bytes[0] = v;
  return bytes;
}
function encodeHeader() {
  return _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__.default.magicModuleHeader;
}
function encodeU32(v) {
  var uint8view = new Uint8Array(_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_0__.encodeU32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}
function encodeI32(v) {
  var uint8view = new Uint8Array(_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_0__.encodeI32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}
function encodeI64(v) {
  var uint8view = new Uint8Array(_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_0__.encodeI64(v));

  var array = _toConsumableArray(uint8view);

  return array;
}
function encodeVec(elements) {
  var size = encodeU32(elements.length);
  return _toConsumableArray(size).concat(_toConsumableArray(elements));
}
function encodeValtype(v) {
  var byte = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__.default.valtypesByString[v];

  if (typeof byte === "undefined") {
    throw new Error("Unknown valtype: " + v);
  }

  return parseInt(byte, 10);
}
function encodeMutability(v) {
  var byte = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__.default.globalTypesByString[v];

  if (typeof byte === "undefined") {
    throw new Error("Unknown mutability: " + v);
  }

  return parseInt(byte, 10);
}
function encodeUTF8Vec(str) {
  return encodeVec(_webassemblyjs_utf8__WEBPACK_IMPORTED_MODULE_2__.encode(str));
}
function encodeLimits(n) {
  var out = [];

  if (typeof n.max === "number") {
    out.push(0x01);
    out.push.apply(out, _toConsumableArray(encodeU32(n.min))); // $FlowIgnore: ensured by the typeof

    out.push.apply(out, _toConsumableArray(encodeU32(n.max)));
  } else {
    out.push(0x00);
    out.push.apply(out, _toConsumableArray(encodeU32(n.min)));
  }

  return out;
}
function encodeModuleImport(n) {
  var out = [];
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.module)));
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.name)));

  switch (n.descr.type) {
    case "GlobalType":
      {
        out.push(0x03); // $FlowIgnore: GlobalType ensure that these props exists

        out.push(encodeValtype(n.descr.valtype)); // $FlowIgnore: GlobalType ensure that these props exists

        out.push(encodeMutability(n.descr.mutability));
        break;
      }

    case "Memory":
      {
        out.push(0x02); // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeLimits(n.descr.limits)));
        break;
      }

    case "Table":
      {
        out.push(0x01);
        out.push(0x70); // element type
        // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeLimits(n.descr.limits)));
        break;
      }

    case "FuncImportDescr":
      {
        out.push(0x00); // $FlowIgnore

        assertNotIdentifierNode(n.descr.id); // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeU32(n.descr.id.value)));
        break;
      }

    default:
      throw new Error("Unsupport operation: encode module import of type: " + n.descr.type);
  }

  return out;
}
function encodeSectionMetadata(n) {
  var out = [];
  var sectionId = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__.default.sections[n.section];

  if (typeof sectionId === "undefined") {
    throw new Error("Unknown section: " + n.section);
  }

  if (n.section === "start") {
    /**
     * This is not implemented yet because it's a special case which
     * doesn't have a vector in its section.
     */
    throw new Error("Unsupported section encoding of type start");
  }

  out.push(sectionId);
  out.push.apply(out, _toConsumableArray(encodeU32(n.size.value)));
  out.push.apply(out, _toConsumableArray(encodeU32(n.vectorOfSize.value)));
  return out;
}
function encodeCallInstruction(n) {
  var out = [];
  assertNotIdentifierNode(n.index);
  out.push(0x10); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value)));
  return out;
}
function encodeCallIndirectInstruction(n) {
  var out = []; // $FlowIgnore

  assertNotIdentifierNode(n.index);
  out.push(0x11); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value))); // add a reserved byte

  out.push(0x00);
  return out;
}
function encodeModuleExport(n) {
  var out = [];
  assertNotIdentifierNode(n.descr.id);
  var exportTypeByteString = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__.default.exportTypesByName[n.descr.exportType];

  if (typeof exportTypeByteString === "undefined") {
    throw new Error("Unknown export of type: " + n.descr.exportType);
  }

  var exportTypeByte = parseInt(exportTypeByteString, 10);
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.name)));
  out.push(exportTypeByte); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.descr.id.value)));
  return out;
}
function encodeTypeInstruction(n) {
  var out = [0x60];
  var params = n.functype.params.map(function (x) {
    return x.valtype;
  }).map(encodeValtype);
  var results = n.functype.results.map(encodeValtype);
  out.push.apply(out, _toConsumableArray(encodeVec(params)));
  out.push.apply(out, _toConsumableArray(encodeVec(results)));
  return out;
}
function encodeInstr(n) {
  var out = [];
  var instructionName = n.id;

  if (typeof n.object === "string") {
    instructionName = "".concat(n.object, ".").concat(String(n.id));
  }

  var byteString = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_3__.default.symbolsByName[instructionName];

  if (typeof byteString === "undefined") {
    throw new Error("encodeInstr: unknown instruction " + JSON.stringify(instructionName));
  }

  var byte = parseInt(byteString, 10);
  out.push(byte);

  if (n.args) {
    n.args.forEach(function (arg) {
      var encoder = encodeU32; // find correct encoder

      if (n.object === "i32") {
        encoder = encodeI32;
      }

      if (n.object === "i64") {
        encoder = encodeI64;
      }

      if (n.object === "f32") {
        encoder = _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.encodeF32;
      }

      if (n.object === "f64") {
        encoder = _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.encodeF64;
      }

      if (arg.type === "NumberLiteral" || arg.type === "FloatLiteral" || arg.type === "LongNumberLiteral") {
        // $FlowIgnore
        out.push.apply(out, _toConsumableArray(encoder(arg.value)));
      } else {
        throw new Error("Unsupported instruction argument encoding " + JSON.stringify(arg.type));
      }
    });
  }

  return out;
}

function encodeExpr(instrs) {
  var out = [];
  instrs.forEach(function (instr) {
    // $FlowIgnore
    var n = (0,_index__WEBPACK_IMPORTED_MODULE_4__.encodeNode)(instr);
    out.push.apply(out, _toConsumableArray(n));
  });
  return out;
}

function encodeStringLiteral(n) {
  return encodeUTF8Vec(n.value);
}
function encodeGlobal(n) {
  var out = [];
  var _n$globalType = n.globalType,
      valtype = _n$globalType.valtype,
      mutability = _n$globalType.mutability;
  out.push(encodeValtype(valtype));
  out.push(encodeMutability(mutability));
  out.push.apply(out, _toConsumableArray(encodeExpr(n.init)));
  return out;
}
function encodeFuncBody(n) {
  var out = [];
  out.push(-1); // temporary function body size
  // FIXME(sven): get the func locals?

  var localBytes = encodeVec([]);
  out.push.apply(out, _toConsumableArray(localBytes));
  var funcBodyBytes = encodeExpr(n.body);
  out[0] = funcBodyBytes.length + localBytes.length;
  out.push.apply(out, _toConsumableArray(funcBodyBytes));
  return out;
}
function encodeIndexInFuncSection(n) {
  assertNotIdentifierNode(n.index); // $FlowIgnore

  return encodeU32(n.index.value);
}
function encodeElem(n) {
  var out = [];
  assertNotIdentifierNode(n.table); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.table.value)));
  out.push.apply(out, _toConsumableArray(encodeExpr(n.offset))); // $FlowIgnore

  var funcs = n.funcs.reduce(function (acc, x) {
    return _toConsumableArray(acc).concat(_toConsumableArray(encodeU32(x.value)));
  }, []);
  out.push.apply(out, _toConsumableArray(encodeVec(funcs)));
  return out;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-gen/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-gen/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeNode": () => (/* binding */ encodeNode),
/* harmony export */   "encodeU32": () => (/* binding */ encodeU32)
/* harmony export */ });
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encoder */ "./node_modules/@webassemblyjs/wasm-gen/esm/encoder/index.js");

function encodeNode(n) {
  switch (n.type) {
    case "ModuleImport":
      // $FlowIgnore: ModuleImport ensure that the node is well formated
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeModuleImport(n);

    case "SectionMetadata":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeSectionMetadata(n);

    case "CallInstruction":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeCallInstruction(n);

    case "CallIndirectInstruction":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeCallIndirectInstruction(n);

    case "TypeInstruction":
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeTypeInstruction(n);

    case "Instr":
      // $FlowIgnore
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeInstr(n);

    case "ModuleExport":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeModuleExport(n);

    case "Global":
      // $FlowIgnore
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeGlobal(n);

    case "Func":
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeFuncBody(n);

    case "IndexInFuncSection":
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeIndexInFuncSection(n);

    case "StringLiteral":
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeStringLiteral(n);

    case "Elem":
      return _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeElem(n);

    default:
      throw new Error("Unsupported encoding for node of type: " + JSON.stringify(n.type));
  }
}
var encodeU32 = _encoder__WEBPACK_IMPORTED_MODULE_0__.encodeU32;

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-gen/lib/encoder/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-gen/lib/encoder/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.encodeVersion = encodeVersion;
exports.encodeHeader = encodeHeader;
exports.encodeU32 = encodeU32;
exports.encodeI32 = encodeI32;
exports.encodeI64 = encodeI64;
exports.encodeVec = encodeVec;
exports.encodeValtype = encodeValtype;
exports.encodeMutability = encodeMutability;
exports.encodeUTF8Vec = encodeUTF8Vec;
exports.encodeLimits = encodeLimits;
exports.encodeModuleImport = encodeModuleImport;
exports.encodeSectionMetadata = encodeSectionMetadata;
exports.encodeCallInstruction = encodeCallInstruction;
exports.encodeCallIndirectInstruction = encodeCallIndirectInstruction;
exports.encodeModuleExport = encodeModuleExport;
exports.encodeTypeInstruction = encodeTypeInstruction;
exports.encodeInstr = encodeInstr;
exports.encodeStringLiteral = encodeStringLiteral;
exports.encodeGlobal = encodeGlobal;
exports.encodeFuncBody = encodeFuncBody;
exports.encodeIndexInFuncSection = encodeIndexInFuncSection;
exports.encodeElem = encodeElem;

var leb = _interopRequireWildcard(__webpack_require__(/*! @webassemblyjs/leb128 */ "./node_modules/@webassemblyjs/leb128/esm/index.js"));

var ieee754 = _interopRequireWildcard(__webpack_require__(/*! @webassemblyjs/ieee754 */ "./node_modules/@webassemblyjs/ieee754/esm/index.js"));

var utf8 = _interopRequireWildcard(__webpack_require__(/*! @webassemblyjs/utf8 */ "./node_modules/@webassemblyjs/utf8/esm/index.js"));

var _helperWasmBytecode = _interopRequireDefault(__webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js"));

var _index = __webpack_require__(/*! ../index */ "./node_modules/@webassemblyjs/wasm-gen/lib/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function assertNotIdentifierNode(n) {
  if (n.type === "Identifier") {
    throw new Error("Unsupported node Identifier");
  }
}

function encodeVersion(v) {
  var bytes = _helperWasmBytecode.default.moduleVersion;
  bytes[0] = v;
  return bytes;
}

function encodeHeader() {
  return _helperWasmBytecode.default.magicModuleHeader;
}

function encodeU32(v) {
  var uint8view = new Uint8Array(leb.encodeU32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}

function encodeI32(v) {
  var uint8view = new Uint8Array(leb.encodeI32(v));

  var array = _toConsumableArray(uint8view);

  return array;
}

function encodeI64(v) {
  var uint8view = new Uint8Array(leb.encodeI64(v));

  var array = _toConsumableArray(uint8view);

  return array;
}

function encodeVec(elements) {
  var size = encodeU32(elements.length);
  return _toConsumableArray(size).concat(_toConsumableArray(elements));
}

function encodeValtype(v) {
  var byte = _helperWasmBytecode.default.valtypesByString[v];

  if (typeof byte === "undefined") {
    throw new Error("Unknown valtype: " + v);
  }

  return parseInt(byte, 10);
}

function encodeMutability(v) {
  var byte = _helperWasmBytecode.default.globalTypesByString[v];

  if (typeof byte === "undefined") {
    throw new Error("Unknown mutability: " + v);
  }

  return parseInt(byte, 10);
}

function encodeUTF8Vec(str) {
  return encodeVec(utf8.encode(str));
}

function encodeLimits(n) {
  var out = [];

  if (typeof n.max === "number") {
    out.push(0x01);
    out.push.apply(out, _toConsumableArray(encodeU32(n.min))); // $FlowIgnore: ensured by the typeof

    out.push.apply(out, _toConsumableArray(encodeU32(n.max)));
  } else {
    out.push(0x00);
    out.push.apply(out, _toConsumableArray(encodeU32(n.min)));
  }

  return out;
}

function encodeModuleImport(n) {
  var out = [];
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.module)));
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.name)));

  switch (n.descr.type) {
    case "GlobalType":
      {
        out.push(0x03); // $FlowIgnore: GlobalType ensure that these props exists

        out.push(encodeValtype(n.descr.valtype)); // $FlowIgnore: GlobalType ensure that these props exists

        out.push(encodeMutability(n.descr.mutability));
        break;
      }

    case "Memory":
      {
        out.push(0x02); // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeLimits(n.descr.limits)));
        break;
      }

    case "Table":
      {
        out.push(0x01);
        out.push(0x70); // element type
        // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeLimits(n.descr.limits)));
        break;
      }

    case "FuncImportDescr":
      {
        out.push(0x00); // $FlowIgnore

        assertNotIdentifierNode(n.descr.id); // $FlowIgnore

        out.push.apply(out, _toConsumableArray(encodeU32(n.descr.id.value)));
        break;
      }

    default:
      throw new Error("Unsupport operation: encode module import of type: " + n.descr.type);
  }

  return out;
}

function encodeSectionMetadata(n) {
  var out = [];
  var sectionId = _helperWasmBytecode.default.sections[n.section];

  if (typeof sectionId === "undefined") {
    throw new Error("Unknown section: " + n.section);
  }

  if (n.section === "start") {
    /**
     * This is not implemented yet because it's a special case which
     * doesn't have a vector in its section.
     */
    throw new Error("Unsupported section encoding of type start");
  }

  out.push(sectionId);
  out.push.apply(out, _toConsumableArray(encodeU32(n.size.value)));
  out.push.apply(out, _toConsumableArray(encodeU32(n.vectorOfSize.value)));
  return out;
}

function encodeCallInstruction(n) {
  var out = [];
  assertNotIdentifierNode(n.index);
  out.push(0x10); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value)));
  return out;
}

function encodeCallIndirectInstruction(n) {
  var out = []; // $FlowIgnore

  assertNotIdentifierNode(n.index);
  out.push(0x11); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.index.value))); // add a reserved byte

  out.push(0x00);
  return out;
}

function encodeModuleExport(n) {
  var out = [];
  assertNotIdentifierNode(n.descr.id);
  var exportTypeByteString = _helperWasmBytecode.default.exportTypesByName[n.descr.exportType];

  if (typeof exportTypeByteString === "undefined") {
    throw new Error("Unknown export of type: " + n.descr.exportType);
  }

  var exportTypeByte = parseInt(exportTypeByteString, 10);
  out.push.apply(out, _toConsumableArray(encodeUTF8Vec(n.name)));
  out.push(exportTypeByte); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.descr.id.value)));
  return out;
}

function encodeTypeInstruction(n) {
  var out = [0x60];
  var params = n.functype.params.map(function (x) {
    return x.valtype;
  }).map(encodeValtype);
  var results = n.functype.results.map(encodeValtype);
  out.push.apply(out, _toConsumableArray(encodeVec(params)));
  out.push.apply(out, _toConsumableArray(encodeVec(results)));
  return out;
}

function encodeInstr(n) {
  var out = [];
  var instructionName = n.id;

  if (typeof n.object === "string") {
    instructionName = "".concat(n.object, ".").concat(String(n.id));
  }

  var byteString = _helperWasmBytecode.default.symbolsByName[instructionName];

  if (typeof byteString === "undefined") {
    throw new Error("encodeInstr: unknown instruction " + JSON.stringify(instructionName));
  }

  var byte = parseInt(byteString, 10);
  out.push(byte);

  if (n.args) {
    n.args.forEach(function (arg) {
      var encoder = encodeU32; // find correct encoder

      if (n.object === "i32") {
        encoder = encodeI32;
      }

      if (n.object === "i64") {
        encoder = encodeI64;
      }

      if (n.object === "f32") {
        encoder = ieee754.encodeF32;
      }

      if (n.object === "f64") {
        encoder = ieee754.encodeF64;
      }

      if (arg.type === "NumberLiteral" || arg.type === "FloatLiteral" || arg.type === "LongNumberLiteral") {
        // $FlowIgnore
        out.push.apply(out, _toConsumableArray(encoder(arg.value)));
      } else {
        throw new Error("Unsupported instruction argument encoding " + JSON.stringify(arg.type));
      }
    });
  }

  return out;
}

function encodeExpr(instrs) {
  var out = [];
  instrs.forEach(function (instr) {
    // $FlowIgnore
    var n = (0, _index.encodeNode)(instr);
    out.push.apply(out, _toConsumableArray(n));
  });
  return out;
}

function encodeStringLiteral(n) {
  return encodeUTF8Vec(n.value);
}

function encodeGlobal(n) {
  var out = [];
  var _n$globalType = n.globalType,
      valtype = _n$globalType.valtype,
      mutability = _n$globalType.mutability;
  out.push(encodeValtype(valtype));
  out.push(encodeMutability(mutability));
  out.push.apply(out, _toConsumableArray(encodeExpr(n.init)));
  return out;
}

function encodeFuncBody(n) {
  var out = [];
  out.push(-1); // temporary function body size
  // FIXME(sven): get the func locals?

  var localBytes = encodeVec([]);
  out.push.apply(out, _toConsumableArray(localBytes));
  var funcBodyBytes = encodeExpr(n.body);
  out[0] = funcBodyBytes.length + localBytes.length;
  out.push.apply(out, _toConsumableArray(funcBodyBytes));
  return out;
}

function encodeIndexInFuncSection(n) {
  assertNotIdentifierNode(n.index); // $FlowIgnore

  return encodeU32(n.index.value);
}

function encodeElem(n) {
  var out = [];
  assertNotIdentifierNode(n.table); // $FlowIgnore

  out.push.apply(out, _toConsumableArray(encodeU32(n.table.value)));
  out.push.apply(out, _toConsumableArray(encodeExpr(n.offset))); // $FlowIgnore

  var funcs = n.funcs.reduce(function (acc, x) {
    return _toConsumableArray(acc).concat(_toConsumableArray(encodeU32(x.value)));
  }, []);
  out.push.apply(out, _toConsumableArray(encodeVec(funcs)));
  return out;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-gen/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-gen/lib/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.encodeNode = encodeNode;
exports.encodeU32 = void 0;

var encoder = _interopRequireWildcard(__webpack_require__(/*! ./encoder */ "./node_modules/@webassemblyjs/wasm-gen/lib/encoder/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function encodeNode(n) {
  switch (n.type) {
    case "ModuleImport":
      // $FlowIgnore: ModuleImport ensure that the node is well formated
      return encoder.encodeModuleImport(n);

    case "SectionMetadata":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeSectionMetadata(n);

    case "CallInstruction":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeCallInstruction(n);

    case "CallIndirectInstruction":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeCallIndirectInstruction(n);

    case "TypeInstruction":
      return encoder.encodeTypeInstruction(n);

    case "Instr":
      // $FlowIgnore
      return encoder.encodeInstr(n);

    case "ModuleExport":
      // $FlowIgnore: SectionMetadata ensure that the node is well formated
      return encoder.encodeModuleExport(n);

    case "Global":
      // $FlowIgnore
      return encoder.encodeGlobal(n);

    case "Func":
      return encoder.encodeFuncBody(n);

    case "IndexInFuncSection":
      return encoder.encodeIndexInFuncSection(n);

    case "StringLiteral":
      return encoder.encodeStringLiteral(n);

    case "Elem":
      return encoder.encodeElem(n);

    default:
      throw new Error("Unsupported encoding for node of type: " + JSON.stringify(n.type));
  }
}

var encodeU32 = encoder.encodeU32;
exports.encodeU32 = encodeU32;

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-opt/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-opt/esm/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shrinkPaddedLEB128": () => (/* binding */ shrinkPaddedLEB128)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_wasm_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/wasm-parser */ "./node_modules/@webassemblyjs/wasm-parser/esm/index.js");
/* harmony import */ var _leb128_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leb128.js */ "./node_modules/@webassemblyjs/wasm-opt/esm/leb128.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var OptimizerError =
/*#__PURE__*/
function (_Error) {
  _inherits(OptimizerError, _Error);

  function OptimizerError(name, initalError) {
    var _this;

    _classCallCheck(this, OptimizerError);

    _this = _possibleConstructorReturn(this, (OptimizerError.__proto__ || Object.getPrototypeOf(OptimizerError)).call(this, "Error while optimizing: " + name + ": " + initalError.message));
    _this.stack = initalError.stack;
    return _this;
  }

  return OptimizerError;
}(Error);

var decoderOpts = {
  ignoreCodeSection: true,
  ignoreDataSection: true
};
function shrinkPaddedLEB128(uint8Buffer) {
  try {
    var ast = (0,_webassemblyjs_wasm_parser__WEBPACK_IMPORTED_MODULE_0__.decode)(uint8Buffer.buffer, decoderOpts);
    return (0,_leb128_js__WEBPACK_IMPORTED_MODULE_1__.shrinkPaddedLEB128)(ast, uint8Buffer);
  } catch (e) {
    throw new OptimizerError("shrinkPaddedLEB128", e);
  }
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-opt/esm/leb128.js":
/*!************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-opt/esm/leb128.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shrinkPaddedLEB128": () => (/* binding */ shrinkPaddedLEB128)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");
/* harmony import */ var _webassemblyjs_wasm_gen_lib_encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/wasm-gen/lib/encoder */ "./node_modules/@webassemblyjs/wasm-gen/lib/encoder/index.js");
/* harmony import */ var _webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/helper-buffer */ "./node_modules/@webassemblyjs/helper-buffer/esm/index.js");




function shiftFollowingSections(ast, _ref, deltaInSizeEncoding) {
  var section = _ref.section;
  // Once we hit our section every that is after needs to be shifted by the delta
  var encounteredSection = false;
  (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__.traverse)(ast, {
    SectionMetadata: function SectionMetadata(path) {
      if (path.node.section === section) {
        encounteredSection = true;
        return;
      }

      if (encounteredSection === true) {
        (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__.shiftSection)(ast, path.node, deltaInSizeEncoding);
      }
    }
  });
}

function shrinkPaddedLEB128(ast, uint8Buffer) {
  (0,_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_0__.traverse)(ast, {
    SectionMetadata: function SectionMetadata(_ref2) {
      var node = _ref2.node;

      /**
       * Section size
       */
      {
        var newu32Encoded = (0,_webassemblyjs_wasm_gen_lib_encoder__WEBPACK_IMPORTED_MODULE_1__.encodeU32)(node.size.value);
        var newu32EncodedLen = newu32Encoded.length;
        var start = node.size.loc.start.column;
        var end = node.size.loc.end.column;
        var oldu32EncodedLen = end - start;

        if (newu32EncodedLen !== oldu32EncodedLen) {
          var deltaInSizeEncoding = oldu32EncodedLen - newu32EncodedLen;
          uint8Buffer = (0,_webassemblyjs_helper_buffer__WEBPACK_IMPORTED_MODULE_2__.overrideBytesInBuffer)(uint8Buffer, start, end, newu32Encoded);
          shiftFollowingSections(ast, node, -deltaInSizeEncoding);
        }
      }
    }
  });
  return uint8Buffer;
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-parser/esm/decoder.js":
/*!****************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-parser/esm/decoder.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
/* harmony import */ var _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @webassemblyjs/helper-api-error */ "./node_modules/@webassemblyjs/helper-api-error/esm/index.js");
/* harmony import */ var _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/ieee754 */ "./node_modules/@webassemblyjs/ieee754/esm/index.js");
/* harmony import */ var _webassemblyjs_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @webassemblyjs/utf8 */ "./node_modules/@webassemblyjs/utf8/esm/index.js");
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");
/* harmony import */ var _webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @webassemblyjs/leb128 */ "./node_modules/@webassemblyjs/leb128/esm/index.js");
/* harmony import */ var _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @webassemblyjs/helper-wasm-bytecode */ "./node_modules/@webassemblyjs/helper-wasm-bytecode/esm/index.js");
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }








function toHex(n) {
  return "0x" + Number(n).toString(16);
}

function byteArrayEq(l, r) {
  if (l.length !== r.length) {
    return false;
  }

  for (var i = 0; i < l.length; i++) {
    if (l[i] !== r[i]) {
      return false;
    }
  }

  return true;
}

function decode(ab, opts) {
  var buf = new Uint8Array(ab);
  var getUniqueName = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.getUniqueNameGenerator();
  var offset = 0;

  function getPosition() {
    return {
      line: -1,
      column: offset
    };
  }

  function dump(b, msg) {
    if (opts.dump === false) return;
    var pad = "\t\t\t\t\t\t\t\t\t\t";
    var str = "";

    if (b.length < 5) {
      str = b.map(toHex).join(" ");
    } else {
      str = "...";
    }

    console.log(toHex(offset) + ":\t", str, pad, ";", msg);
  }

  function dumpSep(msg) {
    if (opts.dump === false) return;
    console.log(";", msg);
  }
  /**
   * TODO(sven): we can atually use a same structure
   * we are adding incrementally new features
   */


  var state = {
    elementsInFuncSection: [],
    elementsInExportSection: [],
    elementsInCodeSection: [],

    /**
     * Decode memory from:
     * - Memory section
     */
    memoriesInModule: [],

    /**
     * Decoded types from:
     * - Type section
     */
    typesInModule: [],

    /**
     * Decoded functions from:
     * - Function section
     * - Import section
     */
    functionsInModule: [],

    /**
     * Decoded tables from:
     * - Table section
     */
    tablesInModule: [],

    /**
     * Decoded globals from:
     * - Global section
     */
    globalsInModule: []
  };

  function isEOF() {
    return offset >= buf.length;
  }

  function eatBytes(n) {
    offset = offset + n;
  }

  function readBytesAtOffset(_offset, numberOfBytes) {
    var arr = [];

    for (var i = 0; i < numberOfBytes; i++) {
      arr.push(buf[_offset + i]);
    }

    return arr;
  }

  function readBytes(numberOfBytes) {
    return readBytesAtOffset(offset, numberOfBytes);
  }

  function readF64() {
    var bytes = readBytes(_webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F64);
    var value = _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.decodeF64(bytes);

    if (Math.sign(value) * value === Infinity) {
      return {
        value: Math.sign(value),
        inf: true,
        nextIndex: _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F64
      };
    }

    if (isNaN(value)) {
      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
      var mantissa = 0;

      for (var i = 0; i < bytes.length - 2; ++i) {
        mantissa += bytes[i] * Math.pow(256, i);
      }

      mantissa += bytes[bytes.length - 2] % 16 * Math.pow(256, bytes.length - 2);
      return {
        value: sign * mantissa,
        nan: true,
        nextIndex: _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F64
      };
    }

    return {
      value: value,
      nextIndex: _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F64
    };
  }

  function readF32() {
    var bytes = readBytes(_webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F32);
    var value = _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.decodeF32(bytes);

    if (Math.sign(value) * value === Infinity) {
      return {
        value: Math.sign(value),
        inf: true,
        nextIndex: _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F32
      };
    }

    if (isNaN(value)) {
      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
      var mantissa = 0;

      for (var i = 0; i < bytes.length - 2; ++i) {
        mantissa += bytes[i] * Math.pow(256, i);
      }

      mantissa += bytes[bytes.length - 2] % 128 * Math.pow(256, bytes.length - 2);
      return {
        value: sign * mantissa,
        nan: true,
        nextIndex: _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F32
      };
    }

    return {
      value: value,
      nextIndex: _webassemblyjs_ieee754__WEBPACK_IMPORTED_MODULE_1__.NUMBER_OF_BYTE_F32
    };
  }

  function readUTF8String() {
    var lenu32 = readU32(); // Don't eat any bytes. Instead, peek ahead of the current offset using
    // readBytesAtOffset below. This keeps readUTF8String neutral with respect
    // to the current offset, just like the other readX functions.

    var strlen = lenu32.value;
    dump([strlen], "string length");
    var bytes = readBytesAtOffset(offset + lenu32.nextIndex, strlen);
    var value = _webassemblyjs_utf8__WEBPACK_IMPORTED_MODULE_2__.decode(bytes);
    return {
      value: value,
      nextIndex: strlen + lenu32.nextIndex
    };
  }
  /**
   * Decode an unsigned 32bits integer
   *
   * The length will be handled by the leb librairy, we pass the max number of
   * byte.
   */


  function readU32() {
    var bytes = readBytes(_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.MAX_NUMBER_OF_BYTE_U32);
    var buffer = Buffer.from(bytes);
    return (0,_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.decodeUInt32)(buffer);
  }

  function readVaruint32() {
    // where 32 bits = max 4 bytes
    var bytes = readBytes(4);
    var buffer = Buffer.from(bytes);
    return (0,_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.decodeUInt32)(buffer);
  }

  function readVaruint7() {
    // where 7 bits = max 1 bytes
    var bytes = readBytes(1);
    var buffer = Buffer.from(bytes);
    return (0,_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.decodeUInt32)(buffer);
  }
  /**
   * Decode a signed 32bits interger
   */


  function read32() {
    var bytes = readBytes(_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.MAX_NUMBER_OF_BYTE_U32);
    var buffer = Buffer.from(bytes);
    return (0,_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.decodeInt32)(buffer);
  }
  /**
   * Decode a signed 64bits integer
   */


  function read64() {
    var bytes = readBytes(_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.MAX_NUMBER_OF_BYTE_U64);
    var buffer = Buffer.from(bytes);
    return (0,_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.decodeInt64)(buffer);
  }

  function readU64() {
    var bytes = readBytes(_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.MAX_NUMBER_OF_BYTE_U64);
    var buffer = Buffer.from(bytes);
    return (0,_webassemblyjs_leb128__WEBPACK_IMPORTED_MODULE_4__.decodeUInt64)(buffer);
  }

  function readByte() {
    return readBytes(1)[0];
  }

  function parseModuleHeader() {
    if (isEOF() === true || offset + 4 > buf.length) {
      throw new Error("unexpected end");
    }

    var header = readBytes(4);

    if (byteArrayEq(_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.magicModuleHeader, header) === false) {
      throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("magic header not detected");
    }

    dump(header, "wasm magic header");
    eatBytes(4);
  }

  function parseVersion() {
    if (isEOF() === true || offset + 4 > buf.length) {
      throw new Error("unexpected end");
    }

    var version = readBytes(4);

    if (byteArrayEq(_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.moduleVersion, version) === false) {
      throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("unknown binary version");
    }

    dump(version, "wasm version");
    eatBytes(4);
  }

  function parseVec(cast) {
    var u32 = readU32();
    var length = u32.value;
    eatBytes(u32.nextIndex);
    dump([length], "number");

    if (length === 0) {
      return [];
    }

    var elements = [];

    for (var i = 0; i < length; i++) {
      var byte = readByte();
      eatBytes(1);
      var value = cast(byte);
      dump([byte], value);

      if (typeof value === "undefined") {
        throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Internal failure: parseVec could not cast the value");
      }

      elements.push(value);
    }

    return elements;
  } // Type section
  // https://webassembly.github.io/spec/binary/modules.html#binary-typesec


  function parseTypeSection(numberOfTypes) {
    var typeInstructionNodes = [];
    dump([numberOfTypes], "num types");

    for (var i = 0; i < numberOfTypes; i++) {
      var _startLoc = getPosition();

      dumpSep("type " + i);
      var type = readByte();
      eatBytes(1);

      if (type == _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.types.func) {
        dump([type], "func");
        var paramValtypes = parseVec(function (b) {
          return _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.valtypes[b];
        });
        var params = paramValtypes.map(function (v) {
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.funcParam(
          /*valtype*/
          v);
        });
        var result = parseVec(function (b) {
          return _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.valtypes[b];
        });
        typeInstructionNodes.push(function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.typeInstruction(undefined, _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.signature(params, result)), endLoc, _startLoc);
        }());
        state.typesInModule.push({
          params: params,
          result: result
        });
      } else {
        throw new Error("Unsupported type: " + toHex(type));
      }
    }

    return typeInstructionNodes;
  } // Import section
  // https://webassembly.github.io/spec/binary/modules.html#binary-importsec


  function parseImportSection(numberOfImports) {
    var imports = [];

    for (var i = 0; i < numberOfImports; i++) {
      dumpSep("import header " + i);

      var _startLoc2 = getPosition();
      /**
       * Module name
       */


      var moduleName = readUTF8String();
      eatBytes(moduleName.nextIndex);
      dump([], "module name (".concat(moduleName.value, ")"));
      /**
       * Name
       */

      var name = readUTF8String();
      eatBytes(name.nextIndex);
      dump([], "name (".concat(name.value, ")"));
      /**
       * Import descr
       */

      var descrTypeByte = readByte();
      eatBytes(1);
      var descrType = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.importTypes[descrTypeByte];
      dump([descrTypeByte], "import kind");

      if (typeof descrType === "undefined") {
        throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unknown import description type: " + toHex(descrTypeByte));
      }

      var importDescr = void 0;

      if (descrType === "func") {
        var indexU32 = readU32();
        var typeindex = indexU32.value;
        eatBytes(indexU32.nextIndex);
        dump([typeindex], "type index");
        var signature = state.typesInModule[typeindex];

        if (typeof signature === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("function signature not found (".concat(typeindex, ")"));
        }

        var id = getUniqueName("func");
        importDescr = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.funcImportDescr(id, _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.signature(signature.params, signature.result));
        state.functionsInModule.push({
          id: _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.identifier(name.value),
          signature: signature,
          isExternal: true
        });
      } else if (descrType === "global") {
        importDescr = parseGlobalType();
        var globalNode = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.global(importDescr, []);
        state.globalsInModule.push(globalNode);
      } else if (descrType === "table") {
        importDescr = parseTableType(i);
      } else if (descrType === "mem") {
        var memoryNode = parseMemoryType(0);
        state.memoriesInModule.push(memoryNode);
        importDescr = memoryNode;
      } else {
        throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unsupported import of type: " + descrType);
      }

      imports.push(function () {
        var endLoc = getPosition();
        return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.moduleImport(moduleName.value, name.value, importDescr), endLoc, _startLoc2);
      }());
    }

    return imports;
  } // Function section
  // https://webassembly.github.io/spec/binary/modules.html#function-section


  function parseFuncSection(numberOfFunctions) {
    dump([numberOfFunctions], "num funcs");

    for (var i = 0; i < numberOfFunctions; i++) {
      var indexU32 = readU32();
      var typeindex = indexU32.value;
      eatBytes(indexU32.nextIndex);
      dump([typeindex], "type index");
      var signature = state.typesInModule[typeindex];

      if (typeof signature === "undefined") {
        throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("function signature not found (".concat(typeindex, ")"));
      } // preserve anonymous, a name might be resolved later


      var id = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withRaw(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.identifier(getUniqueName("func")), "");
      state.functionsInModule.push({
        id: id,
        signature: signature,
        isExternal: false
      });
    }
  } // Export section
  // https://webassembly.github.io/spec/binary/modules.html#export-section


  function parseExportSection(numberOfExport) {
    dump([numberOfExport], "num exports"); // Parse vector of exports

    for (var i = 0; i < numberOfExport; i++) {
      var _startLoc3 = getPosition();
      /**
       * Name
       */


      var name = readUTF8String();
      eatBytes(name.nextIndex);
      dump([], "export name (".concat(name.value, ")"));
      /**
       * exportdescr
       */

      var typeIndex = readByte();
      eatBytes(1);
      dump([typeIndex], "export kind");
      var indexu32 = readU32();
      var index = indexu32.value;
      eatBytes(indexu32.nextIndex);
      dump([index], "export index");
      var id = void 0,
          signature = void 0;

      if (_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.exportTypes[typeIndex] === "Func") {
        var func = state.functionsInModule[index];

        if (typeof func === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("unknown function (".concat(index, ")"));
        }

        id = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(index, String(index));
        signature = func.signature;
      } else if (_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.exportTypes[typeIndex] === "Table") {
        var table = state.tablesInModule[index];

        if (typeof table === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("unknown table ".concat(index));
        }

        id = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else if (_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.exportTypes[typeIndex] === "Mem") {
        var memNode = state.memoriesInModule[index];

        if (typeof memNode === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("unknown memory ".concat(index));
        }

        id = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else if (_webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.exportTypes[typeIndex] === "Global") {
        var global = state.globalsInModule[index];

        if (typeof global === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("unknown global ".concat(index));
        }

        id = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(index, String(index));
        signature = null;
      } else {
        console.warn("Unsupported export type: " + toHex(typeIndex));
        return;
      }

      var endLoc = getPosition();
      state.elementsInExportSection.push({
        name: name.value,
        type: _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.exportTypes[typeIndex],
        signature: signature,
        id: id,
        index: index,
        endLoc: endLoc,
        startLoc: _startLoc3
      });
    }
  } // Code section
  // https://webassembly.github.io/spec/binary/modules.html#code-section


  function parseCodeSection(numberOfFuncs) {
    dump([numberOfFuncs], "number functions"); // Parse vector of function

    for (var i = 0; i < numberOfFuncs; i++) {
      var _startLoc4 = getPosition();

      dumpSep("function body " + i); // the u32 size of the function code in bytes
      // Ignore it for now

      var bodySizeU32 = readU32();
      eatBytes(bodySizeU32.nextIndex);
      dump([bodySizeU32.value], "function body size");
      var code = [];
      /**
       * Parse locals
       */

      var funcLocalNumU32 = readU32();
      var funcLocalNum = funcLocalNumU32.value;
      eatBytes(funcLocalNumU32.nextIndex);
      dump([funcLocalNum], "num locals");
      var locals = [];

      for (var _i = 0; _i < funcLocalNum; _i++) {
        var _startLoc5 = getPosition();

        var localCountU32 = readU32();
        var localCount = localCountU32.value;
        eatBytes(localCountU32.nextIndex);
        dump([localCount], "num local");
        var valtypeByte = readByte();
        eatBytes(1);
        var type = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.valtypes[valtypeByte];
        var args = [];

        for (var _i2 = 0; _i2 < localCount; _i2++) {
          args.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.valtypeLiteral(type));
        }

        var localNode = function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.instruction("local", args), endLoc, _startLoc5);
        }();

        locals.push(localNode);
        dump([valtypeByte], type);

        if (typeof type === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unexpected valtype: " + toHex(valtypeByte));
        }
      }

      code.push.apply(code, locals); // Decode instructions until the end

      parseInstructionBlock(code);
      var endLoc = getPosition();
      state.elementsInCodeSection.push({
        code: code,
        locals: locals,
        endLoc: endLoc,
        startLoc: _startLoc4,
        bodySize: bodySizeU32.value
      });
    }
  }

  function parseInstructionBlock(code) {
    while (true) {
      var _startLoc6 = getPosition();

      var instructionAlreadyCreated = false;
      var instructionByte = readByte();
      eatBytes(1);

      if (instructionByte === 0xfe) {
        instructionByte = 0xfe00 + readByte();
        eatBytes(1);
      }

      var instruction = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.symbolsByByte[instructionByte];

      if (typeof instruction === "undefined") {
        throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unexpected instruction: " + toHex(instructionByte));
      }

      if (typeof instruction.object === "string") {
        dump([instructionByte], "".concat(instruction.object, ".").concat(instruction.name));
      } else {
        dump([instructionByte], instruction.name);
      }
      /**
       * End of the function
       */


      if (instruction.name === "end") {
        var node = function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.instruction(instruction.name), endLoc, _startLoc6);
        }();

        code.push(node);
        break;
      }

      var args = [];

      if (instruction.name === "loop") {
        var _startLoc7 = getPosition();

        var blocktypeByte = readByte();
        eatBytes(1);
        var blocktype = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.blockTypes[blocktypeByte];
        dump([blocktypeByte], "blocktype");

        if (typeof blocktype === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unexpected blocktype: " + toHex(blocktypeByte));
        }

        var instr = [];
        parseInstructionBlock(instr); // preserve anonymous

        var label = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withRaw(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.identifier(getUniqueName("loop")), "");

        var loopNode = function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.loopInstruction(label, blocktype, instr), endLoc, _startLoc7);
        }();

        code.push(loopNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "if") {
        var _startLoc8 = getPosition();

        var _blocktypeByte = readByte();

        eatBytes(1);
        var _blocktype = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.blockTypes[_blocktypeByte];
        dump([_blocktypeByte], "blocktype");

        if (typeof _blocktype === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unexpected blocktype: " + toHex(_blocktypeByte));
        }

        var testIndex = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withRaw(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.identifier(getUniqueName("if")), "");
        var ifBody = [];
        parseInstructionBlock(ifBody); // Defaults to no alternate

        var elseIndex = 0;

        for (elseIndex = 0; elseIndex < ifBody.length; ++elseIndex) {
          var _instr = ifBody[elseIndex];

          if (_instr.type === "Instr" && _instr.id === "else") {
            break;
          }
        }

        var consequentInstr = ifBody.slice(0, elseIndex);
        var alternate = ifBody.slice(elseIndex + 1); // wast sugar

        var testInstrs = [];

        var ifNode = function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.ifInstruction(testIndex, testInstrs, _blocktype, consequentInstr, alternate), endLoc, _startLoc8);
        }();

        code.push(ifNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "block") {
        var _startLoc9 = getPosition();

        var _blocktypeByte2 = readByte();

        eatBytes(1);
        var _blocktype2 = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.blockTypes[_blocktypeByte2];
        dump([_blocktypeByte2], "blocktype");

        if (typeof _blocktype2 === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unexpected blocktype: " + toHex(_blocktypeByte2));
        }

        var _instr2 = [];
        parseInstructionBlock(_instr2); // preserve anonymous

        var _label = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withRaw(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.identifier(getUniqueName("block")), "");

        var blockNode = function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.blockInstruction(_label, _instr2, _blocktype2), endLoc, _startLoc9);
        }();

        code.push(blockNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "call") {
        var indexu32 = readU32();
        var index = indexu32.value;
        eatBytes(indexu32.nextIndex);
        dump([index], "index");

        var callNode = function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.callInstruction(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.indexLiteral(index)), endLoc, _startLoc6);
        }();

        code.push(callNode);
        instructionAlreadyCreated = true;
      } else if (instruction.name === "call_indirect") {
        var _startLoc10 = getPosition();

        var indexU32 = readU32();
        var typeindex = indexU32.value;
        eatBytes(indexU32.nextIndex);
        dump([typeindex], "type index");
        var signature = state.typesInModule[typeindex];

        if (typeof signature === "undefined") {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("call_indirect signature not found (".concat(typeindex, ")"));
        }

        var _callNode = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.callIndirectInstruction(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.signature(signature.params, signature.result), []);

        var flagU32 = readU32();
        var flag = flagU32.value; // 0x00 - reserved byte

        eatBytes(flagU32.nextIndex);

        if (flag !== 0) {
          throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("zero flag expected");
        }

        code.push(function () {
          var endLoc = getPosition();
          return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_callNode, endLoc, _startLoc10);
        }());
        instructionAlreadyCreated = true;
      } else if (instruction.name === "br_table") {
        var indicesu32 = readU32();
        var indices = indicesu32.value;
        eatBytes(indicesu32.nextIndex);
        dump([indices], "num indices");

        for (var i = 0; i <= indices; i++) {
          var _indexu = readU32();

          var _index = _indexu.value;
          eatBytes(_indexu.nextIndex);
          dump([_index], "index");
          args.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(_indexu.value.toString(), "u32"));
        }
      } else if (instructionByte >= 0x28 && instructionByte <= 0x40) {
        /**
         * Memory instructions
         */
        if (instruction.name === "grow_memory" || instruction.name === "current_memory") {
          var _indexU = readU32();

          var _index2 = _indexU.value;
          eatBytes(_indexU.nextIndex);

          if (_index2 !== 0) {
            throw new Error("zero flag expected");
          }

          dump([_index2], "index");
        } else {
          var aligun32 = readU32();
          var align = aligun32.value;
          eatBytes(aligun32.nextIndex);
          dump([align], "align");
          var offsetu32 = readU32();
          var _offset2 = offsetu32.value;
          eatBytes(offsetu32.nextIndex);
          dump([_offset2], "offset");
        }
      } else if (instructionByte >= 0x41 && instructionByte <= 0x44) {
        /**
         * Numeric instructions
         */
        if (instruction.object === "i32") {
          var value32 = read32();
          var value = value32.value;
          eatBytes(value32.nextIndex);
          dump([value], "i32 value");
          args.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(value));
        }

        if (instruction.object === "u32") {
          var valueu32 = readU32();
          var _value = valueu32.value;
          eatBytes(valueu32.nextIndex);
          dump([_value], "u32 value");
          args.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(_value));
        }

        if (instruction.object === "i64") {
          var value64 = read64();
          var _value2 = value64.value;
          eatBytes(value64.nextIndex);
          dump([Number(_value2.toString())], "i64 value");
          var high = _value2.high,
              low = _value2.low;
          var _node = {
            type: "LongNumberLiteral",
            value: {
              high: high,
              low: low
            }
          };
          args.push(_node);
        }

        if (instruction.object === "u64") {
          var valueu64 = readU64();
          var _value3 = valueu64.value;
          eatBytes(valueu64.nextIndex);
          dump([Number(_value3.toString())], "u64 value");
          var _high = _value3.high,
              _low = _value3.low;
          var _node2 = {
            type: "LongNumberLiteral",
            value: {
              high: _high,
              low: _low
            }
          };
          args.push(_node2);
        }

        if (instruction.object === "f32") {
          var valuef32 = readF32();
          var _value4 = valuef32.value;
          eatBytes(valuef32.nextIndex);
          dump([_value4], "f32 value");
          args.push( // $FlowIgnore
          _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.floatLiteral(_value4, valuef32.nan, valuef32.inf, String(_value4)));
        }

        if (instruction.object === "f64") {
          var valuef64 = readF64();
          var _value5 = valuef64.value;
          eatBytes(valuef64.nextIndex);
          dump([_value5], "f64 value");
          args.push( // $FlowIgnore
          _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.floatLiteral(_value5, valuef64.nan, valuef64.inf, String(_value5)));
        }
      } else if (instructionByte >= 0xfe00 && instructionByte <= 0xfeff) {
        /**
         * Atomic memory instructions
         */
        var align32 = readU32();
        var _align = align32.value;
        eatBytes(align32.nextIndex);
        dump([_align], "align");

        var _offsetu = readU32();

        var _offset3 = _offsetu.value;
        eatBytes(_offsetu.nextIndex);
        dump([_offset3], "offset");
      } else {
        for (var _i3 = 0; _i3 < instruction.numberOfArgs; _i3++) {
          var u32 = readU32();
          eatBytes(u32.nextIndex);
          dump([u32.value], "argument " + _i3);
          args.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(u32.value));
        }
      }

      if (instructionAlreadyCreated === false) {
        if (typeof instruction.object === "string") {
          var _node3 = function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.objectInstruction(instruction.name, instruction.object, args), endLoc, _startLoc6);
          }();

          code.push(_node3);
        } else {
          var _node4 = function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.instruction(instruction.name, args), endLoc, _startLoc6);
          }();

          code.push(_node4);
        }
      }
    }
  } // https://webassembly.github.io/spec/core/binary/types.html#limits


  function parseLimits() {
    var limitType = readByte();
    eatBytes(1);
    var shared = limitType === 0x03;
    dump([limitType], "limit type" + (shared ? " (shared)" : ""));
    var min, max;

    if (limitType === 0x01 || limitType === 0x03 // shared limits
    ) {
        var u32min = readU32();
        min = parseInt(u32min.value);
        eatBytes(u32min.nextIndex);
        dump([min], "min");
        var u32max = readU32();
        max = parseInt(u32max.value);
        eatBytes(u32max.nextIndex);
        dump([max], "max");
      }

    if (limitType === 0x00) {
      var _u32min = readU32();

      min = parseInt(_u32min.value);
      eatBytes(_u32min.nextIndex);
      dump([min], "min");
    }

    return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.limit(min, max, shared);
  } // https://webassembly.github.io/spec/core/binary/types.html#binary-tabletype


  function parseTableType(index) {
    var name = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withRaw(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.identifier(getUniqueName("table")), String(index));
    var elementTypeByte = readByte();
    eatBytes(1);
    dump([elementTypeByte], "element type");
    var elementType = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.tableTypes[elementTypeByte];

    if (typeof elementType === "undefined") {
      throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unknown element type in table: " + toHex(elementType));
    }

    var limits = parseLimits();
    return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.table(elementType, limits, name);
  } // https://webassembly.github.io/spec/binary/types.html#global-types


  function parseGlobalType() {
    var valtypeByte = readByte();
    eatBytes(1);
    var type = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.valtypes[valtypeByte];
    dump([valtypeByte], type);

    if (typeof type === "undefined") {
      throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unknown valtype: " + toHex(valtypeByte));
    }

    var globalTypeByte = readByte();
    eatBytes(1);
    var globalType = _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.globalTypes[globalTypeByte];
    dump([globalTypeByte], "global type (".concat(globalType, ")"));

    if (typeof globalType === "undefined") {
      throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Invalid mutability: " + toHex(globalTypeByte));
    }

    return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.globalType(type, globalType);
  } // function parseNameModule() {
  //   const lenu32 = readVaruint32();
  //   eatBytes(lenu32.nextIndex);
  //   console.log("len", lenu32);
  //   const strlen = lenu32.value;
  //   dump([strlen], "string length");
  //   const bytes = readBytes(strlen);
  //   eatBytes(strlen);
  //   const value = utf8.decode(bytes);
  //   return [t.moduleNameMetadata(value)];
  // }
  // this section contains an array of function names and indices


  function parseNameSectionFunctions() {
    var functionNames = [];
    var numberOfFunctionsu32 = readU32();
    var numbeOfFunctions = numberOfFunctionsu32.value;
    eatBytes(numberOfFunctionsu32.nextIndex);

    for (var i = 0; i < numbeOfFunctions; i++) {
      var indexu32 = readU32();
      var index = indexu32.value;
      eatBytes(indexu32.nextIndex);
      var name = readUTF8String();
      eatBytes(name.nextIndex);
      functionNames.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.functionNameMetadata(name.value, index));
    }

    return functionNames;
  }

  function parseNameSectionLocals() {
    var localNames = [];
    var numbeOfFunctionsu32 = readU32();
    var numbeOfFunctions = numbeOfFunctionsu32.value;
    eatBytes(numbeOfFunctionsu32.nextIndex);

    for (var i = 0; i < numbeOfFunctions; i++) {
      var functionIndexu32 = readU32();
      var functionIndex = functionIndexu32.value;
      eatBytes(functionIndexu32.nextIndex);
      var numLocalsu32 = readU32();
      var numLocals = numLocalsu32.value;
      eatBytes(numLocalsu32.nextIndex);

      for (var _i4 = 0; _i4 < numLocals; _i4++) {
        var localIndexu32 = readU32();
        var localIndex = localIndexu32.value;
        eatBytes(localIndexu32.nextIndex);
        var name = readUTF8String();
        eatBytes(name.nextIndex);
        localNames.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.localNameMetadata(name.value, localIndex, functionIndex));
      }
    }

    return localNames;
  } // this is a custom section used for name resolution
  // https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section


  function parseNameSection(remainingBytes) {
    var nameMetadata = [];
    var initialOffset = offset;

    while (offset - initialOffset < remainingBytes) {
      // name_type
      var sectionTypeByte = readVaruint7();
      eatBytes(sectionTypeByte.nextIndex); // name_payload_len

      var subSectionSizeInBytesu32 = readVaruint32();
      eatBytes(subSectionSizeInBytesu32.nextIndex);

      switch (sectionTypeByte.value) {
        // case 0: {
        // TODO(sven): re-enable that
        // Current status: it seems that when we decode the module's name
        // no name_payload_len is used.
        //
        // See https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section
        //
        // nameMetadata.push(...parseNameModule());
        // break;
        // }
        case 1:
          {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionFunctions()));
            break;
          }

        case 2:
          {
            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionLocals()));
            break;
          }

        default:
          {
            // skip unknown subsection
            eatBytes(subSectionSizeInBytesu32.value);
          }
      }
    }

    return nameMetadata;
  } // this is a custom section used for information about the producers
  // https://github.com/WebAssembly/tool-conventions/blob/master/ProducersSection.md


  function parseProducersSection() {
    var metadata = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.producersSectionMetadata([]); // field_count

    var sectionTypeByte = readVaruint32();
    eatBytes(sectionTypeByte.nextIndex);
    dump([sectionTypeByte.value], "num of producers");
    var fields = {
      language: [],
      "processed-by": [],
      sdk: []
    }; // fields

    for (var fieldI = 0; fieldI < sectionTypeByte.value; fieldI++) {
      // field_name
      var fieldName = readUTF8String();
      eatBytes(fieldName.nextIndex); // field_value_count

      var valueCount = readVaruint32();
      eatBytes(valueCount.nextIndex); // field_values

      for (var producerI = 0; producerI < valueCount.value; producerI++) {
        var producerName = readUTF8String();
        eatBytes(producerName.nextIndex);
        var producerVersion = readUTF8String();
        eatBytes(producerVersion.nextIndex);
        fields[fieldName.value].push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.producerMetadataVersionedName(producerName.value, producerVersion.value));
      }

      metadata.producers.push(fields[fieldName.value]);
    }

    return metadata;
  }

  function parseGlobalSection(numberOfGlobals) {
    var globals = [];
    dump([numberOfGlobals], "num globals");

    for (var i = 0; i < numberOfGlobals; i++) {
      var _startLoc11 = getPosition();

      var globalType = parseGlobalType();
      /**
       * Global expressions
       */

      var init = [];
      parseInstructionBlock(init);

      var node = function () {
        var endLoc = getPosition();
        return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.global(globalType, init), endLoc, _startLoc11);
      }();

      globals.push(node);
      state.globalsInModule.push(node);
    }

    return globals;
  }

  function parseElemSection(numberOfElements) {
    var elems = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var _startLoc12 = getPosition();

      var tableindexu32 = readU32();
      var tableindex = tableindexu32.value;
      eatBytes(tableindexu32.nextIndex);
      dump([tableindex], "table index");
      /**
       * Parse instructions
       */

      var instr = [];
      parseInstructionBlock(instr);
      /**
       * Parse ( vector function index ) *
       */

      var indicesu32 = readU32();
      var indices = indicesu32.value;
      eatBytes(indicesu32.nextIndex);
      dump([indices], "num indices");
      var indexValues = [];

      for (var _i5 = 0; _i5 < indices; _i5++) {
        var indexu32 = readU32();
        var index = indexu32.value;
        eatBytes(indexu32.nextIndex);
        dump([index], "index");
        indexValues.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.indexLiteral(index));
      }

      var elemNode = function () {
        var endLoc = getPosition();
        return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.elem(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.indexLiteral(tableindex), instr, indexValues), endLoc, _startLoc12);
      }();

      elems.push(elemNode);
    }

    return elems;
  } // https://webassembly.github.io/spec/core/binary/types.html#memory-types


  function parseMemoryType(i) {
    var limits = parseLimits();
    return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.memory(limits, _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.indexLiteral(i));
  } // https://webassembly.github.io/spec/binary/modules.html#table-section


  function parseTableSection(numberOfElements) {
    var tables = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var tablesNode = parseTableType(i);
      state.tablesInModule.push(tablesNode);
      tables.push(tablesNode);
    }

    return tables;
  } // https://webassembly.github.io/spec/binary/modules.html#memory-section


  function parseMemorySection(numberOfElements) {
    var memories = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var memoryNode = parseMemoryType(i);
      state.memoriesInModule.push(memoryNode);
      memories.push(memoryNode);
    }

    return memories;
  } // https://webassembly.github.io/spec/binary/modules.html#binary-startsec


  function parseStartSection() {
    var startLoc = getPosition();
    var u32 = readU32();
    var startFuncIndex = u32.value;
    eatBytes(u32.nextIndex);
    dump([startFuncIndex], "index");
    return function () {
      var endLoc = getPosition();
      return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.start(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.indexLiteral(startFuncIndex)), endLoc, startLoc);
    }();
  } // https://webassembly.github.io/spec/binary/modules.html#data-section


  function parseDataSection(numberOfElements) {
    var dataEntries = [];
    dump([numberOfElements], "num elements");

    for (var i = 0; i < numberOfElements; i++) {
      var memoryIndexu32 = readU32();
      var memoryIndex = memoryIndexu32.value;
      eatBytes(memoryIndexu32.nextIndex);
      dump([memoryIndex], "memory index");
      var instrs = [];
      parseInstructionBlock(instrs);
      var hasExtraInstrs = instrs.filter(function (i) {
        return i.id !== "end";
      }).length !== 1;

      if (hasExtraInstrs) {
        throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("data section offset must be a single instruction");
      }

      var bytes = parseVec(function (b) {
        return b;
      });
      dump([], "init");
      dataEntries.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.data(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.memIndexLiteral(memoryIndex), instrs[0], _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.byteArray(bytes)));
    }

    return dataEntries;
  } // https://webassembly.github.io/spec/binary/modules.html#binary-section


  function parseSection(sectionIndex) {
    var sectionId = readByte();
    eatBytes(1);

    if (sectionId >= sectionIndex || sectionIndex === _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.custom) {
      sectionIndex = sectionId + 1;
    } else {
      if (sectionId !== _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.custom) throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unexpected section: " + toHex(sectionId));
    }

    var nextSectionIndex = sectionIndex;
    var startOffset = offset;
    var startLoc = getPosition();
    var u32 = readU32();
    var sectionSizeInBytes = u32.value;
    eatBytes(u32.nextIndex);

    var sectionSizeInBytesNode = function () {
      var endLoc = getPosition();
      return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(sectionSizeInBytes), endLoc, startLoc);
    }();

    switch (sectionId) {
      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.type:
        {
          dumpSep("section Type");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc13 = getPosition();

          var _u = readU32();

          var numberOfTypes = _u.value;
          eatBytes(_u.nextIndex);

          var _metadata = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("type", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfTypes), endLoc, _startLoc13);
          }());

          var _nodes = parseTypeSection(numberOfTypes);

          return {
            nodes: _nodes,
            metadata: _metadata,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.table:
        {
          dumpSep("section Table");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc14 = getPosition();

          var _u2 = readU32();

          var numberOfTable = _u2.value;
          eatBytes(_u2.nextIndex);
          dump([numberOfTable], "num tables");

          var _metadata2 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("table", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfTable), endLoc, _startLoc14);
          }());

          var _nodes2 = parseTableSection(numberOfTable);

          return {
            nodes: _nodes2,
            metadata: _metadata2,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.import:
        {
          dumpSep("section Import");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc15 = getPosition();

          var numberOfImportsu32 = readU32();
          var numberOfImports = numberOfImportsu32.value;
          eatBytes(numberOfImportsu32.nextIndex);
          dump([numberOfImports], "number of imports");

          var _metadata3 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("import", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfImports), endLoc, _startLoc15);
          }());

          var _nodes3 = parseImportSection(numberOfImports);

          return {
            nodes: _nodes3,
            metadata: _metadata3,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.func:
        {
          dumpSep("section Function");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc16 = getPosition();

          var numberOfFunctionsu32 = readU32();
          var numberOfFunctions = numberOfFunctionsu32.value;
          eatBytes(numberOfFunctionsu32.nextIndex);

          var _metadata4 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("func", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfFunctions), endLoc, _startLoc16);
          }());

          parseFuncSection(numberOfFunctions);
          var _nodes4 = [];
          return {
            nodes: _nodes4,
            metadata: _metadata4,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.export:
        {
          dumpSep("section Export");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc17 = getPosition();

          var _u3 = readU32();

          var numberOfExport = _u3.value;
          eatBytes(_u3.nextIndex);

          var _metadata5 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("export", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfExport), endLoc, _startLoc17);
          }());

          parseExportSection(numberOfExport);
          var _nodes5 = [];
          return {
            nodes: _nodes5,
            metadata: _metadata5,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.code:
        {
          dumpSep("section Code");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc18 = getPosition();

          var _u4 = readU32();

          var numberOfFuncs = _u4.value;
          eatBytes(_u4.nextIndex);

          var _metadata6 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("code", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfFuncs), endLoc, _startLoc18);
          }());

          if (opts.ignoreCodeSection === true) {
            var remainingBytes = sectionSizeInBytes - _u4.nextIndex;
            eatBytes(remainingBytes); // eat the entire section
          } else {
            parseCodeSection(numberOfFuncs);
          }

          var _nodes6 = [];
          return {
            nodes: _nodes6,
            metadata: _metadata6,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.start:
        {
          dumpSep("section Start");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _metadata7 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("start", startOffset, sectionSizeInBytesNode);

          var _nodes7 = [parseStartSection()];
          return {
            nodes: _nodes7,
            metadata: _metadata7,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.element:
        {
          dumpSep("section Element");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc19 = getPosition();

          var numberOfElementsu32 = readU32();
          var numberOfElements = numberOfElementsu32.value;
          eatBytes(numberOfElementsu32.nextIndex);

          var _metadata8 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("element", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfElements), endLoc, _startLoc19);
          }());

          var _nodes8 = parseElemSection(numberOfElements);

          return {
            nodes: _nodes8,
            metadata: _metadata8,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.global:
        {
          dumpSep("section Global");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc20 = getPosition();

          var numberOfGlobalsu32 = readU32();
          var numberOfGlobals = numberOfGlobalsu32.value;
          eatBytes(numberOfGlobalsu32.nextIndex);

          var _metadata9 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("global", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(numberOfGlobals), endLoc, _startLoc20);
          }());

          var _nodes9 = parseGlobalSection(numberOfGlobals);

          return {
            nodes: _nodes9,
            metadata: _metadata9,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.memory:
        {
          dumpSep("section Memory");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _startLoc21 = getPosition();

          var _numberOfElementsu = readU32();

          var _numberOfElements = _numberOfElementsu.value;
          eatBytes(_numberOfElementsu.nextIndex);

          var _metadata10 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("memory", startOffset, sectionSizeInBytesNode, function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(_numberOfElements), endLoc, _startLoc21);
          }());

          var _nodes10 = parseMemorySection(_numberOfElements);

          return {
            nodes: _nodes10,
            metadata: _metadata10,
            nextSectionIndex: nextSectionIndex
          };
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.data:
        {
          dumpSep("section Data");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");

          var _metadata11 = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("data", startOffset, sectionSizeInBytesNode);

          var _startLoc22 = getPosition();

          var _numberOfElementsu2 = readU32();

          var _numberOfElements2 = _numberOfElementsu2.value;
          eatBytes(_numberOfElementsu2.nextIndex);

          _metadata11.vectorOfSize = function () {
            var endLoc = getPosition();
            return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.numberLiteralFromRaw(_numberOfElements2), endLoc, _startLoc22);
          }();

          if (opts.ignoreDataSection === true) {
            var _remainingBytes = sectionSizeInBytes - _numberOfElementsu2.nextIndex;

            eatBytes(_remainingBytes); // eat the entire section

            dumpSep("ignore data (" + sectionSizeInBytes + " bytes)");
            return {
              nodes: [],
              metadata: _metadata11,
              nextSectionIndex: nextSectionIndex
            };
          } else {
            var _nodes11 = parseDataSection(_numberOfElements2);

            return {
              nodes: _nodes11,
              metadata: _metadata11,
              nextSectionIndex: nextSectionIndex
            };
          }
        }

      case _webassemblyjs_helper_wasm_bytecode__WEBPACK_IMPORTED_MODULE_5__.default.sections.custom:
        {
          dumpSep("section Custom");
          dump([sectionId], "section code");
          dump([sectionSizeInBytes], "section size");
          var _metadata12 = [_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.sectionMetadata("custom", startOffset, sectionSizeInBytesNode)];
          var sectionName = readUTF8String();
          eatBytes(sectionName.nextIndex);
          dump([], "section name (".concat(sectionName.value, ")"));

          var _remainingBytes2 = sectionSizeInBytes - sectionName.nextIndex;

          if (sectionName.value === "name") {
            var initialOffset = offset;

            try {
              _metadata12.push.apply(_metadata12, _toConsumableArray(parseNameSection(_remainingBytes2)));
            } catch (e) {
              console.warn("Failed to decode custom \"name\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (initialOffset + _remainingBytes2));
            }
          } else if (sectionName.value === "producers") {
            var _initialOffset = offset;

            try {
              _metadata12.push(parseProducersSection());
            } catch (e) {
              console.warn("Failed to decode custom \"producers\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
              eatBytes(offset - (_initialOffset + _remainingBytes2));
            }
          } else {
            // We don't parse the custom section
            eatBytes(_remainingBytes2);
            dumpSep("ignore custom " + JSON.stringify(sectionName.value) + " section (" + _remainingBytes2 + " bytes)");
          }

          return {
            nodes: [],
            metadata: _metadata12,
            nextSectionIndex: nextSectionIndex
          };
        }
    }

    throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("Unexpected section: " + toHex(sectionId));
  }

  parseModuleHeader();
  parseVersion();
  var moduleFields = [];
  var sectionIndex = 0;
  var moduleMetadata = {
    sections: [],
    functionNames: [],
    localNames: [],
    producers: []
  };
  /**
   * All the generate declaration are going to be stored in our state
   */

  while (offset < buf.length) {
    var _parseSection = parseSection(sectionIndex),
        _nodes12 = _parseSection.nodes,
        _metadata13 = _parseSection.metadata,
        nextSectionIndex = _parseSection.nextSectionIndex;

    moduleFields.push.apply(moduleFields, _toConsumableArray(_nodes12));
    var metadataArray = Array.isArray(_metadata13) ? _metadata13 : [_metadata13];
    metadataArray.forEach(function (metadataItem) {
      if (metadataItem.type === "FunctionNameMetadata") {
        moduleMetadata.functionNames.push(metadataItem);
      } else if (metadataItem.type === "LocalNameMetadata") {
        moduleMetadata.localNames.push(metadataItem);
      } else if (metadataItem.type === "ProducersSectionMetadata") {
        moduleMetadata.producers.push(metadataItem);
      } else {
        moduleMetadata.sections.push(metadataItem);
      }
    }); // Ignore custom section

    if (nextSectionIndex) {
      sectionIndex = nextSectionIndex;
    }
  }
  /**
   * Transform the state into AST nodes
   */


  var funcIndex = 0;
  state.functionsInModule.forEach(function (func) {
    var params = func.signature.params;
    var result = func.signature.result;
    var body = []; // External functions doesn't provide any code, can skip it here

    if (func.isExternal === true) {
      return;
    }

    var decodedElementInCodeSection = state.elementsInCodeSection[funcIndex];

    if (opts.ignoreCodeSection === false) {
      if (typeof decodedElementInCodeSection === "undefined") {
        throw new _webassemblyjs_helper_api_error__WEBPACK_IMPORTED_MODULE_0__.CompileError("func " + toHex(funcIndex) + " code not found");
      }

      body = decodedElementInCodeSection.code;
    }

    funcIndex++;
    var funcNode = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.func(func.id, _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.signature(params, result), body);

    if (func.isExternal === true) {
      funcNode.isExternal = func.isExternal;
    } // Add function position in the binary if possible


    if (opts.ignoreCodeSection === false) {
      var _startLoc23 = decodedElementInCodeSection.startLoc,
          endLoc = decodedElementInCodeSection.endLoc,
          bodySize = decodedElementInCodeSection.bodySize;
      funcNode = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(funcNode, endLoc, _startLoc23);
      funcNode.metadata = {
        bodySize: bodySize
      };
    }

    moduleFields.push(funcNode);
  });
  state.elementsInExportSection.forEach(function (moduleExport) {
    /**
     * If the export has no id, we won't be able to call it from the outside
     * so we can omit it
     */
    if (moduleExport.id != null) {
      moduleFields.push(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.withLoc(_webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.moduleExport(moduleExport.name, _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.moduleExportDescr(moduleExport.type, moduleExport.id)), moduleExport.endLoc, moduleExport.startLoc));
    }
  });
  dumpSep("end of program");
  var module = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.module(null, moduleFields, _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.moduleMetadata(moduleMetadata.sections, moduleMetadata.functionNames, moduleMetadata.localNames, moduleMetadata.producers));
  return _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_3__.program([module]);
}

/***/ }),

/***/ "./node_modules/@webassemblyjs/wasm-parser/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@webassemblyjs/wasm-parser/esm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
/* harmony import */ var _decoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decoder */ "./node_modules/@webassemblyjs/wasm-parser/esm/decoder.js");
/* harmony import */ var _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @webassemblyjs/ast */ "./node_modules/@webassemblyjs/ast/esm/index.js");


/**
 * TODO(sven): I added initial props, but we should rather fix
 * https://github.com/xtuc/webassemblyjs/issues/405
 */

var defaultDecoderOpts = {
  dump: false,
  ignoreCodeSection: false,
  ignoreDataSection: false,
  ignoreCustomNameSection: false
}; // traverses the AST, locating function name metadata, which is then
// used to update index-based identifiers with function names

function restoreFunctionNames(ast) {
  var functionNames = [];
  _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse(ast, {
    FunctionNameMetadata: function FunctionNameMetadata(_ref) {
      var node = _ref.node;
      functionNames.push({
        name: node.value,
        index: node.index
      });
    }
  });

  if (functionNames.length === 0) {
    return;
  }

  _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse(ast, {
    Func: function (_Func) {
      function Func(_x) {
        return _Func.apply(this, arguments);
      }

      Func.toString = function () {
        return _Func.toString();
      };

      return Func;
    }(function (_ref2) {
      var node = _ref2.node;
      // $FlowIgnore
      var nodeName = node.name;
      var indexBasedFunctionName = nodeName.value;
      var index = Number(indexBasedFunctionName.replace("func_", ""));
      var functionName = functionNames.find(function (f) {
        return f.index === index;
      });

      if (functionName) {
        var oldValue = nodeName.value;
        nodeName.value = functionName.name;
        nodeName.numeric = oldValue; // $FlowIgnore

        delete nodeName.raw;
      }
    }),
    // Also update the reference in the export
    ModuleExport: function (_ModuleExport) {
      function ModuleExport(_x2) {
        return _ModuleExport.apply(this, arguments);
      }

      ModuleExport.toString = function () {
        return _ModuleExport.toString();
      };

      return ModuleExport;
    }(function (_ref3) {
      var node = _ref3.node;

      if (node.descr.exportType === "Func") {
        // $FlowIgnore
        var nodeName = node.descr.id;
        var index = nodeName.value;
        var functionName = functionNames.find(function (f) {
          return f.index === index;
        });

        if (functionName) {
          node.descr.id = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.identifier(functionName.name);
        }
      }
    }),
    ModuleImport: function (_ModuleImport) {
      function ModuleImport(_x3) {
        return _ModuleImport.apply(this, arguments);
      }

      ModuleImport.toString = function () {
        return _ModuleImport.toString();
      };

      return ModuleImport;
    }(function (_ref4) {
      var node = _ref4.node;

      if (node.descr.type === "FuncImportDescr") {
        // $FlowIgnore
        var indexBasedFunctionName = node.descr.id;
        var index = Number(indexBasedFunctionName.replace("func_", ""));
        var functionName = functionNames.find(function (f) {
          return f.index === index;
        });

        if (functionName) {
          // $FlowIgnore
          node.descr.id = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.identifier(functionName.name);
        }
      }
    }),
    CallInstruction: function (_CallInstruction) {
      function CallInstruction(_x4) {
        return _CallInstruction.apply(this, arguments);
      }

      CallInstruction.toString = function () {
        return _CallInstruction.toString();
      };

      return CallInstruction;
    }(function (nodePath) {
      var node = nodePath.node;
      var index = node.index.value;
      var functionName = functionNames.find(function (f) {
        return f.index === index;
      });

      if (functionName) {
        var oldValue = node.index;
        node.index = _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.identifier(functionName.name);
        node.numeric = oldValue; // $FlowIgnore

        delete node.raw;
      }
    })
  });
}

function restoreLocalNames(ast) {
  var localNames = [];
  _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse(ast, {
    LocalNameMetadata: function LocalNameMetadata(_ref5) {
      var node = _ref5.node;
      localNames.push({
        name: node.value,
        localIndex: node.localIndex,
        functionIndex: node.functionIndex
      });
    }
  });

  if (localNames.length === 0) {
    return;
  }

  _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse(ast, {
    Func: function (_Func2) {
      function Func(_x5) {
        return _Func2.apply(this, arguments);
      }

      Func.toString = function () {
        return _Func2.toString();
      };

      return Func;
    }(function (_ref6) {
      var node = _ref6.node;
      var signature = node.signature;

      if (signature.type !== "Signature") {
        return;
      } // $FlowIgnore


      var nodeName = node.name;
      var indexBasedFunctionName = nodeName.value;
      var functionIndex = Number(indexBasedFunctionName.replace("func_", ""));
      signature.params.forEach(function (param, paramIndex) {
        var paramName = localNames.find(function (f) {
          return f.localIndex === paramIndex && f.functionIndex === functionIndex;
        });

        if (paramName && paramName.name !== "") {
          param.id = paramName.name;
        }
      });
    })
  });
}

function restoreModuleName(ast) {
  _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse(ast, {
    ModuleNameMetadata: function (_ModuleNameMetadata) {
      function ModuleNameMetadata(_x6) {
        return _ModuleNameMetadata.apply(this, arguments);
      }

      ModuleNameMetadata.toString = function () {
        return _ModuleNameMetadata.toString();
      };

      return ModuleNameMetadata;
    }(function (moduleNameMetadataPath) {
      // update module
      _webassemblyjs_ast__WEBPACK_IMPORTED_MODULE_1__.traverse(ast, {
        Module: function (_Module) {
          function Module(_x7) {
            return _Module.apply(this, arguments);
          }

          Module.toString = function () {
            return _Module.toString();
          };

          return Module;
        }(function (_ref7) {
          var node = _ref7.node;
          var name = moduleNameMetadataPath.node.value; // compatiblity with wast-parser

          if (name === "") {
            name = null;
          }

          node.id = name;
        })
      });
    })
  });
}

function decode(buf, customOpts) {
  var opts = Object.assign({}, defaultDecoderOpts, customOpts);
  var ast = _decoder__WEBPACK_IMPORTED_MODULE_0__.decode(buf, opts);

  if (opts.ignoreCustomNameSection === false) {
    restoreFunctionNames(ast);
    restoreLocalNames(ast);
    restoreModuleName(ast);
  }

  return ast;
}

/***/ })

}]);
//# sourceMappingURL=vendors.webassemblyjs.27878198.js.map