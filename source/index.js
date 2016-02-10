import {getBook} from './getBook.js';
import {logger} from './logging.js';
import {counter} from './counter.js';
import * as util from './utils.js';
import {counted} from './constants.js';

var _ = util;


function formatter (theBook) {
    async function formattedBook () {
      let response = await _.lowerCase(theBook);
          response = await _.removeSingleQuote(response);
          response = await _.replaceNonAlphaChar(response);
          response = await _.convertToArray(response);
          return response;
    }
    formattedBook()
      .then((data) => {
        counter(data);
        logger(counted);
      });
  }

getBook('/book.txt', data => {
  return formatter(data);
});
