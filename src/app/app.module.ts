import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScanditSdkModule } from "scandit-sdk-angular";

import {MatIconModule} from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConfigModule } from '@spartacus/core';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';

const licenseKey: string = "AT7wLzZ/FMGEA8TR0zw4rJ057dQ1G0VzD2hFS/xFKbUOaVwa2EClMwFPm7/FZjgBbCh1dAhTLyrecYn0S3T2n1Ucg2mETmnsezC8e85FO++kK/Ofl3jJ35IkdRMfQzTOgXwlpUAan/gKOLpjSURpSmUbNBJwFKWH/wNLceSv23i6IzYd8A5DdDG6ouKRsT58YHdr7dkarsDnoBydpDSYqeunvFN36bIiZM+UP9TFVY/NqNcFc/1ULzlIcRTANmHsVI+Xxn7S5k6RugX/V5qUhEgsRvnigfTAPz4U5jCBYshjUJtucCzUAAONEEHnRZ4apO9s5pR/i5x5txPl2byjoC0tERK4Vg7VMlMrfnEwKaEc6S6xKg2rkdvitrxYasEqHzV2KZTfwD8n2FgK5aSX7VcS+chEkYakI0Lohvwb4VKFU32C9/ac5I0u/ZohzAD4wH+hZFs7+p/T0psUCVuHFQbsXqHIVzYUkRLtGRU29f4vH7fEoN249eqWcE1K3hTotu9+wheUNbgHXyldFvKP8CTVloiq5/ZZVBYY6ru+UtheCQDym6N6eEpCF6a+if6ucACTLDJAhFjb5Jj3LmpItxF8zlxGkEvVDwh/BqqTZ4Q+Ys5HDzDjgtTJcJ+FlaKvs4FtJPoKL2bdDQEv7zfOCNoqFfEFrTuUaOT1ylWKKOQmJ2Ub5HPda0IGFsRKv7gOIHEYKkxD45LrNPjz0yVa6RGIc5QJoLCqCx4xFk2pnFebPazudVjxrfZyLd1trHYGlNg5jJSBAwMgKgAUTwKCpL7NvJqVeBEUSxQOyO4x5yeyoP5n3MiF3qSEKPMP0xs1+sOv3KQO";
const engineLocation: string = "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/"; // could also be e.g. "build"


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    
    B2cStorefrontModule.withConfig({

    backend: {
      occ: {
        baseUrl: 'https://scandit-commerce2011cx.demo.hybris.com/',
        prefix: '/occ/v2/',
        legacy: false
      }
    },
    authentication: {
      client_id: 'mobile_android',
      client_secret: 'secret'
    },
    context: {
      baseSite: ['electronics-spa']
    },
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    }

    }),
    ScanditSdkModule.forRoot(licenseKey, {engineLocation}),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}