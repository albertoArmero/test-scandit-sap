import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScanditSdkModule } from "scandit-sdk-angular";

import { ConfigModule } from '@spartacus/core';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule, defaultCmsContentConfig } from '@spartacus/storefront';

const licenseKey: string = "AZ2gBQx/LkgGCmYsnx1ULzEMQWGoPfhnwkh4PdtGXkHRfbPOcXv8kqhDovYRAS5RI3SPTElZfxQ7TmOnTFlNQqN6WijyaSSUdmdCPP8rtEZbdn5+7HZSIPBwupVKSeuaVTd2mJgqGebYNbhO+zh7Ip8VDn54CSiI6uNpQzwzPI8ONE2Q0jzwWBsNSbe8YgOaKvBKsvqfteLB3b5pP8DB3Au7uD5TT8lDJ81kx/+5Vam/IrmPKdkjRg+fC5fI6XCxnmdRF7YbO/7hwS6GpcGMYIXOBX30vRYhy+13pMRRArpwMdaP6e4RetO1JqTIM479OaOHN8m94IERGE7SCrwpsLuQJNci8ZU+63aXmaMCkCHaVuQiV0BUJFJOpFOfDqah1QRV94FlCzhIPZwkSYjh5d4d8VxlASELD7I6cfmvSsmLZ6xjvNdtmwW+T7ILoTJTu5r27fF58q64ohDv/3OU5hclUpBkc2Ep2hS6z0a47jIGBJ58VkZ18x/uKoabQWcOGbT5/T5LgDIT6O4kKQVLkyhUh3SFj7Tj87G0k/CUcY26/AvpSuUmVNQyahepm4TCS9k2LoyCdpMYJC0oUxS1hdkpkBufmkmOZj64BwEitXktz30dGFT89N+3LJIazdbgNOmAFgr5XEZalqU58pPuyl7Rw0USBVNNaj/oT2N0vIUEP69A6Wsojh/RCbyF+J+P6Lm8FazNaHQb5s9CofB8X3B4byTR6frQnLFiJFv8x2buyo4lTYr0MXxxMZqmpsmT4n+Cq+SHT3NQhlADrImjrUCp71sXcCtd/k+y1AlzrJnCcxrNsNjfZ5D1Jw06dmKAkhwtkD+FqO8=";
const engineLocation: string = "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/"; // could also be e.g. "build"


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    
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
    ScanditSdkModule.forRoot(licenseKey, {engineLocation})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}