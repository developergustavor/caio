"use strict";




export class User {
  username = "teste";
  #password;

  constructor(props) {
    super(props);
  }

  setName = (name) => {
    // function x arrow function:
    // dentro de uma function vc pode referenciar o this
    console.log(this.username);
  };

  setName(name) {
    console.log(this.username);
  }
}
