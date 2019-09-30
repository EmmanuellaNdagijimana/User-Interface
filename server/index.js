import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/route'; 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

const PORT = process.env.PORT || 4002;
app.listen( PORT, function(){
 console.log(`server listern on PORT ${PORT}`)
});

export default app;