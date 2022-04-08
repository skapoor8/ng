import { Directive } from '@angular/core';

@Directive({
  selector: '[libExampleDirective]'
})
export class ExampleDirectiveDirective {

  constructor() { 
    console.log('example directive works!');
  }

}
