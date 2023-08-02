# kiosk-inventory-management

Welcome to kiosk inventory management!
A demo of the app can be found [here](https://youtu.be/sVBb7eZE4bQ).

## Installation

### Requirements

You will need to have **postgres** installed on your computer to run the database.

### Setting up the local environment

1. Run `npm install` in the client and server folders to add the required dependencies.

2. Run `npm install prisma --save-dev` to get Prisma installed globally on your machine.

3. In the servver folder, run `npm run create-db` from the terminal to create a database.

4. Create an .env file in the server folder with the following variables and populate with your local values:

- `PORT=8080`
- `POSTGRES_USER=`
- `POSTGRES_PWD=`
- `POSTGRES_DB=kiosk`
- `DB_HOST=localhost`
- `DB_PORT=`
- `DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PWD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}"`

5. Run `npx prisma migrate dev` to set up the database and create the necessary tables.

6. Initiate the app, in the terminal run `npm run start` from the client folder and `nodemon index.js` or `node index.js`.
   The app was designed for mobile view so the browser will have to be resized to mobile dimensions. This can be done in the chrome development tools.

## Bugs & Fixes

### Frontend

- Seperate Components and Pages: each file in the Pages folder corresponds to a single page and their only job is to render components (no logic in these 'components') and your Components folder contains the actual components and the logic inside of them.
- create Assets for logo, app name, labels etc to avoid repetition.
- Create .env file for API_URL.

### Backend

- Convert backend to typescript to be consistent with frontend.
- Add model in database to store Stocktakes. An api will need to be set up to provide this functionality in the front end.

## Improvements
