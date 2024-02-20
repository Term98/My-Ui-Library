// index.tsx
import { VNode } from 'snabbdom';
import { createComponent, Component } from './packages/my-ui-library/src';
import * as React from 'react';

const App: Component = {
    template: (state, props): VNode => {
        return (
            <div>
                <h1>{state.count}</h1>
                <button on-click={() => App.updateState((prevState) => ({ count: prevState.count + 1 }))}>
                    Add
                </button>
            </div>
        ) as unknown as VNode;
    },
    updateState: () => { },
    onMount: () => {
        console.log('Component mounted');
    },
};

const appElement = document.getElementById('app');
if (appElement) {
    appElement.appendChild(createComponent({}, App)as any);
}

