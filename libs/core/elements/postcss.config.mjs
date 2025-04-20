
import postcssPlugin from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssPlugin({
      config: './tailwind.config.mjs'
    }),
    autoprefixer,
  ],
};
