//import express from 'express';
//import bodyParser from 'body-parser';
//import router from './User-Interface/server/routes/route'; 

const express = require('express');
const app = express();


const port = process.env.PORT || 4001;


// Add route code Here
app.get('/', (req, res) => {
   res.send('Welcome to mydiary');
});


app.listen(port, () => {
   console.log(`server listen on port:${port}`);
});

export default app;