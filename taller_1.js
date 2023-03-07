const system = [
    {traditional:"90-100", Range:"12-14", Letter: "A", Rating:"4", note: "Sigue asi"},
    {traditional:"80-89", Range:"9-11", Letter: "B", Rating:"3", note: "Buen trabajo"},
    {traditional:"70-89", Range:"6-8", Letter: "C", Rating:"2", note: "Pudo ser mejor"},
    {traditional:"60-69", Range:"3-5", Letter: "D", Rating:"1", note: "Deficiente, Exfuerzate mas"},
    {traditional:"<60", Range:"1-2", Letter: "E", Rating:"0", note: "Mal, ponle voluntad"},
    {traditional:"0", Range:"0", Letter: "Z", Rating:"0", note: "Muy mal, Estudia mucho"},
]

console.table(system);

let otro= "si";

while(otro == "si"){
    let nota = Number(prompt("Diga su nota del 0.0 al 5.0 :"));
    
    if(nota >= 4.5 && nota <=5.0 ){
        console.log("El estandar para la calificaion ",nota," es :");
        console.log(system[0]);
    }else if(nota >= 4.0 && nota <=4.4 ){
        console.log("El estandar para la calificaion ",nota," es :");
        console.log(system[1]);
    }else if(nota >= 3.2 && nota <=3.9 ){
        console.log("El estandar para la calificaion ",nota," es :");
        console.log(system[2]);
    }else if(nota >= 2.5 && nota <=3.1 ){
        console.log("El estandar para la calificaion ",nota," es :");
        console.log(system[3]);
    }else if(nota >= 0.1 && nota <=2.4 ){
        console.log("El estandar para la calificaion ",nota," es :");
        console.log(system[4]);
    }else if(nota = 0.0 || nota == 0 ){
        console.log("El estandar para la calificaion 0 es :");
        console.log(system[5]);
    }else{
        console.log("Ingrese una nota entre el rango 0.0 y 5.0")
    }
    otro = prompt("Desea valdidar otra nota? (si o no):");
}

























/* const standar = {
    traditional:["90-100", "80-89","70-79","60-69","<+60","0"],
    Point :["12-14","9-11","6-8","3-5","1-2","0"],
    Letter:["A","B","C","D","E","F"],
    SBGRating:[4,3,2,1,0,0],
    Proficiency_level_with_Standard:["resive un viaje a dubay","Resive una Toyota","resive una moto","resive un cauderno","debe pagar un vargo","paga toda la carrera"],
};

console.table(standar);
let tipo = prompt("Introduce la forma de calificacion (traditional = 1 , Point = 2 , Letter = 3 y Rating= 4):");
parseInt(tipo,10);

switch(tipo){
    case "0":
        break;
    case "1":
        console.log("------Este es el mode de calificacion tradicional------");
        var cal = prompt("Digite la calificaion entre 0 a 100 : ");   
    if(cal >=90 && cal <=100 ){
        console.log("La nota es muy buena , el estudiante resive");
        console.log(standar.Proficiency_level_with_Standard[0]);
    }else if(cal >=80 && cal <=89){
        console.log("La nota es muy buena , el estudianre resive");
        console.log(standar.Proficiency_level_with_Standard[1]);
    }else if(cal >=70 && cal <=79){
        console.log("La nota es muy buena , el estudianre resive");
        console.log(standar.Proficiency_level_with_Standard[2]);
    }else if(cal >=60 && cal <=69){
        console.log("La nota es muy buena , el estudianre resive");
        console.log(standar.Proficiency_level_with_Standard[3]);
    }else if(cal < 60 ){
        console.log("La nota es muy buena , el estudianre resive");
        console.log(standar.Proficiency_level_with_Standard[4]);
    }else if(cal == 0){
        console.log("La nota es muy buena , el estudianre resive");
        console.log(standar.Proficiency_level_with_Standard[5]);
    }
    break;
    case "2":
        console.log("------Este es el mode de calificacion tradicional------");
        var cal = prompt("Digite la calificaion entre 0 a 100 : "); 
    break;   
    case "3":
        console.log("------Este es el mode de calificacion tradicional------");
        var cal = prompt("Digite la calificaion entre 0 a 100 : "); 
    break; 
    case "4":
        console.log("------Este es el mode de calificacion tradicional------");
        var cal = prompt("Digite la calificaion entre 0 a 100 : "); 
    break; 
    default:
    // Cualquier otro caso
    calificacion = " no valido ";
    break;

} 
 */
