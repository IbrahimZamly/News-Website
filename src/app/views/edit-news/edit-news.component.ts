import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsModel';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  constructor(private newsService:NewsService,private route:ActivatedRoute, private router:Router) { }

  id= this.route.snapshot.params.id
  news:News = {}
  getSingleNews(){
    this.newsService.getSingleNews(this.id).subscribe((res)=>{
      this.news = res
    })
  }
  formSubmit(news:News){
    this.newsService.editNews(this.id,news).subscribe((res)=>{
      this.news = res
      this.router.navigate(['/view-news'])
    })
  }
  ngOnInit(): void {
    this.getSingleNews()
  }

}
