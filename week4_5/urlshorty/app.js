const express = require("express");
const shortid = require("shortid");
const validUrl = require("valid-url");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 8000;
const linkPath = path.join(__dirname, "links.json");

// req,res,next
//DRY -> DON'T REPEAT YOURSELF

//todo: builtin middleware
//todo: application level middleware
// app.use(middleware) //todo: get call on all the requests
// app.use("path", middleware) //todo: get call on the /path request

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//todo: app level routing
// app.METHOD() -> get, post, patch, delete

app.get("/short", (req, res) => {
  res.status(200).json({
    msg: "Hello, you just sent a request to our server",
  });
});

app.post("/short", (req, res) => {
  console.log(req.method);
  const { long_url } = req.body;
  if (!long_url) {
    return res.status(400).json({
      msg: "'long_url' path is missing in the request. Please try again",
      success: false,
    });
  }
  if (!validUrl.isUri(long_url)) {
    return res.status(400).json({
      msg: "Invalid url supplied. Please try again",
      success: false,
    });
  }

  const uniqueId = shortid.generate();
  const link = `http://localhost:${PORT}/${uniqueId}`;

  const fileExist = fs.existsSync(linkPath);
  const data = {
    long: long_url,
    short: link,
    createdAt: new Date().toISOString(),
  };
  if (fileExist) {
  } else {
    data.id = 1;
    const links = [data];
    fs.writeFile(linkPath, JSON.stringify(links), (err) => {
      if (err) {
        return res.status(500).json({
          msg: "An error occurred while creating your link. Please try again later",
          success: false,
        });
      }
      res.status(201).json({
        msg: "Link shorten successfully",
        link,
      });
    });
  }
});

app.listen(PORT, () => {
  console.log("Server is Running...");
});
//todo: modular routing
