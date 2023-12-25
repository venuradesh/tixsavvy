import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

//components
import { BookNowComponent } from "../../Components/Multiple Use/book-now/book-now.component";

@Component({
  selector: "txy-event-details-page",
  standalone: true,
  imports: [CommonModule, BookNowComponent],
  templateUrl: "./event-details-page.component.html",
  styleUrl: "./event-details-page.component.css",
})
export class EventDetailsPageComponent {
  bookNowClicked: boolean = false;

  constructor(private router: Router) {}

  handleBack(): void {
    this.router.navigate(["/"]);
  }

  bookNowClickedFunc(): void {
    this.bookNowClicked = true;
  }

  handleCloseClick(event: any): void {
    this.bookNowClicked = !event;
  }
}
