import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { button } from '@primeuix/themes/aura/inputnumber';
import { label } from '@primeuix/themes/aura/metergroup';
import { Button } from 'primeng/button';
import { IftaLabelModule } from 'primeng/iftalabel';
import { MessageModule } from 'primeng/message';
import { EnterpriseService } from '../../services/enterprise-service';
import { Enterprise } from '../../model/enterprise';
import { Message } from "../Base/message/message";
import { InputUsername } from "../Base/input-username/input-username";
import { InputPasswd } from "../Base/input-passwd/input-passwd";
import { LoadBarProducts } from "../load-bar-products/load-bar-products";

@Component({
  selector: 'app-login-component',
  imports: [IftaLabelModule, FormsModule, Button, ReactiveFormsModule, MessageModule, Message, InputUsername, InputPasswd],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
  providers: [EnterpriseService]
})
export class LoginComponent {
  passwordValid: boolean = false;
  emailValid: boolean = false;
  username: string = '';
  password: string = '';
  message: string = '';
//  hidden: boolean = true;
  isPasswordlValid(validity: boolean): boolean {
    return validity
  }
  isEmailValid(validity: boolean): boolean {
    return validity
  }


  profileForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  onLoginClicked() {
    let enterprise = this.enterpriseService.checkCredentials(this.username, this.password);
    if (enterprise) {
      //this.hidden = false;
      this.message = "login correcto" + enterprise.email;
    } else {
     // this.hidden = false;
      this.message = "login incorrecto";
    }
  }
  login() { }

  constructor(private enterpriseService: EnterpriseService) { }
}

