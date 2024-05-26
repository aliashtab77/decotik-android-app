export function givePrices() {
  return new Promise((resolve, reject) => {
    fetch('https://starkteamdecotikapplication.pythonanywhere.com/mamad/')
      .then(response => response.json())
      .then(data => {
        // do something with the JSON data
        resolve(data);
      })
      .catch(error => {
        // handle any errors that occur
        reject(error);
      });
  });
}
