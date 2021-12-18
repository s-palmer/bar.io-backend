# Bar.io Backend

A server API that gives you the top 5 bars within walking distance of your location.

## Table of Contents

- [Stack](#stack)
- [Usage](#usage)
- [Team](#team)

## [Stack](https://github.com/s-palmer/bar.io-backend#stack)

| Logo | Tool | Use | Where is it used? |
| ---------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------- |
| <img src="public/images/react.png" height="auto" width="50"> | [ReactJS](https://reactjs.org/) | ReactJS is a front-end JavaScript library for building user interfaces based on UI components. | [Frontend Repo](https://github.com/s-palmer/bar.io-frontend) |
| <img src="public/images/node.png" height="auto" width="50">  | [Node](https://nodejs.org/en/) | NodeJS is a back-end JavaScript runtime environment | |
| <img src="public/images/express.png" height="auto" width="50"> | [ExpressJS](https://expressjs.com/) | ExpressJS is a fast, unopinionated, minimalist web framework for Node.js ||
| <img src="public/images/heroku.png" height="auto" width="50"> | [Heroku](https://www.heroku.com/) | Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud. | Live deployment.

## [Usage](https://github.com/s-palmer/bar.io-backend#usage)

## Pre-Requisites

### Google Cloud API key.
- Register for free [here](https://cloud.google.com/).
- Required APIs to enable:
* Geocoding
* Places
* Maps JavaScript API

### Environment Variables

In a .env file:

- PLACES_API_ENDPOINT='https://maps.googleapis.com/maps/api/place/textsearch/'
- PLACES_API_KEY=<YOUR_API_KEY_GOES_HERE>

## Quickstart

Clone this repository. Then:

```bash
> npm install
> nodemon server.js
```
> Runs the app in development mode.

## [Team](https://github.com/s-palmer/bar.io-backend#team)

* Sergei - [Github](https://github.com/s-palmer)
* Tim - [Github](https://github.com/TTurvey)
* Matt - [Github](https://github.com/Matt-Warnock)
* Tania - [Github](https://github.com/Pinkish-Warrior)
