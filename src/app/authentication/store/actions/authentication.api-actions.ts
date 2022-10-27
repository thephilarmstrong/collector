import { createAction, props } from "@ngrx/store";
import { User } from "../../types/user.type";

type LoginSuccessProps = {user: User}
export const loginSuccess = createAction('@boombastech/authentication/login/success', props<LoginSuccessProps>());

type LoginFailureProps = {message: string}
export const loginFailure = createAction('@boombastech/authentication/login/failure', props<LoginFailureProps>());

export const logoutSuccess = createAction('@boombastech/authentication/logout/success');

type LogoutFailureProps = {message: string}
export const logoutFailure = createAction('@boombastech/authentication/logout/failure', props<LogoutFailureProps>());

export const registerSuccess = createAction('@boombastech/authentication/register/success', props<LoginSuccessProps>());

export const registerFailure = createAction('@boombastech/authentication/register/failure', props<LogoutFailureProps>());