import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.state";

export const POST_STATE_NAME = 'posts';
const getPostState = createFeatureSelector<postState>(POST_STATE_NAME)


export const getPosts = createSelector(getPostState, (state: postState) => state.posts);
export const getPostById = createSelector(getPostState, (state: postState, props: { id: number }) => state.posts.find(post => post.id == props.id));