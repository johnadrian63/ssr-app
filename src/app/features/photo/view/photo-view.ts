import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { IPhoto } from "../data/models/IPhoto";
import { PhotoService } from "../data/services/photo.service";

@Component({
   selector: 'app-photo-view',
   imports: [],
   templateUrl: './photo-view.html',
   styleUrl: './photo-view.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoView implements OnInit {
   private readonly photoService: PhotoService = inject<PhotoService>(PhotoService);
   private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

   public readonly photo: WritableSignal<IPhoto | null> = signal<IPhoto | null>(null);

   public ngOnInit(): void {
      const photoId = this.activatedRoute.snapshot.paramMap.get("id");

      if (photoId) {
         this.photoService.getPhoto(+photoId)
            .subscribe((user: IPhoto) => {
               this.photo.set(user);
            });
      }
   }
}
