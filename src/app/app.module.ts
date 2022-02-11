import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { RedWhiteCardComponent } from './red-white-card/red-white-card.component';
import { RedCardComponent } from './red-card/red-card.component';
import { DarkgreyCardComponent } from './darkgrey-card/darkgrey-card.component';
import { MassEffectCardComponent } from './mass-effect-card/mass-effect-card.component';
import { AzureCardComponent } from './azure-card/azure-card.component';
import { LightgreyCardComponent } from './lightgrey-card/lightgrey-card.component';
import { SquareEffectCardComponent } from './square-effect-card/square-effect-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    RedWhiteCardComponent,
    RedCardComponent,
    DarkgreyCardComponent,
    MassEffectCardComponent,
    AzureCardComponent,
    LightgreyCardComponent,
    SquareEffectCardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
