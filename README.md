# Task_Manager

### Server

The server folder contains the backend of the application. Details about the server setup and structure can be found within the server directory.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** React Context API or Redux (if used)
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** CSS

## Project Setup

To set up and run the Task Manager web application locally, follow these steps:

### Client Setup

1. Navigate to the client directory:

    ```bash
    cd client
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the client directory and specify any necessary environment variables (e.g., API URL, authentication tokens).

4. Start the client server:

    ```bash
    npm run dev
    ```

    This will start the development server for the client application.

### Server Setup

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the server directory and specify any necessary environment variables (e.g., MongoDB connection string, JWT secret).

4. Start the server:

    ```bash
    npm start
    ```

    This will start the Node.js server for the backend.

5. Ensure your MongoDB instance is running and accessible.

6. Access the Task Manager web application in your web browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
