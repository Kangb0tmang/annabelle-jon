/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// https://github.com/gatsbyjs/gatsby/issues/564
// stackoverflow.com/questions/47033447/gatsbyjs-cannot-find-module-fs-webpack-config-issue
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
  });
};
