import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postsUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL to web api
  constructor(private http: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id: number): Observable<Post> {
    const url = this.postsUrl + '/' + id;
    return this.http
      .get<Post>(url)
      .pipe(tap((_) => console.log(`fetched post id=${id}`)));
  }
}
