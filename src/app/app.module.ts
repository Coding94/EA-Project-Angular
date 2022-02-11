import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { RedWhiteCardComponent } from './red-white-card/red-white-card.component';
import { RedCardComponent } from './red-card/red-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    RedWhiteCardComponent,
    RedCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
