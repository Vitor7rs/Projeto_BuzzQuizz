if (localStorage.getItem("lista")===null){
    let conteinerteladeQuizzes = document.querySelector("nav .quizz-usuario");
    conteinerteladeQuizzes.classList.add("invisivel");

    //retirar o de cima e dar um innerHTML na tela só com botão.    FEITO!!!
} else if (localStorage.getItem("lista")!==null){
    let conteinerteladeQuizzes = document.querySelector("nav .SeusQuizz");
    conteinerteladeQuizzes.classList.add("invisivel");
   
    ColocarSeusQuizzesNaTela();
}

function ColocarSeusQuizzesNaTela (){
    let ArrayTodasAsChavesSerializado = localStorage.getItem("lista");
    let ArraydeChaves = JSON.parse(ArrayTodasAsChavesSerializado);
    //peguei array com nomes... ok...

    for (let i=0; i<ArraydeChaves.length; i++) {

    let SeuQUizzserializado = localStorage.getItem(ArraydeChaves[i]);
    let SeuQuizzASerColocadoAgora = JSON.parse(SeuQUizzserializado);

    let conteinerteladeQuizzes = document.querySelector("nav .caixa-de-quizzes-do-usuario");

    //na tela de todos os SEUS quizzes, será diferente, para adicionar, deve-se colocar cada um dos nomes;

    conteinerteladeQuizzes.innerHTML += `
    <div class="cada-quizz-usuario" style ="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 64.58%, #000000 100%),
    url('${SeuQuizzASerColocadoAgora.image}')" onclick="abrirQuizz(${SeuQuizzASerColocadoAgora.id})" data-identifier="quizz-card">
    <div class="titulo-cada-quizz">${SeuQuizzASerColocadoAgora.title}</div>
    </div>`
    }

}