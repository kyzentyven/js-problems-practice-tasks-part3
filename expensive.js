const mobiles = [
    {name : 'Samsung', price: 20000, camrea: '12mp', color: 'black'},
    {name : 'Xiaomi', price: 18000, camrea: '108mp', color: 'white'},
    {name : 'Oppo', price: 25000, camrea: '50mp', color: 'titanium'},
    {name : 'iPhone', price: 70000, camrea: '48mp', color: 'desert'},
    {name : 'Vivo', price: 40000, camrea: '50mp', color: 'purple'}
]

function getExpensivePhone(mobiles){
    let max = mobiles[0];
    for(const mobile of mobiles){
        if(mobile.price > max.price){
            max = mobile;
        }
    }
    return max;
}

const expensive = getExpensivePhone(mobiles);
console.log('Most expensive one is:', expensive);