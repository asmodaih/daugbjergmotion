import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    routes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,routes]
})
export class AppModule { }
