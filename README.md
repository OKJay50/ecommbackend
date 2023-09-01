# eCommerce Backend with Sequelize, MySQL, and Node.js

This is the backend server for an eCommerce application built using Sequelize, MySQL, and Node.js. It provides APIs for managing categories, products, and tags, allowing you to create, retrieve, update, and delete data related to your online store's inventory.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   git clone <https://github.com/OKJay50/ecommbackend.git>

Navigate to the project directory:

cd ecommerce-backend

2. Install dependencies:

npm install

Set up your environment variables:

Copy the .env.example file to .env and update the values as needed.

3. Run the application:

npm start

The server should now be running on <http://localhost:3001>.

Usage
This backend provides a RESTful API for managing categories, products, and tags. You can use tools like Insomnia, Postman, or curl to interact with the API. Make sure your MySQL database is correctly configured and accessible.

API Endpoints
Categories:

GET /api/categories: Retrieve all categories.
GET /api/categories/:id: Retrieve a category by ID.
POST /api/categories: Create a new category.
PUT /api/categories/:id: Update a category by ID.
DELETE /api/categories/:id: Delete a category by ID.
Products:

GET /api/products: Retrieve all products.
GET /api/products/:id: Retrieve a product by ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update a product by ID.
DELETE /api/products/:id: Delete a product by ID.
Tags:

GET /api/tags: Retrieve all tags.
GET /api/tags/:id: Retrieve a tag by ID.
POST /api/tags: Create a new tag.
PUT /api/tags/:id: Update a tag by ID.
DELETE /api/tags/:id: Delete a tag by ID.
Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.
