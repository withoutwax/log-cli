"use strict";

const inquirer = require("inquirer");
const chalk = require("chalk");
const firebase = require("firebase");
const admin = require('firebase-admin');
const functions = require('firebase-functions');

module.exports = () => {
    console.log("Welcome the Log-CLI app");

    // Initialize Cloud Firestore
    

    admin.initializeApp(functions.config().firebase);

    var db = admin.firestore();

    db.collection('log').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                console.log(doc.id, '=>', doc.data());
            });
        })
        .catch((err) => {
            console.log('Error getting data', err);
        });
}