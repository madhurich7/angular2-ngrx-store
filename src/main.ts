import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';
// import {provideStore} from '@ngrx/store';
// import {clock} from './app/reducers/clock';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => console.log('app running'),
          (err) => console.log('error occured', err));
