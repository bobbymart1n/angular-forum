import {Pipe, PipeTransform} from '@angular/core';
import {Post} from './post.model';

@Pipe({
  name: 'category',
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Post[], clickedCategory) {
    let output: Post[] = [];
    for(let i = 0; i < input.length; i++) {
      if(input[i].category === clickedCategory) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
