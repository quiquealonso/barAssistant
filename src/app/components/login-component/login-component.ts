import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { button } from '@primeuix/themes/aura/inputnumber';
import { label } from '@primeuix/themes/aura/metergroup';
import { Button } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login-component',
  imports: [IftaLabelModule,  FormsModule, Button, ReactiveFormsModule, MessageModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {
username: any;
password: any;
getPasswdError(): string|undefined {
const control = this.profileForm.get('password');
if (control?.errors?.['required']) return "la password es obligatoria";
return "";  
}
getUsernameError(): string {
const control = this.profileForm.get('username');
if (control?.errors?.['required']) return "el username es obligatorio";
if (control?.errors?.['email']) return "email incorrecto";
if (control?.errors?.['minlength']) return "minimo 3 caracteres";
return "";
}
 profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
onLoginClicked() {

throw new Error('Method not implemented.');
}
  login() {

  }
  email: string = '';
  passwd: string = '';
}
