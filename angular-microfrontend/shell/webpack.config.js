const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  library: { type: "module" },
  remotes: {
    orders: 'http://localhost:4201/remoteEntry.js',
    customers: 'http://localhost:4202/remoteEntry.js',
    products: 'http://localhost:4203/remoteEntry.js',
  },
  shared: shareAll(),
});
