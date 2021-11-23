let link = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
const PromessaTodosQuizzes = axios.get(link);
PromessaTodosQuizzes.then(TratarSucesso);

let ListaDeQuizzes; // lista com os quizzes

function TratarSucesso(resposta) {
    ColocarTodosQuizzes(resposta.data);
    ListaDeQuizzes = resposta.data;
     // salvando os quizzes na lista.
    console.log(ListaDeQuizzes);
}

// COLOCA A GALERA NA TELA E DEFINE OS IDs DE ENTRADA PARA O ONCLICK
function ColocarTodosQuizzes(Objetopai){
    const ComprimentoObjetosQuizzees = Object.keys(Objetopai).length;
    //acima tem o LENGTH do Objeto com o NUMERO TOTAL DE QUIZZES!!!

    const BlocodeQuizzes = document.querySelector(".caixa-de-quizzes");
    for(let i=0; i<ComprimentoObjetosQuizzees; i++){
        
        BlocodeQuizzes.innerHTML += `
        <div class="bloco-cada-quizz" onclick="abrirQuizz(${Objetopai[i].id})"><img class="img-cada-quizz" src=${Objetopai[i].image}>
        <div class="titulo-cada-quizz">${Objetopai[i].title}</div>
        </div>`;
    }
}


// EMBARALHADOR PAR IMPLEMENTAR MAIS TARDE //
// //embaralhando lista
// function embaralhador() { 
// 	return Math.random() - 0.5; 
// }
// cardsLista.sort(embaralhador);

function abrirCriacao(id){
    
}


// RODAR QUIZZ
function abrirQuizz(id){
    let linkQuizz = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/"+id;
    const quizzSelecionado = axios.get(linkQuizz);
    quizzSelecionado.then(colocarQuizzTela);
}

function colocarQuizzTela(objeto){
    const tela1 = document.querySelector(" .desktop-1");
    tela1.classList.add("invisivel");
    const telaQuizz = document.querySelector(" .quizz");
    telaQuizz.classList.remove("invisivel");
    console.log(objeto, "RespostaComID");

    let dadosQuizz = objeto.data;
    let questoes = dadosQuizz.questions;
    console.log(questoes, "questoes");

    // colocando na tela
    telaQuizz.innerHTML = `
    <div class="titulo-quizz">
            <h1 class="titulo-texto-quizz">${dadosQuizz.title}</h1>
    </div>`
    
    for (let i = 0; i < questoes.length; i++){
        let perguntas = dadosQuizz.questions[i];
        let opcoes = perguntas.answers;
        telaQuizz.innerHTML += 
                `
                <div class="pergunta-container">
                <div class="pergunta-titulo" style="background-color: ${perguntas.color}">${dadosQuizz.questions[i].title}</div>
                </div>
                `
                
                for (let j = 0; j  < opcoes.length; j++) {
                    const caixaPergunta= document.querySelectorAll(" .pergunta-container").item(i);
                    console.log(caixaPergunta, "caixa pergunta");
                    caixaPergunta.innerHTML +=
                `
                <div class="opcao-pergunta">
                    <img src="${opcoes[j].image}" alt="">
                    <h2>${opcoes[j].text}</h2>
                </div>
                `
                }
    }

}

