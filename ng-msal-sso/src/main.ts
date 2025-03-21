import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideMsal } from '@azure/msal-angular';
import { BrowserCacheLocation, LogLevel } from '@azure/msal-browser';
//import { appConfig } from './app/app.config';

const msalConfig = {
  auth: {
    clientId: 'dac9d4a7-ee98-4ac5-88ba-d4af72cf3d77',  // Replace with your Azure AD App Registration Client ID
    authority: 'https://login.microsoftonline.com/YOUR_TENANT_ID', // Tenant ID or 'common' for multi-tenant apps
    redirectUri: 'http://localhost:4200',  // Match with the registered redirect URI
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage, // or 'sessionStorage'
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string) => console.log(message),
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false,
    },
  },
};

// Bootstrap Angular with MSAL
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter([]),
    provideMsal(msalConfig),
  ],
}).catch(err => console.error(err));
