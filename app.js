const express = require('express');
const app = express();
const morgan = require('morgan');
const mailRouter = require('./routes/mailRoutes');
app.use(morgan('dev'));

app.use('/api/v1/mails', mailRouter);

app.all('*', (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: `Can't find ${req.originalUrl} on this server.`
    });
});

module.exports = app;