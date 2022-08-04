let numbers = [190, 50, 25, 60];

addition = (total, number) => total + number;

reduceLogic = (numbers, add) => {
    let result = 0;
    for(let i = 0 ; i < numbers.length ; i++) {
        result = add(result, numbers[i]);
    }
    return result;
};

console.log(reduceLogic(numbers, addition));
