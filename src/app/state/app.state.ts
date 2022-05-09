import { ActionReducerMap } from "@ngrx/store";
import { IState } from "../core/models/IState";
import { usersReducer } from "./reducers/users.reducers";

//The data is consulted by the components here like a 'DB'
export interface AppState {
    generalData: IState;
}

//Declaring: userList (from the interface above) is taking 
//the userReducer method in UsersReducers file
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    generalData : usersReducer
}