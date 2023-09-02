/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "rock-blue": {
          50: "#f3f6fa",
          100: "#eaeef5",
          200: "#d8e0ed",
          300: "#c0cce1",
          400: "#a6b2d3",
          500: "#9ba5cb",
          600: "#777eb4",
          700: "#656a9d",
          800: "#545a7f",
          900: "#484d67",
          950: "#2a2c3c",
        },
        tundora: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4c4c4c",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
        },
        "dove-gray": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#707070",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
        },
        alto: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#e0e0e0",
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        "mine-shaft": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#212121",
        },
        "wild-sand": {
          50: "#f7f7f7",
          100: "#efefef",
          200: "#dcdcdc",
          300: "#bdbdbd",
          400: "#989898",
          500: "#7c7c7c",
          600: "#656565",
          700: "#525252",
          800: "#464646",
          900: "#3d3d3d",
          950: "#292929",
        },
        silver: {
          50: "#f7f7f7",
          100: "#f0f0f0",
          200: "#e3e3e3",
          300: "#d1d1d1",
          400: "#bfbfbf",
          500: "#aaaaaa",
          600: "#969696",
          700: "#818181",
          800: "#6a6a6a",
          900: "#585858",
          950: "#333333",
        },
        "eerie-black": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1f1f1f",
        },
        onyx: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#383838",
          950: "#262626",
        },
        "pigeon-post": {
          50: "#f3f6fa",
          100: "#eaedf5",
          200: "#d9dfec",
          300: "#c1cae0",
          400: "#abb4d4",
          500: "#9098c4",
          600: "#797db2",
          700: "#676a9b",
          800: "#55587e",
          900: "#494c66",
          950: "#2a2b3c",
        },
        "east-bay": {
          50: "#f3f7fb",
          100: "#e4ebf5",
          200: "#d0deed",
          300: "#b0c8e0",
          400: "#8aabd0",
          500: "#6e90c3",
          600: "#5b79b5",
          700: "#5068a5",
          800: "#455687",
          900: "#3b496d",
          950: "#282f43",
        },
      },
    },
  },
  plugins: [],
};
