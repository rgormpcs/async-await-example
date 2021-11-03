import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from '../Entities/Character';
import { Characters } from '../Entities/Characters';
@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http:HttpClient) { 
    
  }
  getCharacter(){
    return this.http.get<Character>( "https://rickandmortyapi.com/api/character/2")
  }
  getCharacters(name:string){
    return this.http.get<Character[]>("https://rickandmortyapi.com/api/character/1,83,9,69,33,16,1,18,10,89")
  }
}
