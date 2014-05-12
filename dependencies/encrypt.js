/*
Autor :Esneyder Amin Palacios Mena 
Contacto:@sneyder_a
Github:https://github.com/Maxtermax
*/

var valorEncrypt=0;

var funciones={
	genHash:function(N,contra,cb){
		var h=""
			if( N == undefined || N == null || typeof(N) != "number" ){
				throw new Error('Introduce un valor del tipo numero ')
			};
			if(contra == undefined || contra == null || typeof(contra) !== "string"){
				throw new Error('Introduce un valor del tipo string ')
			};
			if( N <= 0 ){
				throw new Error( 'Error introduce un valor mayor a cero' );
			}
			if( N >= 113  || N == 10 ){
				valorEncrypt=N
				for( i in contra ){
					var encrypt=contra[i].charCodeAt()+valorEncrypt//obtiene el codigo ASCCI y le suma el valor de encriptacion definido por el usuario
					h=h.concat(String.fromCharCode(encrypt),encrypt+10)//le agrega al hash el codigo ASCCI+20 y tambien lo envuelve con el el otro valor errado que devuelve fromCharCode 
				}//termina encriptacion 
					return cb(h);
			}else{
				var calculo=113+N
				valorEncrypt=calculo
				for( i in contra ){
					var encrypt=contra[i].charCodeAt()+valorEncrypt//obtiene el codigo ASCCI y le suma el valor de encriptacion definido por el usuario
					h=h.concat(String.fromCharCode(encrypt),encrypt+10)//lo envuelve con el el otro valor errado que devuelve fromCharCode 
				}//termina encriptacion 
				return cb(h);
			}
  },//termina generar hash
	
			
Desencriptar:function(hash,cb){
 	var desEncript=""
 	if( valorEncrypt == 0 ){
 		throw new Error("Antes de comparar necesita un valor de encriptacion por favor primero definelo con la funcion genHash"
 			+" si ya definiste la funcion antes mencionada el error esta en que "
 			+"genHash y esta funcion Desencriptar se cargan en momentos distintos");
  }

	for( i  in hash ){
		if( !isNaN( hash[i] )){
			//ignora los numeros por que los numeros no son parte de una contraseña por codigo ASCCI 
		}else{
			desEncript=desEncript.concat(String.fromCharCode(hash[i].charCodeAt()-valorEncrypt))
		}
	}//termina desencriptada
  return cb(desEncript); 
 },//termina desencriptada json
 comparar:function(hash,Candidate,cb){
		var desEncript=""
  	if( valorEncrypt == 0 ){
  		throw new Error("Antes de comparar necesita un valor de encriptacion"
  		 +"por favor primero definelo con la funcion genHash si ya definiste "
  		 +"la funcion antes mencionada el error esta en que"
  		 +"genHash y esta funcion comparar se cargan en momentos distintos");

  	}
		for( i  in hash ){
			if( !isNaN( hash[i] )){
			//ignora los numeros por que los numeros no son parte de una contraseña en codigo ASCCI 
		}else{
			desEncript=desEncript.concat(String.fromCharCode(hash[i].charCodeAt()-valorEncrypt))
		}
	}//termina desencriptada
	
	if( desEncript == Candidate ){
			return cb(true);
	}else{
		return cb(false);
	}
 }//termina compara contraseña 

}//termina clases 

module.exports=funciones; //exporta funciones 





/*


setInterval(function(){

valorEncrypt++
funciones.genHash(abc,function(hash){

	funciones.Desencriptar(hash,function(des){

			if(des == abc){
				console.log("bien "+valorEncrypt)
			}else{
				console.log("mal "+valorEncrypt)
			}

	});

});

},150);
*/










