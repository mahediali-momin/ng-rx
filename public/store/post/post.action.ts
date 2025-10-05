import { createAction } from "@ngrx/store";
import { Post } from "../../models/posts";

export const addPost = createAction('[post] add', (post: Post) => ({ post }));
export const editPost = createAction('[post] edit', (post: Post) => ({ post }));
export const deletePost = createAction('[post] delete', (post: Post) => ({ post }));