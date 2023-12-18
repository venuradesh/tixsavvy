import { Component } from "@angular/core";

//components
import { NavBarComponent } from "../../Components/Multiple Use/nav-bar/nav-bar.component";

@Component({
  selector: "txy-home",
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
