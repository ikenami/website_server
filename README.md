# Deck-Royale-Server

Serves the build of [Deck Royale](https://github.com/ikenami/Deck-Royale) on `localhost:5000` if no port was specified.

## In this project we used
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Nodemon](https://nodemon.io/)
* [Express](http://expressjs.com/)
* [Vue](https://vuejs.org/)
* [Clash Royale API](https://github.com/martincarrera/clash-royale-api)
* [Heroku](https://www.heroku.com)

## Run
```
# install dependencies
npm install

# if you have nodemon installed
# serve at localhost:5000
nodemon server

# if you don't have nodemon installed
# serve at localhost:5000
node server
```

## This Project
The purpose of this project was to create a way to host the [Deck Royale](https://github.com/ikenami/Deck-Royale) on the [Heroku](https://www.heroku.com) website.

On the [Deck Royale](https://github.com/ikenami/Deck-Royale) project we did:
```
npm run build
```
That created a `dist` folder with the project compiled in a otimized way by Vue.

Next, we copied the `index.html` and the `dist` folder from our [Deck Royale](https://github.com/ikenami/Deck-Royale) project, to our current project (yes, this one - Deck Royale Server), more specificaly to the `app\public` folder. And we configured our Express so he would know where are the files he needs to run the application.


Now we can run this project with:
```
# if you have nodemon installed
# serve at localhost:5000
nodemon server

# if you don't have nodemon installed
# serve at localhost:5000
node server
```

You can check the running app (with (maybe) some bugs) [here](http://deck-royale-ultimate.herokuapp.com/).


----------
This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](http://www.supercell.com/fan-content-policy).
