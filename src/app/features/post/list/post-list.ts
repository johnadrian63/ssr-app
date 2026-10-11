import { Component, inject } from '@angular/core';
import { PostListService } from "./post-list-service";

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
})
export class PostList {
  private readonly postListService: PostListService = inject<PostListService>(PostListService);
}
