import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExampleComponentModule, ExampleDirectiveModule, ExamplePipeModule } from '../../../../dist/demo-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleComponentModule,
    ExampleDirectiveModule,
    ExamplePipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
