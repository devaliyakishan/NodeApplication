const controller ={};

controller.list = (req,res)=>{
	res.send('helllo world');
};
controller.save = (req,res)=>{
	res.send('Helo save');
};

controller.delete = (req,res)=>{
	res.send('hello delete');
};

module.exports = controller;