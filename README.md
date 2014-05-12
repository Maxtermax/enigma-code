=======
Que es encrypt ?
==============

Simple script para encriptar contraseñas con varias funciones para comparar, des encriptar 

=======
Como usar ?
==============


Es bastante facil ya que no son muchas las funciones que tiene encript puntualmente funciona de la siguiente forma:

## Primera funcion Generar hash:

 


var valorEncriptacion=10//puede ser cualquier numero
encrypt.genHash(valorEncriptacion)//genera el hash de tu contraseña
//teniendo como base el valor de encriptacion que le pases como parametro es de tu eleccion en valor que le pases

encrypt.genHash(valorEncriptacion,'contraseña123')//el segundo parametro es la contraseña en texto plano que te interesa encriptar

encrypt.genHash(valorEncriptacion,'contraseña123',function(hash){
console.log(hash)
//esa funcion retorna por defecto en hash la contraseña encriptada

});//el tercer paramtro es una funcion la cual devuelve el 'hash' es decir la contraseña encriptada es importante pedirlo en el callback de la funcion

//eso es todo con la funcion de encriptar conseña o genHash() :)


## Segunda funcion Desencriptar hash:

Esta funcion es muy sencilla de usar es importante dejar claro que primero se debe establecer.

El valor de encriptacion con la funcion genHash() es decir la funcion genHash() siempre debe ir declarada primero

var hash='ē285ĺ324ķ321Ĭ310ķ321ĺ324ĳ317Ĵ318Į312Ĵ318ľ328Ŀ329İ314';
encript.Desencriptar(hash)//el primer parametro que se necesita en esta funcion es obviamente la hash a desencriptar

//si el valor de encriptacion es distinto al el valor con el que esta encriptado el hash entonces des encriptara mal.

encrypt.Desencriptar(hash,function(des){
	console.log(des);//return des encriptacion
});//el segundo parametro es una funcion que retorna el hash desencriptado muy similar a la funcion anterior.

## Tercera funcion Comparar:

Esta funcion retorna un valor boolean si la contraseña candidata es la misma del hash entonces retornara true de lo contrario false.

var hash='ē285ĺ324ķ321Ĭ310ķ321ĺ324ĳ317Ĵ318Į312Ĵ318ľ328Ŀ329İ314';
encrypt.comparar(hash)//el primer parametro es el hash que deberia estar en tu DB store encriptado con la funcion genHash()

encrypt.comparar(hash,'ContraseñaCandidata')//el segundo parametro es la contraseña candidata con la que se intenta validar

encrypt.comparar(hash,'ContraseñaCandidata',function(res){
	console.log(res)
});//el terce parametro es una funcion que retorna la respueta en un valor boolean es decir si la contraseña candita es igual al hash retorna true de lo contrario no
//importante dejar claro que el valor de encriptacion de el hash que se quiere compara debe 
ser igual al que se definio en la funcion genHash() 


## Errores:

=======
"Antes de comparar necesita un valor de encriptacion":
==============
```
Es por que no haz definido el valor de encriptacion con la funcion 
genHash() si no sabes cual esta funcion:ve hacia la seccion como usar encrypt y busca 
la primera funcion de todas llamada "funcion Generar hash"
```
=======
"Antes de Desenciptar necesita un valor de encriptacion":
==============
Es por que no haz definido el valor de encriptacion con la funcion genHash() si no sabes cual esta funcion
ve hacia la seccion como usar encrypt y busca la primera funcion de todas llamada "funcion Generar hash"

=======
"Error introduce un valor mayor a cero":
==============
Este error se produce por que le pasaste como parametro a la funcion genHash()
un valor no valido como lo es 0 o inferior es decir valores negativo

Esta es la primero version de encript proximente estara en npm como modulo en produccion.

Autor :Esneyder Amin Palacios Mena 
Contacto:@sneyder_a 
Github:https://github.com/Maxtermax