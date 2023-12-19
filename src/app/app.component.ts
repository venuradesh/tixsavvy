import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet, RouterModule } from "@angular/router";

//components
import { NavBarComponent } from "./Components/Multiple Use/nav-bar/nav-bar.component";
import { FooterComponent } from "./Components/Multiple Use/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, NavBarComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "tixsavvy";
}
