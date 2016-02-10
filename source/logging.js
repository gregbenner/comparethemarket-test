
import {isPrime} from './utils.js';


function logIt(arr, prop) {
    if (arr[prop].isPrime === true) {
        return `and is a prime number`;
    } else {
        return '';
    }
}

function logger (counted) {
    let message = '';
    for (var prop in counted) {
       message += `${prop} occurs ${counted[prop].count} times ${logIt(counted, prop)}\n`;
    }
    console.log(message);
}

export {
    logger
};
