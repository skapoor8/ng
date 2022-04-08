import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libExamplePipe'
})
export class ExamplePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('example pipe works');
    return null;
  }

}
