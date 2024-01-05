import React from 'react';
import FunctionContextComponent2 from './FunctionContextComponent2';
import { ThemeProvider } from './ThemeContext';

export default function UseContextHook2() {
  // ThemeProvider is providing context for FunctionContextComponent2
  return (
    <ThemeProvider>
      <FunctionContextComponent2 />
    </ThemeProvider>
  );
}

