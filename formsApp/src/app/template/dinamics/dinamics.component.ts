import { Component, OnInit } from '@angular/core';

interface Person {
  nombre: string,
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html'
})
export class DinamicsComponent{
newGame: string = '';

persona: Person = {
  nombre: 'Daniela',
  favoritos: [
    {id: 1, nombre: 'Civilization VI'},
    {id: 2, nombre: 'GTA'}
  ]
}

addGame(){
  const newFav: Favorito = {
    id: this.persona.favoritos.length + 1,
    nombre: this.newGame
  }
  this.persona.favoritos.push({...newFav});
  this.newGame = '';
}

save() {
  console.log('correcto');
  
}


delete(index: number) {
  this.persona.favoritos.splice(index, 1)
}
}
