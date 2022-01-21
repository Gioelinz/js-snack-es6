/* SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
 */

const arrCars = ['Fiat', 'Lamborghini', 'Ferrari', 'KIA', 'Toyota', 'BMW'];


const includesFunction = (arr, a, b) => {
    const newArray = arr.filter((item, index) => {
        if (index >= a && index <= b) return true;
        return false;
    });
    return newArray
};


console.log(includesFunction(arrCars, 2, 3));