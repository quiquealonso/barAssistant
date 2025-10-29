import { Component, model, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Message } from "primeng/message";

@Component({
  selector: 'app-input-passwd',
  imports: [Message, ReactiveFormsModule],
  templateUrl: './input-passwd.html',
  styleUrl: './input-passwd.css'
})
export class InputPasswd {
validation = output<boolean>();

password= model<string>("");

onInputChange(event:Event): void{
  const newValue = (event.target as HTMLInputElement).value;
  console.log('Password changed to:', newValue);
  if(this.checkErrorsPassword()){
    this.validation.emit(false);
  }else{
    this.validation.emit(true);
  }
  this.password.set(newValue);
}
checkErrorsPassword(): boolean{//true si hay errores
  const control = this.profileForm.get('username');
  return this.getPasswdError() !=='';
 
}
getPasswdError(): string|undefined {
const control = this.profileForm.get('password');
if (control?.errors?.['required']) return "la password es obligatoria";
return "";  
}
profileForm = new FormGroup({
    password: new FormControl('', Validators.required),
  });
  
}
