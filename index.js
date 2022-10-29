const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Node server running");
});

app.use(cors());
app.use(express.json());

//username: dbuser1
//password: v4G00iAgH1bxScxQ



const uri = "mongodb+srv://dbuser1:v4G00iAgH1bxScxQ@cluster0.bkopbwy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('simpleNode').collection('users');
        const user = { name: 'Avijit Avi', email: 'avijit@avi.com' }
        const result = await userCollection.insertOne(user);
        console.log(result);
    }
    finally {

    }
}

run().catch(error => console.log(error))




const users = [
    { id: 1, name: "Avi", email: "avi@gmail.com" },
    { id: 2, name: "Robi", email: "robi@gmail.com" },
    { id: 3, name: "Kobi", email: "kobi@gmail.com" }
];

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search) >= 0);
        res.send(filtered);
    }
    else {
        res.send(users);
    }

});

app.post('/users', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user);
    res.send(user);
});

app.listen(port, () => {
    console.log(`Simple server running on port ${port}`);
})