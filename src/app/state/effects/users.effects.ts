import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';


@Injectable()
export class UsersEffects {


    /**
     * *Called from app/pages/list/list.page.ts getList()
     * TODO:Used to make the request to get the user list
     */
    loadUsers$ = createEffect(() => 
    this.actions$.pipe(
        ofType('[User List] Loading users'),
        mergeMap((action:any) => 
                this.userService.getUsersList(action.since)
                .pipe(
                    map(users => ({ type: '[User List] List is loaded!', users })),
                    catchError((err) => EMPTY)
                )
            )
        )
    );

        /**
     * *Called from app/pages/list/list.page.ts getList()
     * TODO:Used to make the request to get the user detail
     */
    loadUserDet$ = createEffect(() => 
        this.actions$.pipe(
            ofType('[Search] Loading user detail'),
            mergeMap((action:any) => 
                    this.userService.getUserDetail(action.login_name)
                    .pipe(
                        map(users_det => ({ type: '[Search] Searched a user',user:users_det })),
                        catchError((err) => EMPTY)
                    )
                )
            )
        );


    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}


}