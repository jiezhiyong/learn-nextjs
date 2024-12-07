const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  ...styleguide,
  printWidth: 120,
  singleQuote: true,
  semi: true,
  trailingComma: 'es5',
  tabWidth: 2,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
