import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '@environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './components/components.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ErrorInterceptor} from '@app/helpers/error.interceptor';
import {JWTInterceptor} from '@app/helpers/jwt.interceptor';
import {fakeBackendProvider} from '@app/helpers/_fake-backend.interceptor';
import {LoggerInterceptor} from '@app/helpers/logger.interceptor';
import {registerLocaleData} from '@angular/common';
import localeIT from '@angular/common/locales/it';

registerLocaleData(localeIT);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'it'},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggerInterceptor, multi: true},
    // TODO: remove mock backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
