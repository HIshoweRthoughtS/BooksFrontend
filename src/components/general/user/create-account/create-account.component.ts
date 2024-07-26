import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HermesService } from '../../../../shared/services/backend/hermes.service';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent implements OnInit {

  public accountForm:FormGroup;
  constructor(private readonly hermes:HermesService,private readonly formBuilder:FormBuilder) {
    this.accountForm = formBuilder.group({
      login_name: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      email: ['',Validators.email],
    })
  }

  ngOnInit(): void {
    
  }

  createAccount() {
    const body = {
      name: this.accountForm.value.login_name,
      password: this.accountForm.value.password,
      email: this.accountForm.value.email
    };
    console.log('[Account Form] body: ', body);
    this.hermes.postNewAccount(body).subscribe((res:any) => {
      if (res.info === 'fail') {
        console.error('[CreateAccount] BE answered: ', res.detail);
      } else /*res.info === 'success'*/ {
        //messages = .."done happy we did it alright welcome"
        console.log(res);
      }
    });
  }

}
