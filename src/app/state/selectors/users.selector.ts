import { createSelector } from '@ngrx/store';
import { IState } from 'src/app/core/models/IState';
import { AppState } from '../app.state';

//This selector is related to the property 'usersList' of AppState
export const selectUsersFeature = (state:AppState) => state.generalData;


//Calling the selector from above, returning the list of users
export const selectList = createSelector(
    selectUsersFeature,
    (state: IState) => state.users
);

//Calling the selector from above, returning the varible to loading
export const selectLoading = createSelector(
    selectUsersFeature,
    (state: IState) => state.loading
);

//Calling the selector from above, returning the user data
export const selectUserDetail= createSelector(
    selectUsersFeature,
    (state: IState) => state.users_det
);