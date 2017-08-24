# Koa API Boilerplate

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/villeristi/koa-api-boilerplate/blob/develop/LICENSE)

Easily configurable & scalable API-only boilerplate for blazingly fast Koajs-framework with [JSON API](http://jsonapi.org/) specification & ES6-syntax included out-of-the-box! 

Built with:
* [Koa](https://github.com/koajs/koa)
* [Koa Better Router](https://github.com/tunnckoCore/koa-better-router)
* [Koa Better Body](https://github.com/tunnckoCore/koa-better-body)
* [Cors](https://github.com/evert0n/koa-cors)
* [Helmet](https://github.com/venables/koa-helmet)
* [JOI schema-validator](https://github.com/hapijs/joi)
* [JSONAPI Serializer](https://github.com/SeyZ/jsonapi-serializer)
* [Babel](https://babeljs.io/)
* [Morgan](https://github.com/expressjs/morgan)
* [Debug](https://github.com/visionmedia/debug)
* [ESLint](http://eslint.org/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* ...and many more

## Getting started

1. Be sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed globally.
2. Clone the repo & run `yarn` from the project root
3. Copy `.env.example to .env`

## Routing

Routing is a consept which should be dead simple. In this boilerplate routing is configured through [routes.js](./src/routes.js) file by adding a new `key-value` pair to default exported object, where `key` is a combination of `HTTP-verb` and a route-path, e.g. `'GET /foobar'`.

`value`s only required property is a handler-function which takes a `ctx` & `next` (see [context-documentation](http://koajs.com/#context)) properties. You can also define as many middleware-functions inside `value`s `middleware`-array. Middleware-functions are executed in the same order they are specified in the array.

For `handler`-method, both regular and async-functions are supported.

Out-of-the-box provided routes:
```
GET /           => App name etc.
GET /users      => List (dummy)users
GET /users/:id  => Show single user
POST /users     => "create" a dummy-user

```

Please see [routes.js](./src/routes.js) & `src/modules/user` folder for in-depth examples of how to configure things. 

## Available commands

```sh
yarn start
```

Runs `Babel` watch-command & starts server on [http://127.0.0.1](http://127.0.0.1) on `PORT` specified in `.env` -file (defaults to 8080, [http://127.0.0.1:8080](http://127.0.0.1:8080)). 

**Note!** To start debugging (on DEV), start the app on Linux / OSX with `DEBUG=koa-api-boilerplate yarn start` and on Windows with `set DEBUG=koa-api-boilerplate yarn start`

```sh
yarn lint
```

Lints JS-files inside `/src` directory

```sh
yarn build
```

Transforms ES6-syntax and builds (+minifies) the project to `/build` directory.

## Todo:
- [ ] Testing
- [ ] Route-grouping
- [ ] ...?
