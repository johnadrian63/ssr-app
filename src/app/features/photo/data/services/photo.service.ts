import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IPhoto } from "../models/IPhoto";
import { API_URL } from "../../../../app.tokens";

@Injectable({
   providedIn: 'root',
})
export class PhotoService {
   private readonly httpClient = inject(HttpClient);
   private readonly baseUrl = inject<string>(API_URL);

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
