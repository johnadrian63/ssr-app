import { Routes } from "@angular/router";

export const postRoutes: Routes = [
  {
    path: "",
    loadComponent: () => import("./list/post-list").then((c) => c.PostList),
  }
];
