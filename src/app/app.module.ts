import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { OrangeBtnComponent } from './orange-btn/orange-btn.component';
import { TransparentBtnComponent } from './transparent-btn/transparent-btn.component';
import { RedBtnComponent } from './red-btn/red-btn.component';
import { PaginationBtnsComponent } from './pagination-btns/pagination-btns.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { DropUpComponent } from './drop-up/drop-up.component';
import { BlueFormButtonComponent } from './blue-form-button/blue-form-button.component';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { FormComponent } from './form/form.component';

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
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
