import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authenticationFeatureKey, authenticationReducer } from './store/authentication.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticationEffects } from './store/authentication.effects';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(authenticationFeatureKey, authenticationReducer),
    EffectsModule.forFeature([AuthenticationEffects])
  ]
})
export class AuthenticationModule { }
