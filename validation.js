// Example-1
function multiply(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a number.';
    }
    const mul = num1 * num2;
    return mul;
}

const result = multiply(5, 'Five');
console.log(result);

// Example-2
function fullName(first, last){
    if(typeof first !== 'string'){
        return 'First name should be a string.';
    }
    else if(typeof last !== 'string'){
        return 'Last name should be a string.';
    }
    const full = first + ' ' + last;
    return full;
}

// Example-3
const full = fullName('Kamrujjaman', 10);
console.log(full);

function getPrice(product){
    if(typeof product !== 'object'){
        return 'Please provide an object.';
    }
    const price = product.price;
    return price;
}

const price = getPrice({name: 'Hair Comb', price: 35, color: 'Blue'});
console.log(price);

// Example-4
function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'Please provide an array.';
    }
    const second = numbers[1];
    return second;
}

const second = getSecond([10, 7, 66, 35]);
console.log(second);