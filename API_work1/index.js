const express = require('express');
const mysql = require('mysql');

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoologico2'
});


app.get('/', (req, res) => {
    res.send('hallo welt');
});


//app.put();
//app.post();
//app.delete();
 
// connection
db.connect((err) => {
    if(err) throw err;
    console.log('mysql connected');
});
 
// create DB

//app.get('/createdb', (req,res) =>{
//    let sql = 'CREATE DATABASE zoologico2'; 
//    db.query(sql, (err, result) => {
//        if(err) throw err;
//        console.log(result);
//        res.send('DB Created.')
//    });
//});

app.get('/getall', (req,res) => {
    let sql = `SELECT * FROM animal`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log('all animals fetched');
        res.send(result);
    });
});

app.get('/getanimal/:id', (req,res) => {
    let sql = `SELECT * FROM animal WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getanimaltype', (req,res) => {
//    let sql = `SELECT * FROM animal WHERE id = ${req.params.id}`;
    let sql = `SELECT * from animal t1 LEFT JOIN animaltype t2 ON t1.animalType = t2.id`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/addanimal1', (req,res) => {
    let animal = { animalName:'cirilo', animalNumber: 5555, animalType: 3 };
    let sql = 'INSERT INTO animal SET ?';
    let query = db.query(sql, animal, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/animalenterdate', (req,res) => {
    //let animal = { animalName:'Mandalorian', animalNumber: 9887, animalType: 3 };
    let sql = 'SELECT * FROM animals';
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/animalupdate/:id', (req,res) => {
    let newAnimalName = 'McCoy';
    let sql = `UPDATE animal SET animalName = '${newAnimalName}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.listen('3000', () => {
    console.log('server started on port 3000');
})