/* 
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

function getRndNum(min, max) {
    const rndNum = Math.floor(Math.random() * max - min + 1) + min;
    return rndNum
}

/* console.log(getRndNum(1, 100)) */

//# Svolgimento

const squads = [
    { name: "Juventus", totpoints: 0, totfouls: 0 },
    { name: "Inter", totpoints: 0, totfouls: 0 },
    { name: "Milan", totpoints: 0, totfouls: 0 },
];



let newSquads = [];

for (let i = 0; i < squads.length; i++) {
    const currentSquad = squads[i];
    let { name, totpoints, totfouls } = currentSquad;

    totpoints = getRndNum(1, 100);

    totfouls = getRndNum(1, 20);


    newSquads.push({ name, totfouls });
}

console.table(newSquads)