# `Server Simple Setup`
```
npm init -y

npm i nodemon express cors mongodb dotenv jsonwebtoken
```
## in `package.json`
```
"start": "index.js",
"build": "index.js",
"start-dev": "nodemon index.js"
```
### `.env` File Create
```
DB_USER=LastProjects
DB_PASSWORD=LastProjectsPass
* LastProjects and LastProjectsPass is from mongodb
```
## command `git init` and Make `.gitignore` file
```
node_modules
.env
```
## to get AccessToken 
* `require('crypto').randomBytes(64).toString('hex')`
### start coding
```
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const Collection = client.db("geniusCarSixtySeven").collection("services");

        // rest coad goes here

    }
    finally {

    }
}
run().catch(err => err)


app.get('/', (req, res) => {
    res.send('HomePage of server')
});

app.listen(port, () => {
    console.log('This is Module ', 'port:', port)
});
```
### `alert :` const uri could be change
# `JWT`  full in `Module 69` server> index.js

```
function verifyJWT(req, res, next) {
    // next()
    // console.log(req.headers.authorization);
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: 'un-authorized access' })
    }
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
        if (err) {
            return res.status(401).send({ message: 'un-authorized access' })
        }
        req.decoded = decoded;
        next();
    })
}
```