const express = require('express');
const lowdb = require('lowdb');
const app = express();
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const database = lowdb(adapter);
const port = process.env.PORT || 8000;

app.use(express.static('public'));

const initiateDatabase = () => {
    const databaseInitiated = database.has('insults').value();

    if (!databaseInitiated) {
        database.defaults({ insults: [] }).write();
    }
}

const insertInsult = async (insult, play) => {
    const response = await database.get('insults')
                        .push({ insult: insult , play: play })
                        .write();
    return response;
}

const getInsults = async () => {
    return await database.get('insults');
}

app.post('/api/insult', async (request, response) => {
    console.log(request.url);
    const insult = request.query.insult;
    const play = request.query.play;

    let message = {
        success: true,
        message: 'Insult added'
    }

    const res = await insertInsult(insult, play);
    message.data = res[0];
    response.send(message);
});

app.get('/api/insult', async (request, response) => {
    const data = await getInsults();
    response.send(data);
});


app.listen(port, () => {
    console.log('Server started on port: ', port);
    initiateDatabase();
});
