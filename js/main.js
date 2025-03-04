//FUNCION QUE REALIZA UNA SUMA

function suma(){

        let N1 = 0;
        let N2 = 0;
        let suma = 0;
        alert ('ESTE PROGRAMA REALIZA UNA SUMA ENTRE DOS VALORES INGRESADOS POR EL USUARIO');

        N1 = parseInt (prompt( ' ingrese el primer valor a sumar'));
        N2 = parseInt(prompt( 'ingrese el segundo valor a sumar' ));

        suma = N1 + N2;


        alert('EL RESULTADO DE LA SUMA ES ' + suma)
    }

    function operacionesBasicas (){

        let N1 = 0;
        let N2 = 0;
        let suma = 0;    
        alert('ESTE PROGRAMA REALIZA UNA OPERACION BASICA  ENTRE DOS VALORES INGRESADOS POR EL USUARIO');

        N1 = parseInt(prompt(' ingrese el primer valor de la operacionesBasicas '));
        N2 = parseInt(prompt('ingrese el segundo valor de la operacionesBasicas '));

        suma = N1 + N2
        resta = N1 - N2
        multiplicacion = N1 * N2
        division = N1 / N2

        alert(' EL RESULTADO DE LA SUMA ES ' + suma + ' EL RESULTADO DE LA RESTA ES ' + resta + ' EL RESULTADO DE LA MULTIPLICACION ES ' + multiplicacion + ' EL RESULTADO DE LA DIVISION ES ' + division );

    }

    function cuadradodeunNumero (){
        let N1 = 0
        let cuadradodeunNumero = 0

        alert('ESTE PROGRAMA DETERMINA EL CUADRADO DE UN NUMERO');

        N1= parseInt(prompt(' ingrese el primer numero'));

        multiplicacion = N1 * N1
        alert('El RESULTADO DEL CUADRADO DE UN NUMERO ES ' + multiplicacion );

    }

    function conversiondeUnidades (){
        let metros = 0
        let centimetros = 0
        let pulgadas = 0

        alert('ESTE PROGRAMA DETERMINA LAS CONVERSIONES DE UNIDADES ' );

        metros= parseInt(prompt('ingrese primer valor de la conversiondeUnidades'));
        
        
        centimetros= metros * 100
        pulgadas= metros * 39.37 
        alert('EL RESULTADO DE LOS CENTIMETROS ES ' + centimetros + ' EL RESULTADO DE LAS PULGADAS ES ' + pulgadas );
    
    }

    function areadeunTriangulo(){
        let base = 0
        let area = 0
        let altura = 0

        alert(' ESTE PROGRAMA DETERMINA EL AREA DE UN TRIANGULO ');
        base= parseInt(prompt('ingrese el valor de la base '));
        altura=parseInt(prompt('ingrese el valor de la altura '));

        area= (base*altura) / 2 

        alert('El resultado del areadeunTriangulo es ' + area );
        
    }

    function inversiondeCapital(){
        let capital=0
        let años=0
        let ganancias=0
        
        alert('ESTE PROGRAMA DETERMINA LAS GANANCIAS QUE SE OBTENDRAN DESPUES DE LOS AÑOS, LUEGO DE HABER INVERTIDO EL CAPITAL ')

        años = parseInt(prompt(' ingrese el numero de años de inversiondeCapital '))
        capital= parseInt(prompt(' ingrese el monto de dinero de inversiondeCapital '))
        gananciatotal = capital + años * (12 * capital * 0.017)
        alert('SU GANANCIA TOTAL EN LOS AÑOS DESCRITOS ES ' + gananciatotal)
        
    }

    function numeroMayor(){
        let c1=0;
        let c2=0;
    

        alert(' ESTE PROGRAMA DETERMINA EL NUMERO MAYOR DE DOS NUMEROS ');
        c1=parseInt(prompt(' ingrese el primer valor a validar  '));
        c2=parseInt(prompt(' ingrese el segundo valor a validar '));

        if (c1 == c2){
            alert(' Los números ingresados son iguales = ' + c1);
        }
        else if(c1 > c2){
            alert(c1 + ' ES MAYOR QUE ' + c2);
        }
        else{
            alert(c2 + ' ES MAYOR QUE ' + c1);
        }
    }

    function numeroMenor(){
        let c1 , c2 , c3 = 0 
        c1 = parseInt(prompt(' Ingrese el primer valor a  validar '));
        c2 = parseInt(prompt(' Ingrese el segundo valor a  validar '));
        c3 = parseInt(prompt(' Ingrese el tercer valor a  validar '));
        
        if ((c1==c2) && (c1==c3) ){
            alert(' LOS TRES NÚMEROS INGRESADOS  SON IGUALES ');
        }
        else if ((c1<c2) && (c1<c3) ){
            alert(c1 + ' ES EL NÚMERO MENOR ');
        }
        else if ((c2<c1) && (c2<c3) ){
            alert(c2 + ' ES EL NÚMERO MENOR ');
        }
        else {
            alert(c3 + ' ES EL NÚMERO MENOR ');
        }
    }

    function paroImpar(){
        let A1 = 0
        alert ('ESTE PROGRAMA DETERMINA SI UN NÚMERO ES PAR O IMPAR');

        A1 = parseInt(prompt('Ingrese el valor de un número'));
        if (A1 % 2 === 0) {
            alert('EL NÚMERO ' + A1 + ' ES PAR ')
       }else {
        alert('EL NÚMERO ' + A1 + ' ES IMPAR ')
       } 
       
       }


    

    function promedioEstudiantes2 (){
        let Materia= "";
        let Estudiante= "";
        let nNotas = 0;
        let Calificaciones= 0;
        let sumaNotas= 0;
        let Promedio = 0;
        let iteracion= 0 

        Materia= prompt('Ingrese la materia que imparte');
        Estudiante = prompt('Ingrese el nombre de estudiante ');
        nNotas = parseFloat(prompt('Ingrese el numero de notas o calificaciones'));

        while (iteracion < nNotas ){

            Calificaciones = parseFloat(prompt('ingrese la calificacion '));
            sumaNotas = sumaNotas + Calificaciones;
            iteracion = iteracion + 1;

        }
        Promedio = sumaNotas/nNotas;
        if (Promedio>2.9) {
            alert(' EL ESTUDIANTE ' + Estudiante +  ' APROBO LA MATERIA DE ' + Materia + ' CON UN PROMEDIO DE ' + Promedio)

        }

        else{
            alert(' EL ESTUDIANTE ' + Estudiante + ' REPROBO LA MATERIA DE ' + Materia + ' CON UN PROMEDIO DE ' + Promedio)
        }  
    }


    function fruteria(){
        let nKilo = 0
        let ptk = 0
        
            alert('ESTE PROGRAMA DETERMINA EL DESCUENTO QUE OBTIENE EL CLIENTE POR KILO COMPRADO  ')
            
            nKilo = parseInt(prompt('INGRESE EL NÚMEROS DE KILOS A COMPRAR'))
            ptk = nKilo * 4500

            if (nKilo <=2){
                alert('EL CLIENTE NO TIENE DESCUENTO Y SU VALOR A PAGAR ES ' + ptk);
            }
            else if(nKilo <=5) {
                alert(' EL CLIENTE TIENE UN DESCUENTO DEL 10% Y SU VALOR A PAGAR ES ' + (nKilo * 4500 - (nKilo * 4500 * 0.1)))
            } 

            else if(nKilo <= 10 ){
                alert('EL CLIENTE TIENE UN DESCUENTO DEL 15% Y SU VALOR A PAGAR ES ' + ( nKilo * 4500-( nKilo * 4500 * 0.15)))
            }
            else{

                alert('EL CLIENTE TIENE UN DESCUENTO DEL 20% Y SU VALOR A PAGAR ES ' + (nKilo * 4500-( nKilo * 4500 * 0.2)))
            }
   }

    function horasExtras(){
       let ss = 0 
       let H = 0
        alert(' ESTE PROGRAMA SE DETERMINA EL SALARIO SEMANAL POR HORAS NORMALES Y EXTRAS TRABAJADAS ')

        H = parseInt(prompt('INGRESE EL NÚMERO DE HORAS TRABAJADAS '))

        if( H <= 40){
            ss = H * 10000
            alert('EL SALARIO SEMANAL SIN HORAS EXTRAS ES' + ss)
        }
        else{
            ss = (40 * 10000) + ( ( H - 40) * 20000)
            alert('EL SALARIO SEMANAL CON HORAS EXTRAS ES ' + ss)
        }

       

    }


    function sumaDiferenteaCero(){
        let suma = 0
        let n = 0
        alert(' ESTE PROGRAMA SE MUESTRA LA SUMA DE NÚMEROS DIFERENTES HASTA INGRESAR 0')

        n= parseInt(prompt('Ingrese un número para sumar '))

        while (n !== 0){
            suma=suma + n 
            n=parseInt(prompt('Ingrese siguiente número para sumar '))

        }
        alert('LA SUMA DE LOS NUMEROS INGRESADOS ES ' + suma);
    }

    function imprimirDe1a10(){
        let n = 1 
        alert('ESTE PROGRAMA SE DETERMINA UNA FUNCION QUE IMPRIMA LOS NÚMEROS DEL  1 AL 10')

        n= parseInt(prompt('Ingrese primer valor '))

        while (n<10){
            n = n + 1
            alert('EL RESULTADO DEL CONTEO ES ' + n)
        }

    }

    function imprimirDe100a0(){
        let n = 100
        alert('ESTE PROGRAMA DETERMINA UNA FUNCION QUE IMPRIMA LOS NÚMEROS DEL 100 AL 0 DE 10 EN 10 ')

         while(n>=0){
            
            alert('EL RESULTADO DEL CONTEO ES ' + n) 
             n= n - 10 
         }
}

