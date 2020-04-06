module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: [
  //   "plugin:vue/essential",
  //   "@vue/standard",
  //   "plugin:prettier/recommended",
  //   "eslint:recommended"
  // ],
  extends: [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
