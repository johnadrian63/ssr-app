import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';

import { PostListService } from "./data/services/post-list-service";
import { IPost } from "./data/models/IPost";

@Component({
   selector: 'app-post-list',
   imports: [],
   templateUrl: './post-list.html',
   styleUrl: './post-list.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostList implements OnInit {
   public readonly posts: WritableSignal<IPost[]> = signal<IPost[]>([]);

   private readonly postListService: PostListService = inject<PostListService>(PostListService);

   public ngOnInit(): void {
      this.getList();
   }

   private getList(): void {
      this.postListService.getList()
         .subscribe((posts: IPost[]) => {
            console.log(posts);
            this.posts.set(posts);
         });
   }
}
