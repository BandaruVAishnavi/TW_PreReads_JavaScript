let numbers = [4, 9, 12, 5, 13, 19, 7];

multiplyBy5 = (number) => number*5;

mapLogic = (numbers, multiply) => {
    let result = [];
    for(let i = 0 ; i < numbers.length ; i++){
        result[i] = multiply(numbers[i]);
    }
    return result;
};

console.log(mapLogic(numbers, multiplyBy5));
