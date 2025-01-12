import React from 'react'
import { IconProps } from '../types'

export default function Bank({color, size}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.25 34.25H38.75V16.25H43.25V11.75C43.2506 11.3146 43.1246 10.8883 42.8873 10.5232C42.65 10.1581 42.3117 9.86982 41.9135 9.69354L20.6915 0.263794L1.74425 9.73629C1.37023 9.92319 1.05568 10.2106 0.835901 10.5663C0.616122 10.922 0.499805 11.3319 0.5 11.75V16.25H5V34.25H0.5V43.25H43.25V34.25ZM32 16.25V34.25H25.25V16.25H32ZM11.75 16.25H18.5V34.25H11.75V16.25Z"
        fill={color}
      />
    </svg>
  );
}
