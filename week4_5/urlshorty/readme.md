# URL SHORTENING BACKEND API USING NODE & EXPRESS

## FEATURES:

1. First things first, the client send his long URL through a POST request to /short endpoint.
2. A short version of the url is created on the server using file system as database by creating a `links.json` using `fs module` which consist of an **array of object with the client long, id and the generated short url**.
   - Send the object as json back to the client that created the link.
   - the sent url should be validated
   - sample `links.json` database file:
     ```json
     [
       {
         "id": 1,
         "long": "https://www.long.url",
         "short": "https://localhost:8000/UNIQUE_LINK",
         "createdAt": date here
       }
     ]
     ```
3. A get request request to your server using the shorted link will redirect/return back the original url if it exist or 404 error if not found.

   - Sample of Request URI

     ```js
     "http://localhost:8000/UNIQUE_LINK?redirect=true";

     "http://localhost:8000/UNIQUE_LINK";
     ```
