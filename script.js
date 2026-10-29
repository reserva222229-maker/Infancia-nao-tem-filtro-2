const questions = [import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaX-wYn2x1iEyiO9oJF2jovrNEu41ICpI",
  authDomain: "infancia-nao-tem-filtro.firebaseapp.com",
  projectId: "infancia-nao-tem-filtro",
  storageBucket: "infancia-nao-tem-filtro.firebasestorage.app",
  messagingSenderId: "734683602640",
  appId: "1:734683602640:web:127a7a19589eaa7efa48d5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  {
    category: "Entendendo o tema",
    question: "O que significa adultização infantil?",
    answers: [
      "Quando a criança aprende uma tarefa nova adequada à idade.",
      "Quando se espera ou incentiva que a criança assuma comportamentos, aparências ou responsabilidades típicas do mundo adulto antes do tempo.",
      "Quando a criança usa a internet para estudar.",
      "Quando uma criança participa de uma atividade esportiva."
    ],
    correct: 1,
    explanation: "A adultização acontece quando expectativas, comportamentos ou padrões do universo adulto são antecipados para a infância. O contexto importa: aprender coisas novas, por si só, não significa adultização."
  },
  {
    category: "Redes sociais",
    question: "Uma criança começa a imitar todos os desafios e jeitos de falar que vê em vídeos populares. O que isso mostra?",
    answers: [
      "Que a internet nunca influencia o comportamento.",
      "Que toda imitação é necessariamente perigosa.",
      "Que conteúdos e criadores podem influenciar gostos e comportamentos, por isso é importante conversar e acompanhar o uso.",
      "Que a criança já entende todas as consequências do que publica."
    ],
    correct: 2,
    explanation: "Crianças aprendem e experimentam comportamentos a partir do que observam. A influência não é automática nem sempre negativa, mas merece acompanhamento adequado à idade."
  },
  {
    category: "Curtidas e aparência",
    question: "Uma personagem fictícia de 10 anos passa a achar que só fica bonita usando maquiagem e roupas de adulto porque recebe elogios e curtidas. Qual é um risco dessa situação?",
    answers: [
      "Ela pode associar seu valor pessoal à aparência e à aprovação online.",
      "Ela vai necessariamente se tornar influenciadora.",
      "Curtidas garantem autoestima saudável.",
      "Não existe relação possível entre comentários e autoimagem."
    ],
    correct: 0,
    explanation: "A busca por aprovação e padrões de beleza irreais pode afetar a forma como a criança percebe a si mesma. Conversas acolhedoras ajudam a valorizar outras qualidades além da aparência."
  },
  {
    category: "Imagem e privacidade",
    question: "Uma família quer publicar um vídeo engraçado de uma criança fazendo algo constrangedor. O que vale considerar antes de postar?",
    answers: [
      "Se o vídeo vai render muitas visualizações, isso é suficiente.",
      "Se o perfil é privado, não existe nenhum risco.",
      "Se outras famílias fazem isso, está sempre tudo bem.",
      "A privacidade, a dignidade da criança, o contexto e os possíveis efeitos futuros da publicação."
    ],
    correct: 3,
    explanation: "Uma publicação pode ser copiada, compartilhada e permanecer acessível. Nem toda exposição é automaticamente criminosa, mas é importante proteger a imagem, a dignidade e a privacidade da criança."
  },
  {
    category: "Respeito e segurança",
    question: "Qual situação merece atenção especial por poder contribuir para a sexualização precoce?",
    answers: [
      "Uma criança brinca de inventar personagens de fantasia.",
      "Um adulto pressiona uma criança a posar ou dançar de forma sensual para conseguir engajamento.",
      "Uma criança aprende uma coreografia infantil adequada à idade.",
      "Uma turma faz um desenho coletivo."
    ],
    correct: 1,
    explanation: "Pressionar uma criança a reproduzir poses ou comportamentos sexualizados para atrair público é um sinal de alerta. A proteção deve priorizar o bem-estar, a dignidade e a segurança infantil."
  },
  {
    category: "Desenvolvimento",
    question: "Por que exigir que uma criança aja como adulta pode ser prejudicial?",
    answers: [
      "Porque todas as crianças precisam ter exatamente os mesmos interesses.",
      "Porque impede qualquer uso saudável da tecnologia.",
      "Porque pode gerar pressão, ansiedade ou preocupações com a imagem e tirar espaço de experiências próprias da infância.",
      "Porque crianças não devem aprender nenhuma responsabilidade."
    ],
    correct: 2,
    explanation: "Brincar, explorar, aprender e desenvolver autonomia no próprio ritmo são partes importantes da infância. Responsabilidades adequadas à idade são diferentes de exigir maturidade ou aparência adulta."
  },
  {
    category: "Responsabilidade compartilhada",
    question: "Quem tem responsabilidade na proteção de crianças no ambiente digital?",
    answers: [
      "Somente a própria criança.",
      "Somente a escola.",
      "Apenas quem publica o conteúdo, nunca as plataformas.",
      "Famílias, responsáveis, sociedade, poder público e plataformas, cada qual conforme suas responsabilidades."
    ],
    correct: 3,
    explanation: "A proteção é compartilhada. O ECA reconhece deveres da família, da comunidade, da sociedade e do poder público; serviços digitais também têm obrigações previstas na legislação aplicável."
  },
  {
    category: "Direitos digitais",
    question: "O que é o ECA Digital?",
    answers: [
      "A Lei nº 15.211/2025, que estabelece regras para a proteção de crianças e adolescentes em ambientes digitais.",
      "Um aplicativo para controlar as notas escolares.",
      "Uma rede social exclusiva para crianças.",
      "Uma regra que substituiu todos os direitos previstos no ECA."
    ],
    correct: 0,
    explanation: "A Lei nº 15.211/2025, conhecida como ECA Digital, trata da proteção de crianças e adolescentes em ambientes digitais. Ela complementa o conjunto de normas de proteção; não elimina o ECA."
  },
  {
    category: "Situação do cotidiano",
    question: "Um vídeo de uma criança viraliza e começa a receber comentários invasivos. Qual é uma atitude responsável?",
    answers: [
      "Compartilhar o vídeo para que mais pessoas deem opinião.",
      "Evitar ampliar a exposição, rever a publicação, usar ferramentas de denúncia quando cabíveis e buscar apoio responsável.",
      "Responder aos comentários divulgando mais dados da criança.",
      "Ignorar qualquer preocupação porque o vídeo já é público."
    ],
    correct: 1,
    explanation: "Ampliar a circulação pode aumentar a exposição. É melhor priorizar a privacidade e a segurança, revisar quem pode ver o conteúdo e procurar os canais adequados quando houver abuso ou violação."
  },
  {
    category: "Pensamento crítico",
    question: "Qual frase resume melhor uma atitude equilibrada diante da presença de crianças nas redes?",
    answers: [
      "Toda foto de criança na internet é crime.",
      "Se a criança sorriu no vídeo, não existe risco algum.",
      "A tecnologia deve ser proibida para todas as crianças.",
      "A presença online exige cuidado com idade, contexto, privacidade, dignidade e possíveis consequências."
    ],
    correct: 3,
    explanation: "O contexto faz diferença. O objetivo não é tratar toda exposição como crime nem ignorar os riscos, mas pensar na proteção dos direitos e no melhor interesse da criança."
  }
];

