# FindMax Function

## Overview

The `findMax` function is a simple JavaScript utility designed to find the maximum value within an array of numbers. This function can be useful when you need to determine the largest value in a list of numbers.

## Installation

There's no need for installation as this is a self-contained JavaScript function that can be included in your project directly.

## Usage

To use the `findMax` function, follow these steps:

1. Include the `findMax` function in your JavaScript code.

2. Call the `findMax` function, passing an array of numbers as its argument.

3. The function will return the maximum value found in the array.

**Example usage:**

```javascript
const nums = [1, 2, 3, 4];
const max = findMax(nums);
console.log(`The maximum value in the array is: ${max}`);
```

In the example above, max will contain the value 4 because it is the maximum value in the nums array.

## Error Handling
The findMax function includes error handling to ensure that the input is valid:

If the nums parameter is null, undefined, or has a length less than 1, the function will log "Nums is empty" and return early.

If the nums parameter is not an array, the function will log "You need a valid list of numbers" and return early.

If the nums parameter is of type 'number' (i.e., a single number), the function will log "You need a list of numbers, not only one number" and return early.

## Easy Testing in Browser Console
You can quickly test the findMax function by following these steps:

Open your web browser's developer console. You can usually do this by right-clicking on your web page, selecting "Inspect" or "Inspect Element," and then navigating to the "Console" tab.

Copy the findMax function code below:

```javascript
const findMax = (nums) => {
    let max = -Infinity;
    
    if(nums === null || nums === undefined || nums.length < 1) {
        console.log('Nums is empty');
        return;
    }
    
    if(!Array.isArray(nums)) {
        console.log('You need a valid list of numbers');
        return;
    }
    
    if(typeof nums === 'number') {
        console.log('You need a list of numbers, not only one number');
        return;
    }
   
    nums.forEach(num => {
        if (num > max) max = num;
    });
    
    return max;
}
```

1. Paste the copied code into the browser's console and press Enter.
2. Now, you can test the findMax function by calling it with different arrays of numbers. For example:

const nums1 = [1, 2, 3, 4];
const nums2 = [10, 5, 8, 20];
const nums3 = [15, 12, 7, 3, 18];

```javascript
const nums1 = [1, 2, 3, 4];
const nums2 = [10, 5, 8, 20];
const nums3 = [15, 12, 7, 3, 18];
const nums4 = [-5, -2, -7, -1];
const nums5 = [0, 0, 0, 0];
const nums6 = [];
const nums7 = null;
const nums8 = undefined;
const nums9 = 42; // Not an array, should produce an error

console.log('Max of nums1:', findMax(nums1)); // Should log 4
console.log('Max of nums2:', findMax(nums2)); // Should log 20
console.log('Max of nums3:', findMax(nums3)); // Should log 18
console.log('Max of nums4:', findMax(nums4)); // Should log -1
console.log('Max of nums5:', findMax(nums5)); // Should log 0
console.log('Max of nums6:', findMax(nums6)); // Should log "Nums is empty" (error case)
console.log('Max of nums7:', findMax(nums7)); // Should log "Nums is empty" (error case)
console.log('Max of nums8:', findMax(nums8)); // Should log "Nums is empty" (error case)
console.log('Max of nums9:', findMax(nums9)); // Should log "You need a list of numbers, not only one number" (error case)
```

This allows you to easily test the function's behavior directly in your browser's console.

Remember to adjust the code snippet and example arrays to match your specific use case if needed.

## Contribution
If you find any issues or have suggestions for improvement, please feel free to open an issue or create a pull request in this repository. Your contributions are welcome!

## License
This code is available under the MIT License.