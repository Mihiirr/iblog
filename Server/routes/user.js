const { User } = require('../models/users');
const express = require('express');
const router = express();


router.get('/', async (req, res) => {
    const userlist = await User.find();
    res.send(userlist);
});

router.post('/createuser', async (req, res) => { 

    let userlist = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    userlist = await userlist.save();

    res.send(userlist);
});

router.put('/edit/:id', async (req, res) => {

    const userlist = await User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    },{new: true});

    if(!userlist) return res.status(404).send('the given id was not found...');

    res.send(userlist);
});

router.delete('/delete/:id', async (req, res) => {
    const userlist = await User.findByIdAndRemove(req.params.id);

    if (!userlist) return res.status(404).send('the given id was not found...');

    res.send(userlist)
});

router.get('/:id', async (req, res) => {
    const userlist = await User.findById(req,params.id);

    if (!userlist) return res.status(404).send('the given id was not found...');

    res.send(userlist);
});

module.exports = router;