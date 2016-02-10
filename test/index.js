import test from 'blue-tape';
import {
  isPrime,
  lowerCase,
  removeSingleQuote,
  replaceNonAlphaChar,
  convertToArray
} from '../source/utils';

test('should lowercase a string', (assert) => new Promise((resolve) => {
  var str = "AbC";
  lowerCase(str).then((result) => {
    assert.equal(result, 'abc');
    resolve();
  });
}));

test('should remove Single Quotes', (assert) => new Promise((resolve) => {
  var str = "'Ab'C'";
  removeSingleQuote(str).then((result) => {
    assert.equal(result.indexOf("'"), -1);
    resolve();
  });
}));

test('should replace Non Alpha Char', (assert) => new Promise((resolve) => {
  var str = "@Ab%C))";
  replaceNonAlphaChar(str).then((result) => {
    assert.equal(result, ' Ab C ');
    resolve();
  });
}));


test('should convert string To Array', (assert) => new Promise((resolve) => {
  var str = 'hello world';
  convertToArray(str).then((result) => {
    assert.equal(result[0], 'hello');
    assert.equal(result[1], 'world');
    resolve();
  });
}));

test('should check prime numbers', (assert) => new Promise((resolve) => {
  assert.equal(isPrime(2), true);
  assert.equal(isPrime(113), true);
  assert.equal(isPrime(1), false);
  resolve();
}));
