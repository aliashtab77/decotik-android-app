export function givePrices() {
  return new Promise((resolve, reject) => {
    fetch('https://starkteamdecotikapplication.pythonanywhere.com/kplus/')
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
export function givePrices042() {
  return new Promise((resolve, reject) => {
    fetch('https://starkteamdecotikapplication.pythonanywhere.com/042/')
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
export function givePrices046() {
  return new Promise((resolve, reject) => {
    fetch('https://starkteamdecotikapplication.pythonanywhere.com/046/')
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

export function givePrices048() {
  return new Promise((resolve, reject) => {
    fetch('https://starkteamdecotikapplication.pythonanywhere.com/048/')
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

export function givePrices055() {
  return new Promise((resolve, reject) => {
    fetch('https://starkteamdecotikapplication.pythonanywhere.com/055/')
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

export function givePrices058() {
  return new Promise((resolve, reject) => {
    fetch('https://starkteamdecotikapplication.pythonanywhere.com/058/')
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
