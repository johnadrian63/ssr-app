import { Routes } from '@angular/router';

import { postRoutes } from "./features/post/post.routes";
import { userRoutes } from "./features/user/user.routes";
import { photoRoutes } from "./features/photo/photo.routes";

export const routes: Routes = [
   {
      path: "",
      redirectTo: "posts",
      pathMatch: "full",
   },
   {
      path: "posts",
      children: [
         ...postRoutes
      ],
   },
   {
      path: "users",
      children: [
         ...userRoutes
      ],
   },
   {
      path: "photos",
      children: [
         ...photoRoutes
      ],
   }
];
