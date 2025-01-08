import React from 'react'
import { IconProps } from '../types';

export default function HamburgerMenu({color, size}:IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.6665 10H33.3332M11.6665 20H33.3332M16.6665 30H33.3332"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
