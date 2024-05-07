A backend for pharmacy built with Express Node.js - WireApps assessment

## Getting Started

1. Clone this repository.
2. Install dependencies using,

```bash
npm install
```

3. Environmental variables

Create a .env file at the root of the project directory and add the following variables before you run the project locally.

```bash
PORT=4000
JWT_SECRET=secret
```


4. Run the application using,

```bash
npm run start
```

## API Usage

First register a user. For role you select one from "owner", "manager" or "cashier".

Example: 

```bash
curl --location 'http://localhost:4000/api/auth/register' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Tharuka Bandara",
    "username": "tharukab95",
    "role": "owner",
    "password": "test"
}
```

Then login using the created user credentials.

Example:

```bash
curl --location 'http://localhost:4000/api/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "tharukab95",
    "password": "test"
}'
```

You will get the response for the above login request in below format.

```bash
{
    "data": {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6InRoYXJ1a2FiOTUiLCJyb2xlIjoib3duZXIifSwiaWF0IjoxNzE1MTA4ODk3fQ.6Gj4sBRZ1zdzsFiTgrN1I2nWhIMPOIqnzSbN0cId4W4",
        "user": {
            "name": "Tharuka Bandara",
            "username": "tharukab95",
            "role": "owner"
        }
    }
}
```

You need to use this jwt token as the bearer token when sending authorized requests to inventory(medication) and customer endpoints.

Example: 

```bash
curl --location 'http://localhost:4000/api/inventory' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJ1c2VybmFtZSI6InRoYXJ1a2FiOTUiLCJyb2xlIjoib3duZXIifSwiaWF0IjoxNzE1MTA4ODk3fQ.6Gj4sBRZ1zdzsFiTgrN1I2nWhIMPOIqnzSbN0cId4W4'
```