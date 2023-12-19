import { Component } from "@angular/core";

//components
import { EventCardComponent } from "../../Components/Multiple Use/event-card/event-card.component";

@Component({
  selector: "txy-home",
  standalone: true,
  imports: [EventCardComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
