import { ChangeDetectionStrategy, Component, inject, Signal, signal, WritableSignal } from '@angular/core';
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { RouterLink } from "@angular/router";
import { switchMap } from "rxjs";

import { IPhoto } from "../data/models/IPhoto";
import { PhotoService } from "../data/services/photo.service";

@Component({
   selector: 'app-photo-list',
   imports: [
      RouterLink
   ],
   templateUrl: './photo-list.html',
   styleUrl: './photo-list.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoList {
   private readonly photoService: PhotoService = inject<PhotoService>(PhotoService);

   public readonly currentPage: WritableSignal<number> = signal<number>(1);

   public readonly photos: Signal<IPhoto[]> = toSignal<IPhoto[], []>(
      toObservable(this.currentPage).pipe(
         switchMap((currentPage: number) => {
            return this.photoService.getPhotos(currentPage);
         })
      ),
      {
         initialValue: []
      }
   );

   public getNext(): void {
      this.currentPage.update((currentPage: number) => currentPage + 1);
   }

   public getPrevious(): void {
      this.currentPage.update((currentPage: number) => {
         return currentPage > 1 ? currentPage - 1 : 1;
      });
   }
}
