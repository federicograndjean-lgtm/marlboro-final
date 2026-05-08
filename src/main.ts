import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app'; // <-- El error estaba acá (línea 3)

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  