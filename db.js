const MongoClient = require('mongodb').MongoClient;

const uri = settings.mongo.uri;
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});


module.exports = {

    create: async (url) => {

        try {
            if (!client.isConnected()) {
                await client.connect();
            }
            const db = await client.db("tinyurl");
            await db.collection("tinyurl").insertOne(url);
        } catch (e) {
            console.error(e);
        }
    },

    get: async (id) => {

        try {
            if (!client.isConnected()) {
                await client.connect();
            }
            const db = await client.db("tinyurl");
            return await db.collection("tinyurl").findOne({id: id});
        } catch (e) {
            console.error(e);
        }
    }

}
