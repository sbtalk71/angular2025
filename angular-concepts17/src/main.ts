import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { SignalsComponent } from './app/components/signals/signals.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
