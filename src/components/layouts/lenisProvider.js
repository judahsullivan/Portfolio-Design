import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import * as React from 'react';

export function LenisProvider({ children, options, ...props }) {
  return (
    <ReactLenis root {...props}>
      {children}
    </ReactLenis>
  );
}
