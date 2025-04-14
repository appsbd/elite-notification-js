const path = require("path");
const vitepos_plugin_version = require('./vitepos_plugin_version');
let plugnInfo=vitepos_plugin_version.loadPluginData();
const verMajor = plugnInfo.version;
process.env.VUE_APP_VERSION = `${verMajor}`;
process.env.VUE_APP_BUILD_ID = vitepos_plugin_version.GetBuildString();
const plugins=[];
if(process.env.NODE_ENV === 'production'){
  //const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  //plugins.push(new BundleAnalyzerPlugin());
}
module.exports = {
  devServer: {
    proxy: "http://localhost/vitepos_dev/",
   // proxy: "http://localhost/Projects/wcdev/"
  },
  outputDir: path.resolve(__dirname, "../assets/"),
  lintOnSave: false,
  productionSourceMap: false,
  publicPath:'',
  filenameHashing: false,
  css: {
    extract: (process.env.NODE_ENV === 'development' ? false : {
      filename: 'css/admin-style.css',
    }),
    sourceMap: process.env.NODE_ENV === 'development'
  },

  configureWebpack: {
    output: {
      filename: 'js/admin-script.js',
      //chunkFilename: 'js/[name].js'
    },
    optimization: {
      splitChunks: false
    }
  },

}