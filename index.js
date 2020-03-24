"use strict";
/**
 * <symbol> that can be used to declare custom inspect functions.
 */
const SymbolInspect = Symbol.for('nodejs.util.inspect.custom');
module.exports = SymbolInspect;
