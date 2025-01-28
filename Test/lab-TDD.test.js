const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter");

const { describe, test } = require("node:test");
const assert = require("node:assert");

//      Suite and Test

describe("Lab-TDD test", () => {
  describe("Add Function Test", () => {
    test("Add function should return 8 when adding 5 and 3", () => {
      assert.strictEqual(add(3, 5), 8);
    });
    test("Add function should return 21 when adding 11 and 10", () => {
      assert.strictEqual(add(11, 10), 21);
    });
  });
  describe("Divide Function Test", () => {
    test("Divide Function should return 4 when dividing 32 over 8", () => {
      assert.strictEqual(divide(32, 8), 4);
    });
    test("Zero Division should throw and error", () => {
      assert.throws(() => divide(10, 0), Error);
    });
  });
  describe("Subtract Function Test", () => {
    test("Subtract function should return -4 when subtracting 5 and 9", () => {
      assert.strictEqual(subtract(5, 9), -4);
    });
    test("Subtract function should return 10 when subtracting 20 and 10", () => {
      assert.strictEqual(subtract(20, 10), 10);
    });
  });
  describe("Multiplication Function Test", () => {
    test("Multiplication function should return 108 when multiplying 12 and 9", () => {
      assert.strictEqual(multiply(12, 9), 108);
    });
    test("Multiplication function should return 70 when multiplying 10 and 7", () => {
      assert.strictEqual(multiply(10, 7), 70);
    });
  });
  describe("Modulas Function Test", () => {
    test("Modulas function should return 1 when doing 17 mode 4", () => {
      assert.strictEqual(modulas(17, 4), 1);
    });
    test("Modulas function should return 2 when doing 22 mode 5", () => {
      assert.strictEqual(modulas(22, 5), 2);
    });
  });
  describe("Power Function Test", () => {
    test("Power function should return 32 when doing 2 to the power of 5", () => {
      assert.strictEqual(power(2, 5), 32);
    });
    test("Power function should return 9 when doing 3 to the power of 2", () => {
      assert.strictEqual(power(3, 2), 9);
    });
  });
  describe("Square Function Test", () => {
    test("Square function should return 5 when doing the square root of 25", () => {
      assert.strictEqual(squareRoot(25), 5);
    });
    test(" squareRoot a negative number should throw an error", () => {
      assert.throws(() => squareRoot(-3), Error);
    });
  });
  describe("Floor Function Test", () => {
    test("Floor function should return 15 when doing the floor of 15.3", () => {
      assert.strictEqual(floor(15.3), 15);
    });
    test("Floor function should return 14 when doing the floor of 14.3", () => {
      assert.strictEqual(floor(14.3), 14);
    });
  });
  describe("Ceiling Function Test", () => {
    test("Ceiling function should return 16 when doing the cieling of 15.3", () => {
      assert.strictEqual(ceiling(15.3), 16);
    });
    test("Ceiling function should return 17 when doing the cieling of 16.3", () => {
      assert.strictEqual(ceiling(16.3), 17);
    });
  });
});
