import { Routes } from "@angular/router";

import { PostList } from "./list/post-list";

export const postRoutes: Routes = [
  {
    path: "list",
    component: PostList,
  }
];
