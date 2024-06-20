# Car-fix-server 

Front-end Repository: https://github.com/Praneshchow/Car-fix-client

Tools and technologies: Express.js, Mongodb, Cors, dotenv, JWT.

## Setup:

npm install: `npm init -y`

Install express, cors, mongodb, dotenv: `npm i express cors mongodb dotenv`

Run the server: `nodemon index.js`

Add file `.gitignore` and `.env` for security. 

JWT install: `npm install jsonwebtoken`


## Details:

Firebase: Firebase used for Authentication. 

JWT: JSON Web Tokens method for representing claims securely between two parties. It mostly used for authorization. 

In mongodb, there is one database with two collections. 'CarFix' is the database and it's collections are 'services' and 'bookings'. 

I used to update the data using 'patch'. The difference of 'put' and 'patch' are given here, 

PUT: Updates the entire resource, requiring a full representation and overwriting the existing data.

PATCH: Updates only specified fields, making partial changes without affecting other data.

## JWT steps: 

### Create Token

1. client: after user login send user basic info to create token.
2. in the server: install npm i jsonwebtoken
3. import jsonwebtoken
4. jwt.sign (payload, secret, {expires})
5. return token to the client side. 
6. after receiving the token store it either http only cookings or local storage (second best solution)
7. use a general space onAuthStateChange > AuthProvider

### Send Token To Server

1. for sensitive api call () send authorization headers {authorization: 'Bearer token'}

### Verify Token

1. Create a function called verifyJWT (middleware)
2. this function will have three params: req, res, next. 
3. First check whether the authorization headers exists. 
4. if not send 401.
5. get the token out of the authorization header. 
6. call jwt.verify(token, secret, (error, decoded))
7. if error => send 401
8. set decoded to the req object so that we can retrieve it later 
9. call the next() to go to the next function. 
After coming to the function >>> 
10. check weather token has the email that matches with the request email. 