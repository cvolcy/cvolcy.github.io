module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/_variables.scss";',
      },
    },
  },
  runtimeCompiler: true,
};
