/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-drop': 'inset 2px 2px 4px rgba(255, 255 , 255, 0.1), 4px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
  corePlugins: {
    preflight: true,
  }
};
