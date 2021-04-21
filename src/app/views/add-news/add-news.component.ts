import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/interfaces/newsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news:News = {}
  constructor(private newsService:NewsService,private router:Router) { }
  formSubmit(news:News){
    this.newsService.addNews(news).subscribe((res)=>{
      this.news = res
    })
    this.router.navigate(['/view-news'])
  }
  ngOnInit(): void {
  }

}
