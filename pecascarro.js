var ListaDePecas = ["Filtro do Ar", "Motor", "Amortecedor"]

if (ListaDePecas.length < 10) {
    // É possível cadastrar peças
    console.log("É possível cadastrar mais peças")
}
else {
    console.log("Não tem mais espaço nessa lista, impossível cadastrar");
}
let peso = 100;

if (peso < 100) {
    console.log("A peça deve pesar no minímo 100g")

} else {
    console.log("A peça possui peso adequado")

}
let nomePeca = "Disco de Freio";

// = -> Atribuição de valor, ler como (RECEBE)
// == -> Verificação se os valores são iguais, ler como (É IGUAL ?)
// === -> Verificação se o valor é igual e também o tipo do valor, verifica (VALOR E TIPO)
if (nomePeca.length > 3) {
    console.log("Nome da peça está adequado para o cadastro!")
} else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequando")
}
