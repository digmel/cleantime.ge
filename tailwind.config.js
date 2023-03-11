module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./icons/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-100": "#C6D7E4",
        "blue-200": "#7DB2DD",
        "blue-300": "#1C55A2",
        "blue-400": "#002352",
        "gray-100": "#F9FBFC",
        "gray-200": "#C1C1C1",
        "gray-300": "#42484F",
        light: "#FFFFFF",
        accent: "#FFE55B",
        error: "#D52F45",
        success: "#2FD55D",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Noto Sans Georgian", "sans-serif"],
      serif: ["Noto Sans Georgian", "serif"],
    },
  },
  plugins: [],
};
