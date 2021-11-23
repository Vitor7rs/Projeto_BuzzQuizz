let Objeto = {};

// --> InfoBasics
function ValidarInfoBasics(){
    const CriaçãoQuizTituloinput = document.querySelector(".criação-quizz-titulo").value;
    const CriaçãoQuantidadePerguntas = document.querySelector(".criação-quizz-quantidade-perguntas").value;
    const CriaçãoQuantidadeNiveis = document.querySelector(".criação-quizz-quantidade-niveis").value;
    const CriaçãoQuizUrlImg = document.querySelector(".criação-quizz-url-img").value;
    quantidadeniveis = CriaçãoQuantidadeNiveis;

    if(CriaçãoQuizTituloinput.length<20 || CriaçãoQuizTituloinput.length>65 
        || CriaçãoQuantidadePerguntas<3 || CriaçãoQuantidadeNiveis<2 || !ChecaImagem(CriaçãoQuizUrlImg)){
        alert("Por favor, preencha os dados corretamente.");
    } else {
        Objeto = {
            title: CriaçãoQuizTituloinput,
	        image: CriaçãoQuizUrlImg,
            questions: [],
            levels: []
        }
        const DesktopInfobasics = document.querySelector(".Desktop-8");
        DesktopInfobasics.classList.add("invisivel");
        const DesktopCriarPerguntas = document.querySelector(".Desktop-9");
        DesktopCriarPerguntas.classList.remove("invisivel");
        ColocarPerguntas(CriaçãoQuantidadePerguntas);
    }
}

// --> Criação das Perguntas
function ColocarPerguntas(CriaçãoQuantidadePerguntas){
    const conteiner = document.querySelector(".Desktop-9 .conteiner");
    for (let i=1; i<=CriaçãoQuantidadePerguntas; i++){
        conteiner.innerHTML += `
        <div class="PerguntaDOconteiner">
        <h3 class="Texto-Especifica-Input Texto-Definiçao">Pergunta ${i}</h3>
        <input type="text" placeholder="Texto da pergunta" />
        <input type="text" placeholder="Cor de fundo da pergunta" />

        <h3 class="Texto-Especifica-Input Texto-Definiçao">Resposta correta</h3>
        <input type="text" placeholder="Resposta correta" />
        <input type="text" placeholder="URL da imagem" />
        
        <h3 class="Texto-Especifica-Input Texto-Definiçao">Respostas Incorretas</h3>
        <input type="text" placeholder="Resposta incorreta 1" />
        <input type="text" placeholder="URL da imagem 1" />
        <input type="text" placeholder="Resposta incorreta 2" />
        <input type="text" placeholder="URL da imagem 2" />
        <input type="text" placeholder="Resposta incorreta 3" />
        <input type="text" placeholder="URL da imagem 3" />
        </div>`;
    }
}

function ValidarPerguntas(){
    const NumerodePerguntas = document.querySelectorAll(".PerguntaDOconteiner");
    let Nperguntasvalidadas = 0;

    for(let i=0; i<NumerodePerguntas.length; i++){
        let PerguntaIndice = NumerodePerguntas[i];

        if((PerguntaIndice.children[1].value).length<20 || !ChecarCOR(PerguntaIndice.children[2].value) || PerguntaIndice.children[2].value===""
         || PerguntaIndice.children[4].value==="" || PerguntaIndice.children[7].value==="" || 
        !ChecaImagem(PerguntaIndice.children[5].value) || !ChecaImagem(PerguntaIndice.children[8].value) || 
        (PerguntaIndice.children[9].value!=="" && !ChecaImagem(PerguntaIndice.children[10].value)) || 
        (PerguntaIndice.children[11].value!=="" && !ChecaImagem(PerguntaIndice.children[12].value))){
            Nperguntasvalidadas =0;
            alert("Por favor, preencha os dados corretamente.");
        } else {
            Nperguntasvalidadas +=1;

            Objeto.questions.push ({
                title: PerguntaIndice.children[1].value,
                color: PerguntaIndice.children[2].value,
                answers: []
            });
            Objeto.questions[i].answers.push({
                text: PerguntaIndice.children[4].value,
                image: PerguntaIndice.children[5].value,
                isCorrectAnswer: true
            },
            {
                text: PerguntaIndice.children[7].value,
                image: PerguntaIndice.children[8].value,
                isCorrectAnswer: false
            });
            if(PerguntaIndice.children[9].value!==""){
                Objeto.questions[i].answers.push({
                    text: PerguntaIndice.children[9].value,
                    image: PerguntaIndice.children[10].value,
                    isCorrectAnswer: false
                });
            }
            if(PerguntaIndice.children[11].value!==""){
                Objeto.questions[i].answers.push({
                    text: PerguntaIndice.children[11].value,
                    image: PerguntaIndice.children[12].value,
                    isCorrectAnswer: false
                });
            }
        }
    }
    if (Nperguntasvalidadas === NumerodePerguntas.length){

        const DesktopCPerguntas = document.querySelector(".Desktop-9");
        const DesktopCriarNiveis = document.querySelector(".Desktop-10");

        DesktopCPerguntas.classList.add("invisivel");
        DesktopCriarNiveis.classList.remove("invisivel");
        CriarNiveis(quantidadeniveis);
        Nperguntasvalidadas = 0;
    } else {
        Objeto.questions = [];
        Nperguntasvalidadas = 0;
    }
}

