var participantes =["Gael Beltrano"," Josias Felciano", "Glaucio Tinnoco"];
var eventos = [
  {palestrante:"Josias Goel",
  dia:2,mes:3,ano:2021,participantes:participantes
  }
];


function cadastra_evento(dia,mes,ano,palestrante){
  let date = new Date(); 

  if (ano> date.getFullYear() || ano< date.getFullYear()){
    console.log("A")
    return "ERROR"
  }
  else if (mes< date.getMonth() ){
    console.log("A")
    return "ERROR"
  }
  else if (dia < date.getDay() ||dia >31){
    console.log("A")
    return "ERROR"
  }
  let evento_cadastrar =   {palestrante:palestrante,
  dia:dia,mes:mes,ano:ano};
  

  eventos.push(evento_cadastrar);
  
}

function cadastrar_participante(nome, event_index,idade){
 

   if(eventos[event_index].participantes.length>100){
     return "error"
   }
   if (idade<18){ 
     return "error";
   }

   eventos[event_index].participantes.push(nome);

}


cadastra_evento(1,4,2022,"José Caxias"); 
cadastrar_participante("Jose",0,18);

console.log(eventos)


