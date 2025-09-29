import { createAction } from "@ngrx/store";


export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const addValue = createAction('[Counter] Add Value', (value: number) => ({ value }));
