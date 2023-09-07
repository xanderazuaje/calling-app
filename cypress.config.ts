import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow",
      camera: "block",
      microphone: "block",
      images: "allow",
      javascript: "allow",
      popups: "ask",
      plugins: "ask",
      cookies: "allow"
    }
  }
});
