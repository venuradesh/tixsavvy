import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "txy-book-now",
  standalone: true,
  imports: [],
  templateUrl: "./book-now.component.html",
  styleUrl: "./book-now.component.css",
})
export class BookNowComponent {
  @Output() closeClicked = new EventEmitter<Boolean>();

  handleCloseClick(): void {
    this.closeClicked.emit(true);
  }
}
