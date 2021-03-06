# API server

## Additional docs about Frontend+Backend setup

See the page at "./docs":

``` sh
npm install -g serve
serve -s build

# Drop frontend so it's served as static pages from "./build" path:
cp -a ${ReactBuildRoot} build

# Save at port "12345"
serve -s build -l 12345

# Serve from a docker image
docker build .
docker-compose up -d

```

## Fast start

> run server

``` sh
node index.js
```

To build with auto rebuild for dev/testing

``` sh
nodemon index.js
```

TODO: for deployment

``` sh
TARGET="here your target for production"
cp -a . ${TARGET}
```

## Configuration

MONGODB_URI: http://192.168.1.53:57016/feriados/
|      parameter      |  value  |         description          |
| ------------------- | ------- | ---------------------------- |
| http://192.168.1.53 | IP addr | where backend api is running |
| 57016               | IP port | from "API_PORT"              |

Methods:
| verb |      path      |         description          |
| ---- | -------------- | ---------------------------- |
| GET  | /feriados      | retrieve all records         |
| GET  | /feriados/:id  | retrieve by "_id"            |
| PUT  | /feriados      | update by "_id"              |
| POST | /feriados/many | upload array of JSON objects |

## Preload

## Get all records

## Get one record

``` sh
curl --location --request GET 'http://192.168.1.53:57016/feriados/5f12198d40c6011a3fa4edce' \
--data-raw ''
```

## Update 1 record

``` sh
UpdateOneRecord.sh
```

## Documentation

## TODOs

* TODO: dotenv for 

``` text
MONGO_URI=mongodb://root:rootpassword@localhost:57017
API_PORT=57016
```

TODO: database indexing

## FIXME

*    Feriado.findByIdAndUpdate(recId, {

*      // TODO: test if this updated existing data

TODO: better interface/Schema/Model integration (typegoose)

NOTE: ADD/DELETE: are there just for study reasons

        new: true , // NOTE: if you want to receive NEW updated record, instead of the original one

TODO: notes on retry if db not accessible
NOTE: retry mongoose connection to database if initially failed
NOTE: Keep status of db connection
NOTE: Notify about status of db connection
