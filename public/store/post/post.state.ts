import { Post } from '../../models/posts';

export interface postState {
    posts: Post[];
}


export const initialPostState: postState = {
    posts: [
        {
            id: 1,
            title: 'First Post',
            description: 'This is the description of the first post'
        }
    ]
};