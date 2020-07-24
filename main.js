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

// class Persona{
//     constructor(nombre,apellido,edad,añoDeNacimiento,diaDeNacimiento,mesDeNacimiento,sexo,peso,altura){
//         this.nombre=nombre;
//         this.apellido=apellido;
//         this.edad=edad;
//         this.añoDeNacimiento=añoDeNacimiento;
//         this.diaDeNacimiento=diaDeNacimiento;
//         this.mesDeNacimiento=mesDeNacimiento;
//         this.sexo=sexo;
//         this.peso=peso;
//         this.altura=altura;
//     };
//     calcularIMC(altura,peso){
//         let im= peso/(altura*altura);
//         console.log('Su IMC es '+im);
       
//     };
//     esMayorDeEdad(edad){
//         if (edad >18) {
//             console.log('Es mayor de edad');
            
//         }
//         else{
//             console.log('Es menor de edad');
//         }

//     };
//     RFC(nombre,apellido,añoDeNacimiento,diaDeNacimiento,mesDeNacimiento,sexo){
//         console.log(this.nombre[0]+this.apellido[0]+this.añoDeNacimiento+this.diaDeNacimiento+this.mesDeNacimiento+this.sexo[0]);
//     }


// }
// let persona1 = new Persona('Sergio','Huazo',19,1998,5,7,'Masculino',80,1.70);
// console.log(persona1);
// persona1.calcularIMC(persona1.altura,persona1.peso);
// persona1.esMayorDeEdad(persona1.edad);
// persona1.RFC(persona1.nombre,persona1.apellido,persona1.añoDeNacimiento,persona1.diaDeNacimiento,persona1.mesDeNacimiento,persona1.sexo);
// 2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
// 	 -Titular y cantidad, estado
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta {
    constructor(titular, cantidad, estado){
        this.titular=titular;
        this.cantidad=cantidad;
        this.estado=estado;
    }
    ingresar(ingreso){
        if ((ingreso+this.cantidad)>900) {
            console.log('No se puede tener mas de $900 en la cuenta');
            
        }
        else{
            console.log('Su saldo es '+(ingreso+this.cantidad));
            persona1.cantidad=(ingreso+this.cantidad);
        }
    };
    retirar(retiro){
        if((this.cantidad-retiro)<10) {
            console.log('No se puede tener menos de $10 en la cuenta');
            
        }
        else{
            console.log('Su saldo es '+(this.cantidad-retiro));
            persona1.cantidad=(this.cantidad-retiro);
        }
    }
};

persona1=new Cuenta('Sergio',500,'Activa');
console.log(persona1);
persona1.ingresar(500);
persona1.ingresar(400);
persona1.retirar(300);
persona1.ingresar(400);
persona1.ingresar(300);
persona1.retirar(800);







