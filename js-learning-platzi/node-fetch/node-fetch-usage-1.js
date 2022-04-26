const express = require('express'); // npm i express 
// const object1 = require('../data/data1.json');
const fetch = require('node-fetch'); // npm i node-fetch@2 

const router = express.Router();

router.get('/', async (req, res) => {
    console.log('entering the endpoint');
    const { tag } = req.query;
    if(!tag){
        res.json({ error: "The tag parameter is required" })
    }else{
        console.log("ok");
        console.log("tag", tag);
        const url_base = "https://someplace.io/api/v1/temp/blog/posts";
        const url_query = "?tag=" + tag;
        const url = url_base + url_query;
        console.log(url);
        const options = { "method": "GET" };
        const response = await fetch(url, options)
        .then(res => res.json())
        .catch( e => {
            console.error({
                "message": "error here",
                error: e,
            });
        });
        console.log(req.query.tag);
        console.log("RES:", response);
        // console.log("RES:", res);
        res.json(response);
    }
});

module.exports = router;

