const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: 'customers',
    filename: 'remoteEntry.js',
    exposes: {
      './CustomersModule': './src/app/customers/customers.module.ts',
    },
    shared: shareAll(),
  });
  