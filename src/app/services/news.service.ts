import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from '../interfaces/newsModel';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  addNews(news: News) {
    return this.http.post(this.baseUrl + 'news', news)
  }

  getNews() {
    return this.http.get<News[]>(this.baseUrl + 'news')
  }

  deleteNews(id: string) {
    return this.http.delete(this.baseUrl + 'news/' + id)
  }

  editNews(id:string,news:News){
    return this.http.patch(this.baseUrl + 'news/' +id,news)
  }
  getSingleNews(id:string){
    return this.http.get<News>(this.baseUrl + 'news/' + id)
  }
}
