import { Component, input, model, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageModule } from "primeng/message";

@Component({
  selector: 'app-input-username',
  standalone: true,
  imports: [MessageModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-username.html',
  styleUrls: ['./input-username.css']
})
export class InputUsername {
username: string = '';
validation = output<boolean>();
//emailChange = output<string>();
email= model<string>("");
getUsernameError(): string {
const control = this.profileForm.get('username');
if (control?.errors?.['required']) return "el username es obligatorio";
if (control?.errors?.['email']) return "email incorrecto";
if (control?.errors?.['minlength']) return "minimo 3 caracteres";
return "";
}
checkErrorsEmail(): boolean{//true si hay errores
  const control = this.profileForm.get('username');
  return this.getUsernameError() !=='';
  //return (control?.errors?.['required'] || ((control?.errors?.['minlength']) ? true : false) 
  // || control?.errors?.['username'])
}
onInputChange(event:Event): void{
  const newValue = (event.target as HTMLInputElement).value;
  //console.log('Username changed to:', newValue);
  if(this.checkErrorsEmail()){
    this.validation.emit(false);
  }else{
    this.validation.emit(true);
  }
  this.email.set(newValue);
}


profileForm = new FormGroup({ 
    username: new FormControl('', [Validators.required, Validators.email]),
});
}


