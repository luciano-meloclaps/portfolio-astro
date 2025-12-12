import type { SVGProps } from 'react';

export default function IconCSharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.0"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      {/* 
        1. Hexágono Maximizado
        Se expande de y=2 a y=22 para dar una presencia fuerte,
        dejando solo el margen técnico necesario para el grosor del trazo.
      */}
      <path d="M12 2l9 5v10l-9 5l-9-5v-10l9-5z" />

      {/* 
        2. La "C" Reducida
        Se ha bajado la escala y centrado verticalmente.
      */}
      <path d="M10.5 10.5a1.5 1.5 0 0 0 -1.5 -1.5h-1a1.5 1.5 0 0 0 -1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5 -1.5" />

      {/* 
        3. El "#" (Sharp) Reducido
        Líneas más cortas y juntas para que el conjunto "C#" 
        quede contenido cómodamente dentro del hexágono.
      */}
      <path d="M14.5 9v6" />
      <path d="M17.5 9v6" />
      <path d="M13 11h5.5" />
      <path d="M13 13h5.5" />
    </svg>
  );
}
