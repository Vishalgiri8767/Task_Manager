# Task Manager Web MERN Application

## Overview

Task Manager is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides users with the ability to manage their tasks efficiently through features like task creation, updating, deletion, and marking tasks as completed.

## Features

- **Task Creation:** Easily create new tasks with titles and descriptions.
- **Task Management:** Update task details or delete tasks when they are no longer needed.
- **Task Completion:** Mark tasks as completed to keep track of progress.
- **Avatar Management:** Users can upload and store their avatars using Cloudinary.
- **User Authentication:** Secure user authentication system to protect user data.
- **Responsive Design:** User-friendly interface accessible across various devices.

## Project Structure

The project is structured into two main folders: `client` and `server`.

### Client

The client folder contains the frontend of the application.


### Server

The server folder contains the backend of the application.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** TailwindCss

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

6. Access the Task Manager web application in your web browser at `http://localhost:4000`.

## Packages Used

- **bcrypt:** A library for hashing passwords securely.
- **cloudinary:** A media management platform for uploading, storing, and manipulating images and videos.
- **cookie-parser:** A middleware to parse cookies attached to the client request object.
- **cors:** A middleware for enabling Cross-Origin Resource Sharing (CORS) in your Express.js applications.
- **dotenv:** A zero-dependency module that loads environment variables from a .env file into process.env.
- **express:** A minimalist web framework for Node.js used for building RESTful APIs.
- **express-fileupload:** Middleware for handling file uploads in Express.js.
- **jsonwebtoken:** An implementation of JSON Web Tokens (JWT) for user authentication.
- **mongodb:** The official MongoDB driver for Node.js.
- **mongoose:** An elegant MongoDB object modeling tool for Node.js.
- **validator:** A library for data validation in JavaScript based on validator.js.

## API Documentation
### User Registration

Endpoint: `POST http://localhost:4000/api/v1/user/register`

Description: Registers a new user.

Request Body:

- **name** (string, required): Name of the user.
- **email** (string, required): Email of the user.
- **phoneNumber** (string): Phone number of the user.
- **password** (string, required): Password of the user.
- **avatar** (file): Avatar image of the user.

Example Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phoneNumber": "1234567890",
  "password": "securePassword",
  "avatar": "<avatar_image_data>"
}
### User Login

Endpoint: `POST http://localhost:4000/api/v1/user/login`

Description: Registers a new user.

Request Body:

- **email** (string, required): email of the existing user.
- **password** (string, required): password of the user.

Example Request Body:
```json
{
  "email": "john@example.com",
  "password": "securePassword"
 
}



