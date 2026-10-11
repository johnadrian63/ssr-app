import { Routes } from "@angular/router";

import { PhotoList } from "./list/photo-list";
import { PhotoView } from "./view/photo-view";

export const photoRoutes: Routes = [
   {
      path: "",
      component: PhotoList,
   },
   {
      path: ":id",
      component: PhotoView,
   }
];
