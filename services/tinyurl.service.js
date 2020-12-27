const express = require('express')
const {default: ShortUniqueId} = require('short-unique-id');

const db = require('../db')

module.exports = {

    getUrl: async (req, res) => {
        const result = await db.get(req.params.id);

        if (result != null) {
            return res.status(200).json(result);
        } else {
            return res.status(404).send();
        }
    },

    postUrl: async (req, res) => {
        console.dir(req.body);
        const uid = new ShortUniqueId();
        const id = uid();
        try {
            const tiny = {
                id: id,
                url: req.body.url,
                date: new Date()
            }
            await db.create(tiny);
        } catch (err) {
            console.log(err);
        }
        return res.status(201).location(`/${id}`).send();
    }

}
