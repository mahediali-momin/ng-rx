import { Action, createReducer, on } from "@ngrx/store";
import { initialPostState, postState } from "./post.state";
import { addPost, deletePost, editPost } from "./poss.action";
import { Post } from "../../models/posts";

const _postReducer = createReducer(initialPostState,
    on(addPost, (state, action: any) => {
        const post: Post = {
            ...action.post,
            id: state.posts.length + 1
        };
        return {
            ...state,
            posts: [...state.posts, post]
        }
    }),
    on(editPost, (state, action: any) => {
        const updatedPosts = state.posts.map((post: Post) => {
            if (post.id == action.post.id) return action.post;
            else return post;
        });
        return { ...state, posts: updatedPosts };
    }),
    on(deletePost, (state, action: any) => {
        const filteredPosts = state.posts.filter(post => post.id !== action.post.id);
        return { ...state, posts: filteredPosts };
    })
)

export function postReducer(state: postState, action: Action<any>): postState {
    return _postReducer(state, action);
}