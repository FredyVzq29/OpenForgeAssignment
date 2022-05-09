import { IUser } from "./IUser";

/**
 * *My data model used to save the data needed in the app
 */

export interface IState {
    loading:boolean,
    users: ReadonlyArray<IUser>,
    users_det: IUser
}