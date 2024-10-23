import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersNavbarComponent } from './users-navbar/users-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Navbar';
}
