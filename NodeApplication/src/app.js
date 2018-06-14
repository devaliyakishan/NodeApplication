const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

const customerRoutes = require('./routes/customer');
const router = express.Router(); 

app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

app.use(morgan('dev'));
app.use(myConnection(mysql, {
	host:'localhost',
	user:'root',
	passsword:'',
	database:'nodejs',
}, 'single'));

router.get('/',(req,res)=>{
	res.send('Hello World');
});
//console.log(customerRoutes);
//app.use('/', customerRoutes);

app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
	console.log('Server port 8080');
});