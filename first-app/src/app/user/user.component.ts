import { Component } from '@angular/core';
import { dummy_data } from '../dummy_data';

const randomIndex = Math.floor(Math.random()*dummy_data.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = dummy_data[randomIndex]
}
