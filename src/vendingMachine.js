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
    type: 'nickel',
    value: .05,
    stock: 40
  },{
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
    type: 'nickel',
    value: .05,
    stock: 0
  },
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
const returnedCoins = [
   {
    type: 'nickel',
    value: .05,
    stock: 0
  },
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
    stock: 0
  },
];
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
    const insertedCoinsArray = insertedCoins;
    for(let i = 0; i < insertedCoinsArray.length; i++){
      if(insertedCoinsArray[i].stock > 0){
        total += (insertedCoinsArray[i].stock*insertedCoinsArray[i].value);
      }
    }
    return total;
  }
  dispenseInventory(product, insertedCoins){
    const afterDispensedInventory = inventory;
    const afterDispensedCoins = coin;
    const returnedCoins = [];
    const insertedCoinsArray = insertedCoins;

    for(let i = 0; i < afterDispensedInventory.length; i++){
      if (afterDispensedInventory[i].name === product){
        afterDispensedInventory[i].stock += -1;
        const productPrice = afterDispensedInventory[i].price
      }
    }
    for (let i = 0; i < afterDispensedCoins.length; i++){
      if(insertedCoins[i].stock > 0){
        afterDispensedCoins[i].stock += 1;
      }
    }
    return afterDispensedInventory;
  }
  returnChange(productValue, insertedCoins,coin){
    const insertedTotal = this.currentTotal(insertedCoins);
    const machineCoins = coin;
    let changeCounter = insertedTotal - productValue;
    console.log('changeCounter', changeCounter);
    let returnedCoinsArray= returnedCoins;
    while(changeCounter > 0){
      if(changeCounter >= 2){
        for(let i=0; i < machineCoins.length; i++){
          if(machineCoins[i].type === 'tooney'){
            machineCoins[i].stock -= 1;
            changeCounter -= machineCoins[i].value;
            returnedCoinsArray[i].stock += 1;
          }
        }
      }else if( changeCounter >= 1){
        for(let i=0; i<machineCoins.length;i++){
          if(machineCoins[i].type === 'looney'){
            machineCoins[i].stock -= 1;
            changeCounter -= machineCoins[i].value;
            returnedCoinsArray[i].stock += 1;
          }
        }
      }else if( changeCounter >= .25){
        for(let i=0; i<machineCoins.length;i++){
          if(machineCoins[i].type === 'quarter'){
            machineCoins[i].stock -= 1;
            changeCounter -= machineCoins[i].value;
            returnedCoinsArray[i].stock += 1;
          }
        }
      }else if( changeCounter >= .10){
        for(let i=0; i<machineCoins.length;i++){
          if(machineCoins[i].type === 'dime'){
            machineCoins[i].stock -= 1;
            changeCounter -= machineCoins[i].value;
            returnedCoinsArray[i].stock += 1;
          }
        }
      }else if( changeCounter >= .05){
        for(let i=0; i< machineCoins.length;i++){
          if(machineCoins[i].type === 'nickel'){
            machineCoins[i].stock -= 1;
            changeCounter -= machineCoins[i].value;
            returnedCoinsArray[i].stock += 1;
          }
        }
      }
    }
    return returnedCoinsArray;
  }
}

module.exports = vendingMachine;
