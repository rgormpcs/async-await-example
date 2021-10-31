export class Character {
    id: number;
    name: string;
    species: string;
    gender: string;
    image: string;
constructor( id: number,
    name: string,
    species: string,
    gender: string,
    image: string){
        this.name=name;
        this.species=species;
        this.gender=gender;
        this.image=image;
        this.id=id;
}
}