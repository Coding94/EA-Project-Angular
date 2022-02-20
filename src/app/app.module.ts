import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { RedWhiteCardComponent } from './design-system/red-white-card/red-white-card.component';
import { RedCardComponent } from './design-system/red-card/red-card.component';
import { DarkgreyCardComponent } from './design-system/darkgrey-card/darkgrey-card.component';
import { MassEffectCardComponent } from './design-system/mass-effect-card/mass-effect-card.component';
import { AzureCardComponent } from './design-system/azure-card/azure-card.component';
import { LightgreyCardComponent } from './design-system/lightgrey-card/lightgrey-card.component';
import { SquareEffectCardComponent } from './design-system/square-effect-card/square-effect-card.component';
import { SecondSectionComponent } from './second-section/second-section.component';

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
    SecondSectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
