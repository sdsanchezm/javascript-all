const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Asd');
})


router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'This is Post',
        data: body
    })
})

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Updated using patch',
        data: body,
        id,
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        data: body,
        id,
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Category Deleted',
        id,
    })
})

module.exports = router;


