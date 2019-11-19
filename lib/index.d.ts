/// <reference types="js-beautify" />
import { RenderFunction, Story } from '@storybook/react';
import { Options } from 'react-element-to-jsx-string';
interface JSXOptions extends HTMLBeautifyOptions {
    skip?: number;
    showFunctions?: boolean;
    enableBeautify?: boolean;
    displayName?: string | Options['displayName'];
    onBeforeRender?(dom: string): string;
}
interface JSXParameters {
    kind: string;
    story: string;
    id?: string;
    parameters?: {
        jsx?: JSXOptions;
    };
}
export declare const jsxDecorator: (storyFn: any, parameters: JSXParameters) => any;
declare const _default: {
    addWithJSX(this: Story, kind: string, storyFn: RenderFunction): any;
};
export default _default;
