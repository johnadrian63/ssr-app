import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { toSignal } from "@angular/core/rxjs-interop";

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
export class UserList {
   private readonly userService: UserService = inject<UserService>(UserService);

   public readonly users: Signal<IUser[]> = toSignal<IUser[], []>(this.userService.getUsers(), {
      initialValue: []
   });
}
