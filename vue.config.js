module.exports = {
  devServer: {
    proxy: {
      "/retail": {
        target: "http://35.223.247.96",
        changeOrigin: true,
        logLevel: "debug",
      },
    },
  },
};
