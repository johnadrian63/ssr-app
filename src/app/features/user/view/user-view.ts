import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { UserService } from "../data/services/user.service";
import { IUser } from "../data/models/IUser";

@Component({
   selector: 'app-user-view',
   imports: [],
   templateUrl: './user-view.html',
   styleUrl: './user-view.scss',
})
export class UserView implements OnInit {
   private readonly userService: UserService = inject<UserService>(UserService);
   private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

   public readonly user: WritableSignal<IUser | null> = signal<IUser | null>(null);

   public ngOnInit(): void {
      const userId = this.activatedRoute.snapshot.paramMap.get("id");

      if (userId) {
         this.userService.getUser(+userId)
            .subscribe((user: IUser) => {
               this.user.set(user);
            });
      }
   }
}
