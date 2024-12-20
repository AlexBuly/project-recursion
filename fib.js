function fibs(num) {

    let fibsArray = [0, 1];

    if (num <= 0) return fibsArray;
    if (num === 1) return [0];



    for (let i = 2; i < num; i++) {
        const fibNum = fibsArray[i - 2] + fibsArray[i - 1];
        fibsArray.push(fibNum);
    }
   console.log(fibsArray)
}

fibs(8);

function fibsRec(num, fibsArray = [0, 1]) {
    console.log("This was printed recursively");
    if (num <= fibsArray.length) {
    // slice from 0 up until number
     return fibsArray.slice(0, num);
    }
 
    const fibNum = fibsArray[fibsArray.length - 2] + fibsArray[fibsArray.length - 1];

    // append new fibNum to fibsArray
    return fibsRec(num, [...fibsArray, fibNum]);
 }
 
 console.log(fibsRec(8));

