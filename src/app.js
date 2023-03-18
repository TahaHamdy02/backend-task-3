const express = require("express");
const hbs = require("hbs");
const path = require("path");
const fs = require("fs");
// require("dotenv").config();

const app = express();

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Set the view engine to use hbs
app.set("view engine", "hbs");

// Define the path for static files
const staticFiles = path.join(__dirname, "../public");
app.use(express.static(staticFiles));

// Define the path to the views partials directory
const partials = path.join(__dirname, "../views/partials");
hbs.registerPartials(partials);

// Define routes
app.get("/", (req, res) => {
  res.render("index", { data, pageTitle: "home" });
});

app.get("/home", (req, res) => {
  res.render("index", { data, pageTitle: "home" });
});

app.get("/aboutus", (req, res) => {
  res.render("AboutUs", { data, pageTitle: "AboutUs" });
});

app.get("/ourhistory", (req, res) => {
  res.render("OurHistory", { data, pageTitle: "History" });
});
const ContactData = {
  contactImage: "imgs/laurels.png",
  pageTitle: "Contact",
};
app.get("/contactus", (req, res) => {
  res.render("Contact", { data, ContactData });
});

// Start the server
const port = process.env.Port || 8080;
app.listen(port, console.log(`server is up to running in ${port}`));
