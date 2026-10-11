import { Routes } from '@angular/router';

import { postRoutes } from "./features/post/post.routes";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "post/list",
    pathMatch: "full",
  },
  {
    path: "post",
    children: [
      ...postRoutes
    ],
  }
];
