import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  people: any[] = [];

  constructor() {}

  addPerson(person: any) {
    console.log(person)
    if (this.people.filter((p) => p.name === person.name).length === 0) {
      this.people.push(person);
      alert('Cadastro realizado com sucesso!');
    } else alert('Não é possível cadastrar duas pessoas com o mesmo nome');
  }

  getPeople() {
    return this.people;
  }
}
