// se a peça não  tiver peso maior que 100 não sera cadastrada 
// cada caixa só pode cadastrar 10 peças

    
var caixa =[];
var pecas=[
    {tipo:"Martelo",peso: 100},
    {tipo:"Chave de Fenda",peso: 20}, 
    {tipo:"Roda",peso:120}, 
    {tipo:"Rojao",peso:40}, 
    {tipo:"Ciclista",peso:10}, 
    {tipo:"joao",peso:50}
];


function add_pecas(tipo_,peso_){
    let obj = {tipo:tipo_, peso: peso_};
    pecas.push(obj);

}

function add_to_caixa(peca){
     if (caixa.length===10){
         return "Box overflowed";
     }
     else{
         
        if(peca.peso>100){
            return "Peso não é viavel";
        }
        caixa.push(peca)
     }
}






