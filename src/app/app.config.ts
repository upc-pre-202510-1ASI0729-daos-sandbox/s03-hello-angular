import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

/**
 * Application configuration for Angular providers.
 * Sets up zone change detection and reactive forms.
 * @author Open Source Application Development Team
 * @public
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Optimizes change detection
  ]
};
