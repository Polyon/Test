const express = require('express');
var { dataList } = require('./DataBase/model');

var router = express.Router();

router.get('/', async(req, res) => {
    try {
        const allData = await dataList.find();
        res.status(200).send(allData);
    } catch (error) {
        res.status(404).send(`Not Found.\n${error}`)
    }
});

router.post('/add', async(req, res) => {
    try {
        const data = new dataList(req.body);
        await data.save();
        res.status(201).send('Created');
    } catch (error) {
        res.status(304).send(`Not Modified.\n${error}`);
    }
})

module.exports = router;