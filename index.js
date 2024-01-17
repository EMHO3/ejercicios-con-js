function ejercicio(a,b,operacion){
  switch(operacion){
    case "suma":
        return console.log(a+b);
        
    case "resta":
        return console.log(a-b);
        
    case "multiplicacion":
        return console.log(a*b);
        
    case "division":
        return console.log(a/b);
        
    default:
        console.error(`la operacion ${operacion} no es valida`);                
  }
}
ejercicio(12,5,"multiplicacion")



/* realizar una funcion que almacene en un array todos los
numeros pares desde a hasta b */
function pares(a , b){
    let num=[]
    for (let i = a; i < b; i++) {
        if(i%2===0)num.push(i);
    }
    console.log(num)
}
pares(0,60)




/* realizar una tabla de multiplicacion de un numero (a)
desde 0 hasta x,pero que no se muestre la multiplicacion de a *5 
*/

function tabla(a,x) {
    let result;
    for (let p = 0; p <= x; p++) {
        result=a*p;
        if(p!==5) console.log(`${a} X ${p} es: ${result}`)
    }
}
tabla(2,20);



/* hacer una funcion que filtre todos los numeros que sean multiplos de 3
de un arreglo que copntenga los numero del 1 al 100 
*/

function multiplos(){
    let nums=[];
    for (let t = 0; t < 100; t++) {
        nums.push(t);}
    nums.filter((el)=>{if(el % 3===0) console.log(el)});    
}
multiplos()



/*hacer una funcion que , dado como dato de entrada nuestra feche
de cumpleaños nos diga cuantos dias falta para el mismo 
*/

function cumpleaños() {
    let cumple= new Date("16 sep 2024");
    let hoy= new Date();
    let diasrestantes = Math.floor((cumple.getTime()-hoy.getTime())/(1000*60*60*24))
    console.log(`tu cumpleaños es ${cumple}y faltan: ${diasrestantes}`)   
}

cumpleaños();



/*Realizar una funcion que dado como dato de entrada una
 * oracion , nos devuelva un array que contenga todas las
 palabras usadas en la oracion
 */

function oraciones(text) {
    let palabras=text.split(" ");
    console.log(palabras)
}
oraciones("Programando con js")



/**Crear 5 objetos y alamacenar en un array,hacer una funcion
 * para filtrar a todos las personas que tengan el nombr emiry
 * que esa misma funcion tambien muestre cuales son mayores de edad
 */

function filtrar() {
    const personas=[
        {
            nombre:"Emir",
            apellido:"huaroc",
            edad:20
        },
        {
            nombre:"Emir",
            apellido:"juarez",
            edad:90
        },
        {
            nombre:"brenda",
            apellido:"quispe",
            edad:"10"
        },
        {
            nombre:"Emir",
            apellido:"lupez",
            edad:17
        },
        {
            nombre:"rosa",
            apellido:"florez",
            edad:60
        },                            
    ];
    personas.filter((el) =>{if(el.nombre==="Emir")console.log(`${el.nombre} 
    ${el.apellido}`)
    });
    personas.filter((el) =>{if(el.edad>=18)console.log(`${el.edad}`)}) 
}

filtrar()

/**ealizar una función que nos diga la fecha de apertura de un examen de la universidad, 
 * es decir, la cantidad de horas restantes que faltan para que abra dicho examen. 
 * En caso de que el examen haya cerrado que nos retorne un mensaje que diga “El examen ya cerró”.
*/

function fechaExamen(open="",close="") {
    if(open==="" || close==="")return console.error("faltan parametor")
    else{
        let hoy=new Date(),
            testOpen=new Date(open),
            testClose=new Date(close);
        let resulTimeOpen=Math.floor((testClose.getTime()-testOpen.getTime())/(1000*60))
        let resulTimeRest=Math.floor((testOpen.getTime()- hoy.getTime())/(1000*60)) 
        
        if(testClose.getTime()<hoy.getTime())return console.log("El examen ya cerro");
        else{
            if(resulTimeRest>0)console.log(`Faltan ${resulTimeRest} minutos para que el examen abra`);
            else{
                console.log("El examen esta abierto")
                console.log(`El examen durara abierto ${resulTimeOpen} minutos.`)
            }
        }
    
    }
}

fechaExamen("Wed Dec 14 2020 16:00:00","Wed Dec 14 2020 19:00:00")


/*En un arreglo tenemos varios valores numéricos, debemos 
de hacer una función que nos elimine aquellos valores que 
se encuentran repetidos.*/

function ejerciciofinal(){
    const numeros=[1,2,3,4,5,6,4,2,1]
    let result=numeros.filter((item,index)=>{
        return numeros.indexOf(item)===index
    });
    console.log(`El array es: ${numeros}`)
    console.log(`Eliminando los repetidos ${result}`)
}

ejerciciofinal()