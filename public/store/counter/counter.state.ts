

/* 
creating 2 state counter and name 
while incrementing and decrementing counter state name will obeservable also called
which is downside of the approach 1


Approch 2 is use of createSelector and createFeatureSelector
*/
export interface CounterState {
    counter: number;
    name: string
}

export const initialCounterState: CounterState = {
    counter: 0,
    name: 'Default User'
};