import { Component, Output, EventEmitter} from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() clickPost = new EventEmitter();

  categorySearch(categorySearched: string) {
    this.clickPost.emit(categorySearched);
  }
}
