import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  isRemember: Boolean = true;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { 
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(formData: any) {
    console.log(formData);
    this.router.navigate(['/masterdataManagement']);
  }
}
