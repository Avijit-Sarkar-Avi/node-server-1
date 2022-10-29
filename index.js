const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Node server running");
});

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Avi", email: "avi@gmail.com" },
    { id: 2, name: "Robi", email: "robi@gmail.com" },
    { id: 3, name: "Kobi", email: "kobi@gmail.com" }
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log('Post API called');
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Simple server running on port ${port}`);
})