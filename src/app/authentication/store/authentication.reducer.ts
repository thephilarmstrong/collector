import { createReducer, on } from '@ngrx/store';
import { User } from '../types';
import * as AuthenticationActions from './actions'

export const authenticationFeatureKey = 'authentication';

type AuthenticationState = {
    user?: User;
    loginApiState?: ApiState;
    logoutApiState?: ApiState;
    registerApiState?: ApiState;
}

export const initialState: AuthenticationState = {
};

export const authenticationReducer = createReducer(
  initialState,
  on(AuthenticationActions.login, state => ({ ...state, loginApiState: { loading: true }})),
  on(AuthenticationActions.Api.loginSuccess, (state, {user}) => ({ ...state, user, loginApiState: { loading: false} })),
  on(AuthenticationActions.Api.loginFailure, (state, {message}) => ({ ...state, user: undefined, loginApiState: { loading: false, error: message} })),
  on(AuthenticationActions.loginReset, state => ({ ...state, loginApiState: undefined })),

  on(AuthenticationActions.logout, state => ({ ...state, logoutApiState: { loading: true} })),
  on(AuthenticationActions.Api.logoutSuccess, state => ({ ...state, user: undefined, logoutApiState: { loading: false } })),
  on(AuthenticationActions.Api.logoutFailure, (state, {message}) => ({ ...state, logoutApiState: { loading: false, error: message} })),
  on(AuthenticationActions.logoutReset, state => ({ ...state, logoutApiState: undefined })),

  on(AuthenticationActions.register, state => ({ ...state, registerApiState: { loading: true }})),
  on(AuthenticationActions.Api.registerSuccess, (state, {user}) => ({ ...state, user, registerApiState: { loading: false} })),
  on(AuthenticationActions.Api.registerFailure, (state, {message}) => ({ ...state, user: undefined, registerApiState: { loading: false, error: message} })),
  on(AuthenticationActions.registerReset, state => ({ ...state, registerApiState: undefined })),
);

type ApiState = {
  loading: boolean;
  error?: string;
}