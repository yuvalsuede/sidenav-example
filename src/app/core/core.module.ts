/* tslint:disable:member-ordering no-unused-variable */
import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';

import { CommonModule }      from '@angular/common';
import {TopbarComponent} from "./top-bar.component";
import {FormsModule} from "@angular/forms";
import {SidebarComponent} from "./sidebar-component";
import {MenuService} from "./menu.service";



@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ TopbarComponent , SidebarComponent],
  exports:      [ TopbarComponent, SidebarComponent],
  providers:    [  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        MenuService
      ]

    };
  }
}

