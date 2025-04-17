import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Bootstraps the Angular application.
 * Starts the app with the root component and configuration.
 * @author Open Source Application Development Team
 * @public
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
