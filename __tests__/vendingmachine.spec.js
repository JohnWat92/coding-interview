const vendingMachine = require('../src/vendingMachine');
const insertedCoins = require('../src/vendingMachine');

describe('vendingMachine', () => {
  beforeEach(() => {
    machine = new vendingMachine();
  })
  describe('When printing out inventory', () => {
    it('should return printed inventory', () => {
      expect(machine.printInventory()).toBe([]);
    });
  });
  describe('When refilling inventory', () => {
    it('should return inventory with stock 10 in each product', () => {
      expect(machine.refillInventory()).toBe([]);
    });
  });
  describe('When choosing drink, drink stock decrease, coin stock increase, payment accepted', () => {
    it('should decrease drink stock, increase coin stock', () => {
      expect(machine.dispenseInventory('pepsi', insertedCoins)).toBe([]);
    });
  });
  describe('When inserting money calculates total', () => {
    it('should return 2', () => {
      expect(machine.currentTotal(insertedCoins)).toBe(2);
    });
  });
});
