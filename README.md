# managementsystem

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

This project using postgresql database so before the starting

you should be installed database and if you have different database settings

please change to config in "src/datasources/db.datasources.ts" file.

```sh
npm run build
npm run migrate
npm start
```



## Rebuild the project

To incrementally build the project:

```
npm run build
```

To force a full build by cleaning up cached artifacts:

```
npm run clean
npm run build
```


## API DOCUMENTATION

Yeni bir çalışan bilgisi eklemek için örnek bir request

```
var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:3000/persons/',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body:
   { name: 'name',
     surname: 'surname',
     email: 'mail@mail.com',
     startDate: '2019-07-02T13:33:03.969Z',
     salary: 0,
     department: 'department',
     title: 'title',
     manager: 'manager' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

Çalışanları listelemek için örnek bir request

```
var request = require("request");

var options = { method: 'GET',
  url: 'http://localhost:3000/persons/',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
```

Bir çalışana ait bilgileri güncellemek için örnek bir request


Bu örnekte çalışanın name değeri değiştirilmiştir.

```
var request = require("request");

var options = { method: 'PATCH',
  url: 'http://localhost:3000/persons/{id}',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json' },
  body: { name: 'test' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


```





