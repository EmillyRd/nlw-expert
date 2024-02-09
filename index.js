const perguntas = [
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
      respostas: [
        "// Comentário",
        "/* Comentário */",
        "<!-- Comentário -->",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "variable myVar;",
        "v myVar;",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona um elemento pelo nome da classe",
        "Seleciona um elemento pelo seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara dois valores para igualdade, sem considerar o tipo",
        "Compara dois valores para igualdade, considerando o tipo",
        "Atribui um valor a uma variável",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'addEventListener()' faz?",
      respostas: [
        "Adiciona um evento a um elemento HTML",
        "Remove um evento de um elemento HTML",
        "Define um evento personalizado",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão 'typeof []' em JavaScript?",
      respostas: [
        "'array'",
        "'object'",
        "'undefined'",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'forEach()' em JavaScript?",
      respostas: [
        "Itera sobre os elementos de uma matriz",
        "Cria uma nova matriz",
        "Remove elementos de uma matriz",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
      respostas: [
        "function myFunction() {}",
        "myFunction: function() {}",
        "def myFunction() {}",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão '5 + '5'' em JavaScript?",
      respostas: [
        "'55'",
        "10",
        "'10'",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'push()' faz em uma matriz em JavaScript?",
      respostas: [
        "Remove o último elemento da matriz",
        "Adiciona um novo elemento ao final da matriz",
        "Inverte a ordem dos elementos na matriz",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const tenplate = document.querySelector('template')
  
  const corretas = new Set ()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size +  ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const iten of perguntas) {
    const quizIten = tenplate.content.cloneNode(true)
    quizIten.querySelector('h3').textContent = iten.pergunta
  
    for(let  resposta of iten.respostas) {
      const dt = quizIten.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(iten))
      dt.querySelector('input').value = iten.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => { 
      const estaCorreta = event.target.value == iten.correta
  
      corretas.delete(iten)
      if(estaCorreta) {
        corretas.add(iten)
       }
  
       mostrarTotal.textContent = corretas.size +  ' de ' + totalDePerguntas
      }
      
      quizIten.querySelector('dl').appendChild(dt)
    }
  
      quizIten.querySelector('dl dt').remove()
      quizIten.querySelector('dl dl').remove()
    
    //coloca a pergunta na tela
    quiz.appendChild(quizIten)

  }