import * as React from 'react';

import { CallbackModuleViewProps } from './CallbackModule.types';

export default function CallbackModuleView(props: CallbackModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
