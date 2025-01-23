# Problem 5: Backend Server with ExpressJS

### Overview 

This project implements a simple backend server for managing products using CRUD (Create, Read, Update, Delete) operations. The application is developed using ExpressJS and TypeScript, ensuring a robust and type-safe implementation.

### Features

+ Create: Add a new product with details such as name, description, and price.

+ Read: Fetch details of a single product or a list of products.

+ Update: Modify the details of an existing product.

+ Delete: Remove a product from the database.


## Setup

### 1. Run command below to install packages.
+ ```npm install```

### 2. Set .env file based on ex.env.

### 3. Run command below to migrate database.

+ ```npm run migration:apply```

### 5. Start server.
+ ```npm run dev```

## API Documentation

### 1. Get All product
### Endpoint
+ ```GET http://localhost:3000/product```

### Query Parameters

+ `page` (optional): The page number for pagination. Default is `1` if not provided.
+ `limit` (optional): The number of product per page. Default is `5` if not provided.
+ `name` (optional): The name of product to query

### Example Request
+ ```curl --location 'http://localhost:3000/product/?page=1&limit=1'```

### Example Response

+ ``` {
    "data": {
        "data": [
            {
                "id": "593292b7-af17-4210-8f1c-9af0120dfd94",
                "name": "product 1",
                "description": "Product is so beautyful",
                "price": 1000
            },
            {
                "id": "b6197a80-c09a-4697-b21c-cf0d6a44b4da",
                "name": "product 2",
                "description": "Product is so beautyful 2",
                "price": 10000
            }
        ],
        "total": 2,
        "currentPage": 1,
        "totalPages": 1
    },
    "status": 200,
    "message": "Products found"
}```

## 2. Get product By Id

### Endpoint
+ ```GET http://localhost:3000/product/:id```
### Path Parameters
+ `id` (required): ID of product, must be uuid.
### Example Request
+ ```curl --location 'http://localhost:3000/product/995955af-b8c9-4076-a5eb-d0fba9f6cf39'```
### Example Response

+ ``` {
    "data": {
        "id": "593292b7-af17-4210-8f1c-9af0120dfd94",
        "name": "phuc12312313",
        "description": "Phuc dep nhất",
        "price": -10
    },
    "status": 200,
    "message": "Product found"
} ```

## 3. Create Product

### Endpoint
+ ```POST http://localhost:3000/product```
### Body Parameters
+ `name` (required): must be string.
+ `description` (required): must be string.
+ `price` (required): must be number.
### Example Request
+ 
```
curl --location 'http://localhost:3000/product' \
--header 'Content-Type: application/json' \
--data '{
    "name": "product3",
    "description":"product 3 so cute",
    "price": 10000
}'
```
### Example Response
+ 
```
{
    "data": {},
    "status": 201,
    "message": "Product created successfully"
}
```

## 4. Delete Product with id
### Endpoint
+ ```DELETE http://localhost:3000/product/:id```
### Path Parameters
+ `id` (required): ID of product, must be uuid.
### Example Request
+ ```curl --location --request DELETE 'http://localhost:3000/product/593292b7-af17-4210-8f1c-9af0120dfd94'```
### Example Response
+ 
```
{
    "data": {},
    "status": 200,
    "message": "Product deleted successfully"
}
```

## 5. Update Product By Id

### Endpoint
+ ```PUT http://localhost:3000/product/:id```
### Path Parameters
+ `id` (required): ID of product, must be uuid.
### Body Parameters
+ `name` (optional): must be string.
+ `description` (optional): must be string.
+ `price` (optional): must be number.
### Example Request
+ 
```
curl --location --request PUT 'http://localhost:3000/product/33867cd3-cad5-4188-a0e8-9d139c45489a' \
--header 'Content-Type: application/json' \
--data '{
    "description":"product3socute",
    "price": 10000
}'
```
### Example Response
+ 
```
{
    "data": {},
    "status": 200,
    "message": "Product updated successfully"
}
```

