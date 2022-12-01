# Mentee Project 2 -> Countries API

A Countries API where client can get information about countries around the world.

## API ENDPOINTS

Clients are to send a `GET` request to the endpoints given below

- Get `all data`

  ```bash
   /all
  ```

- Search by `country` name. It can be the native name or partial name

  ```bash
   /name/:name
  ```

- Search by `cca2, ccn3, cca3 or cioc` country code

  ```bash
   /alpha/:code
  ```

- Search by `currency` name

  ```bash
   /currency/:currency
  ```

- Search by `language` name

  ```bash
   /lang/:lang
  ```

- Search by `capital` city.

  ```bash
   /capital/:capital
  ```

- Search by `Region`: Africa, Americas, Asia, Europe, Oceania.

  ```bash
   /region/:region
  ```

- Search by `Subregion`: South America, Southern Europe, Central America, Eastern Asia, etc.

  ```bash
   /subregion/:region
  ```

## Database

Save the given `countries_data.json` inside given directory.

## Project Structure

```bash
 ├── countries-api
 ├ ├── routes.js
 ├ ├── controllers.js
 ├ ├── app.js
 ├ ├── utils.js
 ├ ├── package.json
 ├ ├── database
 ├ ├ ├── countries_data.json
```
