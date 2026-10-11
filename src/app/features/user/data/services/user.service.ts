import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IUser } from "../models/IUser";

@Injectable({
   providedIn: 'root',
})
export class UserService {
   private readonly httpClient = inject(HttpClient);
   private readonly baseUrl = "https://jsonplaceholder.typicode.com";

   public getUsers(): Observable<IUser[]> {
      return this.httpClient.get<IUser[]>(`${this.baseUrl}/users`);
   }

   public getUser(id: number): Observable<IUser> {
      return this.httpClient.get<IUser>(`${this.baseUrl}/users/${id}`);
   }
}
