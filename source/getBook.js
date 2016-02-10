function getBook (url, callback) {
    fetch(url).then((response) => {
      response.text().then( (data) => {
        callback(data);
      });
    });
}

export { getBook };
