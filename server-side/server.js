const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoServer } = require('./config/keys')

const port = 3005;

const server = express();
server.use(cors());
server.use(bodyParser.json());
MongoServer(server);



server.listen(port, () => console.log(`Server started on ${port}`));