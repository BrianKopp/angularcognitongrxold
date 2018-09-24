import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { reducer } from './state/auth.reducer';
import { AuthorizationEffects } from './state/auth.effects';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthorizationEffects])
  ],
  declarations: [LoginComponent]
})
export class AuthModule {}
