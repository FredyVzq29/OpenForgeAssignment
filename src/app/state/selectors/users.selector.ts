import { createSelector } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
import { AppState } from '../app.state';

//This selector is related to the property 'generalData' of AppState
export const selectUsersFeature = (state:AppState) => state.generalData;

/**
 * *selectList
 * TODO: Calling the selector from line 6, returning the list of users
 */
export const selectList = createSelector(
    selectUsersFeature,
    (state: IState) => state.users
);

/**
 * *selectLoading
 * TODO: Calling the selector from line 6, returning the loading variable
 */
export const selectLoading = createSelector(
    selectUsersFeature,
    (state: IState) => state.loading
);

/**
 * *selectLoading
 * TODO: Calling the selector from line 6, returning the user data
 */
export const selectUserDetail= createSelector(
    selectUsersFeature,
    (state: IState) => state.users_det
);