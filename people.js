//Importiamo la funzione da names.js
const importNames = require('./names.js')

//Importiamo la funzione da hobbies.js
const importHobbies = require('./hobbies.js')

//Creo la funzione che mi restituisce un oggetto con le due proprietà
const createPerson = () => {
  const fullName = importNames("Fabio", "Vellucci");
  const hobbies = importHobbies("Calcio", "Formula 1", "Marvel");

  return {
    fullName: fullName,
    hobbies: hobbies
  };
};

//Esporto la funzione
module.exports = createPerson;

//Test della funzione
console.log(createPerson());