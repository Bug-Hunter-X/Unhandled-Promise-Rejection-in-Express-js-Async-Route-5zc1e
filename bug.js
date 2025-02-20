const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronously fetching data
  someAsyncOperation().then(data => {
    res.send(data);
  }).catch(error => {
    // Error handling is missing here
    console.error('Error:', error);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate some asynchronous operation that may fail
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        resolve({ message: 'Success!' });
      } else {
        reject(new Error('Simulated error'));
      }
    }, 1000);
  });
}