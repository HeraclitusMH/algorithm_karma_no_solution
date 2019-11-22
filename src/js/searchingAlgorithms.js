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

/*
 Accepts a sorted array and a value.
 Search number with binary searching, return the index
*/

const binarySearch = (arr,val) => {
    let left = 0;
    let right = arr.length -1;
    do {
        let mid = Math.floor((left+right)/2);
        if(arr[mid] == val){
            return mid;
        }
        arr[mid] > val ?  right = mid - 1 : left = mid + 1;
    } while (left <= right);
    return -1;
}

