import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/IUser';

/**
 * loadUsersList
 * * Action called in app/pages/list/list.page.ts
 * @param since:number    
 * TODO: It's needed to change the 'since' param at the moment of making the request
 */
export const loadUsersList = createAction(
    '[User List] Loading users',
    props<{ since:number }>()
);

/**
 * usersListLoaded
 * * Action called by loadUsersList Action (Above)
 * @param users:IUser[]
 * TODO: Called by the effect UsersEffect.loadUsers$ automatically
 *                          
 */
export const usersListLoaded = createAction(
    '[User List] List is loaded!',
    props<{ users:IUser[] }>()
);


/**
 * loadUserDetail
 * * Action called in app/pages/search/search.page.ts
 * @param login_name:string
 * TODO: It's needed to get the detail of the user
 */
export const loadUserDetail = createAction(
    '[Search] Loading user detail',
    props<{ login_name:string }>()
);

/**
 * userDetailLoaded
 * * Action called in app/pages/search/search.page.ts
 * @param users:IUser
 * TODO: Called when a user is searched
 *                          
 */
export const userDetailLoaded = createAction(
    '[Search] Searched a user',
    props<{ user }>()
);
