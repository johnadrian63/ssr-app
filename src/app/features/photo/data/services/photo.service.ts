import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IPhoto } from "../models/IPhoto";

@Injectable({
   providedIn: 'root',
})
export class PhotoService {
   private readonly httpClient = inject(HttpClient);
   private readonly baseUrl = "https://jsonplaceholder.typicode.com";

   public getPhotos(): Observable<IPhoto[]> {
      return this.httpClient.get<IPhoto[]>(`${this.baseUrl}/photos`, {
         params: {
            _limit: 150
         }
      });
   }

   public getPhoto(photoId: number): Observable<IPhoto> {
      return this.httpClient.get<IPhoto>(`${this.baseUrl}/photos/${photoId}`);
   }
}
