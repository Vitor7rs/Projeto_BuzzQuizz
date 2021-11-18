const PromessaTodosQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
PromessaTodosQuizzes.then(TratarSucesso);

let ListaDeQuizzes; // lista com os quizzes

function TratarSucesso(resposta) {
    console.log(resposta.data,"resposta");
    ColocarTodosQuizzes(resposta.data);
    ListaDeQuizzes = resposta.data; // salvando os quizzes na lista.
    
}

function ColocarTodosQuizzes(Objetopai){
    const ComprimentoObjetosQuizzees = Object.keys(Objetopai).length;
    //acima tem o LENGTH do Objeto com o NUMERO TOTAL DE QUIZZES!!!

    const BlocodeQuizzes = document.querySelector(".Todos-Quizz");

    for(let i=0; i<ComprimentoObjetosQuizzees; i++){
        BlocodeQuizzes.innerHTML += `
        <div class="bloco-cada-quizz"><img class="img-cada-quizz" src=${Objetopai[i].image}></div><div class="titulo-cada-quizz">${Objetopai[i].title}</div>`;
    }
}