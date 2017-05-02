import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import {MdIconModule} from "@angular/material";


let importExportArray:any[] = [

]

@NgModule({
  imports:      [ CommonModule ],
  declarations: importExportArray,
  exports:      [ ...importExportArray, CommonModule, FormsModule ]
})
export class SharedModule { }
