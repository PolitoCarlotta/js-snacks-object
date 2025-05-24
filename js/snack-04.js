// array di oggetti persone
// nome,cogname,età
// nuovo array con stringa di nome cognome e se può guidare

const persone= [
    {
        nome:'Giovanni',
        cognome:'Bianchi',
        eta: 34
    },
    {
        nome:'Maria',
        cognome:'Rossi',
        eta: 12
    },
    {
        nome:'Giulio',
        cognome:'Neri',
        eta: 55
    },
    {
        nome:'Marco',
        cognome:'Verdi',
        eta: 20
    },
    {
        nome:'Linda',
        cognome:'Marrone',
        eta: 6
    },
    {
        nome:'Anna',
        cognome:'Grigio',
        eta: 44
    },
    {
        nome:'Luca',
        cognome:'Gialli',
        eta: 17
    },
]

const persone2=[]

for(let i=0; i<persone.length; i++){
    const persona= persone[i]
    if(persona.eta>=18){
        persone2.push(`${persona.nome} ${persona.cognome} può guidare`)
    }
    else{
        persone2.push(`${persona.nome} ${persona.cognome} non può guidare`)
    }
    console.log(persona)
}

console.log(persone, persone2)