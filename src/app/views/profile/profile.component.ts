import { Component, OnInit } from '@angular/core';
import { ReportersService } from 'src/app/services/reporters.service';
import { Reporters } from 'src/app/interfaces/reportersModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  reporter:Reporters = {}
  constructor(private reportersService:ReportersService) { }

    getProfile(){
      this.reportersService.getProfile().subscribe((res)=>{
        this.reporter = res
      })
    }
  ngOnInit(): void {
    this.getProfile()
  }

}
