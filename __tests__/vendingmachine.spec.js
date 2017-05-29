const vendingMachine = require('../src/vendingMachine');
// const insertedCoins = require('../src/vendingMachine');
const inventory = require('../src/vendingMachine');
// const coin = require('../src/vendingMachine');
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
];

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
    stock: 2
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
describe('vendingMachine', () => {
  beforeEach(() => {
    machine = new vendingMachine();
  })
  describe('When printing out inventory', () => {
    it('should return printed inventory', () => {
      expect(machine.printInventory()).toMatchObject(machine.printInventory());
    });
  });
  describe('When refilling inventory', () => {
    it('should return inventory with stock 10 in each product', () => {
      expect(machine.refillInventory()).toMatchObject(machine.refillInventory());
    });
  });
  describe('When choosing drink, drink stock decrease, coin stock increase, payment accepted', () => {
    it('should decrease drink stock, increase coin stock', () => {
      expect(machine.dispenseInventory('pepsi', insertedCoins)).toMatchObject(machine.dispenseInventory('pepsi', insertedCoins));
    });
  });
  describe('When inserting money calculates total', () => {
    beforeEach(() => {
      let currentCoins = inventory;
    });
    it('should return 2', () => {
      console.log(insertedCoins)
      expect(machine.currentTotal(insertedCoins)).toBe(2);
    });
  });
  describe('When returning change of product', () => {
    it('should return change array with 2 quarters', () => {
      expect(machine.returnChange(1.50, insertedCoins, coin)).toMatchObject(returnedCoins);
    });
  });
});
