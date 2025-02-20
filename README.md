# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous routes.  The `bug.js` file shows an Express.js route that fetches data asynchronously. If the asynchronous operation fails, the error is not properly handled, leading to a potential crash or silent failure.

The `bugSolution.js` file provides a corrected version with improved error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` to see the unhandled promise rejection (50% chance of happening).
5. Run `node bugSolution.js` to see the improved error handling.

## Key Learning

Always handle potential errors in asynchronous operations within your Express.js routes using `.catch()` to prevent unexpected application behavior and crashes.