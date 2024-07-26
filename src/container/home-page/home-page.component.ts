import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HermesService } from '../../shared/services/backend/hermes.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  public loginForm:FormGroup<any>; 

  constructor(private readonly hermes:HermesService,private readonly formBuilder:FormBuilder){
    this.loginForm = formBuilder.group({
      loginName : ['', Validators.required],
      password : ['', Validators.required],
    })
  }
  ngOnInit(): void {
    
  }
  public login():void {
    const tmpBody = {
      name: this.loginForm.value.loginName,
      password: this.loginForm.value.password,
    };
    console.log('[HomeLogin]body: ',tmpBody);
    this.hermes.postloginAccount(tmpBody).subscribe(res => console.log('[Login] res: ',res))
  }
}
