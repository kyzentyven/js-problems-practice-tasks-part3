const Tuhin = 90;
const Aru = 95;
const Achol = 85;

if(Tuhin > Aru && Tuhin > Achol){
    console.log('Tuhin is the ultimate boss');
}
else if(Aru > Tuhin && Aru > Achol){
    console.log('Aru is the ultimate boss');
}
else{
    console.log('Achol is the ultimate boss');
}

// Inside the function
function getMax(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
}

const ultimateMax = getMax(70, 90, 85);
console.log('Ultimate max of three is:', ultimateMax);