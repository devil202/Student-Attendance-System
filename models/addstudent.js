var users=require('./user'),
	express=require('express'),
	router=express.Router({mergeParams:true});

router.get('/',function(req,res)
{
	res.render('add');
});

router.post('/',function(req,res)
{
	var user=new users(req.body.user);
	user.name=user.name.toLowerCase();
	user.email=user.email.toLowerCase();
	users.register(user,user.password,function(error,user)
	{
		if (error)console.log(error);
		else res.redirect('/markAttendance');
	});
});
module.exports=router;
