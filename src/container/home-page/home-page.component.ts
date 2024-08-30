import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountsService } from '../../shared/services/manager/accounts.service';
import { CommonModule } from '@angular/common';
import { BroadcastService } from '../../shared/services/broadcast/broadcast.service';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  public loginForm:FormGroup<any>; 
  public logedIn$ = this.bbc.tapLoginState();

  constructor(
    private readonly accd:AccountsService,
    private readonly bbc:BroadcastService,
    private readonly formBuilder:FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      loginname : ['', Validators.required],
      password : ['', Validators.required],
    })
  }
  ngOnInit(): void {
    
  }
  public login():void {
    this.loginForm.disable();
    this.accd.clockIn(this.loginForm.getRawValue());
  }
  public logout(): void {
    this.accd.clockOut();
  }
}
