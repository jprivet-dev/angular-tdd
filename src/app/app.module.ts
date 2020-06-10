import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InheritRootComponent } from './inherit/inherit-root/inherit-root.component';
import { InheritChildAComponent } from './inherit/inherit-child-a/inherit-child-a.component';
import { InheritChildBComponent } from './inherit/inherit-child-b/inherit-child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    InheritRootComponent,
    InheritChildAComponent,
    InheritChildBComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
