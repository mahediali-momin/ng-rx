import { createAction } from "@ngrx/store";

export const updateLoading = createAction('[shared] update loading', (loading: boolean) => ({ loading }));