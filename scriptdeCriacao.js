            // --> InfoBasics
function ChecaImagem(testarurlimg) {
    return(testarurlimg.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
function ValidarInfoBasics(){
    const CriaçãoQuizTituloinput = document.querySelector(".criação-quizz-titulo").value;
    const CriaçãoQuantidadePerguntas = document.querySelector(".criação-quizz-quantidade-perguntas").value;
    const CriaçãoQuantidadeNiveis = document.querySelector(".criação-quizz-quantidade-niveis").value;
    const CriaçãoQuizUrlImg = document.querySelector(".criação-quizz-url-img").value;

    if(CriaçãoQuizTituloinput.length<20 || CriaçãoQuizTituloinput.length>65 
        || CriaçãoQuantidadePerguntas<3 || CriaçãoQuantidadeNiveis<2 || !ChecaImagem(CriaçãoQuizUrlImg)){
        alert("Por favor, preencha os dados corretamente.");
    } else {
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
    console.log(NumerodePerguntas[0].children);
    console.log(NumerodePerguntas[0].children[1].value);

//colocar IFs dentro do for para verificação;
//dar o aviso SE caso de erro;
//ELSE sucesso: "enviar VALUE para o objeto";

    for(let i=0; i<NumerodePerguntas.length; i++){
        let PerguntaIndice = NumerodePerguntas[i];

        //lembrar de colocar a COR HEX no IF dps...
        if((PerguntaIndice.children[1].value).length<5 || PerguntaIndice.children[4].value==="" || PerguntaIndice.children[7].value===""
        || !ChecaImagem(PerguntaIndice.children[2].value) || !ChecaImagem(PerguntaIndice.children[5].value) || !ChecaImagem(PerguntaIndice.children[8].value)){
            console.log("ERRADO");
        } else {
            console.log("TACERTO");
        }

    }
    /**
    
    const pergunta1 = document.querySelector(".Criação-Pergunta-titulo1").value;
    const resposta10 = document.querySelector(".Criação-Resposta10").value;
    const resposta11 = document.querySelector(".Criação-Resposta11").value;
    const resposta12 = document.querySelector(".Criação-Resposta12").value;
    const img12 = document.querySelector(".Criação-Resposta-img12").value;
    const resposta13 = document.querySelector(".Criação-Resposta13").value;
    
    if(pergunta1<20 || resposta10==="" || resposta11===""){
        alert("Por favor, preencha os dados corretamente.");
    }
    const pergunta2 = document.querySelector(".Criação-Pergunta-titulo2").value;
    const resposta20 = document.querySelector(".Criação-Resposta20").value;
    const resposta21 = document.querySelector(".Criação-Resposta21").value;
    const resposta22 = document.querySelector(".Criação-Resposta22").value;
    const resposta23 = document.querySelector(".Criação-Resposta23").value;
    if(pergunta2<20 || resposta20==="" || resposta21===""){
        alert("Por favor, preencha os dados corretamente.");
    }
    const pergunta3 = document.querySelector(".Criação-Pergunta-titulo3").value;
    const resposta30 = document.querySelector(".Criação-Resposta30").value;
    const resposta31 = document.querySelector(".Criação-Resposta31").value;
    const resposta32 = document.querySelector(".Criação-Resposta32").value;
    const resposta33 = document.querySelector(".Criação-Resposta33").value;
    if(pergunta3<20 || resposta30==="" || resposta31===""){
        alert("Por favor, preencha os dados corretamente.");
    }
    */
}