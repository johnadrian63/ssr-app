import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IPost } from "../models/IPost";
import { API_URL } from "../../../../app.tokens";

@Injectable({
   providedIn: 'root',
})
export class PostService {
   private readonly httpClient = inject(HttpClient);
   private readonly baseUrl = inject<string>(API_URL);

   public getPosts(): Observable<IPost[]> {
      return this.httpClient.get<IPost[]>(`${this.baseUrl}/posts`);
   }

   public getPost(postId: number): Observable<IPost> {
      return this.httpClient.get<IPost>(`${this.baseUrl}/posts/${postId}`);
   }
}
