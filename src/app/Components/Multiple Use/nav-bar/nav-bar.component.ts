import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "txy-nav-bar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./nav-bar.component.html",
  styleUrl: "./nav-bar.component.css",
})
export class NavBarComponent {
  hamburgerClicked: boolean = false;

  handleHamburgerClick(): void {
    this.hamburgerClicked = !this.hamburgerClicked;
  }
}
