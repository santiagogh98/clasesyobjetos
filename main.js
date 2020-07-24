// //objeto literal

// let autoRojo ={
//     color:'Rojo',
//     velocidad:100,
//     ruedas:4,
//     motor:'V6',
//     arrancar(){
//         console.log('Run ruuun');
//     },
//     frena(){
//         console.log('IIIIi');
//     },
//     dobla(){
//         console.log('Estoy doblando');
//     }
// };
// // console.log(autoRojo);

// //CREACION CLASE


// class  Coche{
//     //CONSTRUCTOR NECESARIO
//     //SIRVE PARA CREAR O INICIALIZAR LAS PROPIEDADES DE LA CLASE
//     constructor(color,velocidad,ruedas,motor,marca){
//         this.color = color;
//         this.velocidad = velocidad;
//         this.ruedas = ruedas;
//         this.motor = motor;
//         this.vendido = false;
//         this.marca=marca || 'Honda';

//     };
//     arrancar(){
//         console.log('El moto'+ this.motor +'esta encendido');
//     };
//     frena(){
//         console.log('IIIIi');
//     };
//     dobla(){
//         console.log('Estoy doblando');
//     };
//     pintar(color){
//         this.color=color;

//     };
//     agregarLlanta(cantidadRuedas){
//         this.ruedas += cantidadRuedas;
//     }
// }
// let coche1 = new Coche('Morado',200,4,'v4','toyota');
// console.log(coche1);
// console.log(coche1.color);

// coche1.espejos =2;
// console.log(coche1);
// coche1.pintar('azul');
// console.log(coche1);
// coche1.agregarLlanta(1);
// console.log(coche1);
// coche1.arrancar();



// let coche2 = new Coche('Negro',150,4,'v6');
// console.log(coche2);
// coche2.arrancar();
// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
//      Generar el RFC a partir de el nombre, fechaNacimiento y sexo

class Persona{
    constructor(nombre,apellido,añoDeNacimiento,diaDeNacimiento,mesDeNacimiento,RFC,sexo,peso,altura){
        this.nombre=nombre;
        this.apellido=apellido;
        this.añoDeNacimiento=añoDeNacimiento;
        this.diaDeNacimiento=diaDeNacimiento;
        this.mesDeNacimiento=mesDeNacimiento;
        this.RFC=nombre[0]+apellido[0]+añoDeNacimiento+mesDeNacimiento+diaDeNacimiento+sexo[0];
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
    };
    calcularIMC(){
        let im=
       
    };
    esMayorDeEdad(){

    };


}
let persona1(nombre,apellido,añoDeNacimiento,diaDeNacimiento,mesDeNacimiento,RFC,sexo,peso,altura){
    
}

// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad, estado
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10


