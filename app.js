function fibs(num) {
    let fibsArray = [0, 1];

    for (let i = 1; i < num - 1; i++) {
        const fibNum = fibsArray.at(-2) + fibsArray.at(-1);
        fibsArray.push(fibNum);
    }
    console.log(fibsArray);
}