import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../../../public/store/app.store';
import { getPosts } from '../../../../public/store/post/post.selectors';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../public/models/posts';

@Component({
  selector: 'app-postlist',
  imports: [CommonModule],
  templateUrl: './postlist.html',
  styleUrl: './postlist.css'
})
export class Postlist {

  posts: Post[] = []

  constructor(
    private store: Store<AppStore>
  ) {
    this.store.select(getPosts).subscribe((posts) => {
      console.log('posts', posts);
      this.posts = posts
    })
  }

}
