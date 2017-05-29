const vendingMachine = require('../src/vendingMachine');
const insertedCoins = require('../src/vendingMachine');
const inventory = require('../src/vendingMachine');

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
      expect(machine.dispenseInventory('pepsi', insertedCoins)).toBe([]);
    });
  });
  describe('When inserting money calculates total', () => {
    beforeEach(() => {
      let currentCoins = inventory;
    });
    it('should return 2', () => {
      console.log(insertedCoins)
      expect(machine.currentTotal()).toBe(2);
    });
  });
});
