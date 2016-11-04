import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavbarModule} from './modules/navbar/navbar.module';
import { CardLayoutModule} from './modules/card-layout/card-layout.module';
import {AppModule} from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(CardLayoutModule);
