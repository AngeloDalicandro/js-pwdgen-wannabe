// Chiedo il nome all'utente
const userFirstName = prompt ('Qual è il tuo nome?')

console.log (userFirstName)

// Chiedo il cognome all'utente
const userLastName = prompt ('Qual è il tuo cognome?')

console.log (userLastName)

// Chiedo il colore preferito all'utente
const userFavouriteColor = prompt ('Qual è il tuo colore preferito?')

console.log (userFavouriteColor)

// Genero la password
const userPasswordGenerated = userFirstName + userLastName + userFavouriteColor + '21'

console.log (userPasswordGenerated)

// Stampo la password nell'HTML

document.getElementById('password').innerHTML = userPasswordGenerated