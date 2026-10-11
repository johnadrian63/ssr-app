import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IPost } from "../models/IPost";

@Injectable({
   providedIn: 'root',
})
export class PostService {
   private readonly httpClient = inject(HttpClient);
   private readonly baseUrl = "https://jsonplaceholder.typicode.com";

   public getPosts(): Observable<IPost[]> {
      return this.httpClient.get<IPost[]>(`${this.baseUrl}/posts`);
   }

   public getPost(postId: number): Observable<IPost> {
      return this.httpClient.get<IPost>(`${this.baseUrl}/posts/${postId}`);
   }
}
