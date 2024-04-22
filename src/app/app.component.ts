import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, PostComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
