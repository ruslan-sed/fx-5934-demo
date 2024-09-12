const path = require('path')

const projectRoot = __dirname

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    path.join(projectRoot, '{libs,namespaces}/**/src/**/*.{tsx,jsx,js,ts}'),
    path.join(projectRoot, 'hosts/**/*.{ts,js,jsx,tsx}'),
    path.join(projectRoot, 'node_modules/@topkit/**/*.js'),
    path.join(projectRoot, 'node_modules/@toptal/picasso/**/*.js'),
    path.join(projectRoot, 'node_modules/@toptal/picasso-*/**/*.js'),
  ],
  presets: [require('@toptal/picasso-tailwind')],
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
