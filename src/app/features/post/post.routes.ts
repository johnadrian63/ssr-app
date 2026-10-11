import { Routes } from "@angular/router";

import { PostList } from "./list/post-list";
import { PostView } from "./view/post-view";

export const postRoutes: Routes = [
   {
      path: "list",
      component: PostList,
      pathMatch: "prefix"
   },
   {
      path: ":id",
      component: PostView
   }
];
