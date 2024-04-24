"use strict";

const 
    express = require("express"),
    homeController = require('./controller/homeController'),
    errorController = require('./controller/errorController'),

    app = express();


app.use(express.static("public"));
app.set("port", process.env.PORT || 3000);


const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);

app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.get("/", homeController.getHome);
app.get("/transportation", homeController.getTransportation);
app.get("/contact", homeController.getContact);
app.post("/contact", homeController.postContactForm);


app.use(errorController.pageNotFoundError);
app.use(errorController.InternalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server at http://localhost:${app.get("port")}`);
});