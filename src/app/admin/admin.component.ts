import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PostService]
})
export class AdminComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, imageLink: string, description: string, condition: string, location: string, category: string) {
    var newPost: Post = new Post(title, imageLink, description, condition, location, category);
    this.postService.addPost(newPost);
  }
}
