const {Iblog, blogSchema} = require('../models/blog');
const express = require('express');
const router = express();


router.get('/', async (req, res) => {
    const bloglist = await Iblog.find();
    res.send(bloglist);
});

router.post('/createblog', async (req, res) => { 
    const { error } = await blogSchema.validateAsync(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    let bloglist = new Iblog({
        title: req.body.title,
        description: req.body.description
    });
    bloglist = await bloglist.save();

    res.send(bloglist);
});

router.put('/edit/:id', async (req, res) => {
    const { error } = await blogSchema.validateAsync(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const bloglist = await Iblog.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description
    },{new: true});

    if(!bloglist) return res.status(404).send('the given id was not found...');

    res.send(bloglist);
});

router.delete('/delete/:id', async (req, res) => {
    const bloglist = await Iblog.findByIdAndRemove(req.params.id);

    if (!bloglist) return res.status(404).send('the given id was not found...');

    res.send(bloglist)
});

router.get('/:id', async (req, res) => {
    const bloglist = await Iblog.findById(req,params.id);

    if (!bloglist) return res.status(404).send('the given id was not found...');

    res.send(bloglist);
});

module.exports = router;