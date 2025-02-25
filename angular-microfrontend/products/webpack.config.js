
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'products',
    filename: 'remoteEntry.js',
    exposes: {
      './ProductsModule': './src/app/products/products.module.ts',
    },
    shared: shareAll(),
  });
  