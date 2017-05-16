# ¿Que es enigma-code?

Es un sencillo modulo hecho en nodejs que sirve para encriptar contraseñas con varias funciones para comparar, desencriptar etc.

## Instalacion

```sh 
 npm install enigma-code
```

# ¿Ejemplo?
 Claro puedes correr un pequeño ejemplo y ver la magia este modulo para hacer esto:

```sh
 npm run test
```

# ¿Como usar?
Es bastante facil ya que no son muchas las funciones que tiene enigma-code puntualmente funciona de la siguiente forma:

## Generar hash:

```javascript
const enigma = require('enigma-code');//llama el modulo 
const valorEncriptacion = 10;//puede ser cualquier numero
let key = 'millave';//No debe tener espacios

enigma.genHash(valorEncriptacion,key,'contraseña123',function(err,hash){
	if(err) return console.log(err);//Solo se ejecutara si existe un error
	console.log(hash)//2dl3lkwkj13kj12k12kj321kj
//esa funcion retorna por defecto en hash la contraseña encriptada
});

//que le pases como parametro es de tu eleccion en valor que le pases

/*El segundo parametro es una llave o key esto es una vale de seguridad 
con el cual todas tus contraseñas seran encriptadas
sin esto sera imposible desencriptar con exito la longitud de esta llave
debe ser inferior a 10 caractes, pero si quieres tambien puedes encriptar
esta llave.
*/

/*
 el cuarto paramtro es una funcion que tiene con parametros un error en caso tal de
 que ocurriera un error y el segundo parametro que devuelve es el 'hash' 
 es decir la contraseña encriptada es importante pedirlo en el callback de la funcion
*/
//eso es todo con la funcion de encriptar contraseña o genHash() :)
```

Es importante dejar en claro que cada contraseña que encriptes
con el valor que tenga tu key solo podra ser desencriptada con 
exito si el key es el mismo con el que fue encriptada la contraseña.

Puedes aprender mas sobre expreciones regulares aqui: http://regexr.com/


## Desencriptar
Esta funcion es muy sencilla de usar es importante dejar claro que primero se debe establecer.

El valor de encriptacion con la funcion genHash() 
es decir la funcion genHash() siempre debe ir declarada primero


```javascript


let hash ='ē285ĺ324ķ321Ĭ310ķ321ĺ324ĳ317Ĵ318Į312Ĵ318ľ328Ŀ329İ314';

enigma.Desencriptar(hash)//el primer parametro que se necesita
//en esta funcion es obviamente la hash a desencriptar

//si el valor de encriptacion es distinto al el valor con el que esta encriptado 
//el hash entonces desencriptara mal.

enigma.Desencriptar(hash,function(err,des){
	if(err) return console.log(err);
	console.log(des);//return desencriptacion
});//el segundo parametro es una funcion que tiene con parametros un error en
 //caso tal de que ocurriera un error y el segundo parametro que devuelve es 'des'
// es decir la contraseña desencriptada

/*
	importante dejar claro que el valor de encriptacion de el hash
	con el que se quiere  debe ser igual al que se definio en la funcion
	genHash() y tambien el valor de el 
	key  de lo contrario no podra desencriptar con exito
	muy similar a la funcion anterior.
*/ 

```

## Comparar:
Esta funcion retorna un valor boolean si la contraseña candidata 
es la misma del hash entonces retornara true de lo contrario false.

```javascript

var hash='ē285ĺ324ķ321Ĭ310ķ321ĺ324ĳ317Ĵ318Į312Ĵ318ľ328Ŀ329İ314';

enigma.comparar(hash)//el primer parametro es el hash que deberia estar en tu
//DB store encriptado con la funcion genHash()

enigma.comparar(hash,'ContraseñaCandidata')//el segundo parametro es la contraseña candidata con la que se intenta validar

enigma.comparar(hash,'ContraseñaCandidata',function(err,res){
	if(err) return console.log(err);
	console.log(res)//false
});//el tercer parametro es una funcion que tiene con parametros un error en
 //caso tal de que ocurriera un error y el segundo parametro que devuelve es 'res'
// es decir la respuesta de si la contraseña candidata es igual a el hash o no 
//'res' es un valor boolean que retorna true o false



/*
Importante dejar claro que el valor de encriptacion de el hash que se quiere compara 
debe ser igual al que se definio en la funcion genHash() y tambien el valor de el 
key  de lo contrario no podra comparar se con exito
*/
```


# Errores:

## Antes de comparar necesita un valor de encriptacion

Es por que no haz definido el valor de encriptacion con la funcion 
genHash() si no sabes cual esta funcion:ve hacia la seccion como usar enigma y busca 
la primera funcion de todas llamada "funcion Generar hash"


## Antes de Desenciptar necesita un valor de encriptacion

Es por que no haz definido el valor de encriptacion con la funcion genHash() 
si no sabes cual esta funcion

ve hacia la seccion como usar enigma y busca la funcion principal
llamada "funcion Generar hash".


## Error introduce un valor mayor a cero

Este error se produce por que le pasaste como parametro a la funcion genHash()
un valor no valido como lo es 0 o inferior es decir valores negativo


## Error introduce un valor mayor a cero

Este error se produce por que le pasaste como parametro a la funcion genHash()
un valor no valido como lo es 0 o inferior es decir valores negativo

## Error Introduce una contraseña valida

Este error se produce por que en la funcion genHash() esta especificado que el 
parametro de la contraseña debe ser de minimo 10 caracteres y maximo 15 y sin espacios
para solucionar lo solo tienes que cumplir las reglas anterios mente mencionadas
puedes usar una exprecion regular tambien te recomiendo que sigas este tutorial 
si no conoces bien las expreciones regulares: http://webintenta.com/validacion-con-expresiones-regulares-y-javascript.html 

## Contraseña erronea

Este error se produce cuando intentas desencriptar o compara una contraseña 
con el key o llave incorrecto con esto me refiero a que el key con el cual 
fue encriptada la contraseña originalmente es distinto al que definiste en la funcion genHash(), para solucionarlo debes introducir el key correcto.



## Contacto:
- esnene02@gmail.com 
- https://twitter.com/Sneyder_A 