function tabladeMultiplicar(){
    let n = 0
    let o = 1
    alert('ESTE PROGRAMA MOSTRARA  UNA TABLA DE MULTIPLICAR DEL 1 AL 10  ')

    n = parseInt(prompt('Ingrese el número a multiplicar '))

    while (n<=10){
        n = n + 1
        r = n * o
        if (n<=10)

        alert('EL RESULTADO DEL CONTEO PARA LA TABLA DE MULTIPLICAR ES ' +o+ '*' +n+ '=' +r)
    }

}

function cajeroElectronico(){
    let saldo= 0;
    let valorRetiro= 0;
    alert('ESTE PROGRAMA HARA ILUSIÓN A UN CAJERO ELECTRONICO')

    saldo=parseInt(prompt(' Ingrese el valor inicial de su saldo '));
    while (saldo>0)  {
        valorRetiro = parseInt(prompt(' Ingrese el valor que desea retirar,tu saldo es ' + saldo))

        if(valorRetiro>saldo){
            alert( ' saldo insuficiente, tu saldo es: ' + saldo )

        }
        
        else{
            saldo = saldo - valorRetiro;
        }
    }
    alert(' Sin fondos, ya retiro todo su dinero ');
}

function numeroHasta1000(){
    let n = 100
    let resultado= ""

    for (n = 100; n <= 1000; n +=100){
        resultado=resultado + n 
        if (n < 1000){
            resultado=resultado + ","

        }
    }
    alert('LOS NÚMEROS DE 100 EN 100 HASTA 1000 SON: ' + resultado)

    



}

