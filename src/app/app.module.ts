import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { OrangeBtnComponent } from './design-system/orange-btn/orange-btn.component';
import { TransparentBtnComponent } from './design-system/transparent-btn/transparent-btn.component';
import { RedBtnComponent } from './design-system/red-btn/red-btn.component';
import { PaginationBtnsComponent } from './design-system/pagination-btns/pagination-btns.component';
import { SlideBarComponent } from './design-system/slide-bar/slide-bar.component';
import { DropUpComponent } from './design-system/drop-up/drop-up.component';
import { BlueFormButtonComponent } from './design-system/blue-form-button/blue-form-button.component';
import { SocialIconsComponent } from './design-system/social-icons/social-icons.component';
import { FormComponent } from './design-system/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,
    OrangeBtnComponent,
    TransparentBtnComponent,
    RedBtnComponent,
    PaginationBtnsComponent,
    SlideBarComponent,
    DropUpComponent,
    BlueFormButtonComponent,
    SocialIconsComponent,
    FormComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
