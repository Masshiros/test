const express = require("express");
const app = express();
const router = express.Router();
router.get("/",(req,res) => {
  fs.readFile('frontend/index.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('<h1>Internal Server Error</h1>');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
})
router.get("/home", (req, res) => {
  res.send("Hello World, This is home router");
});

router.get("/profile", (req, res) => {
  res.send("Hello World, This is profile router");
});

router.get("/login", (req, res) => {
  res.send("Hello World, This is login router");
});

router.get("/logout", (req, res) => {
  res.send("Hello World, This is logout router");
});

app.use("/", router);

app.listen(process.env.port || 3000);

console.log("Web Server is listening at port " + (process.env.port || 3000));
