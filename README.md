# Phone catalog

Phone catalog built with MERN Stack that implements CRUD operations.

Live demo at: http://phone-catalog.tomastm.me/

## How to install and run?

Install and change directory

`git clone https://github.com/tomas249/phone-catalog.git`

`cd phone-catalog`

### with NPM

Install frontend and backend dependencies

`(cd client && npm install) && (cd server && npm install)`

Change mongodb path to mongodb://localhost:27017/phones into server/config/config.env file.

Run

`npm run dev:server` to start backend. Starts on port 5000.

`npm run dev:client` to start fronend. Starts on port 3000.

### with Docker

At root directory, execute:
`docker-compose up`

Access at: http://localhost:8000/ for frontend. To load some data access at: http://localhost:5000/api/phones/loadMock.
