const bubbleSort = (arr) => {
    for(let i = arr.length; i > 0 ; i--) {
        let swap = false;
        for(j=0;j<i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swap = true;
            }
        }
        if(!swap){return arr;}
    }
    return arr;
}

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let lowerIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowerIndex]){
                lowerIndex = j;
            }
        }
        [arr[i],arr[lowerIndex]] = [arr[lowerIndex],arr[i]];
    }
    return arr;
}

const insertionSortNaive = (arr) => {
    for (let i=1;i<arr.length;i++){
        let x = arr[i];
        let j = i;
        if(arr[i] <= arr[j-1]){
            while (arr[i] < arr[j-1] ){
                j--;
            }
            arr.splice(i, 1);
            arr.splice(j, 0, x);
        }
    }
    return arr;
}

const insertionSort = (arr) => {
	let currentVal;
    for(let i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

/* 
Return a sorted array of two sorted array
*/

const mergeHelper = (arr1,arr2) => {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            sortedArray.push(arr1[i]);
            i++
        } else {
            sortedArray.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length){
        sortedArray.push(arr1[i]);
        i++
    }
    while (j < arr2.length){
        sortedArray.push(arr2[j]);
        j++
    }
    return sortedArray;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return mergeHelper(left,right)
}