// packages/my-ui-library/src/index.tsx
import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h
} from "snabbdom";
import { VNode, VNodeData } from 'snabbdom/build';

export interface Component {
    template: (state: any, props: any) => VNode;
    updateState: (stateUpdater: (prevState: any) => any) => void;
    onMount?: () => void;
}

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

export function createComponent(data: VNodeData, component: Component): VNode {
    const vnode = component.template({}, {});
    const state: any = {};

    const updateState = (stateUpdater: (prevState: any) => any) => {
        const newState = stateUpdater(state);
        if (newState !== state) {
            Object.assign(state, newState);
            updateView();
        }
    };

    const updateView = () => {
        const newVnode = component.template(state, {});
        patch(vnode, newVnode);
    };

    const mounted = () => {
        if (component.onMount) {
            component.onMount();
        }
    };

    const mergedData = {
        ...data,
        hook: {
            insert: mounted
        }
    };

    const element = patch(null as any, vnode);
    element.data = mergedData;

    return element;
}
