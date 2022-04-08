import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'examplePipe'
})
export class ExamplePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log('example pipe works!');
    return null;
  }

}
