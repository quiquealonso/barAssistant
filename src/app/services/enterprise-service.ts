import { Component, Injectable } from '@angular/core';
import { Enterprise } from '../model/enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  checkCredentials(username: string, password: string) {
    console.log('Checking credentials for:', username, password);
   let enterprise= this.enterprises.find(ent => ent.email === username && ent.passwd === password);
   return enterprise;
  
  }
   enterprises:Enterprise[] = [
  
  {
    id:1, name:"Bar Restaurant", address:"Carrer de la Pau, 10, 08002 Barcelona", 
    phone:"933 01 02 03", email:'barcentral@gmail.com', nif:"B12345678", passwd:'admin'},
  {
    id:2, name:"Bar Cafeteria", address:"Carrer de Balmes, 20, 08007 Barcelona", 
    phone:"933 04 05 06", email:"barcafetria@gmail.com", nif:"B87654321", passwd:"admin"
  }
];
  constructor() { }
}
