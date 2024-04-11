//Título: Esclarecendo a declaração da variável opcao fora do escopo do looping do-while.

//Proposta: dentro de uma função, escreva um laço de repetição do-while.
//Dúvida: Por que a escrita da função segundoTeste não garante um looping consistente e nem encerra o laço corretamente?
//Resposta: Porque a variável opcao foge do escopo do "while" quando declarada no "do". Ou seja, o "while" tenta buscar a variável opcao mas não encontra, porque ela existe apenas dentro do escopo "do", é isso que causa o problema no looping e no encerramento do laço.
//Dica: Use o debugger para constatar isso.

//Essa é a escrita correta do código para a função proposta
function primeiroTeste() {
    //opcao inicializa como undefined
    let opcao
    do {
        //opcao entra no laço de repetição e recebe "1"
        opcao = "1"

        switch(opcao) {
            case "1":
                console.log("Opção 1.")
                break

            case "2":
                console.log("Opção 2.")
                break

            case "3":
                console.log("Encerrando programa...")
                break

            default:
                console.log("Opção inválida")
                break
        }
        //encerramento do laço "do"
        //o looping será inifito porque opcao sempre será "1"
    }while (opcao !== "3")
}
primeiroTeste()

//Essa é a escrita errada do código para a função proposta
function segundoTeste() {
    //variável opcao não existe fora do escopo "do"
    do {
        let opcao = "1" //opcao inicializada como "1"

        switch(opcao) {
            case "1":
                console.log("Opção 1.")
                break

            case "2":
                console.log("Opção 2.")
                break

            case "3":
                console.log("Encerrando programa...")
                break

            default:
                console.log("Opção inválida")
                break
        }
        //encerramento do laço "do"
        //while tenta buscar a variável opcao mas não encontra -> fim do looping
    } while (opcao !== "3")
}
segundoTeste()