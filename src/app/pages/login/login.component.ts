import { Component,inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authService = inject(AuthService)
  router = inject(Router)

  login(){
    this.authService.login();
    this.router.navigate(["/contact"])
  }
}
