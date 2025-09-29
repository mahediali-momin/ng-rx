import { Action, createReducer } from "@ngrx/store";
import { Post } from "../../models/posts";
import { initialPostState, postState } from "./post.state";


const _postReducer = createReducer(initialPostState)

export function postReducer(state: postState, action: Action<any>): postState {
    return _postReducer(state, action);
}