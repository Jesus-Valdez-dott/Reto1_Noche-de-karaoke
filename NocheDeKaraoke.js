const songs1 = [3, 1, 2, 3, 4, 2, 5]
const playlist1 = prepareSongs(songs1)
console.log(playlist1) // [1, 2, 3, 4, 5]

const songs2 = [6, 5, 5, 5, 5]
const playlist2 = prepareSongs(songs2)
console.log(playlist2) // [5, 6]

const songs3 = []
const playlist3 = prepareSongs(songs3)
console.log(playlist3) // []
// Nadie anotó nada, la lista queda vacía

function prepareSongs (lista) {
    // Se inicializa un areglo auxiliar para saber que numeros aparecen
    let aux = [];
    /* Se recorre la lista y se van contando los elementos de la lista, 
        si el arreglo en la posicion "[element]" esta vacio, se le pone un cero y se le suma 1, sino solo se le suma 1
    */ 
    lista.forEach(element => {
        aux[element] = (aux[element] || 0) + 1;
    });

    // Se prepara un arreglo para los elementos ordenados
    let ordenada = [];
    /* Se recorre el arreglo auxiliar solo fijandose en los indices 
        y se van agregando los elementos al arreglo ordenada parseando los elementos a enteros
    */
    for (const num in aux) {
        ordenada.push(parseInt(num));
    }

    return ordenada;
}