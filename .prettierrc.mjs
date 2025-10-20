/** @type {import("prettier").Config} */
export default {
  // Reglas de estilo de Prettier (puedes ajustarlas a tu gusto)
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',

  // Aquí le decimos a Prettier que use los plugins que instalamos.
  // El orden es importante: el de Tailwind debe ir al final.
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  // Le decimos al plugin de Astro cómo debe ser tratado.
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
