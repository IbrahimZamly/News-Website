import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    users:any
    token:any
    invalidEmail:boolean = false
    invalidAge:boolean = false

  constructor(private router:Router, private authService:AuthService) { }

  signUp(credentials:any){
    this.authService.signUp(credentials).subscribe((res)=>{
      this.users = res
      this.token = this.users.token
      localStorage.setItem('token',this.token)
      this.router.navigate(['/profile'])
    },(httpError)=>{
      
      if(httpError.error.name == 'MongoError'){
        this.invalidEmail = true
      }
      if(httpError.error.errors.age.name=='ValidatorError'){
        this.invalidAge = true
      }

    })
  }

  ngOnInit(): void {
  }

}
