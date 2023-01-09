<h1 align=center>API to search products from OpenFoodFacts</h1>

## Description

[Nest](https://github.com/nestjs/nest) generated API to search products from OpenFoodFacts

## Prerequisites

- node : v18.13.0
- npm : v9.2.0
- docker : v13.03.6
- docker compose : v2.13.0

## Installation

```bash
$ npm install
```

## Docker

The `docker-compose.yml` file serves to start MongoDB with Docker. It should be initialized before running the app

```bash
$ docker-compose up
```

After running, you can stop the Docker container with

```bash
$ docker-compose down
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentation

```
http://127.0.0.1:3000/apidoc

```

## Improvements

- Manage cash with a store such as Redis
- Improve the test coverage (add E2E testing)
- Fully use the MongoDB Docker implementation for the tests
- Containerize the api

## License

Nest is [MIT licensed](LICENSE).
