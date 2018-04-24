/* Creado por: Luis Contreras */
/* Email: luis.contreras.do@gmail.com */

/* Función para generar cadenas aleatorias */

function Cadenarandom(longitud) { 

        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
        var cadena = ''; 
        var longitud_cadena = longitud;
        for (var i=0; i<longitud_cadena; i++) { 
                var rnum = Math.floor(Math.random() * chars.length); 
                cadena += chars.substring(rnum,rnum+1); 
        } 
        return cadena; 
} 

/* Función para generar un numero aleatorio entre el minímo y un máximo */

function aleatorio(min,max) {
 
	Aleatorio = (Math.floor(Math.random() * (max - min) + min )); 
	return Aleatorio;

}

/* Función para crear un coleccion llamada datosejemplo e insertar una serie de documentos de manera aleatoria */

function generarDatos(fila_inicial, filas, logintud_1, longitud_2 ) {

fila_final=fila_inicial+filas

	for(i=fila_inicial; i < fila_final; i++){
		db.datosejemplo.insert( { _id:i, a:aleatorio(0,fila_final), b:Cadenarandom(logintud_1), c:Cadenarandom(longitud_2) } )
	}
}