const startButton = document.getElementById("start-quiz");
const beginInside = document.getElementById("begin-inside");
const welcome = document.getElementById("quiz-welcome");
const play = document.getElementById("quiz-play");
const result = document.getElementById("quiz-result");
const count = document.getElementById("question-count");
const category = document.getElementById("question-category");
const progressTrack = document.getElementById("progress-track");
const progressBar = document.getElementById("progress-bar");
const questionText = document.getElementById("question-text");
const answersBox = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedback-title");
const feedbackText = document.getElementById("feedback-text");
const nextButton = document.getElementById("next-question");
const answeredNote = document.getElementById("answered-note");
const resultScore = document.getElementById("result-score");
const resultTitle = document.getElementById("result-title");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-quiz");

let currentQuestion = 0;
let score = 0;
let hasAnswered = false;

function scrollToQuiz() {
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  hasAnswered = false;
  welcome.classList.add("hidden");
  result.classList.add("hidden");
  play.classList.remove("hidden");
  renderQuestion();
  scrollToQuiz();
}

function renderQuestion() {
  const item = questions[currentQuestion];
  hasAnswered = false;
  count.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  category.textContent = item.category;
  questionText.textContent = item.question;
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion));
  answersBox.innerHTML = "";
  feedback.classList.add("hidden");
  nextButton.disabled = true;
  nextButton.textContent = "Confirmar resposta";
  answeredNote.textContent = "Escolha uma alternativa para continuar.";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.innerHTML = `<span class="letter">${String.fromCharCode(65 + index)}</span><span></span>`;
    button.querySelector("span:last-child").textContent = answer;
    button.addEventListener("click", () => selectAnswer(index));
    answersBox.appendChild(button);
  });
}

