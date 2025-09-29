
import { counterReducer } from '../../public/store/counter/counter.reducer';
import { CounterState } from '../../public/store/counter/counter.state';
import { Post } from '../models/posts';
import { postReducer } from '../../public/store/post/post.reducer';

export interface AppStore {
    counter: CounterState;
    posts: Post[];
}

export const appStore = {
    counter: counterReducer,
    posts: postReducer
};