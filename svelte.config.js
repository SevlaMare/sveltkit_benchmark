import adapter from '@sveltejs/adapter-auto';
import { cssModules } from 'svelte-preprocess-cssmodules';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [cssModules()],
  kit: {
    adapter: adapter(),
  },
};

export default config;
