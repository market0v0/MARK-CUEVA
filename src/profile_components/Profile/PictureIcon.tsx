import { memo, SVGProps } from 'react';


interface PictureIconProps extends SVGProps<SVGSVGElement> {
  imglink: string;
}

const PictureIcon = ({ imglink, ...props }: PictureIconProps) => (
  <svg
    preserveAspectRatio='none'
    viewBox='0 0 900 1016'
    fill='none'

    {...props}
  >
    <path
      d='M110.588 150.722L884.588 270.315V934.722L110.588 801.036V150.722Z'
      stroke='url(#paint0_linear_169_35)'
      strokeWidth={10}
    />
    <g opacity={10} filter='url(#filter0_d_169_35)'>
      <path
        d='M57.5883 197.722L786.588 312.434V949.722L57.5883 821.492V197.722Z'
        fill='url(#pattern0)'
        fillOpacity={10}
        shapeRendering='crispEdges'
      />
      <path
        d='M57.5883 197.722L786.588 312.434V949.722L57.5883 821.492V197.722Z'
        stroke='url(#paint1_linear_169_35)'
        strokeWidth={10}
        shapeRendering='crispEdges'
      />
    </g>
    <defs>
      <filter
        id='1'
    

        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={50} dy={80} />
        <feGaussianBlur stdDeviation={40} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0.0447701 0 0 0 0 0.0105183 0 0 0 0 0.142256 0 0 0 0.5 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_169_35' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_169_35' result='shape' />
      </filter>
      <pattern id='pattern0' patternContentUnits='objectBoundingBox' width={1} height={1}>
        <use xlinkHref='#image0_169_35' transform='matrix(0.00113858 0 0 0.00110375 -0.015775 0)' />
      </pattern>
      <linearGradient
        id='paint0_linear_169_35'
        x1={955.803}
        y1={525.06}

        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#3DCD5C' />
        <stop offset={1} stopColor='#51CC18' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint1_linear_169_35'
        x1={724.103}
        y1={1281.88}
        x2={-236.873}
        y2={-84.0356}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#42CF00' />
        <stop offset={1} stopColor='#DCF1DF' />
      </linearGradient>
      <image
        id='image0_169_35'
        width={906}
        height={906}
        xlinkHref={imglink}
      />
    </defs>
  </svg>
);
const Memo = memo(PictureIcon);
export { Memo as PictureIcon };
