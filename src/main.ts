import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {registerLicense} from '@syncfusion/ej2-base';
import { AppModule } from './app/app.module';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NBaF1cWWhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjXH5ZcXFWRWReVEx+WQ==");
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
