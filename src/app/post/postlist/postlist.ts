import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from '../../../../public/store/post/post.selectors';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../public/models/posts';
import { RouterModule } from '@angular/router';
import { deletePost } from '../../../../public/store/post/post.action';
import { postState } from '../../../../public/store/post/post.state';

@Component({
  selector: 'app-postlist',
  imports: [CommonModule, RouterModule],
  templateUrl: './postlist.html',
  styleUrl: './postlist.css'
})
export class Postlist {

  posts: Post[] = []

  constructor(
    private store: Store<postState>
  ) {
    this.store.select(getPosts).subscribe((posts) => {
      this.posts = posts
    })
  }


  deletePost(post: any) {
    this.store.dispatch(deletePost(post));
  }
}
