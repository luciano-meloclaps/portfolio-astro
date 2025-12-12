import type { SVGProps } from 'react';

export default function IconDotNet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      <path d="M1 16.7l.15 .15h3.66l.88 -.44l1.03 -1.03l.59 -1.61l1.02 -1.47l.44 -.29l1.32 3.08l1.18 1.32l1.02 .44h5.58l.73 -.44l1.47 -1.61l1.17 -2.5l1.61 -5.13l-.14 -.15h-3.96l-.74 .3l-1.02 .88l-2.06 3.52l-1.76 -2.64l-1.76 -1.76l-.58 -.3h-4.26l-1.76 1.47l-1.76 2.49l-1.32 3.08z" />
    </svg>
  );
}
