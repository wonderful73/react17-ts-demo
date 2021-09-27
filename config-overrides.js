
const path = require('path')
const paths = require('react-scripts/config/paths');
const { override, fixBabelImports, addPostcssPlugins } = require('customize-cra');

/* react-app-rewired 1.x 配置
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }],
    config,
  );

  config.output.filename = 'static/js/[name].js';
  config.output.chunkFilename = 'static/js/[name].chunk.js';
  
  return config;
}
*/

// react-app-rewired 2.x 配置
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 40,
    propList: ["*"],
    minPixelValue: 2,
    selectorBlackList: ["am-"], // 不进行rem转换
  })])
);


// 设置打包路径
paths.appBuild = path.join(path.dirname(paths.appBuild), './dist');