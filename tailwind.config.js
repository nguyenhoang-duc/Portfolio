/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "construction": "url('../src/assets/images/airplane.jpg')"
      }
    }
  },
  plugins: [require("daisyui"), "prettier-plugin-tailwindcss"],
  
  // Daisy UI specific options
  daisyui: {
    themes: ["light", "dark"],
  },
}

