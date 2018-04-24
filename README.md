# MongoDB-JavaScript
JavaScripts para interactuar con MongoDB

Desde el MongoDB Shell debemos cargar el archivo:

load("GenerarDatosMongoDB.js")

Debe retornarnos true.

Ahora procedemos a llamar la función generarDatos()

Sintaxis: generarDatos(fila_inicial,fila_final,longitud_1,longitud_2)

fila_inicial: desde donde la fila a será creada
fila_final: hasta donde llegará la creación de filas
longitud_1: desde donde empieza la longitud de la cadena
longitud_2: hasta donde llega la longitud de la cadena

Queremos crear 500 registros, cuyas cadenas tengan una longitud de 20 caracteres.

generarDatos(1,500,1,20)

Si revisamos la colección, veremos los resultados:

db.datosejemplo.find().limit(5)</br>
{ "_id" : 1, "a" : 204, "b" : "r", "c" : "bq9pflyaoMZKaPJVwAyn" }
{ "_id" : 2, "a" : 329, "b" : "i", "c" : "8srilLHkBVth1NMJwWAx" }
{ "_id" : 3, "a" : 200, "b" : "B", "c" : "nAbMTbu7tUtF2oH4PEH0" }
{ "_id" : 4, "a" : 236, "b" : "v", "c" : "mTdnLotBrTm6MCECzAEN" }
{ "_id" : 5, "a" : 61, "b" : "H", "c" : "ZnWAwO10ws4Qi2NxVcie" }

Nota: Previamente a generar datos usted debe estar dentro de una base de datos.
