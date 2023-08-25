"use strict";

// P.O.O
class User {
  // atributos
  name;
  #password;

  // construtor (chamado na hora que instancia uma classe)
  constructor(name) {
    this.name = name;
  }

  // propriedades (getters e setters)
  getName() {
    return this.name;
  }

  setPassword(password) {
    this.#password = password;
  }

  // métodos
  // aplicando polimorfismo abaixo
  validateName() {
    return !!this.name.length;
  }

  validateName(name) {
    return !!name.length;
  }
}

// const user1 = new User('')
// const user2 = new User('jonas')

// const users = [user1, user2]

// console.log(user1.validateName())
// console.log(user2.validateName())

// herança
class Admin extends User {
  role;

  constructor() {
    this.role = "admin";
  }
}

// const admin1 = new Admin()
// console.log(admin1)

// exemplo abaixo de herança aninhada (extendeu o admin, que por sua vez extendeu o user)
class Customer extends Admin {}
