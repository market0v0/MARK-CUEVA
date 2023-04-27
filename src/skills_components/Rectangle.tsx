import { memo, SVGProps } from 'react';

const Rectangle = (props: SVGProps<SVGSVGElement>) => (
<svg preserveAspectRatio='none' viewBox='0 0 1210 565' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0.5L712.5 45V598H6L0 0.5Z' fill='#29CD39' />
  </svg>
);
const Memo = memo(Rectangle);
export { Memo as Rectangle };