//exercicio 1 


function contar_alunos(quantidade){

    if (typeof(quantidade)!='number'){
        return console.error("Precisa ser um número");
    }

    for (let i = 0; i<=quantidade;i++){
        if (i ==0){
            console.log("Número atual é zero");
        } 
        i%2==0? console.log(`${i} O número atual é par`) : console.log(`${i} O número atual é impar`); 

            
    }
}

contar_alunos(10)


//exercicio 2 

var nome = ["Carlos", "Marcos", "Malaquias", "Ciclano"];

function nome_da_pessoa (lista){
    for (let nome of lista){
        console.log(`Esta pessoa se chama ${nome}`);
    }

}

nome_da_pessoa(nome)

