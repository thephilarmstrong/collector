import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import {
  createClient,
  SupabaseClient,
  User as SupabaseUser,
} from '@supabase/supabase-js'
import { User } from './types/user.type';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private supabase: SupabaseClient;

  constructor(
  ) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  login(email: string, password: string): Observable<LoginResponse> {
    return from(this.supabase.auth.signInWithPassword({email, password}))
    .pipe(
      map(signInResponse => {
        if (signInResponse.error) {
          throw signInResponse.error;
        }

        return { user: mapToUser(signInResponse.data.user!)}
      }),
    );
  }

  logout(): Observable<void> {
    return from(this.supabase.auth.signOut())
    .pipe(
      map(signOutResponse => {
        if (signOutResponse.error) {
          throw signOutResponse.error
        }
      }),
    )
  }

  register(email: string, password: string): Observable<LoginResponse> {
    return from(this.supabase.auth.signUp({email, password}))
    .pipe(
      map(signUpResponse => {
        if (signUpResponse.error) {
          throw signUpResponse.error
        }

        return { user: mapToUser(signUpResponse.data.session?.user!)}
      }),
    )
  }
}

type LoginResponse = {
  user: User;
}

function mapToUser(user: SupabaseUser) {
  return {
    id: user.id,
    role: user.role!,
  };
}
