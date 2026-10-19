import {ApplicationConfig, provideBrowserGlobalErrorListeners} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideTyroUiSeo } from 'tyrolium-ui';

export const appConfig: ApplicationConfig = {
    providers: [
    provideTyroUiSeo(),
        provideBrowserGlobalErrorListeners(),
        provideHttpClient(),
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
            })
        )
    ],
};
