import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplePipePipe } from './example-pipe.pipe';



@NgModule({
  declarations: [
    ExamplePipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class ExamplePipeModule { }
