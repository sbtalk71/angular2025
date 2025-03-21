export const environment = {
  production: false,
  msalConfig: {
    auth: {
      //clientId: 'b5c2e510-4a17-4feb-b219-e55aa5b74144',
      clientId: '14f3edc8-4d58-4612-bd96-196815364408',
      authority: 'https://login.microsoftonline.com/d2163bca-0615-4c03-918d-91f2e25a45a0',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
};
