import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/Entities/Character';
import { RickMortyService } from 'src/app/service/rick-morty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  nameCharacter: string = "rick"
  stringify: string = ""
  count: number = 0;
  counter = new Map()
  //characters:Character[]=[]
  characters: Array<Character> = new Array()
  characters2: Array<Character> = new Array()
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

  async getCharacters() {
    await this.rickMortyService.getCharacters(this.nameCharacter).subscribe(data => {
      data.filter(character => {
        this.characters.push(new Character(character.id, character.name, character.species, character.gender, character.image))
      })
      
      
      this.characters.filter(character => {
        //this.counter.set(character.species, this.count)
        if (this.counter.get(character.species) == undefined) {
          this.counter.set(character.species, 1)
        }else{
          this.counter.set(character.species, this.counter.get(character.species) + 1)
        }
        console.log(this.counter)
      })

      
      for (var [key, value] of this.counter) {
        console.log(key + " = " + value);
      }
    })
  }

  /*  getCharacter(){
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
   */


}
