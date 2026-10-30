import { afterNextRender, ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { IUser } from "../data/models/IUser";
import { UserService } from "../data/services/user.service";
import { isPlatformBrowser, isPlatformServer } from "@angular/common";

@Component({
   selector: 'app-user-view',
   imports: [],
   templateUrl: './user-view.html',
   styleUrl: './user-view.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserView implements OnInit {
   private readonly userService: UserService = inject<UserService>(UserService);
   private readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

   public readonly user: WritableSignal<IUser | null> = signal<IUser | null>(null);
   private readonly platformId = inject(PLATFORM_ID);

   constructor() {
      afterNextRender(() => {
         const platformBrowser = isPlatformBrowser(this.platformId);
         const platformServer = isPlatformServer(this.platformId);

         console.log("platformId", this.platformId);
         console.log("isPlatformBrowser()", platformBrowser);
         console.log("isPlatformServer()", platformServer);
      });
   }

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
