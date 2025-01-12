import React from 'react'
import { IconProps } from '../types'

export default function Facebook({color, size} : IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.08555 8.625H5.03477V14.75H2.30039V8.625H0.0582032V6.10938H2.30039V4.16797C2.30039 1.98047 3.61289 0.75 5.60898 0.75C6.56602 0.75 7.57773 0.941406 7.57773 0.941406V3.10156H6.45664C5.36289 3.10156 5.03477 3.75781 5.03477 4.46875V6.10938H7.46836L7.08555 8.625Z"
        fill={color}
      />
    </svg>
  );
}
