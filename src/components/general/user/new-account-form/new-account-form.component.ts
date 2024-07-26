import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Account } from '../../../../shared/interfaces';

@Component({
  selector: 'app-new-account-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-account-form.component.html',
  styleUrl: './new-account-form.component.scss'
})
export class NewAccountFormComponent {

  @Output() newAccountEvent = new EventEmitter<Account>();

  public accountForm:FormGroup<any>;

  constructor(private readonly formBuilder:FormBuilder) {
    this.accountForm = formBuilder.group({
      loginname: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      email: ['',Validators.email],
    });
  }

  newAccountSubmit() {
    this.accountForm.disable();
    console.log('[Account Form] body: ', this.accountForm.getRawValue());
    this.newAccountEvent.emit(this.accountForm.getRawValue());
  }

}
