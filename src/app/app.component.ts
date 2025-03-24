import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //  // RouterOutlet,RouterLink,
  imports: [  ReactiveFormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'angular-dynamic-routes';

  // name=new FormControl();
  // password=new FormControl()


  // disValue(){
  //   console.log(this.name.value,this.password.value);
  // }

  // Form Grouping in Reactive Forms

  profileForm=new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    email:new FormControl('',[Validators.required,Validators.maxLength(30)])
  })

  onSubmit(){
    console.log(this.profileForm.value);
  }
  get name(){
    return this.profileForm.get('name')
  }
  get password(){
    return this.profileForm.get('password')
  }
  get email(){
    return this.profileForm.get('email')
  }
}
