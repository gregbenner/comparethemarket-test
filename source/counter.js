import {logIt} from './logging.js';
import {counts, counted} from './constants.js';
import {isPrime} from './utils.js';

function counter (arr) {
  if (!arr) return;
  for (let i = 0, len = arr.length; i < len; i++) {
      var num = arr[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  for (var prop in counts) {
     counted[prop] = {};
     counted[prop].count = counts[prop];

    if (isPrime(counted[prop].count)) {
      counted[prop].isPrime = true;
    }
  }

}

export {counter};
