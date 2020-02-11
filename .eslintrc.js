module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint"
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },

  globals: {
    TNS_APP_MODE: true,
    TNS_APP_PLATFORM: true
  }
};
