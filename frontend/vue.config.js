const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/styles/mixin.scss'; @import '@/styles/variable.scss';"
      }
    }
  }
});
