var http=require('http')
,		express=require('express')
,		app=express()
,		fs=require('fs')
,		server=http.createServer(app)
,		enigma=require('../index.js')
/*
go
*/


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

enigma.genHash(90,'miLlave:p',req.body.pass,function(err,hash){
		if(err) return console.log(err);
		res.send(hash);
});//genera hash con un numero de encriptacion cualquiera 
	
});

app.put('/',function(req,res){

enigma.Desencriptar(req.body.passU,function(err,des){
			if(err) return console.log(err);
			res.send(des);//return des encriptacion
});//end desencriptar pass 
	
		
});



server.listen(1234,function(){
	console.log("Listen on port: "+server.address().port);
});

