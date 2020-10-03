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

This project using postgresql database so before the starting you should be
installed database and if you have different database settings please change
to config in "src/datasources/db.datasources.ts" file.

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





