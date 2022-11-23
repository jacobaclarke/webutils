import React from "react";
export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  actions: { argTypesRegex: "^on.*" },
};

export const decorators = [(Story) => <Story />];
