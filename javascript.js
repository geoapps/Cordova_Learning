//Declarar una clase VERSION 1:

//constructor vacío
var miClase = {};

//definición de propiedades
Object.defineProperty(miClase, 'miPropiedad', {value: 'valor de miPropiedad', writable:true, enumerable:true, configurable:true});

//asignación
miClase.miPropiedad = 'valor asignado';

//definición de métodos
miClase.miMetodo = function () {

//desarrollo del método

}

//ejecución del método
miClase.miMetodo();

//************************************************


//Declarar una clase VERSION 2:

function miClase(valorIni) {
	this.miPropiedad1 = ValorIni;
	this.miPropiedad2 = "";
}

function miMetodo(par1) {
	//desarrollo del metodo
	this.miPropiedad2 = par1;
}