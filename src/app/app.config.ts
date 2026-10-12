import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from "@angular/common/http";

import { routes } from './app.routes';
import { API_URL } from "./app.tokens";

export const appConfig: ApplicationConfig = {
   providers: [
      provideBrowserGlobalErrorListeners(),
      provideZonelessChangeDetection(),
      provideRouter(routes),
      provideClientHydration(
         withEventReplay(),
         withHttpTransferCacheOptions({
            includePostRequests: true
         })
      ),
      provideHttpClient(),
      {
         provide: API_URL,
         useValue: "https://jsonplaceholder.typicode.com"
      }
   ]
};
