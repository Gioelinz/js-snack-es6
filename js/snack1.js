/* 
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal */

const displayElement = document.getElementById('display-bikes');

const bikes = [
    { nome: "Passeggio", peso: 10 },
    { nome: "Corsa", peso: 5 },
    { nome: "Mountain-Bike", peso: 14 },
]

let arrayNum = [];
let allWeight = '';

//# giro per ogni oggetto nell array
for (let i = 0; i < bikes.length; i++) {
    const currentBike = bikes[i];
    const { peso, nome } = currentBike;

    // !Metodo stringa
    /* allWeight = allWeight + `Il peso di Bici da ${nome} è ${peso}`; */
    // !Metodo DOM
    const liBikes = document.createElement('li');
    liBikes.append(`Il peso di Bici da ${nome} è ${peso}`);
    liBikes.classList.add('list-group-item');
    displayElement.appendChild(liBikes);

    arrayNum.push(peso);
    /* console.log(arrayNum); */
}

const minWeight = Math.min(...arrayNum);

const liMinWeight = document.createElement('li');
liMinWeight.append(`Il peso minore è ${minWeight}`)
liMinWeight.classList.add('list-group-item');
liMinWeight.classList.add('fs-1');
displayElement.appendChild(liMinWeight)


/* console.log(Math.min(...arrayNum)) */
