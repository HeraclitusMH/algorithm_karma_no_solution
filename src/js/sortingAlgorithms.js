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

const insertionSort = (arr) => {
    for (let i=1;i<arr.length;i++){
        let x = arr[i];
        let j = i;
        if(arr[i] <= arr[j - 1]){
            while (arr[i] < arr[j - 1] ){
                j--;
            }
            arr.splice(i, 1);
            arr.splice(j, 0, x);
        }
    }
    return arr;
}