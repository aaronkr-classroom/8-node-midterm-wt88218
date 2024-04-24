"use strict";


exports.getHome = (req, res) => {

    res.render("index");
}
exports.getTransportation = (req, res) => {
    res.render("transportation");
};

exports.getContact = (req, res) => {
    res.render("contact");
};
exports.postContactForm = (req, res) => {
    res.render("thanks");
};


