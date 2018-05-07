import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postID: number = null;
  postToDisplay: Post;

  constructor(private route: ActivatedRoute, private location: Location, private postService: PostService) { }


  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postID = parseInt(urlParameters['id']);
    });
    this.postToDisplay = this.postService.getPostById(this.postID);
  }

}
