import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postState } from "./post.state";

const getPostState = createFeatureSelector<postState>('posts')

export const getPosts = createSelector(getPostState, (state: postState) => state.posts);
export const getPostById = createSelector(getPostState, (state: postState, props: { id: number }) => state.posts.find(post => post.id == props.id));