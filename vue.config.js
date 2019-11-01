const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        common: "@/common"
      }
    }
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, "src/style/index.less")]
    }
  }
};
