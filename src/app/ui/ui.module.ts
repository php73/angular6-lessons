import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './derectives/tooltip.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TooltipDirective
  ]
})
export class UiModule { }
