import { Action, createReducer, on } from "@ngrx/store";
import { initialLoadingState, loadingState } from "./loader.state";
import { updateLoading } from "./loader.action";


const _loadingReducer = createReducer(initialLoadingState,
    on(updateLoading, (state: loadingState, action: loadingState) => {
        return {
            ...state,
            loading: action.loading
        }
    })
)
export function loadingReducer(state: loadingState, action: Action<any>) {
    return _loadingReducer(state, action);
}