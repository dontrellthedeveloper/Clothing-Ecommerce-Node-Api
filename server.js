const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');

//app
const app = express();

//db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB CONNECTED"))
    .catch(err => console.log("DB CONNECTION ERR", err));

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "2mb"}));


// routes middleware
app.use('/api', authRoutes);


// port
const port = process.env.PORT = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));