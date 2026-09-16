/** @type {import('tailwindcss').Config} */
export default {
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
        },
        // Official GoCommercially Brand Palette from repository
        official: {
          lime: "#8BDD59",
          limeHover: "#7AC949",
          limeGlow: "rgba(139, 221, 89, 0.4)",
          gold: "#FAC51E",
          cyan: "#23A3EA",
          navy: "#0F227E",
          orange: "#FF8800",
          charcoal: "#1F232B",
          deepNavy: "#1E2C3C",
          text: "#3E3E3E",
        },
        accent: {
          DEFAULT: "#F59E0B",
          hover: "#D97706",
          dark: "#B45309",
          light: "#FEF3C7",
          gradientFrom: "#F59E0B",
          gradientTo: "#EA580C",
        },
        electric: {
          blue: "#3B82F6",
          indigo: "#6366F1",
          cyan: "#06B6D4",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "sans-serif"],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', "Georgia", "serif"],
        display: ['"Cinzel"', '"Playfair Display"', "serif"],
      },
      boxShadow: {
        glow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)",
        "glow-lg": "0 20px 40px -10px rgba(245, 158, 11, 0.5)",
        card: "0 4px 20px -2px rgba(0, 0, 0, 0.35)",
        "card-hover": "0 12px 30px -4px rgba(0, 0, 0, 0.5), 0 0 25px -2px rgba(245, 158, 11, 0.25)",
        mega: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
}
