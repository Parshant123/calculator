'use strict';

function ascendingOrder(arr) {


    for (let counter = 0; counter < arr.length; counter = counter + 1) {
        if (arr[counter] > counter) {

            return (arr[counter]);
        }
    }

}
let acending = ascendingOrder([1, 8, 5, 7, 2, 9]);
console.log(acending);