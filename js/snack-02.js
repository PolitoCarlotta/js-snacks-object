//array di stringhe
//formatta tutte le stringhe con iniziale maiuscola e crea nuovo array

const nomi = ['giulia', 'Marco','LUCA','giovanni','Vanessa','ANNA']
const nomi2 = []

console.log(nomi)

for( let i=0; i<nomi.length; i++){
    let nome = nomi[i]
    const iniziale= nome.substring(0,1).toUpperCase()
    const finale =nome.substring(1).toLowerCase()
    nome= iniziale.concat(finale)
    nomi2.push(nome)

    console.log(nome, iniziale, finale)
    }

    console.log(nomi2)