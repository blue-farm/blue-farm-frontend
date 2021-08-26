module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://35.223.247.96",
        changeOrigin: true,
        logLevel: "debug",
      }
    },
  },
};
