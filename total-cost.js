const products = [
    {name: 'Shampoo', price: 300, quantity: 5},
    {name: 'Comb', price: 100, quantity: 1},
    {name: 'Shirt', price: 1000, quantity: 2},
    {name: 'Pant', price: 1200, quantity: 2}
]

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
}

const total = getShoppingTotal(products);
console.log('Total cost:', total);