//Declarar una clase VERSION 1:

//constructor vac�o
var miClase = {};

//definici�n de propiedades
Object.defineProperty(miClase, 'miPropiedad', {value: 'valor de miPropiedad', writable:true, enumerable:true, configurable:true});

//asignaci�n
miClase.miPropiedad = 'valor asignado';

//definici�n de m�todos
miClase.miMetodo = function () {

//desarrollo del m�todo

}

//ejecuci�n del m�todo
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