const Tuhin = 90;
const Achol = 85;

if(Tuhin > Achol){
    console.log('Tuhin will get the strawberry');
}
else{
    console.log('Achol will get the strawberry');
}

// Inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max1 = getMax(80, 75);
const max2 = getMax(75, 90);
const ultimateMax = getMax(max1, max2);

console.log('Ultimate max of two is:', ultimateMax);