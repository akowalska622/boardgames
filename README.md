# Share a game
## Next.js + MongoDB project

Demo app: https://board-games-sandy.vercel.app/

## Description

**Share a game** is a browser app which allows you to share, borrow and rent boarding games in your neighborhood. The project was created with Next.js and MongoDB.

### Features

- You can browse the games which are already in our database
- You can add a new game to the database
- You can rent or borrow a game
- You can read the details of the particular game

## About the project

The project was developed as training of Next.js with connection to MongoDB. It uses routing and server side rendering, fetching data from MongoDB, adding new items to the database. Current code is only the first step of planned project.

Redirecting to game details may take a while, as I use a free, training-friendly version of MongoDB cluster. Loading spinner is being prepared.


### Styling

The styling approach that I chose for this project is **CSS modules** in React. It helps to encapsulate styling for a particular component while having your styling in separated file, not withing .js file.

### Future scope

- Web scraping (probably with Cheerios) to automatically populate game description while adding a new game (currently in progress)
- Events, such as tournaments or just friendly playing, in your neighborhood (with Leaflet for rendering a map)
- Loading spinner, while fetching from MongoDB, as it takes a while
- Changing status of the game in database, after clicking "rent"
- Authentication
- Refactoring to minimize repetitions.
- Working "rent" and "waiting list" buttons
- Dashboard with your borrowed and rented games
- Fake payments with Stripe
- Understanding Image component, as I can't fit image size properly


## Project setup

### Requirements

You’ll need to have **Node >= 10** on your local development machine.

### How to run the project in development mode

First, you have to install the dependencies. You can do that by going to the root folder of the project and typing:

    npm install

in the terminal.

To run the project in development mode, type:

    npm run dev

in the project directory.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You can see the Redux store and actions dispatched in the console of Developer tools of your browser.