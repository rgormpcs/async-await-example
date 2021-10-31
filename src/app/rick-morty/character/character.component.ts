import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Entities/Character';
import { RickMortyService } from 'src/app/service/rick-morty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  nameCharacter:string ="rick"
  stringify:string=""

  counter=new Map()
  //characters:Character[]=[]
  characters:Array<Character>=new Array()
  characters2:Array<Character>=new Array()
  character: Character = {
    "id": 0,
    "name": "string",
    "species": "string",
    "gender": "string",
    "image": "string"
  };
  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
   //this.getCharacter();
   //this.getCharacters();
  }

 async getCharacters(){
  await  this.rickMortyService.getCharacters(this.nameCharacter).subscribe(data=>{
        data.filter(character=>{
          this.characters.push(new Character(character.id, character.name, character.species, character.gender, character.image))
        })
  console.log( this.characters)    
    
  })
  

  
 }
 


 getCharacter(){
  let promiseRickMorty=new Promise((resolve, reject)=>{
    this.rickMortyService.getCharacter().subscribe(data=>{
      this.character=data;
      resolve("ok")
    })
  })
  promiseRickMorty.then(resolve=>{
    if(resolve==="ok"){
      console.log(this.character)
    }
  })
 }



}
