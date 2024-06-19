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
