# Car-fix-server 

Tools and technologies: Express.js, Mongodb, Cors, dotenv.


## Setup:

npm install: `npm init -y`

Install express, cors, mongodb, dotenv: `npm i express cors mongodb dotenv`

Run the server: `nodemon index.js`


## Detials:

In mongodb, there is one database with two collections. 'CarFix' is the database and it's collections are 'services' and 'bookings'. 


I used to update the data using 'patch'. The difference of 'put' and 'patch' are given here, 

PUT: Updates the entire resource, requiring a full representation and overwriting the existing data.

PATCH: Updates only specified fields, making partial changes without affecting other data.
