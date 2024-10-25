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

fibs(3);

