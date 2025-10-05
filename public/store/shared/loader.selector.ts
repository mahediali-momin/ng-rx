import { createFeatureSelector, createSelector } from "@ngrx/store";
import { loadingState } from "./loader.state";

export const SHARED_STATE_NAME = 'shared';
const getSharedState = createFeatureSelector<loadingState>(SHARED_STATE_NAME)

export const getLoading = createSelector(getSharedState, (state: loadingState) => state.loading);