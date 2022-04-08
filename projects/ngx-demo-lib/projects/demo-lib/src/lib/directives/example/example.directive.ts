import { Directive } from '@angular/core';

@Directive({
  selector: '[libExampleDirective]'
})
export class ExampleDirective {

  constructor() {
    console.log('example directive works');
  }

}
