# Kiosk Inventory Management
<a href="https://warm-biscochitos-618c98.netlify.app/">kiosk inventory management demo site</a> (credentials not required for demo site)

<p align="center">
   <img src="screenshots/kiosk-logo.png" alt="Kiosk Logo" height="300">
</p>

Introducing **kiosk**: The Mobile-Friendly Inventory Management App for Restaurants and Bars

Are you tired of managing multiple systems and dealing with the hassle of ordering supplies for your restaurant or bar? Look no further than **kiosk**, the comprehensive inventory management app designed to streamline your ordering process and make it a breeze.

With **kiosk**, you can say goodbye to the complexities of manual order placement. Our app consolidates all your ordering needs into one convenient platform, saving you time and effort. Whether you need to restock ingredients, beverages, or other supplies, **kiosk** has got you covered.

Ordering with suppliers has never been easier. With just a few clicks, you can create and customize your orders directly within the app. **kiosk** allows you to select your desired products from your list of suppliers and add or remove items with ease. Once your order is complete, the app automatically generates a structured order summary for you.

But that's not all. kiosk takes your convenience a step further by seamlessly communicating with your suppliers. When you finalize your order, the app automatically sends an email to your chosen supplier, ensuring they receive all the necessary information. You can include additional comments or special instructions for your supplier, ensuring accurate and personalized service every time.

Say goodbye to the complexities of inventory management and embrace the simplicity of **kiosk**. A demo of the app can be found [here](https://youtu.be/sVBb7eZE4bQ)↗ and discover a world of effortless ordering for your restaurant or bar. Experience the power of streamlined inventory management with **kiosk** today!

<p align="center">
   <img src="screenshots/screenshot1.png" alt="Kiosk Logo">
<p align="center">
   <img src="screenshots/screenshot2.png" alt="Kiosk Logo">
</p>

## Tech Stack

* [React](https://react.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Node.js](https://nodejs.org/en)
* [PostgreSQL](https://www.postgresql.org/)
* [Prisma](https://www.prisma.io/)

## Installation

### Requirements

You will need to have **postgres** installed on your computer to run the database.

### Setting up the local environment

1. Run `npm install` in the client and server folders to add the required dependencies.

2. Run `npm install prisma --save-dev` to get Prisma installed globally on your machine.

3. In the server folder, run `npm run create-db` from the terminal to create a database.

4. Create a .env file in the server folder with the following variables and populate it with your local values:

- `PORT=8080`
- `POSTGRES_USER=`
- `POSTGRES_PWD=`
- `POSTGRES_DB=kiosk`
- `DB_HOST=localhost`
- `DB_PORT=`
- `DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PWD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}"`

5. Run `npx prisma migrate dev` to set up the database and create the necessary tables.

6. Initiate the app, in the terminal run `npm run start` from the client folder and `nodemon index.js` or `node index.js`.
   The app was designed for mobile view so the browser will have to be resized to mobile dimensions. This can be done in the Chrome development tools.

## Bugs & Fixes

### Frontend

- Separate Components and Pages: Each file in the Pages folder corresponds to a single page and their only job is to render components (no logic in these 'components') and your Components folder contains the actual components and the logic inside of them.
- Create assets for logo, app name, labels, etc. to avoid repetition.
- Create a .env file for API_URL.
- Authentication
- Functionality to update products and suppliers
- State to hold current order. The problem when navigating back from the "confirm order page", order disappears

### Backend
- Authentication - Currently the login page is not functional
- Functionality to update products and suppliers
- Convert the backend to typescript to be consistent with frontend.
- Add model in the database to store Stocktakes. An API will need to be set up to provide this functionality in the front end.

## Improvements

- A stocktake report to be created that could be exported to CSV or Excel for easier analysis.
- A web version that allows the user a more comfortable experience to create, add, delete, and update the products and suppliers.
- Display a dashboard of past orders, past stocktakes, order totals tracking, and stocktake totals tracking.
