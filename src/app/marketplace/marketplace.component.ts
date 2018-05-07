import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [PostService]
})
export class MarketplaceComponent implements OnInit {
  constructor(private router: Router, private postService: PostService) {}
  postList: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.postList = this.postService.getPosts();
  }

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.$key]);
  };

}
