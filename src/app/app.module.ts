import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './components/cat/cat.component';
import { HttpClientModule } from '@angular/common/http';
import { CatsListComponent } from './components/catsList/catsList.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { catsReducer } from './store/reducers/cats.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CatsEffects } from './store/effects/cats.effects';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    CatsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    StoreModule.forRoot({ cats: catsReducer }),
    EffectsModule.forRoot([CatsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
