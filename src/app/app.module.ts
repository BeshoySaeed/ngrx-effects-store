import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DisplayErrorLogsComponent } from './components/display-error-logs/display-error-logs.component';
import { HttpClientModule } from '@angular/common/http';
import { DataEffects } from './state/effects/errorLogs.effect';
import {
  errorReducer,
  dataFeatureKey,
} from './state/reducers/errorLogs.reducer';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [AppComponent, DisplayErrorLogsComponent, HomeComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ [dataFeatureKey]: errorReducer }),
    EffectsModule.forRoot([DataEffects]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
