import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, finalize } from 'rxjs';
import { Post } from '../post';
import { PostService } from '../post.service';
CommonModule;
@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  posts: Post[] = [];
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.isLoading$.next(true);
    this.postService
      .getPosts()
      .pipe(finalize(() => this.isLoading$.next(false)))
      .subscribe((posts) => (this.posts = posts));
  }
}
