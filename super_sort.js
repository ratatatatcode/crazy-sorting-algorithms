function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function printArr(arr) {
    console.log(arr.join(" "));
}

function superSort(arr) {
    let pass = 1;
    const size = arr.length;

    while (true) {
        // Check if array is sorted
        let sorted = true;
        for (let i = 0; i < size - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                sorted = false;
                break;
            }
        }
        if (sorted) break;

        // Forward pass
        for (let i = 0; i < size - 4; i++) {
            if (arr[i] > arr[i + 2]) swap(arr, i, i + 2);
            if (arr[i] > arr[i + 3]) swap(arr, i, i + 3);
            if (arr[i + 1] > arr[i + 2]) swap(arr, i + 1, i + 2);
            if (arr[i + 1] > arr[i + 3]) swap(arr, i + 1, i + 3);
            if (arr[i] > arr[i + 1]) swap(arr, i, i + 1);
            if (arr[i + 2] > arr[i + 3]) swap(arr, i + 2, i + 3);

            console.log(`Pass ${pass}:`);
            printArr(arr);
            pass++;
        }

        // Backward pass
        for (let i = size - 1; i >= 3; i--) {
            if (arr[i] < arr[i - 2]) swap(arr, i, i - 2);
            if (arr[i] < arr[i - 3]) swap(arr, i, i - 3);
            if (arr[i - 1] < arr[i - 2]) swap(arr, i - 1, i - 2);
            if (arr[i - 1] < arr[i - 3]) swap(arr, i - 1, i - 3);
            if (arr[i] < arr[i - 1]) swap(arr, i, i - 1);
            if (arr[i - 2] < arr[i - 3]) swap(arr, i - 2, i - 3);

            console.log(`Pass ${pass}:`);
            printArr(arr);
            pass++;
        }
    }
}

// Example usage:
const arr = [7, 3, 8, 1, 5, 2, 6, 4];
superSort(arr);

/* 
    Pass 1:
    1 3 7 8 5 2 6 4
    Pass 2:
    1 3 5 7 8 2 6 4
    Pass 3:
    1 3 2 5 7 8 6 4
    Pass 4:
    1 3 2 5 6 7 8 4
    Pass 5:
    1 3 2 5 4 6 7 8
    Pass 6:
    1 3 2 4 5 6 7 8
    Pass 7:
    1 3 2 4 5 6 7 8
    Pass 8:
    1 2 3 4 5 6 7 8
    Pass 9:
    1 2 3 4 5 6 7 8
*/
