function add(arr1, arr2) {
    const result = [];
    for (let counter = 0; counter < arr1.length; counter = counter + 1) {
        const sum = arr1[counter] + arr2[counter];
        result.push(sum);
    }
    return result;
}
let addission = add([1, 5, 8, 7],[5, 8, 7, 9]);
console.log(addission);