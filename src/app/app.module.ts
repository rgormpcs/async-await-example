import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RickMortyModule } from './rick-morty/rick-morty.module';

@NgModule({
  declarations: [
    AppComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RickMortyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
