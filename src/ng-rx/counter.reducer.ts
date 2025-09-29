import { Action, createReducer, on } from "@ngrx/store";
import { CounterState, initialCounterState } from "./counter.state";
import { addValue, decrement, increment, reset } from "./counter.action";

const _counterReducer = createReducer(initialCounterState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        };
    }),
    on(addValue, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.value
        };
    })
)



export function counterReducer(state: CounterState, action: Action<string>) {
    return _counterReducer(state, action);
}