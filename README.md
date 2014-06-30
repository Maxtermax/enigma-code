=======
Que es enigma-code ?
==============


Es un sencillo modulo hecho en el framework de javascript node.js que sirve para encriptar contraseñas con varias funciones para comparar, desencriptar.

=======
Ejemplo ?
==============
 Claro puedes correr un pequeño ejemplo y ver la magia este modulo para hacer esto sigue los siguientes pasos:

## 1- npm install enigma-code
Este comando instala el modulo.
## 2- Ubicar ejemplo
Ubicate en el folder donde esta el ejemplo de enigma-code

cd /node_modules/enigma-code/example

##3- node example
Despues de que esto puedes correr el ejemplo  con:

node example

=======
Como usar ?
==============
Es bastante facil ya que no son muchas las funciones que tiene enigma-code puntualmente funciona de la siguiente forma:

## Primera funcion Generar hash:


```javascript
var enigma=require('enigma-code')//llama el modulo 

var valorEncriptacion=10;//puede ser cualquier numero
enigma.genHash(valorEncriptacion)//genera el hash de tu contraseña
//teniendo como base el valor de encriptacion 
//que le pases como parametro es de tu eleccion en valor que le pases

var key='millave';
enigma.genHash(valorEncriptacion,key)
/*El segundo parametro es una llave o key esto es una vale de seguridad 
con el cual todas tus contraseñas seran encriptadas
sin esto sera imposible desencriptar con exito la longitud de esta llave
debe ser inferior a 10 caractes, pero si quieres tambien puedes encriptar
esta llave.
*/
```

Es importante dejar en claro que cada contraseña que encriptes
con el valor que tenga tu key solo podra se desencriptada con 
exito si el key es el mismo con el que fue encriptada.

```javascript

enigma.genHash(valorEncriptacion,key,'contraseña123')
/*
El tercer parametro es la contraseña en texto plano que te interesa encriptar
esta contraseña debe ser validada con una exprecion regular
 de contraseñas que acepte minimo 10 caracteres y maximo 15 o mas 
 por el lado del frontend 
frontend puedes usar esta por ejemplo:
	var Reg=new RegExp(/^[a-zA-Z0-9ñ]{10,15}$/).test('min10caracteres');//true
*/
	
```
Puedes aprender mas sobre expreciones regulares aqui: http://webintenta.com/validacion-con-expresiones-regulares-y-javascript.html

```javascript


enigma.genHash(valorEncriptacion,'contraseña123',function(hash){
	console.log(hash)//2dl3lkwkj13kj12k12kj321kj
//esa funcion retorna por defecto en hash la contraseña encriptada

});//el cuarto paramtro es una funcion la cual devuelve el 'hash' 
//es decir la contraseña encriptada es importante pedirlo en el callback de la funcion

//eso es todo con la funcion de encriptar contraseña o genHash() :)
```


## Segunda funcion Desencriptar hash:
```javascript

Esta funcion es muy sencilla de usar es importante dejar claro que primero se debe establecer.
El valor de encriptacion con la funcion genHash() 

//es decir la funcion genHash() siempre debe ir declarada primero

var hash='ē285ĺ324ķ321Ĭ310ķ321ĺ324ĳ317Ĵ318Į312Ĵ318ľ328Ŀ329İ314';

enigma.Desencriptar(hash)//el primer parametro que se necesita
//en esta funcion es obviamente la hash a desencriptar

//si el valor de encriptacion es distinto al el valor con el que esta encriptado 
//el hash entonces des encriptara mal.

enigma.Desencriptar(hash,function(des){
	console.log(des);//return desencriptacion
});//el segundo parametro es una funcion que retorna el hash desencriptado
/*
importante dejar claro que el valor de encriptacion de el hash
con el que se quiere  debe ser igual al que se definio en la funcion
genHash() y tambien el valor de el 
key  de lo contrario no podra desencriptar con exito
muy similar a la funcion anterior.
*/ 

```


## Tercera funcion Comparar:
```javascript
Esta funcion retorna un valor boolean si la contraseña candidata 
es la misma del hash entonces retornara true de lo contrario false.

var hash='ē285ĺ324ķ321Ĭ310ķ321ĺ324ĳ317Ĵ318Į312Ĵ318ľ328Ŀ329İ314';

enigma.comparar(hash)//el primer parametro es el hash que deberia estar en tu
//DB store encriptado con la funcion genHash()

enigma.comparar(hash,'ContraseñaCandidata')//el segundo parametro es la contraseña candidata con la que se intenta validar

enigma.comparar(hash,'ContraseñaCandidata',function(res){
	console.log(res)//false
});
/*
el terce parametro es una funcion que retorna la respueta en un valor boolean es 
decir si la contraseña candita es igual al hash retorna true de lo contrario no

importante dejar claro que el valor de encriptacion de el hash que se quiere compara 
debe ser igual al que se definio en la funcion genHash() y tambien el valor de el 
key  de lo contrario no podra comparar se con exito
*/
```



=======
Errores:
==============

## "Antes de comparar necesita un valor de encriptacion"

```
Es por que no haz definido el valor de encriptacion con la funcion 
genHash() si no sabes cual esta funcion:ve hacia la seccion como usar enigma y busca 
la primera funcion de todas llamada "funcion Generar hash"
```
## "Antes de Desenciptar necesita un valor de encriptacion"
```

Es por que no haz definido el valor de encriptacion con la funcion genHash() 
si no sabes cual esta funcion

ve hacia la seccion como usar enigma y busca la funcion principal
llamada "funcion Generar hash".
```

## "Error introduce un valor mayor a cero"

```
Este error se produce por que le pasaste como parametro a la funcion genHash()
un valor no valido como lo es 0 o inferior es decir valores negativo
```


##Autor :Esneyder Amin Palacios Mena   || https://www.facebook.com/esnene02
##Contacto:@sneyder_a 								 || https://twitter.com/Sneyder_A 
##From @Quibdojs  		 								 || https://twitter.com/QuibdoJs
##Github:https://github.com/Maxtermax