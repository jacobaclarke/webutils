var path = require("path");

module.exports = {
  stories: [
    path.resolve(process.cwd(), "./packages/**/*.stories.@(js|jsx|ts|tsx)"),
  ],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
};
