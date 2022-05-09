import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/core/models/IUser';

//Creating the action for load of users
export const loadUsersList = createAction(
    '[User List] Loading users'
);


//Creating the action for load of users is complete
    //Pass the result of the request
export const usersListLoaded = createAction(
    '[User List] List is loaded!',
    props<{ users:IUser[] }>()
);

export const userDetailLoaded = createAction(
    '[Search] Searched a user',
    props<{ user:IUser }>()
);