const UserController = require("./controllers/user");
const BookController = require("./controllers/book");
const CompanyController = require("./controllers/company");

const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/users", UserController.create);
app.get("/users", UserController.list);

app.post("/books", BookController.create);
app.get("/books", BookController.list);


app.post("/companies", CompanyController.create);
app.get("/companies", CompanyController.list);

app.listen(3000, () => {
  console.log("Ayaktayız yıkılmadık");
});
