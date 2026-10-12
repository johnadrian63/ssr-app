import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { IPost } from "../data/models/IPost";
import { PostService } from "../data/services/post.service";

@Component({
   selector: 'app-post-view',
   imports: [],
   templateUrl: './post-view.html',
   styleUrl: './post-view.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostView implements OnInit {
   private readonly postService: PostService = inject<PostService>(PostService);
   private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

   public readonly post: WritableSignal<IPost | null> = signal<IPost | null>(null);

   public ngOnInit(): void {
      const postId = this.activatedRoute.snapshot.paramMap.get("id");

      if (postId) {
         this.postService.getPost(+postId)
            .subscribe((post) => {
               this.post.set(post);
            });
      }
   }
}
