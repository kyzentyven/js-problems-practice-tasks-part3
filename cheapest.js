const prices = [20000, 30000, 25000, 27000, 50000, 41000, 18000];

function getMin(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const cheap1 = getMin(prices);
console.log('Cheapest one is:', cheap1);

// Tweaked using object
const mobiles = [
    {name : 'Samsung', price: 20000, camrea: '12mp', color: 'black'},
    {name : 'Xiaomi', price: 18000, camrea: '108mp', color: 'white'},
    {name : 'Oppo', price: 25000, camrea: '50mp', color: 'titanium'},
    {name : 'iPhone', price: 70000, camrea: '48mp', color: 'desert'},
    {name : 'Vivo', price: 40000, camrea: '50mp', color: 'purple'}
]

function getCheapestPhone(mobiles){
    let min = mobiles[0];
    for(const mobile of mobiles){
        if(mobile.price < min.price){
            min = mobile;
        }
    }
    return min;
}

const cheap2 = getCheapestPhone(mobiles);
console.log('Cheapest one is:', cheap2);