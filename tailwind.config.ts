import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
          selected_tag: '#C8ECE5',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth : "thin",
          scrollbarColor : "orange white",
        },
        ".scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width: "6px",
          },
          "&::-webkit-scrollbar-track" : {
            background: "#D3D3D3",
            borderRadius: "20px",
          },
          "&::-webkit-scrollbar-thumb" : {
            background: "orange",
            borderRadius: "20px",
            height: "1px",
          }
        }
      }

      addUtilities (newUtilities, ["responsive", "hover"])
    }
  ],
}
export default config
