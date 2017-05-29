const inventory =  [
    {
      name: 'pepsi',
      price: 1.50,
      stock: 10
    },
    {
      name: 'sprite',
      price: 1.50,
      stock: 8
    },
    {
      name: 'coke',
      price: 1.50,
      stock: 6
    },
    {
      name:'mars bar',
      price: 1.25,
      stock: 4
    },
    {
      name: 'potato chips',
      price:3.75,
      stock:9
    }
];

const coin = [
  {
    type: 'dime',
    value: .10,
    stock: 48
  },
  {
    type: 'quarter',
    value: .25,
    stock: 35
  },
  {
    type: 'looney',
    value: 1,
    stock: 47
  },
  {
    type:'tooney',
    value:2,
    stock: 70
  }
]

const insertedCoins = [
    {
    type: 'dime',
    value: .10,
    stock: 0
  },
  {
    type: 'quarter',
    value: .25,
    stock: 0
  },
  {
    type: 'looney',
    value: 1,
    stock: 0
  },
  {
    type:'tooney',
    value:2,
    stock: 1
  }
]

class vendingMachine{
  constructor(){

  }
  printInventory(){
    return inventory;
  }
  refillInventory(){
    const refilledInventory = inventory;
    for(let i=0; i < refilledInventory.length; i++){
      refilledInventory[i].stock = 10;
    }
    return refilledInventory;
  }
  resupplyChange(){
    const refilledCoins = coin;
    for(let i =0; i< refilledCoins.length; i++){
      refilledCoins[i].stock = 100;
    }
    return refilledCoins;
  }
  currentTotal(insertedCoins){
    let total = 0;
    for(let i = 0; i < insertedCoins.length; i++){
      if(insertedCoins[i].stock > 0){
        total += (insertedCoins[i].stock*insertedCoins[i].value);
        console.log(total);
      }
    }
    return total;
  }
  dispenseInventory(product, insertedCoins){
    const afterDispensedInventory = inventory;
    const afterDispensedCoins = coin;
    const returnedCoins = [];
    const insertedCoinsArray = insertedCoins
    const insertedTotal = currentTotal(insertedCoins);
    for(let i = 0; i < afterDispensedInventory.length; i++){
      if (afterDispensedInventory[i].name === product){
        afterDispensedInventory[i].stock -= 1;
      }
    }

    for (let i = 0; i < afterDispensedCoins.length; i++){
      if(insertedCoins[i].stock > 0){
        afterDispensedCoins[i].stock += 1;
      }
    }
    return afterDispensedInventory;
  }
  returnChange(){

  }
}

module.exports = vendingMachine;
