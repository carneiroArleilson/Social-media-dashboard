import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BodyComponent } from './components/template/body/body.component';
import { NgToggleModule } from 'ng-toggle-button';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
