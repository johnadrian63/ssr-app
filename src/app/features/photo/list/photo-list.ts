import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { IPhoto } from "../data/models/IPhoto";
import { PhotoService } from "../data/services/photo.service";

@Component({
   selector: 'app-photo-list',
   imports: [
      RouterLink
   ],
   templateUrl: './photo-list.html',
   styleUrl: './photo-list.scss',
})
export class PhotoList {
   private readonly photoService: PhotoService = inject<PhotoService>(PhotoService);

   public readonly photos: WritableSignal<IPhoto[]> = signal<IPhoto[]>([]);

   public ngOnInit(): void {
      this.getPhotos();
   }

   private getPhotos(): void {
      this.photoService.getPhotos()
         .subscribe((photos: IPhoto[]) => {
            this.photos.set(photos);
         });
   }
}
