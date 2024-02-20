"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createComponent = void 0;
// packages/my-ui-library/src/index.tsx
var snabbdom_1 = require("snabbdom");
var patch = (0, snabbdom_1.init)([snabbdom_1.classModule, snabbdom_1.propsModule, snabbdom_1.styleModule, snabbdom_1.eventListenersModule]);
function createComponent(data, component) {
    var vnode = component.template({}, {});
    var state = {};
    var updateState = function (stateUpdater) {
        var newState = stateUpdater(state);
        if (newState !== state) {
            Object.assign(state, newState);
            updateView();
        }
    };
    var updateView = function () {
        var newVnode = component.template(state, {});
        patch(vnode, newVnode);
    };
    var mounted = function () {
        if (component.onMount) {
            component.onMount();
        }
    };
    var mergedData = __assign(__assign({}, data), { hook: {
            insert: mounted
        } });
    var element = patch(null, vnode);
    element.data = mergedData;
    return element;
}
exports.createComponent = createComponent;
