import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

import Aura from '@primeng/themes/aura';
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
      provideAnimationsAsync(),
        providePrimeNG({
            // unstyled: true,
            // pt: {
            //     button: {
            //         root: 'bg-teal-500 hover:bg-teal-700 active:bg-teal-900 cursor-pointer py-2 px-4 rounded-full border-0 flex gap-2',
            //         label: 'text-white font-bold text-lg',
            //         icon: 'text-white !text-xl'
            //     }
            // },
            theme: {
                preset: Lara,
                options: {
                    prefix: 'p',
                    darkModeSelector: '[data-theme="dark"]',
                    cssLayer: {
                        name: 'primeng',
                        order: 'theme, base, primeng'
                    }
                }
            }
        })
  ]
};
