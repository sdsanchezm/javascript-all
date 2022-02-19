

// const knex = require('knex');

const knexConfig = require('../db/knexfile');
// const res = require('express/lib/response');
//initialize knex
const knex = require('knex')(knexConfig[process.env.NODE_ENV]);

function createCar(car) {
    return knex("cars").insert(car);
}

function getAllUsers() {
    // return knex("users").select("*");
    console.log("yes yes")
    const t = knex('users')
  .select("*")
  .then((users) => {
    // return res.json(users);
    // console.log(users);
    return users;
    // return "this is something";
  })
  .catch((err) => {
    console.error(err);
    // return res.json({success: false, message: 'An error occurred, please try again later.'});
    return { message: "error here!"}
  })
  return t;
}

module.exports = {
    getAllUsers
}