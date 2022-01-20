/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal */

const bikes = [
    { nome: "Passeggio", peso: 10 },
    { nome: "Corsa", peso: 5 },
    { nome: "Mountain-Bike", peso: 14 },
]

let arrayNum = [];

//# giro per ogni oggetto nell array
for (let i = 0; i < bikes.length; i++) {
    const currentBike = bikes[i];
    const { peso } = currentBike;
    arrayNum.push(peso)
    console.log(arrayNum)

}

//
console.log(Math.min(...arrayNum))