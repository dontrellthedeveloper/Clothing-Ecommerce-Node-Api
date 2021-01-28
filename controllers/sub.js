const Sub = require('../models/sub');
const slugify = require('slugify');

exports.create = async (req, res) => {
    try {
        const {name, parent} = req.body;
        const subCategory = await new Sub({name, parent, slug: slugify(name)}).save();
        res.json(subCategory);
    } catch (err) {
        res.status(400).send('Create sub category failed');
    }
};

exports.list = async (req, res) => {
    res.json(await Sub.find({}).sort({createdAt: -1}).exec());
};

exports.read = async (req, res) => {
    let sub = await Sub.findOne({}).sort({createdAt: -1}).exec();
    res.json(sub);
};

exports.update = async (req, res) => {
    const {name} = req.body;
    try {
        const updated = await Sub.findOneAndUpdate(
            {slug: req.params.slug},
            {name, slug: slugify(name)},
            {name: true}
        );
        res.json(updated)
    } catch (e) {
        res.status(400).send("Sub category update failed")
    }
};

exports.remove = async (req, res) => {
    try {
        const deleted = await Sub.findOneAndDelete({slug: req.params.slug});
        res.json(deleted);
    } catch (e) {
        res.status(400).send("Sub category delete failed")
    }
};