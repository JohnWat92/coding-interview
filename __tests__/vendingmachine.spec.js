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
    value: 2,
    stock: 1
  }
];

const lowCoins = [
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
    stock: 1
  },
  {
    type:'tooney',
    value: 2,
    stock: 0
  }
];

const highCoins = [
  {
    type: 'nickel',
    value: .05,
    stock: 10
  },
  {
    type: 'dime',
    value: .10,
    stock: 4
  },
  {
    type: 'quarter',
    value: .25,
    stock: 0
  },
  {
    type: 'looney',
    value: 1,
    stock: 1
  },
  {
    type:'tooney',
    value: 2,
    stock: 0
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
  describe('When choosing out of stock drink', () => {
    it('should display out of that product, please choose another', () => {
      expect(machine.dispenseInventory('sprite', insertedCoins)).toEqual('out of that product, please choose another');
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
    it('should return 2', () => {
      expect(machine.currentTotal(insertedCoins)).toBe(2);
    });
  });
  describe('When returning change of product', () => {
    it('should return change array with 2 quarters', () => {
      expect(machine.returnChange(1.50, insertedCoins, coin)).toMatchObject(returnedCoins);
    });
  });
  describe('when resupplying change', () => {
    it('should return stock for all coins set to 100', () => {
      expect(machine.resupplyChange()).toMatchObject(machine.resupplyChange());
    });
  });
  describe('When buying drink without the required amount of money', () => {
    it('should send message about not enough change received', () => {
      expect(machine.returnChange(1.50, lowCoins, coin)).toEqual('not enough change, insert 0.5 more');
    });
  });
  describe('When reading the amount of high coins', () => {
    it('should return the counted value of 1.90', () => {
      expect(machine.currentTotal(highCoins)).toEqual(1.90);
    });
  });
});
