import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { reducers } from './app.reducers';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(
      reducers
    )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
