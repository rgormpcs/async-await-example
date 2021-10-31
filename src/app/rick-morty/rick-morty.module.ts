import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CharacterComponent,
    ButtonsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CharacterComponent,
    ButtonsComponent,
    
  ],
})
export class RickMortyModule { }
