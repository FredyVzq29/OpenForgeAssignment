import { createReducer, on } from '@ngrx/store';
import { IState } from 'src/app/models/IState';
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
    initialState,
    
    /**
     * loadUserList (Action)
     * *Only is changing the loading variable to true
     */
    on(loadUsersList, (state) => {
        return {...state, loading : true}
    }),
    
    /**
     * loadUserList (Action)
     * *Assigning the users list from the response (concat to the existing array)
     */
    on(usersListLoaded, (state, data) => {
        return {...state, loading : false, users: state.users.concat(data.users)}
    }),
    
    /**
     * userDetailLoaded (Action)
     * *Assigning the user data
     */
    on(userDetailLoaded, (state, data) => {
        return {...state, loading : false, users_det : data.user}
    })
); 