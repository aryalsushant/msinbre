# 🛍️ Product Inventory Management

A simple full-stack web application for managing product inventory using Vue.js, Node.js, and MySQL.

The frontend has routes for listing (/), creating (/create), and editing (/edit/:id) products. These frontend routes correspond to the backend REST API endpoints that perform CRUD operations on products in a MySQL database. For example, when accessing the edit route /edit/:id , the frontend would make HTTP requests to the corresponding backend endpoint /products/:id to either GET the product details or PUT updated product information. The backend API is built with Express.js and follows RESTful conventions with endpoints for all standard operations (GET, POST, PUT, DELETE) while the frontend provides the user interface to interact with these API endpoints.

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/aryalsushant/msinbre.git
cd msinbre
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm i nodemon express mysql2 cors
```
#### Frontend
```sh
cd ../frontend
npm i axiom bulma
```

### 3️⃣ Run the Application
#### Start the Backend
```sh
cd backend
npx nodemon index.js
```
#### Start the Frontend
```sh
cd ../frontend
npm run serve
```

---
🚀 Built with ❤️ by **Sushant Aryal**
