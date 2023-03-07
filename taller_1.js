const standar = {
    traditional:["90-100", "80-89","70-79","60-69","<+60","0"],
    Point :["12-14","9-11","6-8","3-5","1-2","0"],
    Letter:["A","B","C","D","E","F"],
    SBGRating:[4,3,2,1,0,0],
    Proficiency_level_with_Standard:["resive un viaje a dubay","Resive una Toyota","resive una moto","resive un cauderno","debe pagar un vargo","paga toda la carrera"],
};

console.table(standar);
let tipo=0;
switch(tipo){
    case 0:
        tipo = prompt("Introduce la forma de calificacion (traditional = 1 , Point = 2 , Letter = 3 y Rating= 4):");
        console.log(tipo);

        break

    case 1:
        console.log("------Este es el mode de calificacion tradicional------");
        let cal = prompt("Digite la calificaion entre 0 a 100 : ");   
    if(cal >=90 && cal <=100 ){
        console.log("La nota es muy buena , el estudianre resive");
        console.log(standar.Proficiency_level_with_Standard(1));
    }else if(cal >=80 && cal <=89){

    }else if(cal >=70 && cal <=100){

    }else if(cal >=90 && cal <=100){

    }else if(cal >=90 && cal <=100){

    }
    break;
    case 2:

    break;   

    default:
    // Cualquier otro caso
    calificacion = " no valido ";
    break;

}