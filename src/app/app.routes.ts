import { Routes } from "@angular/router";
import { HomeComponent } from "./Pages/home/home.component";
import { EventDetailsPageComponent } from "./Pages/event-details-page/event-details-page.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent,
  },
  {
    path: "event",
    pathMatch: "full",
    component: EventDetailsPageComponent,
  },
];
