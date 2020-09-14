const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoServer } = require('./config/keys');
const { Companies } = require('./routes/customers');

const port = 3007;

const server = express();
server.use(cors());
server.use(bodyParser.json());
MongoServer(server);
Companies(server)



server.listen(port, () => console.log(`Server started on ${port}`));