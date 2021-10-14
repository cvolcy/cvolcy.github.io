module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/_variables.scss";',
      },
    },
  },
};
