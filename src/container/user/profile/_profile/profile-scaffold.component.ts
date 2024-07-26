import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile-scaffold',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './profile-scaffold.component.html',
  styleUrl: './profile-scaffold.component.scss'
})
export class ProfileScaffoldComponent {

}
