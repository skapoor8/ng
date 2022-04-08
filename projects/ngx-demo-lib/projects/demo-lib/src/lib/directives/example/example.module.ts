import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleDirective } from './example.directive';



@NgModule({
  declarations: [ExampleDirective],
  imports: [
    CommonModule
  ]
})
export class ExampleDirectiveModule { }
