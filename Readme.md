# API server

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

TODO: retry mongoose connection to database if initially failed

