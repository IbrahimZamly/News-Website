import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/newsModel';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  news: News[] = []
  constructor(private newsService: NewsService) { }
  getNews() {
    this.newsService.getNews().subscribe((res) => {
      this.news = res
    })
  }
  deleteNews(news: News) {
    this.newsService.deleteNews(news._id).subscribe(() => {
      let index = this.news.indexOf(news)
      this.news.splice(index, 1)
    })
  }
  ngOnInit(): void {
    this.getNews()
  }

}
