const	enigma=require('../index.js')
let password = "micontra1234567";
let key = 'millave';

console.log('password', password);

enigma.genHash(90, key, password, function(err, hash){
	if(err) return console.log(err);
	console.log('hash', hash);
	
	enigma.comparar(hash, password, function(err, response){
		if(err) return console.log(err);
		if(response) return console.log("Test passed");
		return console.error("Test not passed");
	})
})


	

