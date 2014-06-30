/*
Autor :Esneyder Amin Palacios Mena 
Contacto:@sneyder_a
Github:https://github.com/Maxtermax
*/
var llave="";
var funciones={
	genHash:function(N,key,contra,cb){
		var h="";
		llave=key;
		var Reg=new RegExp(/^[a-zA-Z0-9ñ]{10,15}$/);

			if( N == undefined || N == null || typeof(N) != "number" ){
				throw new Error('Introduce un valor del tipo numero ');
			};
			if( key == undefined || key == null || typeof(key) != "string" || key.length > 11 ){
				throw new Error('Introduce una contraseña de encriptacion valida menor de 10 caracteres mira mas en: https://github.com/Maxtermax/enigma-code');
			};
			if( !Reg.test(contra) ){
				throw new Error('Introduce una contraseña valida minimo de 10 caracteres'
					+'maximo 15 caracteres si espacios ni signos mira mas en: https://github.com/Maxtermax/enigma-code');
			};				
			if(contra == undefined || contra == null || typeof(contra) !== "string"){
				throw new Error('Introduce un valor del tipo string ')
			};
			if( N <= 0 ){
				throw new Error( 'Error introduce un valor mayor a cero' );
			}//TERMINA VALIDACIONES

if( N == 113  || N == 10 ){
var pre=""

valorEncrypt=N;

if( key.length > contra.length ){
	throw new Error( 'Error introduce un key menor a 10 caracteres' );

}else{

for( i in contra ){
	if( !key[i] ){
		pre+=String.fromCharCode(contra[i].charCodeAt()+valorEncrypt);
		
	}else{
		pre+=String.fromCharCode(contra[i].charCodeAt()+valorEncrypt)+Number(key[i].charCodeAt()+10); 
	}
}//termina for
if(cb){
	return cb(pre)
}
	


}//termina else 
}else{
if( N > 65000 ){
		throw new Error('Elige un valor de encriptacion distintos');
}
if( N > 50000 ){
		valorEncrypt=N-1
}else{
	valorEncrypt=N+15000;	
}

	


if( key.length > contra.length ){
	throw new Error( 'Error introduce un key menor a 10 caracteres' );
}else{
var pre=""

for( i in contra ){
	if( !key[i] ){
		pre+=String.fromCharCode(contra[i].charCodeAt()+valorEncrypt);
		
	}else{
		pre+=String.fromCharCode(contra[i].charCodeAt()+valorEncrypt)+Number(key[i].charCodeAt()+10); 
	}

}//termina for
if(cb){
	return cb(pre)
}
}//termina else interno 

};//termina else

},//termina generar hash		
Desencriptar:function(hash,cb){
 	var desEncript="";
 	var recontruccion="";
 	if( valorEncrypt == 0 ){
 		throw new Error("Antes de comparar necesita un valor de encriptacion por favor primero definelo con la funcion genHash"
 			+" si ya definiste la funcion antes mencionada el error esta en que "
 			+"genHash y esta funcion Desencriptar se cargan en momentos distintos");
  };
var num="";
var examen="";
var contador=0;
for( i  in hash ){
 if( !isNaN( hash[i] )){
			//ignora logs numeros por que los numeros no son parte de una contraseña por codigo ASCCI 
				num+=hash[i];
 }else{

if( num == ""){
						//ignorar
}else{
		if(examen.length == llave.length ){
		//confirma pass 
	}else{
		examen+=String.fromCharCode(Number(num-10));
		num="";
	};
};
	desEncript+=String.fromCharCode(hash[i].charCodeAt()-valorEncrypt);					
	};//termin else
};//termina desencriptada cliclo

if(llave == examen){
	return cb(desEncript); 
}else{
	throw new Error('Contraseña erronea');
};


},//termina desencriptada json
 comparar:function(hash,Candidate,cb){
  	if( valorEncrypt == 0 ){
  		throw new Error("Antes de comparar necesita un valor de encriptacion"
  		 +"por favor primero definelo con la funcion genHash si ya definiste "
  		 +"la funcion antes mencionada el error esta en que"
  		 +"genHash y esta funcion comparar se cargan en momentos distintos mira mas en: https://github.com/Maxtermax/enigma-code");
  	}
  	this.Desencriptar(hash,function(des){
  		if(des == Candidate ){
				return cb(true);		
  		}else{
				return cb(false);		
  		}
  	});//valida 
 }//termina compara contraseña 
}//termina clases 

module.exports=funciones; //exporta funciones 



  
	



/*

var pass='esneyder023'

funciones.genHash(10,'zxcv2m;_}{',pass,function(hash){

funciones.Desencriptar(hash,function(des){
		if( des == pass ){
			console.log('bien ');
		}else{
			console.log(des+' mal ?');
		};
});//termina Desencriptar
funciones.comparar(hash,pass,function(res){
			console.log(res);
});

});//termi hash
*/