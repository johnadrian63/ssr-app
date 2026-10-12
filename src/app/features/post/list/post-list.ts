import { ChangeDetectionStrategy, Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { switchMap } from "rxjs";
import { RouterLink } from "@angular/router";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";

import { IPost } from "../data/models/IPost";
import { PostService } from "../data/services/post.service";

@Component({
   selector: 'app-post-list',
   imports: [
      RouterLink
   ],
   templateUrl: './post-list.html',
   styleUrl: './post-list.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostList {
   private readonly postListService: PostService = inject<PostService>(PostService);

   public readonly currentPage: WritableSignal<number> = signal<number>(1);
   
   public readonly posts: Signal<IPost[]> = toSignal<IPost[], []>(
      toObservable(this.currentPage)
         .pipe(
            switchMap((currentPage: number) => {
               return this.postListService.getPosts(currentPage);
            })
         ),
      {
         initialValue: []
      }
   );

   public getNext(): void {
      this.currentPage.update((currentPage: number) => {
         return currentPage >= 1 ? currentPage + 1 : 1;
      });
   }

   public getPrevious(): void {
      this.currentPage.update((currentPage: number) => {
         return currentPage > 1 ? currentPage - 1 : 1;
      });
   }
}
