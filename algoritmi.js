// function linearSearch(arr, value){
// let start = 0;
// let middle = Math.floor((start + end) / 2)
// let end = arr.length - 1
// while (arr[middle] !== value && start <= end){
//     if(value < arr[middle]){
//         end = middle -1
//     }else{
//         start = middle + 1
//     }
//     middle = Math.floor((start + end) / 2)
// }
// if(arr[middle === value]){
// return middle;
// }
// return -1
// }
function bubbleSort(arr){
    for (let i = arr.length; i < 0 ; i--){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
//bubblesort algo:
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function selectionSort(arr){
    
    for (let i = 0; i < arr.length; i++){
        let smallest = i;
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[lowest]){
                lowest = j
            }
        }
        if (i !== lowest){
            var temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp;
        
        }
        
    }
    return arr
}

selectionSort([1, 2, 4, 5, 9, 52])

function insertionSort(arr){
    for(let i=1; i < arr.length; i++){
        let currentVal = arr[i]
        for(let j = i-1; j >=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]          
        }
        arr[j+1] = currentVal
    }
    return arr
}
insertionSort([2,1,9,76,4])