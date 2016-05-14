import { bootstrap } from '@angular/platform-browser-dynamic';
import { bind } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';

import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [ 
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
