/* SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio) */

const students = [
    { id: 22, name: 'Gioele', votes: 87 },
    { id: 123, name: 'Pietro', votes: 65 },
    { id: 67, name: 'Gianluca', votes: 43 },
    { id: 145, name: 'Gino', votes: 75 },
    { id: 56, name: 'Alessandro', votes: 69 },
    { id: 157, name: 'Giuseppe', votes: 71 },
];

const upperStudents = students.map((student) => student.name.toUpperCase());
console.log(upperStudents);

const bestStudents = students.filter((student) => student.votes > 70 ? true : false);

console.log(bestStudents);

const bestStudentsUpperId = students.filter((student) => student.votes > 70 && student.id > 120 ? true : false);

console.log(bestStudentsUpperId);