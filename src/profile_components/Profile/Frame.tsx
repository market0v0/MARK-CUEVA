import { memo, SVGProps } from 'react';

const Frame = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1920 1109' fill='rgba(70, 68, 68, 0.01)' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={1920} height={1080} fill='' />
    
  </svg>
);

const Memo = memo(Frame);
export { Memo as Frame };
