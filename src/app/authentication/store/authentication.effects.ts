import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import * as AuthenticationActions from './actions'

@Injectable()
export class AuthenticationEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationActions.login),
    mergeMap(({email, password}) => this.authenticationService.login(email, password)
      .pipe(
        map(({user}) => AuthenticationActions.Api.loginSuccess({user})),
        catchError(({message}) => of(AuthenticationActions.Api.loginFailure({message}))
      ))
    )
  ));

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationActions.logout),
    mergeMap(() => this.authenticationService.logout()
      .pipe(
        map(() => AuthenticationActions.Api.logoutSuccess()),
        catchError(({message}) => of(AuthenticationActions.Api.logoutFailure({message}))
      ))
    )
  ));

  register$ = createEffect(() => this.actions$.pipe(
    ofType(AuthenticationActions.register),
    mergeMap(({email, password}) => this.authenticationService.register(email, password)
      .pipe(
        map(({user}) => AuthenticationActions.Api.registerSuccess({user})),
        catchError(({message}) => of(AuthenticationActions.Api.registerFailure({message}))
      ))
    )
  ));

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
  ) {}
}