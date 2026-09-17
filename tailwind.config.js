/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B0F19",
          darker: "#070A10",
          card: "#111827",
          cardLight: "#1F2937",
          slate: "#0F172A",
          navy: "#1E293B",
          border: "#1E293B",
          borderLight: "#334155",
          muted: "#94A3B8",
          subtle: "#64748B",
          green: "#008060",
          lightBlue: "#0ea5e9",
        },
        'brand-green': '#008060',
        'brand-light-blue': '#0ea5e9',
        royal: {
          gold: "#C9A84C",
          goldLight: "#E6B84A",
          goldDark: "#9B7B2C",
          goldGlow: "#FDF6E2",
          champagne: "#F5E6C8",
        },
        platinum: {
          DEFAULT: "#B8C4D0",
          light: "#E2E8F0",
          dark: "#64748B",
          shimmer: "#F8FAFC",
        },
        obsidian: {
          DEFAULT: "#050508",
          light: "#0A0D14",
          card: "#0E131F",
          border: "rgba(201, 168, 76, 0.15)",
          glass: "rgba(5, 5, 8, 0.75)",
        },
        accent: {
          DEFAULT: "#C9A84C",
          hover: "#E6B84A",
          dark: "#9B7B2C",
          light: "#FDF6E2",
          gradientFrom: "#C9A84C",
          gradientTo: "#E6B84A",
        },
        electric: {
          blue: "#3B82F6",
          indigo: "#6366F1",
          cyan: "#06B6D4",
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Fraunces"', '"Playfair Display"', '"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Fraunces"', '"Cinzel"', '"Playfair Display"', "serif"],
        heading: ['"Fraunces"', '"Playfair Display"', "serif"],
        signature: ['"Great Vibes"', '"Pinyon Script"', '"Alex Brush"', 'cursive'],
        cursive: ['"Great Vibes"', '"Pinyon Script"', '"Alex Brush"', 'cursive'],
      },
      boxShadow: {
        glow: "0 10px 25px -5px rgba(201, 168, 76, 0.4)",
        "glow-lg": "0 20px 40px -10px rgba(201, 168, 76, 0.5)",
        "gold-glow": "0 0 25px rgba(201, 168, 76, 0.35)",
        "gold-glow-lg": "0 0 45px rgba(201, 168, 76, 0.45)",
        "platinum-glow": "0 0 25px rgba(184, 196, 208, 0.25)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.35)",
        "card-hover": "0 12px 30px -4px rgba(0, 0, 0, 0.5), 0 0 25px -2px rgba(201, 168, 76, 0.25)",
        "obsidian-card": "0 10px 30px -5px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(201, 168, 76, 0.15)",
        "obsidian-card-hover": "0 20px 45px -10px rgba(0, 0, 0, 0.9), 0 0 30px rgba(201, 168, 76, 0.25), inset 0 1px 0 rgba(201, 168, 76, 0.35)",
        mega: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'float-slow': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
