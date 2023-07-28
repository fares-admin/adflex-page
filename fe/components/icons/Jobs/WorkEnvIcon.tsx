import React from 'react'

function WorkEnvIcon({ ...props }) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.667 6a5.667 5.667 0 100 11.333 5.667 5.667 0 000-11.333zM24 11.667a7.667 7.667 0 1111.992 6.33c5.516 1.744 9.59 6.735 9.978 12.73a7.668 7.668 0 013.355 13.937c5.802 1.834 10.008 7.26 10.008 13.67a1 1 0 11-2 0C57.333 51.521 51.811 46 45 46s-12.333 5.522-12.333 12.333a1 1 0 11-2 0C30.667 51.522 25.145 46 18.333 46 11.522 46 6 51.522 6 58.333a1 1 0 11-2 0C4 51.925 8.206 46.5 14.008 44.664a7.668 7.668 0 013.356-13.937c.387-5.995 4.46-10.986 9.977-12.73A7.658 7.658 0 0124 11.667zm-4.632 19.069a7.668 7.668 0 013.29 13.928 14.373 14.373 0 019.009 8.399 14.372 14.372 0 019.008-8.399 7.668 7.668 0 013.29-13.928c-.475-6.377-5.8-11.403-12.298-11.403-6.499 0-11.823 5.026-12.3 11.403zm-6.701 7.597a5.667 5.667 0 1111.333 0 5.667 5.667 0 01-11.333 0zm38 0a5.667 5.667 0 11-11.334 0 5.667 5.667 0 0111.334 0z"
        fill="url(#paint0_linear_1720_35646)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1720_35646"
          x1={3.64068}
          y1={4}
          x2={68.1064}
          y2={46.6014}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default WorkEnvIcon