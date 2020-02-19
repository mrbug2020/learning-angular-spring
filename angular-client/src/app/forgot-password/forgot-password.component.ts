import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstant } from '../constants/app-constant';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { 
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.email]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(email:any){
    // TODO send email
    console.log(email);
    console.log(this.forgotPasswordForm);
    this.router.navigate([AppConstant.FORGOT_PASSWORD_COMPLETE_URL]);
  }

}
