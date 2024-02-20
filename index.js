"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("./packages/my-ui-library/src");
var React = __importStar(require("react"));
var App = {
    template: function (state, props) {
        return (React.createElement("div", null,
            React.createElement("h1", null, state.count),
            React.createElement("button", { "on-click": function () { return App.updateState(function (prevState) { return ({ count: prevState.count + 1 }); }); } }, "Add")));
    },
    updateState: function () { },
    onMount: function () {
        console.log('Component mounted');
    },
};
var appElement = document.getElementById('app');
if (appElement) {
    appElement.appendChild((0, src_1.createComponent)({}, App));
}
