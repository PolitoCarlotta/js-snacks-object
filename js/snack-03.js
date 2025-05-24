// array oggetti animali
//oggetto nome, famiglia,classe
//nuovo array di mammiferi

const animali= [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'gatto',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
     {
        nome: 'aquila',
        famiglia: 'accipitridae',
        classe: 'uccelli'
    },
     {
        nome: 'vipera',
        famiglia: 'viperidae',
        classe: 'rettili'
    },

]

const mammiferi= []

for (let i=0; i<animali.length; i++){
    animale= animali[i]
    console.log(animale)
    if(animale.classe === 'mammiferi'){
        mammiferi.push(animale)
    }
}
















console.log(animali,mammiferi)