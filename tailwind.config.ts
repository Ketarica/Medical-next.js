import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
       screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'low-desk':'1900px',
      'mobile-375':'375px',
      'mobile-425':'425px',
      'zero':'0px',
      'desc-1820':'1820px',
    },
    },
   
  },
  plugins: [],
}
export default config
