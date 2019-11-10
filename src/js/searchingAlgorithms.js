/*
 Ricerca un elemento (element) in un array (arr) e restituisce true se l'elemento è presente.
 Case insensitive
*/

const linearSearch = (arr,element) => {
    element = element.toLowerCase();
    for (let val of arr){
        val = val.toLowerCase();
        if (element === val){
            return true
        }
    }
    return false;
};

/*
 Ricerca un elemento (element) in un array (arr) e restituisce l'indice dell'elemento.
 Case insensitive
*/

const linearSearchIndex = (arr,element) => {
    element = element.toLowerCase();
    for (let i = 0; i < arr.length;i++){
        let val = arr[i].toLowerCase();
        if (element === val){
            return i;
        }
    }
    return -1;
};

