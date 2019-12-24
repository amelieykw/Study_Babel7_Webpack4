// require("@babel/register");

import cors from 'cors';
import express from 'express';
import uuidv4 from 'uuid/v4';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`),
);

let users = {
    1: {
        id: '1',
        username: 'Robin Wieruch',
    },
    2: {
        id: '2',
        username: 'Dave Davids',
    },
};

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
});
app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
});

let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'By World',
        userId: '2',
    },
};

app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
});
app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
});
app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
    };
    messages[id] = message;
    return res.send(message);
});

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});
