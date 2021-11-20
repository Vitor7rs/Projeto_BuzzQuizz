

            // --> InfoBasics
            function ValidarInfoBasics(){
                const CriaçãoQuizTituloinput = document.querySelector(".criação-quizz-titulo").value;
                const CriaçãoQuantidadePerguntas = document.querySelector(".criação-quizz-quantidade-perguntas").value;
                const CriaçãoQuantidadeNiveis = document.querySelector(".criação-quizz-quantidade-niveis").value;
                const CriaçãoQuizUrlImg = document.querySelector(".criação-quizz-url-img").value;
                console.log(CriaçãoQuantidadeNiveis + CriaçãoQuantidadePerguntas + CriaçãoQuizUrlImg + CriaçãoQuizTituloinput);
            //fazendo validação nos inputs:
                if(CriaçãoQuizTituloinput.length<20 || CriaçãoQuizTituloinput.length>65 || CriaçãoQuantidadePerguntas<3 || CriaçãoQuantidadeNiveis<2){
                    alert("Por favor, preencha os dados corretamente.");
                } else {
                    const DesktopInfobasics = document.querySelector(".Desktop-8");
                    DesktopInfobasics.classList.add("invisivel");
                    const DesktopCriarPerguntas = document.querySelector(".Desktop-9");
                    DesktopCriarPerguntas.classList.remove("invisivel");
                    ColocarPerguntas(CriaçãoQuantidadePerguntas);
            
                }
            }
                        // --> Criaçãodas Perguntas
            
            function ColocarPerguntas(CriaçãoQuantidadePerguntas){
                const conteinerDEPerguntas = document.querySelector(".Desktop-9 .conteiner");
                for (let i=1; i<=CriaçãoQuantidadePerguntas; i++){
                    conteinerDEPerguntas.innerHTML += `<div class="Texto-Especifica-Input Texto-Definiçao">Pergunta ${i}</div>
                    <input type="text" class="Criação-Pergunta-titulo${i}" placeholder="Texto da pergunta" />
                    <input type="text" class="Criação-Pergunta-img${i}" placeholder="Cor de fundo da pergunta" />
            
                    <div class="Texto-Especifica-Input Texto-Definiçao">Resposta correta</div>
                    <input type="text" class="Criação-Resposta${i}0" placeholder="Resposta correta" />
                    <input type="text" class="Criação-Resposta-img${i}0" placeholder="URL da imagem" />
                    
                    <div class="Texto-Especifica-Input Texto-Definiçao">Respostas Incorretas</div>
                    <input type="text" class="Criação-Resposta${i}1" placeholder="Resposta incorreta 1" />
                    <input type="text" class="Criação-Resposta-img${i}1" placeholder="URL da imagem 1" />
                    <input type="text" class="Criação-Resposta${i}2" placeholder="Resposta incorreta 2" />
                    <input type="text" class="Criação-Resposta-img${i}2" placeholder="URL da imagem 2" />
                    <input type="text" class="Criação-Resposta${i}3" placeholder="Resposta incorreta 3" />
                    <input type="text" class="Criação-Resposta-img${i}3" placeholder="URL da imagem 3" />`;
                }
            }