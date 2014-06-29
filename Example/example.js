var http=require('http')
,		express=require('express')
,		app=express()
,		fs=require('fs')
,		server=http.createServer(app)
,		encrypt=require('encrypt');


app.configure(function(){
		app.use(express.static(__dirname+'/'));
		app.use(express.static(__dirname+'/views'));
		app.use(express.json());
		app.use(express.urlencoded());
		app.use(express.methodOverride());
});



app.get('/',function(req,res){

		res.sendfile(__dirname+'/index.html','utf-8');

});
app.post('/',function(req,res){

encrypt.genHash(10,'miLlave:p',req.body.pass,function(hash){
			res.send(hash);
});//genera hash con un numero de encriptacion cualquiera 
	
});

app.put('/',function(req,res){

encrypt.Desencriptar(req.body.passU,function(des){
			res.send(des);//return des encriptacion
});//end desencriptar pass 
	
		
});



server.listen(1010,function(){
		console.log("Listen on port "+server.address().port);
});
