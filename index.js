/*
Autor :Esneyder Amin Palacios Mena 
Contacto:@sneyder_a
Github:https://github.com/Maxtermax
*/
var	art=require('./node_modules/ascii-art/ascii-art.js')
,		Reg=new RegExp(/^[a-zA-Z0-9ñÑ]{10,15}$/)
,		space=new RegExp(/\s/)
,		llave=""
, 	pre=""
,		h="";


var funciones={
	genHash:function(N,key,contra,cb){
		if( N == undefined || N == null || typeof(N) != "number" ){
			throw new Error('Introduce un valor del tipo numero ');
		};
		if( key == undefined || key == null || typeof(key) != "string" || key.length > 11 || space.test(key) ){
			throw new Error('Introduce un key valido menor de 10 caracteres y sin espacios mira mas en: https://github.com/Maxtermax/enigma-code');
		}else{
			llave=key;
		}
			
		if( !Reg.test(contra) ){
			throw new Error('Introduce una contraseña valida minimo de 10 caracteres'
				+'maximo 15 caracteres sin espacios ni signos mira mas en: https://github.com/Maxtermax/enigma-code');
		};				
		if(contra == undefined || contra == null || typeof(contra) !== "string"){
			throw new Error('Introduce un valor del tipo string ')
		};
		if( N <= 0 ){
			throw new Error( 'Error introduce un valor mayor a cero' );
		}//TERMINA VALIDACIONES PRINCIPALES

//Apartir de aqui comienza la encriptacion 

			if( N > 65000 ){
				throw new Error('Elige un valor de encriptacion distintos');
			};//emite un error cuando se eligen un Numero de encriptacion extremadamente alto
			if( N > 50000 ){
				valorEncrypt=N-1
				//le resta 1 al Numero encriptacion 
			}else{
			valorEncrypt=N+15000;	
			}//Si el Numero de encriptacion no es muy alto
			// Le suma un valor alto al Numero de encriptacion para que pueda encriptar y desencriptar
			//bien segun la tabla Ascii
		
			if( key.length > contra.length ){
				throw new Error( 'Error introduce un key menor a 10 caracteres' );
			}//Valida que la longitud del key sea menor a la contraseña a encriptar
			else{
				var result=""//esta variable es una instancia que existe solo aqui para esta parte del codigo el otro pre es global
				for( i in contra ){
					if( !key[i] ){
						result+=String.fromCharCode(contra[i].charCodeAt()+valorEncrypt);
					}else{
						result+=String.fromCharCode(contra[i].charCodeAt()+valorEncrypt)+Number(key[i].charCodeAt()+10); 
					}
				}//Si no se cumplen las condiciones de anteriores encripta basandose en 
				//el parametro contra que llega por el callback
				if(cb) return cb(result);//retorna en cb de la funcion el resultado de la encriptacion 
			}//Si no hay error en la validacion del a longitud encripta
//TERMINA LA ENCRIPTACION EN VARIOS CASOS 
	/*
	RESUMEN

	1-encripta si el valor de encriptacion es decir N es 113 o 10 que son numeros especiales
		en la tabla Ascii.
	2-encripta si no son numero especiales sumando le 15000 para que el valor de encriptacion 
		es decir N se vuelva un numero especial.
	3-Emite un error si N tiene un valor extremadamente alto o si la logintud del key es mayor
	  que la contraseña a encriptar 
	*/
},//termina generar hash		

//Apartir de aqui comienza la Desencriptacion 

	Desencriptar:function(hash,cb){
 		var desEncript="";
		var	num="";
		var examen="";
		var contador=0;

		if( valorEncrypt == 0 ){
	 		throw new Error("Antes de comparar necesita un valor de encriptacion por favor primero definelo con la funcion genHash"
	 			+" si ya definiste la funcion antes mencionada el error esta en que "
	 			+"genHash y esta funcion Desencriptar se cargan en momentos distintos");
	  };//Si no se ha definido un valor de encriptacion con la funcion genHash() emite u n error
		for( i  in hash ){
	 		if( !isNaN( hash[i] )){
				num+=hash[i];//Recolecta los numeros de la contraseña que vendrian a ser el key del hash
	 		}else{
				if( num == ""){
					//ignora 
				}//ignora 
				else{
					if(examen.length == llave.length ){
				}else{
					examen+=String.fromCharCode(Number(num-10));//A los numeros que recolecta le resta 10 para que retorne el valor exacto del key
					num="";//limpia el despues de recolectar los numeros 
				};
				//AQUI SE DESENCRIPTA EL KEY
			};//Si no es un numero isNaN entonces procede a desencriptar la contraseña 
				desEncript+=String.fromCharCode(hash[i].charCodeAt()-valorEncrypt);//desEncripta restandole el valor de encriptacion					
			};
		};//termina desencriptada ciclo

		if(llave == examen){
			return cb(desEncript);
			//Retorna la desencriptacion en caso que el key sea igual al keyCandidato
		}else{
			throw new Error('Contraseña erronea');
		};//emite un error el key no es correcto 
//TERMINA LA DESENCRIPTACION 
/*
	RESUMEN
	1-Emite error si el key de la contraseña es erronea
	2-Emite un error si el valor de desencriptacion esta indefinido
	3-Retona el valor desencriptado de la contraseña si esta esta validad con el key
*/	

},//termina desencriptar

//Apartir de aqui comienza la funcion de comparar 
  comparar:function(hash,Candidate,cb){
  	if( valorEncrypt == 0 ){
  		throw new Error("Antes de comparar necesita un valor de encriptacion"
  		 +"por favor primero definelo con la funcion genHash si ya definiste "
  		 +"la funcion antes mencionada el error esta en que"
  		 +"genHash y esta funcion comparar se cargan en momentos distintos mira mas en: https://github.com/Maxtermax/enigma-code");
  	};//emite un error si el valor de encriptacion no esta definido en la funcion genHash() 

  	this.Desencriptar(hash,function(des){
  		if(des == Candidate ){
				return cb(true);
  			//Responde true si la contraseña desencriptada en igual a la contraseña candidata
  		}else{
				return cb(false);		
  			//Responde false si la contraseña desencriptada en diferente a la contraseña candidata
  		};
  	});//Llama a la funcion desencriptar que creamos anterior mente y la reutiliza

//TERMINA COMPARA CONTRASEÑA
/*
	RESUMEN
	1-Emite un error si el valor de encriptacion no esta definido
  2-Retorna true si la contraseña desencriptada en igual a la contraseña candidata
  2-Retorna false si la contraseña desencriptada en diferente a la contraseña candidata
*/
}//termina compara contraseña 


}//TERMINA EL JSON DEL LAS FUNCIONES ENIGMA

module.exports=funciones; //exporta funciones 

art.font('ENIGMA-CODE','Doom','red',function(ren){
		console.log(ren);
});//Agrega un poco de estilo en la consola



  /*
	

var pass='QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklñzxcvbnm234567890'
var iter=1;
setInterval(function(){

iter++
funciones.genHash(iter,'miclaoscs',pass,function(hash){

funciones.Desencriptar(hash,function(des){
		if( des == pass ){
			console.log('bien ');
		}else{
			console.log('mal '+des);
		};
funciones.comparar(hash,pass,function(res){
		console.log(res);
});


});//funcion Desencriptar


});//funcion hash
console.log(iter);
},200);
  */


