//  Write a  callback function to count the occurrence of a number and store it in a object

const countOccur = (arr) => {
    let obj = {};

    for (let elements of arr) {
        obj[elements] = (obj[elements] || 0) + 1;
    }

    return obj;
};

console.log(countOccur([1, 2, 2, 3, 1, 4, 2]));