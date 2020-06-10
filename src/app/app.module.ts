import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InheritRootComponent } from './inherit/inherit-root/inherit-root.component';

@NgModule({
  declarations: [
    AppComponent,
    InheritRootComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
