import { Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'posts', component: PostComponent },
  { path: 'posts/:id', component: PostDetailComponent },
];
