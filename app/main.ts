import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavbarModule} from './modules/navbar/navbar.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(NavbarModule);
