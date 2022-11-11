const http = require("http");
const fs = require("fs");
const path = require("path");
const fsPromise = fs.promises;

// fs.readSync
// fs.read()

// await fsPromise.readFile("loca")

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  // res.end(message)
  // res.wr
  // res.statusCode = 200 //OK 200-299
  // // 201 - created

  // //client -> 400 - 499
  // //400 - bad//40
  if (req.url === "/accounts") {
    const accountPath = path.join(__dirname, "accounts.json");
    if (req.method === "POST") {
      let data = "";
      //todo: get data from client
      req.on("data", (chunk) => {
        data += chunk;
        //data = data + chunk
      });

      //todo: process and save the data to file
      req.on("end", () => {
        const parsedData = JSON.parse(data);
        const date = new Date().toISOString();
        parsedData.createdAt = date;
        parsedData.updatedAt = date;
        console.log(parsedData);

        //todo: check if the accounts.json

        const fileExist = fs.existsSync(accountPath);
        if (fileExist) {
          fs.readFile(accountPath, (err, data) => {
            if (err) {
              console.log(err);
              res.statusCode = 500;
              res.end("Something went wrong while creating your account");
            } else {
              const accounts = JSON.parse(data.toString());
              parsedData.id = accounts.length + 1;
              console.log(accounts);
              accounts.push(parsedData);
              fs.writeFile(accountPath, JSON.stringify(accounts), (err) => {
                //todo: send a respond to the client
                res.statusCode = 201;
                res.end("Account Created Successfully");
              });
            }
          });
        } else {
          parsedData.id = 1;
          const database = JSON.stringify([parsedData]);
          fs.writeFile(accountPath, database, (err) => {
            if (err) {
              console.log(err);
              res.statusCode = 500;
              res.end("Something went wrong while creating your account");
            } else {
              //todo: send a respond to the client
              res.statusCode = 201;
              res.end("Account Created Successfully");
            }
          });
        }

        // console.log("Done processing data");
      });
    } else if (req.method === "GET") {
      fs.readFile(accountPath, (err, data) => {
        if (err) {
          console.log(err);
          res.statusCode = 500;
          res.end("Something went wrong while reading the accounts");
        } else {
          const accounts = data.toString();
          res.statusCode = 200;
          res.end(accounts);
        }
      });
    } else if (req.method === "PUT") {
      console.log("Update or Edit Data");
    } else if (req.method === "DELETE") {
      console.log("Delete a data");
    } else {
      console.log("Sorry, unknown method");
    }
  } else if (req.url === "/notes") {
    console.log("Notes Endpoint");
  } else {
    res.statusCode = 404;
    const msgObj = {
      status: 404,
      msg: "Endpoint does'nt exist",
      error: true,
    };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(msgObj));
  }
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log("Server is Running....");
});
