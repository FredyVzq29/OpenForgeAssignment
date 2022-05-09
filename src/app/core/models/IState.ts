import { IUser } from "./IUser";

export interface IState {
    loading:boolean,
    users: ReadonlyArray<IUser>,
    users_det: IUser
}