/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/src",
    public: "/",
  },
  plugins: [
    [
      "@snowpack/plugin-react-refresh",
      {
        /* options: see below */
      },
    ],
    [
      "@snowpack/plugin-sass",
      {
        /* see options below */
      },
    ],
    ["snowpack-plugin-relative-css-urls"],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
