import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './store/app.reducers';


import { AppComponent } from './app.component';
import { ListafacturasComponent } from './listafacturas/listafacturas.component';
import { environment } from 'src/environments/environment';
import { EffectsArray } from './store/effects';

@NgModule({
  declarations: [
    AppComponent,
    ListafacturasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(EffectsArray),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
