const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('Paint Can', function () {
  let paint;

  beforeEach(function () {
    paint = new PaintCan(12)
  });

  it('should have a number of litres of paint', function () {
      const actual = paint.amount;
      assert.strictEqual(actual, 12)

  });

  it('should not start empty', function () {
      const actual = paint.empty;
      assert.strictEqual(actual, false)
  });

  it('should be able to empty itself', function () {
      paint.empty_paint(12)
      const actual = paint.empty;
      assert.strictEqual(actual, true)
  });

});
