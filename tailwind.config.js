module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_4c: "#ffffff4c",
          A700_e5: "#ffffffe5",
          A700_33: "#ffffff33",
          A700_99: "#ffffff99",
          A700_19: "#ffffff19",
          A700: "#ffffff",
        },
        blue_gray: { 100: "#d9d9d9", 900: "#323232" },
        green: { 400: "#40cd81", "400_7f": "#3fcc807f" },
        light_blue: { 500: "#009dff", 600: "#089df1", "500_01": "#08abf1" },
        black: { 900: "#000000", "900_0c": "#0000000c", "900_01": "#0a0a0a" },
        gray: { 200: "#efefef" },
        blue: { "400_7f": "#55a3ff7f" },
        indigo: { A700: "#082df1" },
      },
      fontFamily: { raleway: "Raleway", inter: "Inter" },
      backgroundImage: {
        gradient: "linear-gradient(200deg ,#089df1,#082df1,#08abf1)",
      },
      boxShadow: { bs: "0px 5px  35px 0px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
