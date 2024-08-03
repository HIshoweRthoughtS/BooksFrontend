import { Component, OnInit } from '@angular/core';
import { HermesService } from '../../shared/services/backend/hermes.service';
import { FormAccount } from '../../shared/interfaces';
import { NewAccountFormComponent } from '../../components/general/user/new-account-form/new-account-form.component';

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
    this.hermes.postNewAccount(acc).subscribe((res:any) => {
      if (res.info === 'fail') {
        console.error('[CreateAccount] BE answered: ', res.detail);
      } else /*res.info === 'success'*/ {
        //messages = .."done happy we did it alright welcome"
        console.log(res);
      }
    });
  }

}