// --> Criação dos Níveis
function CriarNiveis(quantidadeniveis) {
    const conteiner2 = document.querySelector(".Desktop-10 .conteiner");
    for (let i=1; i<=quantidadeniveis; i++){
        conteiner2.innerHTML += `
        <div class="NivelDOconteiner">        
        <h3 class="Texto-Especifica-Input Texto-Definiçao">Nível ${i}</h3>
        <input type="text" placeholder="Título do nível" />
        <input type="text" class="PorcentagemdeAcerto" placeholder="% de acerto mínima" />
        <input type="text" placeholder="URL da imagem do nível" />
        <input type="text" placeholder="Descrição do nível" />
        </div>`;
    }
}

//ADICIONAR UMA DIV E BOTÃO EM CADA PERGUNTA, cuidado com linhas, PARA COLOCAR A CLASSE QUE MUDA NÃO O DISPLAY NONE, MAS A VIZIBILIDADE!!!!

function FinalizarQuizz(){
    const NumerodeNiveis = document.querySelectorAll(".NivelDOconteiner");
    const NiveisPorcentagemAcerto = document.querySelectorAll(".PorcentagemdeAcerto");
    let Niveisvalidados = 0;
    let checkPorcentagemAcerto=0;

    for(let i=0; i<NumerodeNiveis.length; i++){
        if (parseInt(NiveisPorcentagemAcerto[i].value) == 0){
            checkPorcentagemAcerto += 1;
        }
    }

    for(let i=0; i<NumerodeNiveis.length; i++){
        let NivelIndice = NumerodeNiveis[i];

        if((NivelIndice.children[1].value).length<10 || parseInt(NivelIndice.children[2].value)<0 || 
        parseInt(NivelIndice.children[2].value)>100 || !ChecaImagem(NivelIndice.children[3].value) || 
        (NivelIndice.children[4].value).length<30 || checkPorcentagemAcerto===0){
            alert("Por favor, preencha os dados corretamente.");
        } else {
            Niveisvalidados +=1;

            Objeto.levels.push ({
                title: NivelIndice.children[1].value,
                image: NivelIndice.children[3].value,
                text: NivelIndice.children[4].value,
                minValue: NivelIndice.children[2].value
            })
        }
    }
    if (Niveisvalidados === NumerodeNiveis.length){

        console.log(Objeto);

        const DesktopCNiveis = document.querySelector(".Desktop-10");
        const DesktopCTelafinal = document.querySelector(".Desktop-11");

        DesktopCNiveis.classList.add("invisivel");
        DesktopCTelafinal.classList.remove("invisivel");
        Niveisvalidados = 0;
        checkPorcentagemAcerto = 0;
        ArmazenarQuizz();
    } else {
        Objeto.levels =[];
        Niveisvalidados = 0;
    }
}

function ArmazenarQuizz() {
    let PromessaArmazenar = axios.post("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes", Objeto);
    PromessaArmazenar.then(TratarResposta);

    function TratarResposta (resposta){
        console.log(resposta.data);
        let TextoID =`${resposta.data.id}`;

        if (localStorage.getItem("lista")===null){
            let CriarUmArray = [];
            let lista = JSON.stringify(CriarUmArray);
            localStorage.setItem("lista", lista);
        }
        
        let ArraySerializado = localStorage.getItem("lista");
        let Array = JSON.parse(ArraySerializado);
        Array.push(TextoID);
        let ArrayASEguardar = JSON.stringify(Array);
        localStorage.setItem("lista", ArrayASEguardar);

        let ObjetoASEguardar = JSON.stringify(resposta.data);
        localStorage.setItem(TextoID, ObjetoASEguardar);
        CriarTelaFinalizacao(TextoID);
    }
}
function CriarTelaFinalizacao(TextoID) {
    const Objetoserializado = localStorage.getItem(TextoID);
    const QuizzFeitoAgora = JSON.parse(Objetoserializado);
    const conteiner3 = document.querySelector(".Desktop-11 .conteiner");

    conteiner3.innerHTML = `<div class="bloco-cada-quizz" onclick="abrirQuizz(${QuizzFeitoAgora.id}), AcessarQuizz(${QuizzFeitoAgora.id})"><img class="img-cada-quizz" src=${QuizzFeitoAgora.image}>
    <div class="titulo-cada-quizz">${QuizzFeitoAgora.title}</div></div>`
}
//O DE CIMA É UM BLOCO

//O DE BAIXO É UM BOTÃO
function AcessarQuizz(QuizdeAgoraID){
    const DesktopCTelafinal = document.querySelector(".Desktop-11");
    DesktopCTelafinal.classList.add("invisivel");

    abrirQuizz(QuizdeAgoraID);
}
function VoltarHome(){
    document.location.reload(true);
    
}
/* isso tava dentro do VoltarHome acima...
const DesktopCTelafinal = document.querySelector(".Desktop-11");
    const DesktopCtelaInicial = document.querySelector(".desktop-1");
    PedirQuizzes();
    DesktopCTelafinal.classList.add("invisivel");
    DesktopCtelaInicial.classList.remove("invisivel");
*/

// --> Funções de checagem e variáveis globais:
function ChecaImagem(testarurlimg) {
    return (testarurlimg.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
function ChecarCOR(strhexcolor) {
    return (strhexcolor.match(/^#[a-f0-9]{6}$/i) != null);
}
let quantidadeniveis;