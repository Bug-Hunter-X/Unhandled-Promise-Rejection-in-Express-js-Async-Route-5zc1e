const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
  someAsyncOperation()
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      // Proper error handling
      console.error('Error:', error);
      next(error); // Pass the error to the error-handling middleware
    });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler caught an error:', err);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
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