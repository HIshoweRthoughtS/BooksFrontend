import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AccountsService } from '../../../../shared/services/manager/accounts.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'profile-scaffold',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './profile-scaffold.component.html',
  styleUrl: './profile-scaffold.component.scss'
})
export class ProfileScaffoldComponent {

  public loginname$:Observable<string | null>;
  constructor(private readonly accd:AccountsService) {
    this.loginname$ = accd.loginname$;
  }

}
