import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(){
    console.log("Logueando")
  }
  register(){
    console.log("Registrando")
  }
  logOut(){

  }
}
