import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from './../post.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @Output() clickedCategory = new EventEmitter();
  constructor() { }
  categorySearch(categorySearched: Post) {
    this.clickedCategory.emit(categorySearched);
  }
}
