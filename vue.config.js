module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/_variables.scss";
          @import "bulma/sass/utilities/_all.sass";`,
      },
    },
  },
  runtimeCompiler: true,
};
