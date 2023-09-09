//import express

const express = require('express');


//importing routers
const graphicRouter = require('./routers/graphicRouter')
const userRouter = require('./routers/userRouter')
const cors = require('cors');



//initilize express app
const app = express();
const port = 5000;


//middleware -- station -> middle ->
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000']
}))
app.use('/graphic' , graphicRouter);
app.use('/user' , userRouter);


//routes --junction  -> route<-
app.get('/', (req ,res) => {
    res.send('Response from express');
});
app.get('/add', (req ,res) => {
    res.send('3+4=7');
});
app.get('/getall', (req ,res) => {
    res.send('Response from express and 3+4=7');
});
app.get('/delete', (req ,res) => {
    res.send('delete');
});




app.listen(port ,  () => { console.log('express server started at 5000')});

