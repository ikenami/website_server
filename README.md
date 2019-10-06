# Website Server

Serves the build of a website (in this case, a compiled Vue website) on Heroku.

## In this project we used

* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [Nodemon](https://nodemon.io/)
* [Express](http://expressjs.com/)
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

## How to use

The purpose of this project was to create a way to host the [Deck Royale](https://github.com/ikenami/Deck-Royale) on the [Heroku](https://www.heroku.com) website.

On the [Deck Royale](https://github.com/ikenami/Deck-Royale) {which is a Vue project} we did:

```
npm run build
```

That created a `dist` folder with the project compiled in a otimized way by Vue.

Next, we copied the `index.html` and the `dist` folder from our [Deck Royale](https://github.com/ikenami/Deck-Royale) project, to our current project (yes, this one), more specificaly to the `app/public` folder. And we configured our Express so he would know where are the files he needs to run the application.


Now we can run this project with:

```bash
# If you have nodemon installed
# Serve at localhost:5000
> nodemon server

# If you don't have nodemon installed
# Serve at localhost:5000
> node server
```
