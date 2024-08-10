import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormAccount } from '../../../shared/interfaces';

@Component({
  selector: 'new-account-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-account-form.component.html',
  styleUrl: './new-account-form.component.scss'
})
export class NewAccountFormComponent {

  @Output() newAccountEvent = new EventEmitter<FormAccount>();

  public accountForm:FormGroup<any>;

  constructor(private readonly formBuilder:FormBuilder) {
    this.accountForm = formBuilder.group({
      loginname: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      extrainfo: ['', (control:any) =>  control.value === '150302' ? null:{wrong:true}],
    });
    this.accountForm.setValidators(this.createCompareValidator(this.accountForm.get('password'),this.accountForm.get('password_confirm')));
  }

  newAccountSubmit() {
    this.accountForm.disable();
    this.newAccountEvent.emit({loginname: this.accountForm.get('loginname')?.value, password:this.accountForm.get('password')?.value});
  }

  private createCompareValidator(controlOne: any, controlTwo: any) {
    return () => 
      controlOne.value !== controlTwo.value ? { match_error: 'Value does not match' } : null;
  }

}
