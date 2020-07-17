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

TODO: at this point, it's ignoring:

* results for different year/month
* "opcional" and related values

## TODO (and other notes)

  > // NOTE: may be forced if not available (INTERESANTE!)

  > // TODO:  optional fields

  > TODO: return error messages on every failed call

    > // NOTE:  return res.status(400).send(msg);

## POST http://192.168.1.53:57016/feriados/many

First load: use First-load.sh
JSON body:

``` sh
# if made executable
./First-load.sh
# else, through shell
sh ./First-load.sh
```

## GET list http://192.168.1.53:57016/feriados


