const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://test1-e2c7e.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req, res) => {
    // console.log('it works!');
    // res.send('received!');
    db.ref('contacts').once('value', (snapshot) => {
        const data = snapshot.val();
        res.render('index', {contacts: data});
    });
} );

router.get('/delete-c/:id', (req, res) => 
{
    db.ref('contacts/' + req.params.id).remove();
    res.redirect('/');
});

router.post('/new-contact', (req, res) => {
    console.log(req.body);
    const newContact = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    };
    db.ref('contacts').push(newContact); // this is the table in SQL
    //res.send('received!');
    res.redirect('/'); 
});

module.exports = router;