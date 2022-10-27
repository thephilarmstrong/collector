import { createAction, props } from "@ngrx/store";

type LoginProps = {email: string, password: string}
export const login = createAction('@boombastech/authentication/login', props<LoginProps>());

export const logout = createAction('@boombastech/authentication/logout');

export const register = createAction('@boombastech/authentication/register', props<LoginProps>());

export const resetPassword = createAction('@boombastech/authentication/reset-password');

export const loginReset = createAction('@boombastech/authentication/login/reset');
export const logoutReset = createAction('@boombastech/authentication/logout/reset');
export const registerReset = createAction('@boombastech/authentication/register/reset');