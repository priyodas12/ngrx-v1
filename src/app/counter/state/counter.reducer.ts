import { createReducer, on } from "@ngrx/store"; { }
import { initState } from "./counter.state";
import { decrementAction, incrementAction, resetAction } from "./counter.action";

const _counterReducer = createReducer(
    initState,
    on(incrementAction, (state) => {
        console.log("incrementAction>>");
        return {
            ...state,
            count: state.count + 1,
        }
    }),
    on(decrementAction, (state) => {
        console.log("decrementAction>>");
        return {
            ...state,
            count: state.count - 1,
        }
    }),
    on(resetAction, (state) => {
        console.log("resetAction>>");
        return {
            ...state,
            count: 0,
        }
    })
);

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);
}