//Array 10 automobili
    //Ogni automobile marca, modello, alimentazione
    //dividi in 3 array -benzina - diesel - tutte le altre
    //stampa i 3 array separati


const automobili = [
    auto1 ={
        marca: 'Ford',
        modello: 'Fiesta',
        alimentazione: 'benzina',
    },
    auto2 ={
        marca: 'Fiat',
        modello: 'Punto',
        alimentazione: 'gpl',
    },
    auto3 ={
        marca: 'Opel',
        modello: 'Corsa',
        alimentazione: 'diesel',
    },
    auto4 ={
        marca: 'Fiat',
        modello: '500',
        alimentazione: 'benzina',
    },
    auto5 ={
        marca: 'Dacia',
        modello: 'Duster',
        alimentazione: 'diesel',
    },
    auto6 ={
        marca: 'Toyota',
        modello: 'Yaris',
        alimentazione: 'elettrica',
    },
    auto7 ={
        marca: 'Volkswagen',
        modello: 'Golf',
        alimentazione: 'metano',
    },
    auto8 ={
        marca: 'Alfa Romeo',
        modello: 'Tonale',
        alimentazione: 'benzina',
    },
    auto9 ={
        marca: 'Jeep',
        modello: 'Wrangler',
        alimentazione: 'gpl',
    },
    auto10 ={
        marca: 'Citroen',
        modello: 'Berlingo',
        alimentazione: 'diesel',
    },

]

console.log(automobili)

const benzina = []
const diesel = []
const altre = []

for( let i=0; i< automobili.length; i++) {
    const automobile = automobili[i]
    console.log(automobile)
    if(automobile.alimentazione === 'benzina'){
        benzina.push(automobile)
    }
    else if(automobile.alimentazione === 'diesel'){
        diesel.push(automobile)
    }
    else{
        altre.push(automobile)
    }
}

console.log(benzina)
console.log(diesel)
console.log(altre)