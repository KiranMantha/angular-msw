import { bootstrapApplication } from '@angular/platform-browser';
import { setupWorker } from 'msw/browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { handlers } from './mockApis';

setupWorker(...handlers).start();

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
