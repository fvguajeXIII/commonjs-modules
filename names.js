// Funzione che accetta firstName e lastName e restituisce un oggetto
const createName = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName
  };
};

// Esporta la funzione
module.exports = createName;