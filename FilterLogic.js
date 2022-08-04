let ages = [10, 20, 6, 9, 22, 56, 16, 18];

checkIfAdult = (age) => age >= 18;

filterLogic = (age, checkAge) => {
    let result = [];
    let index = 0;
    for(let i = 0 ; i < age.length ; i++) {
        if(checkAge(age[i]))
            result[index++] = age[i];
    }
    return result;
};

console.log(filterLogic(ages, checkIfAdult));
