import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HermesService } from '../../../shared/services/backend/hermes.service';
import { AccountsService } from '../../../shared/services/manager/accounts.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public test$ = this.accd.loginname$;
  constructor(private readonly hermes:HermesService,private readonly accd:AccountsService) { }

  deleteDb() {
    this.hermes.deltedB();
  }

  logout() {
    this.accd.clockOut();
  }
}
