import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to CallbackModule.web.ts
// and on native platforms to CallbackModule.ts
import CallbackModule from './CallbackModule';
import CallbackModuleView from './CallbackModuleView';
import { ChangeEventPayload, CallbackModuleViewProps } from './CallbackModule.types';

// Get the native constant value.
export const PI = CallbackModule.PI;

export function hello(): string {
  return CallbackModule.hello();
}

export async function setValueAsync(value: string) {
  return await CallbackModule.setValueAsync(value);
}

const emitter = new EventEmitter(CallbackModule ?? NativeModulesProxy.CallbackModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { CallbackModuleView, CallbackModuleViewProps, ChangeEventPayload };
