import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, Validators,FormGroup } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule,CardModule,InputTextModule,CommonModule,ButtonModule,CheckboxModule,PasswordModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 title = 'logIn';
 email: string = ''; 
 password = new FormControl('');
 confirmPassword: string = '';
 rememberMe: boolean = false;
 name:string='';

 isSignedIn = true;
  form: FormGroup<{ password: FormControl<string | null>; }>;

 onSignIn() {
   this.isSignedIn = !this.isSignedIn;
 }

 isVerify=true;
 onVerify(){
   this.isVerify=!this.isVerify;
 }
 constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(8)]],
  });
}

get passwordControl() {
  return this.form.get('password');
}

onSubmit() {
  if (this.form.valid) {
    const password = this.passwordControl?.value;
    console.log('Password:', password);
    console.log('Confirm Password:', this.confirmPassword);
  }
}

submitForm() {
  if (this.email) {
    console.log('Email:', this.email);
  }
}

}
