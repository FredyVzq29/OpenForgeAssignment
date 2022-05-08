import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IosToolBarComponent } from './toolbar/ios-tool-bar/ios-tool-bar.component';
import { MdToolBarComponent } from './toolbar/md-tool-bar/md-tool-bar.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ItemUserComponent } from './item-user/item-user.component';

@NgModule({
  declarations: [
    IosToolBarComponent,
    MdToolBarComponent,
    DetailUserComponent,
    ItemUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    IosToolBarComponent,
    MdToolBarComponent,
    DetailUserComponent,
    ItemUserComponent
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
