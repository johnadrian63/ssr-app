import { Routes } from "@angular/router";

import { UserList } from "./list/user-list";

export const userRoutes: Routes = [
   {
      path: "",
      component: UserList,
      pathMatch: "prefix"
   },
   // {
   //    path: ":id",
   //    component: PostView
   // }
];
