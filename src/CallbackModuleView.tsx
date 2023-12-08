import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { CallbackModuleViewProps } from './CallbackModule.types';

const NativeView: React.ComponentType<CallbackModuleViewProps> =
  requireNativeViewManager('CallbackModule');

export default function CallbackModuleView(props: CallbackModuleViewProps) {
  return <NativeView {...props} />;
}
