import { createReducer, on } from '@ngrx/store';
import { IState } from 'src/app/core/models/IState';
import { loadUsersList, userDetailLoaded, usersListLoaded } from '../actions/users.actions';

//Initial state "Initializing variables". I need to take the IState interface (like a empty model)
export const initialState: IState = {
    loading:false, 
    users : [],
    users_det:{
        'login':'',
        'avatar_url':'',
    }
}

export const usersReducer = createReducer(
    initialState,   //Taking the initial state of the data, when the app is loaded 
    on(loadUsersList, (state) => {
        return {...state, loading : true}
    }),             //Setting the list from the request
    on(usersListLoaded, (state, data) => {
        return {...state, loading : false, users:data.users}
    }),             //Setting the user data
    on(userDetailLoaded, (state, data) => {
        return {...state, loading : false, users_det : data.user}
    })
);