# Sorting Algorithms
The following are sorting algorithms that I created without referencing existing algorithms, but they happened to be similar in some ways. These were random ideas I came up with out of boredom or just random thoughts. They are not the most efficient, but somehow they work.

1. Super Sort
    While attending class, I tried to draw a sorting simulation in my notebook, and my classmate turned it into C/C++ code—and it really works.
    
    Super Sort performs gap-based swaps with gaps of 2 and 3, includes adjacent refinement, executes forward and backward passes, and checks for sortedness; it combines elements of Bubble Sort, Cocktail Shaker Sort (bidirectional Bubble Sort), Shell Sort, Odd-Even Sort (Brick Sort), and Insertion Sort.
    
    Upon searching, I found that there isn’t an existing hybrid sorting algorithm like this, so I can claim to be the first.

    ```js
    const arr = [7, 3, 8, 1, 5, 2, 6, 4];
    ```
    
    ```
    Given arr = [7, 3, 8, 1, 5, 2, 6, 4]:
    
    Pass 1: Forward swaps
        Compare 7 and 8 (gap 2) → no swap
        Compare 7 and 1 (gap 3) → swap → [1,3,8,7,5,2,6,4]
        Compare 3 and 8 → no swap
        Compare 3 and 7 → no swap
        Compare 1 and 3 → no swap
        Compare 8 and 7 → swap → [1,3,7,8,5,2,6,4]
    
    Pass 2: Forward swaps
        Compare 7 and 5 → swap → [1,3,5,8,7,2,6,4]
        Compare 5 and 2 → swap → [1,3,5,8,7,2,6,4] (depending on exact loop)
        And so on...
    
    Backward pass then corrects misplaced smaller numbers.
    ```

2. Map Sort
    While I was trying to look for a thesis topic in computer science, I thought, "How about sorting using a map?" The algorithm works by looping from 0 or 1 (or the lowest number), counting the occurrences, and storing them in a map. It is similar to counting sort, but mine performs worse.
    
    ```js
    const arr = [4, 1, 9, 6, 10, 3, 2, 7, 8, 5, 2, 2];
    // Example output: [ [1,1], [2,3], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [10,1] ]
    ```
    
    Then it is expanded into an array of sorted elements.
    ```js
    const expanded = [];
    mapArray.forEach(([key, count]) => {
      for (let j = 0; j < count; j++) {
        expanded.push(key);
      }
    });
    
    console.log("Expanded:", expanded);
    // Example output: [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ```
