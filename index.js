const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Node server running");
});

const users = [
    { id: 1, name: "Avi", email: "avi@gmail.com" },
    { id: 2, name: "Robi", email: "robi@gmail.com" },
    { id: 3, name: "Kobi", email: "kobi@gmail.com" }
];

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Simple server running on port ${port}`);
})