const express = require('express');
const {PORT} = require('./config/serverConfig');

const apiRoutes = require('./routes/index.js');

const app = express();

const prepareAndStartServer = () => {

    // Middleware to parse JSON bodies
    app.use(express.json());

    // Middleware to parse URL-encoded bodies
    app.use(express.urlencoded({ extended: true }));

    // Registering API routes
    app.use('/api', apiRoutes);

    app.listen(PORT,()=> {
        console.log(`Server is running on port ${PORT}`);
    })
}

prepareAndStartServer();