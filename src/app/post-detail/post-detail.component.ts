import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { CommonModule, Location, UpperCasePipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BehaviorSubject, finalize } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [UpperCasePipe, CommonModule, ButtonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  isLoading$ = new BehaviorSubject<boolean>(false);
  constructor(
    private router: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.isLoading$.next(true);

    const id = parseInt(this.router.snapshot.paramMap.get('id')!);
    this.postService
      .getPost(id)
      .pipe(finalize(() => this.isLoading$.next(false)))
      .subscribe((post) => (this.post = post));
  }
  goBack() {
    this.location.back();
  }
}
