let link = "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
const PromessaTodosQuizzes = axios.get(link);
PromessaTodosQuizzes.then(TratarSucesso);

let ListaDeQuizzes; // lista com os quizzes

function TratarSucesso(resposta) {
    ColocarTodosQuizzes(resposta.data);
    ListaDeQuizzes = resposta.data;
}

// COLOCA A GALERA NA TELA E DEFINE OS IDs DE ENTRADA PARA O ONCLICK
function ColocarTodosQuizzes(Objetopai){
    const ComprimentoObjetosQuizzees = Object.keys(Objetopai).length;
    //acima tem o LENGTH do Objeto com o NUMERO TOTAL DE QUIZZES!!!

    const BlocodeQuizzes = document.querySelector(".caixa-de-quizzes");
    for(let i=0; i<ComprimentoObjetosQuizzees; i++){
        
        BlocodeQuizzes.innerHTML += `
        <div class="bloco-cada-quizz" style =" background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%), url(${Objetopai[i].image})" onclick="abrirQuizz(${Objetopai[i].id})" data-identifier="quizz-card">
       
        <div class="titulo-cada-quizz">${Objetopai[i].title}</div>
        </div>`;
    }
}


// EMBARALHADOR PAR IMPLEMENTAR MAIS TARDE //
// //embaralhando lista
// function embaralhador() { 
// 	return Math.random() - 0.5; 
// }
// opcoes.sort(embaralhador);

function abrirCriacao(){
    const tela1 = document.querySelector(" .desktop-1");
    tela1.classList.add("invisivel");
    const telaCriacao = document.querySelector(" .Desktop-8");
    telaCriacao.classList.remove("invisivel");
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
    <div class="titulo-quizz" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.57), rgba(0, 0, 0, 0.57)), 
    url(${dadosQuizz.image}) no-repeat; background-size: cover">
            <h1 class="titulo-texto-quizz">${dadosQuizz.title}</h1>
    </div>`
    
    const fundoQuizz = document.querySelector(` .titulo-quizz`);
    
    for (let i = 0; i < questoes.length; i++){
        let perguntas = dadosQuizz.questions[i];
        let opcoes = perguntas.answers;
        totalPerguntas++;
        telaQuizz.innerHTML += 
                `
                <div class="pergunta-container pergunta${i}">
                <div class="pergunta-titulo" style="background-color: ${perguntas.color}">${dadosQuizz.questions[i].title}</div>
                </div>
                `
                
        for (let j = 0; j  < opcoes.length; j++) {
            const caixaPergunta= document.querySelectorAll(" .pergunta-container").item(i);
            caixaPergunta.innerHTML +=    
            `
            <div class="opcao-pergunta ${opcoes[j].isCorrectAnswer}" onclick="selecionarOpcao(this)">
                <img src="${opcoes[j].image}" alt="">
                <h2>${opcoes[j].text}</h2>
            </div>
             `
        }              
    }
}


//JOGANDO QUIZZ
let porcentagemAcerto=0;
let perguntasCertas=0;
let totalPerguntas=0;
function selecionarOpcao(opcaoClicada){
        let i = 0;
        let opcao=opcaoClicada;
        if(opcao.classList.contains("true")){
            opcao.classList.add("opcao-certa")
            perguntasCertas++
            const naoSelecionada = document.querySelector(` .pergunta${i} div`);
            if(naoSelecionada.classList.contains("true")==false){
                naoSelecionada.classList.add("opcao-cinza");
            }

        }
    
}


function postarResultado(){
    innerHTML+= 
    `
    <div class="resultado-quizz">
        <div class="resultado-titulo">${porcentagemAcerto}% de acerto. </div>
    
        <div class="resultado-div">
            <img src="https://picsum.photos/200/300" alt="">
            <h2>Alguma coisa sobre o resultado</h3>
        </div>

    </div>

    <div class="botao-reiniciar">


    `
    
}