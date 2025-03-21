import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex-sans)'],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#2563eb', // blue-600
              textDecoration: 'underline',
              textDecorationColor: '#2563eb', // match text color
              '&:hover': {
                color: '#3b82f6', // blue-500
                textDecorationColor: '#3b82f6', // match hover color
              },
            },
            strong: {
              color: '#475569', // slate-600
              fontWeight: '600',
            },
            em: {
              color: '#475569', // slate-600
              fontStyle: 'italic',
            },
            h1: {
              color: '#475569',
            },
            h2: {
              color: '#475569',
            },
            h3: {
              color: '#475569',
            },
            h4: {
              color: '#475569',
            },
            h5: {
              color: '#475569',
            },
            h6: {
              color: '#475569',
            },
            img: {
              marginLeft: '-2rem',
              marginRight: '-2rem',
              maxWidth: 'calc(100% + 4rem)',
              width: 'calc(100% + 4rem)',
              '@media (min-width: 640px)': {
                borderRadius: '4px',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#e2e8f0', // slate-200
            a: {
              color: '#3b82f6', // blue-500
              textDecoration: 'underline',
              textDecorationColor: '#3b82f6', // match text color
              '&:hover': {
                color: '#60a5fa', // blue-400
                textDecorationColor: '#60a5fa', // match hover color
              },
            },
            strong: {
              color: '#f1f5f9', // slate-100
              fontWeight: '600',
            },
            em: {
              color: '#f1f5f9', // slate-100
              fontStyle: 'italic',
            },
            h1: {
              color: '#f1f5f9',
            },
            h2: {
              color: '#f1f5f9',
            },
            h3: {
              color: '#f1f5f9',
            },
            h4: {
              color: '#f1f5f9',
            },
            h5: {
              color: '#f1f5f9',
            },
            h6: {
              color: '#f1f5f9',
            },
            img: {
              marginLeft: '-2rem',
              marginRight: '-2rem',
              maxWidth: 'calc(100% + 4rem)',
              width: 'calc(100% + 4rem)',
              '@media (min-width: 640px)': {
                borderRadius: '4px',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};

export default config;
