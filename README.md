
---

# MongoDB Band Databas

## Description
This project is focused on creating a database module using MongoDB and Node.js to manage a collection of bands. This lab reinforces async programming with Node.js, focusing on modular design, error handling, and managing CRUD operations in MongoDB.

## Features

- **Band Functions (`bands.js`)**
  - `create(name, genre, website, recordCompany, groupMembers, yearBandWasFormed)`: Adds a new band to the database.
  - `getAll()`: Retrieves all bands.
  - `get(id)`: Fetches a single band by its ID.
  - `remove(id)`: Deletes a band by its ID.
  - `rename(id, newName)`: Updates the name of a band by ID.

- **Database Setup (`mongoConnection.js` and `mongoCollections.js`)**
  - Uses MongoDB's native driver for database connection management and collection setup.
  - `settings.json` for configuration and `helpers.js` for validation functions.

- **App Testing (`app.js`)**
  - Demonstrates CRUD operations on the bands collection, including error handling for invalid inputs.

## Tech Stack
- Node.js
- MongoDB
- Async/Await

## Setup and Installation
1. Clone the repository.
   ```bash
   git clone https://github.com/sachindevangan/MongoDB-Band-Database
   ```
2. Navigate to the project directory.
   ```bash
   cd lab4-band-db
   ```
3. Install MongoDB and other dependencies.
   ```bash
   npm install
   ```
4. Start the application.
   ```bash
   npm start
   ```

## Usage
- Run `app.js` to test database functionalities, including adding, retrieving, updating, and deleting band records. Functions perform input validation and use async/await for managing MongoDB operations.

## License
This project is provided for educational purposes only.