import { Component } from "@angular/core";
import { HomeComponent } from "../home/home.component";

@Component({
    selector:'app-header',
    standalone:true,
    templateUrl:'./header.component.html',
    styleUrl:'./header.component.css',
    imports:[HomeComponent]
})
export class HeaderComponent{

}