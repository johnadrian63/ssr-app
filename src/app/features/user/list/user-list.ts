import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { UserService } from "../data/services/user.service";
import { IUser } from "../data/models/IUser";

@Component({
   selector: 'app-user-list',
   imports: [
      RouterLink
   ],
   templateUrl: './user-list.html',
   styleUrl: './user-list.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserList implements OnInit {
   private readonly userService: UserService = inject<UserService>(UserService);

   public readonly users: WritableSignal<IUser[]> = signal<IUser[]>([]);

   public ngOnInit(): void {
      this.getUsers();
   }

   private getUsers(): void {
      this.userService.getUsers()
         .subscribe((users: IUser[]) => {
            this.users.set(users);
         });
   }
}
