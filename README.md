
# Express Custom Error Handler

This project demonstrates a custom error handling middleware in an Express.js application. It provides a structured way to manage and log errors, making the application more robust and easier to debug.

## Features

- **Custom Error Class:** A reusable `CustomError` class to create specific error types with custom messages and status codes.
- **Centralized Error Handling:** A middleware that catches all errors (both custom and generic) and sends a standardized JSON response.
- **Error Logging:** Integration with Winston to log error details to a file (`errors.log`) and the console.
- **Demonstrative Routes:** Example routes to showcase different types of errors, including "Not Found" and "Unauthorized" errors.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/custom-error-handler.git
   cd custom-error-handler
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

To run the application in development mode, use:

```bash
npm run dev
```

This will start the server using `nodemon`, which automatically restarts the application when file changes are detected. The server will be running at `http://localhost:3000`.

## API Endpoints

- `GET /`: Displays a welcome message.
- `GET /notfound`: Simulates a "Not Found" error (404).
- `GET /unauthorized`: Simulates an "Unauthorized" error (500, as no status code is provided).
- `GET /normal-error`: Simulates a generic `Error`.

## Error Handling

The core of the error handling logic is in `src/middleware/errorHandler.js`. This middleware intercepts errors passed through `next()`.

- It determines the `statusCode` and `message` from the error object. If not specified, it defaults to `500` and `"Internal Server Error"`.
- It logs the error details using Winston, including the status, message, request method, URL, and stack trace.
- It sends a JSON response to the client with the error information.

### CustomError Class

The `CustomError` class (`src/utils/customError.js`) extends the built-in `Error` class, allowing you to create errors with a specific `statusCode`.

```javascript
const CustomError = require('./src/utils/customError');

// Example of throwing a custom error
next(new CustomError("Resource not found", 404));
```

### Logging

The Winston logger (`src/utils/logger.js`) is configured to:

- Log errors to `errors.log` in JSON format.
- Print errors to the console.

## Dependencies

- **Express:** A minimal and flexible Node.js web application framework.
- **Nodemon:** A utility that monitors for any changes in your source and automatically restarts your server.
- **Winston:** A versatile logging library for Node.js.

## Running the project

To start the server, run the following command:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Future Scope

- **More Granular Error Types:** Extend the `CustomError` class to create more specific error classes (e.g., `NotFoundError`, `ValidationError`).
- **Request Validation:** Add request validation to handle input errors more effectively.
- **Environment-Specific Logging:** Configure Winston to behave differently in development and production environments (e.g., more detailed logs in development).

## License

This project is licensed under the ISC License.

## Author

[Your Name]

## Acknowledgments

- This project was created as a demonstration of custom error handling in Express.js.
