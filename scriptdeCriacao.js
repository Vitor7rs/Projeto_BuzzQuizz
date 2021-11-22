let Objeto = {};
console.log(Objeto);
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
        console.log(Objeto);
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
            console.log("Perguntas mal validadas");
            alert("Por favor, preencha os dados corretamente.");
        } else {
            console.log("TACERTO");
            Nperguntasvalidadas +=1;

            Objeto.questions[i].answers.push ({
					text: PerguntaIndice.children[4].value,
					image: PerguntaIndice.children[5].value,
					isCorrectAnswer: true
				},
				{
					text: PerguntaIndice.children[7].value,
					image: PerguntaIndice.children[8].value,
					isCorrectAnswer: false
				})
            //ver como resolver pra pegar esse push direito e colocar dentro do filho answer do objeto questions
            //talvez pegar direto e adicionar dentro de questions o nome title, color e o array answers lá em cima.
            //tento ele lá em cima eu posso chamar ele aqui embaixo pra dar o push assim como fiz com o Answer.
            //só por dúvidas: o questions já é um array vazio lá emcima.

            //talvez dividir os passos e adicionar o title, color e ""answer array vazio"" aqui embaixo;
            //depois que já tiver eu coloco outra chamada pro objeto com o push no answer, 
            //assim é push no questions para colocar um answervazio, depois push no anwer para colocar as coisas dentro dele.
            //perfeito;
            
        }
    }
console.log(Objeto);

    /**Para adicionar objeto após validar:
     colocar uma variável let pra validar se houve erros dentro do for, igual o caso feito pra validar o checkPorcentagemnivel
     Com isso, se durante os if elses houver erros nada nessa pergunta deve ser adicionado dentro do objeto;
     Parece que vai ter algum erro nisso... pensar melhor...
     if(PerguntaIndice.children[9].value!==""){
                Objeto.questions.answers.push(
                    {
                        text: PerguntaIndice.children[9].value,
                        image: PerguntaIndice.children[10].value,
                        isCorrectAnswer: false
                    }
                );
            }
            if(PerguntaIndice.children[11].value!==""){
                Objeto.questions.answers.push(
                    {
                        text: PerguntaIndice.children[11].value,
                        image: PerguntaIndice.children[12].value,
                        isCorrectAnswer: false
                    }
                );
            }
     */

    if (Nperguntasvalidadas === NumerodePerguntas.length){

        const DesktopCPerguntas = document.querySelector(".Desktop-9");
        const DesktopCriarNiveis = document.querySelector(".Desktop-10");

        DesktopCPerguntas.classList.add("invisivel");
        DesktopCriarNiveis.classList.remove("invisivel");
        CriarNiveis(quantidadeniveis);
        Nperguntasvalidadas = 0;
    }
}

// --> Criação dos Níveis

function CriarNiveis(quantidadeniveis) {
    const conteiner2 = document.querySelector(".Desktop-10 .conteiner");
    // se der errado, ver as nomenclaturas, ou não, sei lá...
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

function FinalizarQuizz(){
    const NumerodeNiveis = document.querySelectorAll(".NivelDOconteiner");
    const NiveisPorcentagemAcerto = document.querySelectorAll(".PorcentagemdeAcerto");
    let Niveisvalidados = 0;
    let checkPorcentagemAcerto=0;

    console.log(NumerodeNiveis[0].children);
    console.log(NumerodeNiveis[0].children[1].value);
    console.log(typeof(NumerodeNiveis[0].children[1].value));
    console.log(parseInt(NumerodeNiveis[0].children[1].value));

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
            console.log("Niveis mal Validados");
            alert("Por favor, preencha os dados corretamente.");
        } else {
            console.log("TACERTO");
            Niveisvalidados +=1;
        }
    }

    if (Niveisvalidados === NumerodeNiveis.length){

        const DesktopCNiveis = document.querySelector(".Desktop-10");
        const DesktopCTelafinal = document.querySelector(".Desktop-11");

        DesktopCNiveis.classList.add("invisivel");
        DesktopCTelafinal.classList.remove("invisivel");
        Niveisvalidados = 0;
        checkPorcentagemAcerto = 0;
        TeladeFinalizacao();
    }
}


// --> Funções de checagem e variáveis globais:
function ChecaImagem(testarurlimg) {
    return (testarurlimg.match(/\.(jpeg|jpg|gif|png)$/) != null);
}
function ChecarCOR(strhexcolor) {
    return (strhexcolor.match(/^#[a-f0-9]{6}$/i) != null);
}
let quantidadeniveis;