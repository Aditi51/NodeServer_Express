var express =  require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('assests'));

app.get('/index.html',function(req,res){
	res.sendfile( __dirname + "/" + "index.html");
})

app.get('/process_get',function(req,res){
	response = {
		first_name:req.query.first_name,
		last_name:req.query.last_name
	};
	console.log(response);
	res.send(JSON.stringify(response));
})

/*app.get('/',function(req,res) {
	console.log("Got a get message");
	res.send('Hello World');
});

app.get('/firstPage', function(req,res) {
	var name = req.query.name;
	res.send("Name = " + name);

});

app.delete('/del_user',function(req,res) {
	console.log("Got a delete request");
	res.send("Hello DElete");
})

app.get('/ab*cd',function(req,res){
	console.log("Got a get request for /ab*cd");
	res.send('Page pattern Match');
})
app.post('/postReq',function(req,res){
	var name = req.body.name,
		color=req.body.color;
		res.send(name+" "+color);
}); */

var server = app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s",host,port)
})
