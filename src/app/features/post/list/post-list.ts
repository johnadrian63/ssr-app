import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';

import { IPost } from "../data/models/IPost";
import { PostService } from "../data/services/post.service";
import { RouterLink } from "@angular/router";

@Component({
   selector: 'app-post-list',
   imports: [
      RouterLink
   ],
   templateUrl: './post-list.html',
   styleUrl: './post-list.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostList implements OnInit {
   public readonly posts: WritableSignal<IPost[]> = signal<IPost[]>([]);

   private readonly postListService: PostService = inject<PostService>(PostService);

   public ngOnInit(): void {
      this.getPosts();
   }

   private getPosts(): void {
      this.postListService.getPosts()
         .subscribe((posts: IPost[]) => {
            this.posts.set(posts);
         });
   }
}
