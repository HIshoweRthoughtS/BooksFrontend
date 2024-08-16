import { Component, OnInit } from '@angular/core';
import { HermesService } from '../../shared/services/backend/hermes.service';
import { FormAccount } from '../../shared/interfaces';
import { NewAccountFormComponent } from '../../components/user/new-account-form/new-account-form.component';

@Component({
  selector: 'create-account',
  standalone: true,
  imports: [NewAccountFormComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent implements OnInit {

  constructor(private readonly hermes:HermesService) {}

  ngOnInit(): void {
    
  }

  createAccount(acc:FormAccount) {
    this.hermes.postNewAccount(acc);
  }

}
