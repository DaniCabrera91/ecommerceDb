
# Proyecto Ecommerce

En este proyecto de backend se aplicarán los conocimientos adquiridos en las tecnologías Node.js y Express, junto con MySQL y Sequelize. El proyecto consiste en desarrollar una tienda online (e-commerce) y presentar un diagrama explicando las relaciones entre las tablas de la base de datos.

# Descripción de la consigna


El objetivo del proyecto es desarrollar una API REST que cumpla con los siguientes requisitos:

    Registro de usuarios usando Bcrypt.
    Login de usuarios con generación de token y uso de middleware.
    Creación de un CRUD para gestionar los datos.
    Implementar al menos una relación Many to Many y otra One to Many entre las tablas.
    Utilización de seeders para poblar la base de datos con datos iniciales.
## Authors

https://github.com/denisc911
https://github.com/DaniCabrera91
## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Documentation

[Documentation](https://linktodocumentation)


## API Reference
Contenido Postman

	"info": {
		"_postman_id": "3b657445-4187-46dc-bc35-a9f95a868051",
		"name": "E-COMMERCE DB",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "36252615"
	},
	"item": [
		{
			"name": "Users",
			"item": [
				{
					"name": "create user",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstName\": \"Denis\",\n    \"lastName\": \"\",\n    \"email\": \"denis@thompson.com\",\n    \"password\": \"123456\",\n    \"address\": \"789 Pineview Street\",\n    \"phone\": \"582314569\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "login user",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n\"firstName\": \"Jane\",\n\"email\": \"jane@smith.com\",\n\"password\": \"123456\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/login",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all users",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstName\": \"Steven\",\n    \"lastName\": \"Rainer\",\n    \"email\": \"steven@rainer.com\",\n    \"password\": \"012394\",\n    \"address\": \"823 Oak Street\",\n    \"phone\": \"024319245\"\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users"
							]
						}
					},
					"response": []
				},
				{
					"name": "get logged user",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5Njg2Njk0fQ._DV0nwwVYDc4Skebw2EZuknyoZaP3qbMyA7iRNalWmI",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstName\": \"Steven\",\n    \"lastName\": \"Rainer\",\n    \"email\": \"steven@rainer.com\",\n    \"password\": \"012394\",\n    \"address\": \"823 Oak Street\",\n    \"phone\": \"024319245\"\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/loggedUser",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"loggedUser"
							]
						}
					},
					"response": []
				},
				{
					"name": "get user by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstName\": \"Steven\",\n    \"lastName\": \"Rainer\",\n    \"email\": \"steven@rainer.com\",\n    \"password\": \"012394\",\n    \"address\": \"823 Oak Street\",\n    \"phone\": \"024319245\"\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/id/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"id",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "update user",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"firstName\": \"Steven\",\n    \"lastName\": \"Rainer\",\n    \"email\": \"steven@rainer.com\",\n    \"password\": \"123456\",\n    \"address\": \"823 Oak Street\",\n    \"phone\": \"024319245\"\n    }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/id/3",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"id",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "logout user",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE5ODMwNTIxfQ.u-Q43nMFjukhYooAprH7OahEUXPWP-YljpfdgA83E3s",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/users/logout",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"logout"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete user",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MzEyNTExfQ._MFSPhB-nyNLGgPYUSxlULDYtVnPJRY3w3_pZxSauSM",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n\"firstName\": \"Steven\",\n\"email\": \"steven@rainer.com\",\n\"password\": \"012394\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/users/id/9",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"users",
								"id",
								"9"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Products",
			"item": [
				{
					"name": "create product",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5Njg2Njk0fQ._DV0nwwVYDc4Skebw2EZuknyoZaP3qbMyA7iRNalWmI",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Sudadera\",\n    \"price\": 32,\n    \"CategoryId\": 3\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/products",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products"
							]
						}
					},
					"response": []
				},
				{
					"name": "update product",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5Njg2Njk0fQ._DV0nwwVYDc4Skebw2EZuknyoZaP3qbMyA7iRNalWmI",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook air 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/products/2",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all products",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook pro 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/products",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products"
							]
						}
					},
					"response": []
				},
				{
					"name": "get by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook pro 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/products/5",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products",
								"5"
							]
						}
					},
					"response": []
				},
				{
					"name": "get by name",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook pro 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/products/name/Macbook air 13 pulgadas",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products",
								"name",
								"Macbook air 13 pulgadas"
							]
						}
					},
					"response": []
				},
				{
					"name": "get by price",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook pro 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/products/price/350",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products",
								"price",
								"350"
							]
						}
					},
					"response": []
				},
				{
					"name": "sorted by price",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text",
								"disabled": true
							}
						],
						"url": {
							"raw": "http://localhost:3000/products/price/sorted",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products",
								"price",
								"sorted"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete product",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzE5Njg2Njk0fQ._DV0nwwVYDc4Skebw2EZuknyoZaP3qbMyA7iRNalWmI",
								"type": "text"
							}
						],
						"url": {
							"raw": "http://localhost:3000/products/9",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"products",
								"9"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Categories",
			"item": [
				{
					"name": "create category",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n\"categoryName\": \"cosmetic\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/categories",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"categories"
							]
						}
					},
					"response": []
				},
				{
					"name": "update category",
					"request": {
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n\"category_name\": \"games\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/categories/4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"categories",
								"4"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete category",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n\"category_name\": \"tech\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/categories/11",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"categories",
								"11"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all categories",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook pro 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/categories",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"categories"
							]
						}
					},
					"response": []
				},
				{
					"name": "get by id",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook pro 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/categories/1",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"categories",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "get by name",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE5MjUwOTQ4fQ.pZCkL-6CyT2ZqQaCO5428bkPhrYUUXv9bEsNptBLhc8",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productName\": \"Macbook pro 13 pulgadas\",\n    \"price\": \"1800\",\n    \"CategoryId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/categories/name/tech",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"categories",
								"name",
								"tech"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Orders",
			"item": [
				{
					"name": "create order",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE5ODM2MjczfQ.GPERnrhCdZ8Jl_GCwP6yffClzv3GysgQ91lCd-F5V9A",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"productId\": \"2\",\n    \"orderDate\": \"2024-06-28\",\n    \"deliveryDate\": \"204-06-29\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/orders",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"orders"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all orders",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"userId\": \"2\",\n    \"productId\": \"1\",\n    \"orderDate\": \"2024-06-22\",\n    \"deliveryDate\": \"204-06-28\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/orders",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"orders"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Reviews",
			"item": [
				{
					"name": "create reviews",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE5NzQ2MTMzfQ.FKzYvIqkWlACBbfMUYx3pU_UzMVNHbawP8NUrEnXi5Q",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"Macbook air\",\n    \"body\": \"Un portatil ligero teniendo en cuenta los materiales aunque quizas visto ahora hubiese elegido una version de más pulgadas. Se calienta a veces bastante con el uso de ciertas aplicaciones, aunque por lo general tiene un buen rendimiento.\",\n    \"postDate\": \"2024-06-29\",\n    \"ProductId\": 5\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/reviews",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"reviews"
							]
						}
					},
					"response": []
				},
				{
					"name": "update reviews",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE5NzQ2MTMzfQ.FKzYvIqkWlACBbfMUYx3pU_UzMVNHbawP8NUrEnXi5Q",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"Macbook puff\",\n    \"body\": \"Flojo.\",\n    \"postDate\": \"2024-06-31\",\n    \"ProductId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/reviews/5",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"reviews",
								"5"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete reviews",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Authorization",
								"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE5NzQ2MTMzfQ.FKzYvIqkWlACBbfMUYx3pU_UzMVNHbawP8NUrEnXi5Q",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"Cascos inalámbricos sony\",\n    \"body\": \"Son unos cascos de buena calidad en cuanto acabados pero la batería no dura demasiado.\",\n    \"postDate\": \"2024-06-29\",\n    \"ProductId\": 5,\n    \"UserId\": 1\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:3000/reviews/id/5",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"reviews",
								"id",
								"5"
							]
						}
					},
					"response": []
				},
				{
					"name": "get all reviews",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/reviews",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"reviews"
							]
						}
					},
					"response": []
				},
				{
					"name": "get by id",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:3000/reviews/id/4",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"reviews",
								"id",
								"4"
							]
						}
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "localhost:3000",
			"value": "localhost:3000\n",
			"type": "string"
		}
	]
}
#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

