import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:any
  token:any
  invalidLogin:boolean = false

  constructor(private authService:AuthService,private router:Router) { }

  login(credentials:any){
    this.authService.login(credentials).subscribe((res)=>{
      this.users = res
      this.token = this.users.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
    },(httpError)=>{
      this.invalidLogin = true
    })
  }
  ngOnInit(): void {
  }

}
