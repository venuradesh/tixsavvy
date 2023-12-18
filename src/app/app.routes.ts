import { Routes } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
];
