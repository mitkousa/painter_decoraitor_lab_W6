const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {
    let room;
  

  beforeEach(function () {
    room = new Room(12)
  });

  it('should have an area in square meters', function () {
    const actual = room.area
    assert.strictEqual(actual, 12)
  });

  it('should start not painted', function () {
    const actual = room.painted;
    assert.strictEqual(actual, false)
  });

  it('should be able to be painted', function () {
    const actual = room.update_painted();
    assert.strictEqual(actual, true)
  });

});
