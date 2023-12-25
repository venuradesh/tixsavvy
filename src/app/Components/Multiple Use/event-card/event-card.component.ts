import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

//components

@Component({
  selector: "txy-event-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./event-card.component.html",
  styleUrl: "./event-card.component.css",
})
export class EventCardComponent {
  bookNowClicked: boolean = false;

  constructor(private router: Router) {}

  handleCardClick(): void {
    this.router.navigate(["/event"]);
  }
}
