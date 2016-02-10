function isPrime(value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;
};

function lowerCase(str) {
    return new Promise(function(resolve, reject) {
        try {
            let result = str.toLowerCase();
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

function removeSingleQuote(str) {
    return new Promise(function(resolve, reject) {
        try {
            let result = str.replace(/\'/g, '');
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
}

function replaceNonAlphaChar(str) {
    return new Promise(function(resolve, reject) {
        try {
            let result = str.replace(/[^a-zA-Z ]+/g, ' ');
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

function convertToArray(str) {
    let p = new Promise(function(resolve, reject) {
        try {
            resolve(str.split(' '));
        } catch (err) {
            reject(err);
        }
    });
    return p;
};

export {
    isPrime, lowerCase, removeSingleQuote, replaceNonAlphaChar, convertToArray
};
