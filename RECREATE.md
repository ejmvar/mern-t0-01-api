# Recreate steps for backend

## Creation

``` sh
mkdir -p t00-01-api && cd $
git init

npm init

# npm i -s  express  mongoose body-parser cors
# -- body-parser not needed anymore
npm i -s  express  mongoose cors

npm i -s  typegoose

npm i  envalid

```

## Testing

``` sh
node db.js
npm i -g nodemon
nodemon index.js

```

## Models

Feriado

## TODO (and other notes)

  > // NOTE: may be forced if not available (INTERESANTE!)

  > // TODO:  optional fields