function selectAnswer(selectedIndex) {
  if (hasAnswered) return;
  hasAnswered = true;
  const item = questions[currentQuestion];
  const buttons = [...answersBox.querySelectorAll(".answer")];
  const isCorrect = selectedIndex === item.correct;
  if (isCorrect) score += 1;

  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.correct) button.classList.add("correct");
    if (index === selectedIndex && !isCorrect) button.classList.add("incorrect");
  });

  feedback.classList.remove("hidden");
  feedbackTitle.textContent = isCorrect ? "Isso aí! Você acertou. ✨" : "Boa oportunidade para aprender! 💡";
  feedbackText.textContent = item.explanation;
  nextButton.disabled = false;
  nextButton.textContent = currentQuestion === questions.length - 1 ? "Ver meu resultado" : "Próxima pergunta →";
  answeredNote.textContent = "Resposta registrada neste dispositivo.";
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  progressTrack.setAttribute("aria-valuenow", String(currentQuestion + 1));
}

function nextQuestion() {
  if (!hasAnswered) return;
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  play.classList.add("hidden");
  result.classList.remove("hidden");
  resultScore.innerHTML = `${score}<span>/${questions.length}</span>`;
  let title;
  let message;
  if (score >= 9) {
    title = "Mandou muito bem!";
    message = "Você demonstrou bastante atenção ao tema. Continue usando esse olhar crítico para conversar sobre respeito, privacidade e infância no mundo digital.";
  } else if (score >= 6) {
    title = "Você está no caminho!";
    message = "Você já reconhece pontos importantes e ainda pode descobrir outras perspectivas. Leia as explicações e explore as fontes oficiais para aprofundar o assunto.";
  } else if (score >= 3) {
    title = "Toda reflexão começa com uma pergunta.";
    message = "Este tema tem muitas nuances, e aprender é um processo. Releia as explicações, pense nas situações do cotidiano e tente novamente quando quiser.";
  } else {
    title = "O primeiro passo é se informar.";
    message = "Obrigado por participar! O quiz foi feito para abrir uma conversa, não para julgar ninguém. Explore as fontes e refaça o desafio para perceber o que aprendeu.";
  }
  resultTitle.textContent = title;
  resultMessage.textContent = message;
  progressBar.style.width = "100%";
  progressTrack.setAttribute("aria-valuenow", String(questions.length));
  scrollToQuiz();
}
async function carregarRanking() {
  const lista = document.getElementById("ranking-list");
  const status = document.getElementById("ranking-status");

  try {
    lista.innerHTML = "<li>Carregando...</li>";

    const consulta = query(
      collection(db, "ranking"),
      orderBy("pontuacao", "desc"),
      limit(10)
    );

    const resultado = await getDocs(consulta);
    lista.innerHTML = "";

    if (resultado.empty) {
      lista.innerHTML = "<li>Nenhuma pontuação ainda. Seja o primeiro!</li>";
      status.textContent = "";
      return;
    }

    resultado.forEach((documento) => {
      const dados = documento.data();
      const item = document.createElement("li");
      item.textContent = `${dados.nome} — ${dados.pontuacao}/${dados.total}`;
      lista.appendChild(item);
    });

    status.textContent = "Melhores 10 pontuações";
  } catch (erro) {
    console.error("Erro ao carregar ranking:", erro);
    status.textContent = "Não foi possível carregar o ranking.";
  }
}

carregarRanking();
startButton.addEventListener("click", startQuiz);
beginInside.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", startQuiz);
