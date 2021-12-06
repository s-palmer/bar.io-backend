# Bar App

## makers project 3

a server API that gives you the top 5 bars within walking distance of your location.

## Running server

Insure you have a version <version> of node installed with node package manager.

`npm install`

### Setup API key

This app uses [Google maps places API](https://developers.google.com/maps/documentation/places/web-service/search)
You will need to setup an account and get an API key in order to run this app.

### Create .env file

Make a new file in the root of this directory called `.env` and put the following inside:
```
PLACES_API_ENDPOINT='https://maps.googleapis.com/maps/api/place/textsearch/'
PLACES_API_KEY=<YOUR_API_KEY_GOES_HERE>
```

### To run the server

`nodemon server.js`
