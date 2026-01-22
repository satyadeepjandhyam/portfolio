/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // ✅ Your custom breakpoints
    screens: {
      sm: "320px",
      md: "481px",
      mdl: "769px",
      lg: "1024px",
      xl: "1281px",
      "2xl": "1536px",
    },

    extend: {
      // ✅ Your theme colors (so you can use bg-near-black, text-dark-brown, etc.)
      colors: {
        grayish: "#7C8685",
        "soft-green": "#AAACA1",
        "bright-red": "#E3311D",
        "dark-brown": "#362E2D",
        "near-black": "#050507",
      },

      // ✅ Your inset shadow
      boxShadow: {
        "inset-left-right":
          "inset 5px 0 10px -5px rgba(227, 49, 29, 0.5), inset -5px 0 10px -5px rgba(227, 49, 29, 0.5)",
      },
    },
  },
  plugins: [],
};
