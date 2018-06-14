const express = require('express');
const router = express.Router(); 

//const customercontroller = require('../controllers/customerController');

//router.get('/',customercontroller.list);
router.get('/',(req,res)=>{
	res.send('Hello World');
});

module.exports = router;