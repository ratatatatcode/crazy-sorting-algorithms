const arr = [4, 1, 9, 6, 10, 3, 2, 7, 8, 5, 2, 2];

// Find the highest number
const highest_element = Math.max(...arr);

// Create a Map to store counts
const myMap = new Map();

// Loop from 1 to highest element
for (let i = 1; i <= highest_element; i++) {
  // Count how many times `i` appears in arr
  const count = arr.filter(num => num === i).length;

  // Store in map
  myMap.set(i, count);
}

// Convert map to array of [key, value] pairs (sorted by key automatically)
const mapArray = Array.from(myMap);

// Print the counts
console.log("Counts:", mapArray);
// Example output: [ [1,1], [2,3], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [10,1] ]

// Expand back into flat array based on occurrences
const expanded = [];
mapArray.forEach(([key, count]) => {
  for (let j = 0; j < count; j++) {
    expanded.push(key);
  }
});

console.log("Expanded:", expanded);
// Example output: [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10]
