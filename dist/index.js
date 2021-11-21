"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDefined = void 0;
// TODO: Add comments to make api documents
function isDefined(val) {
    if (val === null || typeof val === "undefined")
        return false;
    return true;
}
exports.isDefined = isDefined;
