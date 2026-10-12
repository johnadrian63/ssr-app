import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { IUser } from "../models/IUser";
import { API_URL } from "../../../../app.tokens";

@Injectable({
   providedIn: 'root',
})
export class UserService {
   private readonly httpClient = inject(HttpClient);
   private readonly baseUrl = inject<string>(API_URL);

   public getUsers(): Observable<IUser[]> {
      return this.httpClient.get<IUser[]>(`${this.baseUrl}/users`);
   }

   public getUser(userId: number): Observable<IUser> {
      return this.httpClient.get<IUser>(`${this.baseUrl}/users/${userId}`);
   }
}
