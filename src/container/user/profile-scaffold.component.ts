import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { BroadcastService } from '../../shared/services/broadcast/broadcast.service';

@Component({
  selector: 'profile-scaffold',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './profile-scaffold.component.html',
  styleUrl: './profile-scaffold.component.scss'
})
export class ProfileScaffoldComponent {

  public loginname$:Observable<string | null>;
  constructor(private readonly bbc:BroadcastService) {
    this.loginname$ = bbc.tapLoginname();
  }

}
