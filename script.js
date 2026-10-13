
"use strict";

/* =========================================
   BRAINQUEST — CONFIGURACIÓN GENERAL
========================================= */

const STORAGE_KEY = "brainquest_data_v1";
const SETTINGS_KEY = "brainquest_settings_v1";

const SUBJECTS = {
  math: {
    name: "Matemáticas",
    short: "MATH",
    color: "#ffc857"
  },
  programming: {
    name: "Programación",
    short: "CODE",
    color: "#35f2e2"
  },
  history: {
    name: "Historia",
    short: "HISTORY",
    color: "#ff4fa3"
  },
  english: {
    name: "Inglés",
    short: "ENGLISH",
    color: "#a99bff"
  }
};

/*
  Cada pregunta contiene:
  subject, topic, difficulty, question,
  answers, correct (índice desde 0), explanation.
*/

const QUESTIONS = [
  // MATEMÁTICAS
  {
    subject: "math", topic: "Álgebra", difficulty: "easy",
    question: "¿Cuánto vale x si x + 5 = 12?",
    answers: ["5", "7", "17", "6"],
    correct: 1,
    explanation: "Restamos 5 en ambos lados: x = 12 − 5 = 7."
  },
  {
    subject: "math", topic: "Álgebra", difficulty: "easy",
    question: "¿Cuál es el resultado de 3²?",
    answers: ["6", "9", "8", "12"],
    correct: 1,
    explanation: "3² significa 3 × 3, cuyo resultado es 9."
  },
  {
    subject: "math", topic: "Álgebra", difficulty: "medium",
    question: "Factorizá x² − 5x + 6.",
    answers: [
      "(x − 1)(x − 6)",
      "(x + 2)(x + 3)",
      "(x − 2)(x − 3)",
      "(x + 1)(x − 6)"
    ],
    correct: 2,
    explanation: "Buscamos dos números que multiplicados den 6 y sumados den −5: −2 y −3."
  },
  {
    subject: "math", topic: "Funciones", difficulty: "medium",
    question: "Si f(x) = 2x + 3, ¿cuánto vale f(4)?",
    answers: ["8", "10", "11", "14"],
    correct: 2,
    explanation: "Reemplazamos x por 4: f(4) = 2 × 4 + 3 = 11."
  },
  {
    subject: "math", topic: "Geometría", difficulty: "easy",
    question: "¿Cuál es la suma de los ángulos interiores de un triángulo?",
    answers: ["90°", "180°", "270°", "360°"],
    correct: 1,
    explanation: "Los tres ángulos interiores de un triángulo suman 180°."
  },
  {
    subject: "math", topic: "Álgebra", difficulty: "hard",
    question: "¿Cuáles son las raíces de x² − 4x − 5 = 0?",
    answers: [
      "1 y 5",
      "−1 y −5",
      "−1 y 5",
      "2 y −5"
    ],
    correct: 2,
    explanation: "Factorizamos: (x − 5)(x + 1) = 0. Las raíces son 5 y −1."
  },
  {
    subject: "math", topic: "Geometría", difficulty: "medium",
    question: "Un rectángulo mide 8 cm de largo y 3 cm de ancho. ¿Cuál es su área?",
    answers: ["11 cm²", "22 cm²", "24 cm²", "16 cm²"],
    correct: 2,
    explanation: "Área = largo × ancho = 8 × 3 = 24 cm²."
  },
  {
    subject: "math", topic: "Funciones", difficulty: "hard",
    question: "¿Cuál es la pendiente de la recta que pasa por (1, 2) y (3, 8)?",
    answers: ["2", "3", "4", "6"],
    correct: 1,
    explanation: "m = (8 − 2) / (3 − 1) = 6 / 2 = 3."
  },

  // PROGRAMACIÓN
  {
    subject: "programming", topic: "JavaScript", difficulty: "easy",
    question: "¿Qué palabra se utiliza para declarar una variable que puede cambiar en JavaScript?",
    answers: ["style", "change", "let", "print"],
    correct: 2,
    explanation: "let permite declarar una variable cuyo valor puede cambiar."
  },
  {
    subject: "programming", topic: "HTML", difficulty: "easy",
    question: "¿Qué etiqueta HTML se utiliza para crear un enlace?",
    answers: ["<p>", "<a>", "<img>", "<h1>"],
    correct: 1,
    explanation: "La etiqueta <a> crea enlaces. El atributo href indica su destino."
  },
  {
    subject: "programming", topic: "CSS", difficulty: "easy",
    question: "¿Para qué se utiliza principalmente CSS?",
    answers: [
      "Para diseñar la apariencia de una página",
      "Para guardar archivos",
      "Para crear una base de datos",
      "Para encender la computadora"
    ],
    correct: 0,
    explanation: "CSS controla colores, tamaños, distribución, fuentes y otros aspectos visuales."
  },
  {
    subject: "programming", topic: "JavaScript", difficulty: "medium",
    question: "¿Qué muestra console.log(2 + 3)?",
    answers: ["23", "5", "undefined", "2 + 3"],
    correct: 1,
    explanation: "El operador + suma los números y console.log muestra el resultado: 5."
  },
  {
    subject: "programming", topic: "HTML", difficulty: "medium",
    question: "¿Qué atributo de una imagen indica su ruta?",
    answers: ["href", "alt", "src", "class"],
    correct: 2,
    explanation: "El atributo src indica dónde se encuentra el archivo de imagen."
  },
  {
    subject: "programming", topic: "JavaScript", difficulty: "hard",
    question: "¿Qué devuelve typeof 42 en JavaScript?",
    answers: ["integer", "number", "float", "text"],
    correct: 1,
    explanation: "JavaScript devuelve 'number' para los números, tanto enteros como decimales."
  },
  {
    subject: "programming", topic: "CSS", difficulty: "medium",
    question: "¿Qué selector CSS apunta a un elemento con id=\"menu\"?",
    answers: [".menu", "#menu", "menu()", "*menu"],
    correct: 1,
    explanation: "En CSS, # selecciona un id y el punto (.) selecciona una clase."
  },
  {
    subject: "programming", topic: "JavaScript", difficulty: "hard",
    question: "¿Qué resultado tiene 10 % 3 en JavaScript?",
    answers: ["3", "1", "0", "3.33"],
    correct: 1,
    explanation: "El operador % devuelve el resto de la división. El resto de 10 dividido por 3 es 1."
  },

  // HISTORIA
  {
    subject: "history", topic: "Argentina", difficulty: "easy",
    question: "¿En qué año se declaró la Independencia argentina?",
    answers: ["1810", "1816", "1820", "1853"],
    correct: 1,
    explanation: "La Independencia se declaró el 9 de julio de 1816 en el Congreso de Tucumán."
  },
  {
    subject: "history", topic: "Argentina", difficulty: "easy",
    question: "¿Qué ocurrió en Buenos Aires el 25 de mayo de 1810?",
    answers: [
      "La Declaración de Independencia",
      "La Revolución de Mayo",
      "La sanción de la Constitución",
      "La creación de la ONU"
    ],
    correct: 1,
    explanation: "La Revolución de Mayo de 1810 dio lugar a la formación de la Primera Junta."
  },
  {
    subject: "history", topic: "Historia mundial", difficulty: "easy",
    question: "¿En qué continente surgió la civilización del antiguo Egipto?",
    answers: ["Asia", "Europa", "África", "América"],
    correct: 2,
    explanation: "El antiguo Egipto se desarrolló en el noreste de África, alrededor del río Nilo."
  },
  {
    subject: "history", topic: "Historia mundial", difficulty: "medium",
    question: "¿Qué acontecimiento comenzó en 1789 en Francia?",
    answers: [
      "La Revolución francesa",
      "La Primera Guerra Mundial",
      "La Revolución rusa",
      "La caída del Imperio romano de Occidente"
    ],
    correct: 0,
    explanation: "La Revolución francesa comenzó en 1789 y transformó profundamente la sociedad y la política."
  },
  {
    subject: "history", topic: "Argentina", difficulty: "medium",
    question: "¿Quién fue Manuel Belgrano?",
    answers: [
      "Un presidente del siglo XX",
      "Un prócer creador de la bandera argentina",
      "Un explorador europeo",
      "Un virrey del Río de la Plata"
    ],
    correct: 1,
    explanation: "Manuel Belgrano fue abogado, militar y uno de los protagonistas de la independencia; creó la bandera argentina."
  },
  {
    subject: "history", topic: "Historia mundial", difficulty: "medium",
    question: "¿Qué muro cayó en 1989?",
    answers: [
      "El Muro de Adriano",
      "La Muralla China",
      "El Muro de Berlín",
      "El Muro de las Lamentaciones"
    ],
    correct: 2,
    explanation: "La caída del Muro de Berlín fue un acontecimiento clave en el final de la Guerra Fría."
  },
  {
    subject: "history", topic: "Historia mundial", difficulty: "hard",
    question: "¿En qué año terminó la Segunda Guerra Mundial?",
    answers: ["1939", "1942", "1945", "1948"],
    correct: 2,
    explanation: "La guerra terminó en 1945: Alemania se rindió en mayo y Japón en septiembre."
  },
  {
    subject: "history", topic: "Argentina", difficulty: "hard",
    question: "¿En qué año se sancionó la Constitución Nacional argentina?",
    answers: ["1816", "1820", "1853", "1880"],
    correct: 2,
    explanation: "La Constitución Nacional fue sancionada en 1853. Buenos Aires se incorporó posteriormente al orden constitucional."
  },

  // INGLÉS
  {
    subject: "english", topic: "Vocabulary", difficulty: "easy",
    question: "What does 'apple' mean in Spanish?",
    answers: ["Naranja", "Manzana", "Pera", "Uva"],
    correct: 1,
    explanation: "'Apple' significa 'manzana' en español."
  },
  {
    subject: "english", topic: "Grammar", difficulty: "easy",
    question: "Choose the correct option: 'She ___ a student.'",
    answers: ["am", "are", "is", "be"],
    correct: 2,
    explanation: "Con he, she e it utilizamos 'is' en el presente del verbo to be."
  },
  {
    subject: "english", topic: "Vocabulary", difficulty: "easy",
    question: "What is the opposite of 'big'?",
    answers: ["Tall", "Small", "Long", "Fast"],
    correct: 1,
    explanation: "'Small' significa pequeño y es el antónimo de 'big' (grande)."
  },
  {
    subject: "english", topic: "Grammar", difficulty: "medium",
    question: "Complete: 'They ___ playing football now.'",
    answers: ["is", "am", "are", "be"],
    correct: 2,
    explanation: "El presente continuo utiliza am/is/are + verbo terminado en -ing. Con 'they' corresponde 'are'."
  },
  {
    subject: "english", topic: "Grammar", difficulty: "medium",
    question: "Choose the correct past form: 'Yesterday, I ___ to school.'",
    answers: ["go", "goes", "went", "going"],
    correct: 2,
    explanation: "El pasado simple de 'go' es irregular: 'went'."
  },
  {
    subject: "english", topic: "Vocabulary", difficulty: "medium",
    question: "What does 'usually' mean?",
    answers: ["Nunca", "Ayer", "Generalmente", "Mañana"],
    correct: 2,
    explanation: "'Usually' significa 'generalmente' o 'habitualmente'."
  },
  {
    subject: "english", topic: "Grammar", difficulty: "hard",
    question: "Choose the correct sentence.",
    answers: [
      "She have finished her homework.",
      "She has finished her homework.",
      "She finishing her homework.",
      "She finish her homework yesterday."
    ],
    correct: 1,
    explanation: "El present perfect se forma con have/has + participio. Con 'she' usamos 'has'."
  },
  {
    subject: "english", topic: "Grammar", difficulty: "hard",
    question: "Complete: 'If I had more time, I ___ another language.'",
    answers: ["will learn", "learned yesterday", "would learn", "am learn"],
    correct: 2,
    explanation: "En el segundo condicional usamos If + pasado simple y would + verbo base."
  }
];

/* =========================================
   ESTADO DEL JUEGO
========================================= */

const $ = (id) => document.getElementById(id);

const state = {
  player: "",
  mode: "random",
  subject: "math",
  topic: "",
  difficulty: "all",
  requestedCount: 10,
  questions: [],
  remaining: [],
  current: null,
  index: 0,
  score: 0,
  correct: 0,
  streak: 0,
  bestStreak: 0,
  mistakes: [],
  answered: false,
  spinning: false,
  rankingMode: "total"
};

let wheelRotation = 0;
let audioContext = null;

/* =========================================
   GUARDADO LOCAL
========================================= */

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("No se pudo leer el almacenamiento local.", error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn("No se pudo guardar en este navegador.", error);
    return false;
  }
}

function getPlayers() {
  const data = readStorage(STORAGE_KEY, []);
  return Array.isArray(data) ? data : [];
}

function getSettings() {
  return readStorage(SETTINGS_KEY, {
    sound: true,
    effects: true
  });
}

function savePlayerResult() {
  const players = getPlayers();
  const normalized = state.player.trim().toLocaleLowerCase("es");
  let player = players.find(
    (item) => item.name.toLocaleLowerCase("es") === normalized
  );

  const record = {
    date: new Date().toISOString(),
    score: state.score,
    correct: state.correct,
    total: state.questions.length,
    accuracy: state.questions.length
      ? Math.round((state.correct / state.questions.length) * 100)
      : 0,
    bestStreak: state.bestStreak
  };

  if (!player) {
    player = {
      name: state.player,
      totalXP: 0,
      bestScore: 0,
      games: 0,
      history: []
    };
    players.push(player);
  }

  player.totalXP += state.score;
  player.bestScore = Math.max(player.bestScore, state.score);
  player.games += 1;

  if (!Array.isArray(player.history)) player.history = [];
  player.history.push(record);

  // Conservamos hasta 100 resultados por jugador.
  player.history = player.history.slice(-100);

  const saved = writeStorage(STORAGE_KEY, players);

  if (!saved) {
    alert("El navegador no permitió guardar el ranking. Revisá la configuración de almacenamiento.");
  }
}

/* =========================================
   NAVEGACIÓN
========================================= */

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === `${name}-screen`);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openSetup() {
  updateSetupFields();
  updateTopicOptions();
  updateAvailableHint();
  showScreen("setup");
}

/* =========================================
   CONFIGURACIÓN
========================================= */

function updateSetupFields() {
  state.mode = $("game-mode").value;

  $("subject-field").classList.toggle(
    "hidden",
    state.mode === "random"
  );

  $("topic-field").classList.toggle(
    "hidden",
    state.mode !== "topic"
  );
}

function updateTopicOptions() {
  const subject = $("subject-select").value;
  const topicSelect = $("topic-select");
  const topics = [...new Set(
    QUESTIONS
      .filter((q) => q.subject === subject)
      .map((q) => q.topic)
  )];

  topicSelect.innerHTML = "";

  topics.forEach((topic) => {
    const option = document.createElement("option");
    option.value = topic;
    option.textContent = topic;
    topicSelect.appendChild(option);
  });

  state.subject = subject;
  state.topic = topicSelect.value || "";
  updateAvailableHint();
}

function getAvailablePool() {
  const mode = $("game-mode").value;
  const subject = $("subject-select").value;
  const topic = $("topic-select").value;
  const difficulty = $("difficulty-select").value;

  return QUESTIONS.filter((q) => {
    if (mode === "subject" && q.subject !== subject) return false;
    if (mode === "topic" && (q.subject !== subject || q.topic !== topic)) {
      return false;
    }
    if (difficulty !== "all" && q.difficulty !== difficulty) return false;
    return true;
  });
}

function updateAvailableHint() {
  if (!$("available-hint")) return;

  const pool = getAvailablePool();
  const count = Number($("question-count").value);

  $("available-hint").textContent =
    `${pool.length} preguntas disponibles con esta configuración.` +
    (count > pool.length
      ? ` Podrás responder hasta ${pool.length} sin repetir.`
      : "");
}

function beginGame() {
  const name = state.player.trim();
  const requested = Number($("question-count").value);
  const pool = getAvailablePool();

  if (!name) {
    alert("Primero escribí tu nombre o apodo.");
    showScreen("home");
    $("player-name").focus();
    return;
  }

  if (!Number.isInteger(requested) || requested < 1 || requested > 100) {
    alert("Elegí una cantidad de entre 1 y 100 preguntas.");
    $("question-count").focus();
    return;
  }

  if (!pool.length) {
    alert("No hay preguntas disponibles para esa configuración.");
    return;
  }

  state.mode = $("game-mode").value;
  state.subject = $("subject-select").value;
  state.topic = $("topic-select").value;
  state.difficulty = $("difficulty-select").value;
  state.requestedCount = Math.min(requested, pool.length);

  if (requested > pool.length) {
    alert(
      `Hay ${pool.length} preguntas disponibles con esta configuración. ` +
      `La partida tendrá ${pool.length} preguntas para evitar repeticiones.`
    );
  }

  state.questions = [];
  state.remaining = shuffle([...pool]);
  state.current = null;
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  state.bestStreak = 0;
  state.mistakes = [];
  state.answered = false;
  state.spinning = false;

  $("game-player").textContent = state.player;
  $("score-display").textContent = "0";
  $("game-subject-title").textContent =
    state.mode === "random"
      ? "RULETA ALEATORIA"
      : state.mode === "topic"
        ? state.topic.toUpperCase()
        : SUBJECTS[state.subject].name.toUpperCase();

  $("roulette-area").classList.toggle("hidden", state.mode !== "random");
  $("question-area").classList.add("hidden");
  $("quit-game-btn").classList.remove("hidden");

  updateProgress();
  showScreen("game");

  if (state.mode === "random") {
    $("roulette-message").textContent = "¡Giramos la ruleta para elegir una materia!";
    $("spin-btn").disabled = false;
  } else {
    nextQuestion();
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* =========================================
   RULETA
========================================= */

function spinWheel() {
  if (state.spinning || state.index >= state.requestedCount) return;

  const availableSubjects = [...new Set(
    state.remaining.map((q) => q.subject)
  )];

  if (!availableSubjects.length) {
    finishGame();
    return;
  }

  state.spinning = true;
  $("spin-btn").disabled = true;
  $("question-area").classList.add("hidden");
  $("roulette-message").textContent = "Girando... 🎡";

  // Elegimos una materia que todavía tenga preguntas disponibles.
  const subject = availableSubjects[
    Math.floor(Math.random() * availableSubjects.length)
  ];

  const order = ["math", "programming", "history", "english"];
  const targetIndex = order.indexOf(subject);

  // La rueda se divide en cuatro sectores de 90 grados.
  const targetRotation = 360 * 5 + targetIndex * 90;
  wheelRotation += targetRotation;

  $("wheel").style.transform = `rotate(${wheelRotation}deg)`;

  setTimeout(() => {
    const candidates = state.remaining.filter(
      (q) => q.subject === subject
    );

    if (!candidates.length) {
      state.spinning = false;
      $("spin-btn").disabled = false;
      return;
    }

    const question = candidates[0];
    removeFromRemaining(question);
    state.current = question;
    state.questions.push(question);

    $("roulette-message").textContent =
      `¡Salió ${SUBJECTS[subject].name}! Prepará tu cerebro.`;

    state.spinning = false;
    renderQuestion(question);
    $("spin-btn").disabled = true;
  }, 3100);
}

function removeFromRemaining(question) {
  const index = state.remaining.indexOf(question);
  if (index !== -1) state.remaining.splice(index, 1);
}

/* =========================================
   PREGUNTAS Y RESPUESTAS
========================================= */

function nextQuestion() {
  if (state.index >= state.requestedCount) {
    finishGame();
    return;
  }

  state.answered = false;
  $("feedback").classList.add("hidden");
  $("next-question-btn").classList.add("hidden");
  $("question-area").classList.add("hidden");

  if (state.mode === "random") {
    $("roulette-area").classList.remove("hidden");
    $("roulette-message").textContent =
      "¡Girá la ruleta para descubrir tu próximo desafío!";
    $("spin-btn").disabled = false;
  } else {
    $("roulette-area").classList.add("hidden");

    const question = state.remaining.shift();

    if (!question) {
      finishGame();
      return;
    }

    state.current = question;
    state.questions.push(question);
    renderQuestion(question);
  }

  updateProgress();
}

function renderQuestion(question) {
  $("question-area").classList.remove("hidden");

  $("question-subject").textContent =
    SUBJECTS[question.subject].name.toUpperCase();

  $("question-subject").style.color =
    SUBJECTS[question.subject].color;

  const difficultyNames = {
    easy: "FÁCIL",
    medium: "NORMAL",
    hard: "DIFÍCIL"
  };

  $("question-difficulty").textContent =
    difficultyNames[question.difficulty];

  $("question-counter").textContent =
    `QUESTION ${String(state.index + 1).padStart(2, "0")}`;

  $("question-text").textContent = question.question;

  const grid = $("answers-grid");
  grid.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
    button.addEventListener("click", () => answerQuestion(index, button));
    grid.appendChild(button);
  });

  updateProgress();
}

function answerQuestion(selectedIndex, selectedButton) {
  if (state.answered || !state.current) return;

  state.answered = true;
  const question = state.current;
  const correct = selectedIndex === question.correct;

  document.querySelectorAll(".answer-btn").forEach((button) => {
    button.disabled = true;
  });

  const buttons = [...document.querySelectorAll(".answer-btn")];
  buttons[question.correct]?.classList.add("correct");

  if (correct) {
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);

    // Dificultad: fácil 100, normal 150, difícil 200 XP.
    const points = {
      easy: 100,
      medium: 150,
      hard: 200
    }[question.difficulty];

    // Bonus de 50 XP cada tres aciertos consecutivos.
    const bonus = state.streak % 3 === 0 ? 50 : 0;
    state.score += points + bonus;

    selectedButton.classList.add("correct");
    $("feedback").innerHTML = "";

    const title = document.createElement("strong");
    title.style.color = "var(--green)";
    title.textContent = `¡CORRECTO! +${points + bonus} XP`;

    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;

    $("feedback").append(title, explanation);

    if (bonus) {
      const streakMessage = document.createElement("p");
      streakMessage.textContent = "🔥 ¡Racha de tres! Bonus de +50 XP.";
      $("feedback").appendChild(streakMessage);
    }

    playTone(660, 0.12);
  } else {
    state.streak = 0;
    selectedButton.classList.add("incorrect");

    const title = document.createElement("strong");
    title.style.color = "var(--pink)";
    title.textContent = "¡CASI! La próxima será.";

    const correctAnswer = document.createElement("p");
    correctAnswer.textContent =
      `Respuesta correcta: ${question.answers[question.correct]}`;

    const explanation = document.createElement("p");
    explanation.textContent = question.explanation;

    $("feedback").innerHTML = "";
    $("feedback").append(title, correctAnswer, explanation);

    state.mistakes.push({
      question: question.question,
      correctAnswer: question.answers[question.correct],
      explanation: question.explanation
    });

    playTone(220, 0.18);
  }

  $("feedback").classList.remove("hidden");
  $("score-display").textContent = state.score;
  $("streak-label").textContent = `🔥 Racha: ${state.streak}`;
  $("next-question-btn").classList.remove("hidden");

  state.index += 1;
  updateProgress();

  $("next-question-btn").textContent =
    state.index >= state.requestedCount
      ? "VER RESULTADOS →"
      : "SIGUIENTE →";
}

function updateProgress() {
  const total = state.requestedCount || 1;
  const completed = state.index;

  $("progress-label").textContent =
    `Pregunta ${Math.min(completed + 1, total)} de ${total}`;

  $("progress-bar").style.width =
    `${Math.min((completed / total) * 100, 100)}%`;

  $("streak-label").textContent = `🔥 Racha: ${state.streak}`;
}

/* =========================================
   SONIDOS OPCIONALES
========================================= */

function playTone(frequency, duration) {
  if (!getSettings().sound) return;

  try {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    audioContext ||= new AudioContextClass();

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "square";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(0.04, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + duration
    );

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    // Si el navegador bloquea el sonido, el juego sigue funcionando.
  }
}

/* =========================================
   RESULTADOS
========================================= */

function finishGame() {
  $("roulette-area").classList.add("hidden");
  $("question-area").classList.add("hidden");
  $("quit-game-btn").classList.add("hidden");

  savePlayerResult();

  const total = state.questions.length;
  const accuracy = total
    ? Math.round((state.correct / total) * 100)
    : 0;

  $("result-player").textContent = state.player;
  $("final-score").textContent = state.score;
  $("result-correct").textContent = `${state.correct}/${total}`;
  $("result-accuracy").textContent = `${accuracy}%`;
  $("result-streak").textContent = state.bestStreak;

  $("result-title").textContent =
    accuracy === 100
      ? "¡PERFECT RUN!"
      : accuracy >= 70
        ? "¡MISIÓN CUMPLIDA!"
        : accuracy >= 40
          ? "¡BUEN INTENTO!"
          : "¡SEGUÍ PRACTICANDO!";

  renderMistakes();
  showScreen("results");
}

function renderMistakes() {
  const container = $("mistakes-list");
  container.innerHTML = "";

  if (!state.mistakes.length) {
    const message = document.createElement("p");
    message.textContent = "¡No te equivocaste en ninguna pregunta! 🎉";
    container.appendChild(message);
    return;
  }

  state.mistakes.forEach((mistake, index) => {
    const item = document.createElement("div");
    item.className = "mistake-item";

    const question = document.createElement("strong");
    question.textContent = `${index + 1}. ${mistake.question}`;

    const answer = document.createElement("p");
    answer.textContent = `Respuesta correcta: ${mistake.correctAnswer}`;

    const explanation = document.createElement("small");
    explanation.textContent = mistake.explanation;

    item.append(question, answer, explanation);
    container.appendChild(item);
  });
}

/* =========================================
   RANKING LOCAL
========================================= */

function renderRanking() {
  const container = $("ranking-list");
  const empty = $("empty-ranking");
  container.innerHTML = "";

  const players = getPlayers().sort((a, b) => {
    const aScore = state.rankingMode === "best"
      ? a.bestScore
      : a.totalXP;

    const bScore = state.rankingMode === "best"
      ? b.bestScore
      : b.totalXP;

    return bScore - aScore;
  });

  empty.classList.toggle("hidden", players.length > 0);

  players.slice(0, 50).forEach((player, index) => {
    const entry = document.createElement("div");
    entry.className = "ranking-entry";

    const position = document.createElement("span");
    position.className = "ranking-position";
    position.textContent = ["🥇", "🥈", "🥉"][index] || `#${index + 1}`;

    const identity = document.createElement("div");
    const name = document.createElement("div");
    name.className = "ranking-name";
    name.textContent = player.name;

    const detail = document.createElement("small");
    detail.className = "ranking-detail";
    detail.textContent = `${player.games} partida(s)`;

    identity.append(name, detail);

    const points = document.createElement("span");
    points.className = "ranking-points";
    points.textContent =
      state.rankingMode === "best"
        ? `${player.bestScore} XP`
        : `${player.totalXP} XP`;

    entry.append(position, identity, points);
    container.appendChild(entry);
  });
}

function openRanking(mode = state.rankingMode) {
  state.rankingMode = mode;

  document.querySelectorAll(".ranking-tab").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.ranking === mode
    );
  });

  renderRanking();
  showScreen("ranking");
}

/* =========================================
   CONFIGURACIÓN DE EFECTOS
========================================= */

function loadSettings() {
  const settings = getSettings();

  $("sound-toggle").checked = settings.sound !== false;
  $("effects-toggle").checked = settings.effects !== false;

  document.body.classList.toggle(
    "reduce-effects",
    settings.effects === false
  );
}

function saveSettings() {
  const settings = {
    sound: $("sound-toggle").checked,
    effects: $("effects-toggle").checked
  };

  writeStorage(SETTINGS_KEY, settings);

  document.body.classList.toggle(
    "reduce-effects",
    !settings.effects
  );
}

/* =========================================
   EVENTOS
========================================= */

$("player-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = $("player-name").value.trim();

  if (!name) {
    $("player-name").focus();
    return;
  }

  state.player = name;
  openSetup();
});

$("home-btn").addEventListener("click", () => showScreen("home"));
$("setup-back-btn").addEventListener("click", () => showScreen("home"));
$("begin-game-btn").addEventListener("click", beginGame);
$("spin-btn").addEventListener("click", spinWheel);

$("next-question-btn").addEventListener("click", () => {
  if (state.index >= state.requestedCount) {
    finishGame();
  } else {
    nextQuestion();
  }
});

$("game-mode").addEventListener("change", () => {
  updateSetupFields();
  updateAvailableHint();
});

$("subject-select").addEventListener("change", () => {
  updateTopicOptions();
});

$("topic-select").addEventListener("change", updateAvailableHint);
$("difficulty-select").addEventListener("change", updateAvailableHint);
$("question-count").addEventListener("input", () => {
  document.querySelectorAll(".count-btn").forEach((button) => {
    button.classList.toggle(
      "selected",
      Number(button.dataset.count) === Number($("question-count").value)
    );
  });
  updateAvailableHint();
});

document.querySelectorAll(".count-btn").forEach((button) => {
  button.addEventListener("click", () => {
    $("question-count").value = button.dataset.count;

    document.querySelectorAll(".count-btn").forEach((item) => {
      item.classList.toggle("selected", item === button);
    });

    updateAvailableHint();
  });
});

$("quit-game-btn").addEventListener("click", () => {
  if (confirm("¿Querés abandonar la partida? No se guardará esta puntuación.")) {
    state.spinning = false;
    showScreen("home");
  }
});

$("play-again-btn").addEventListener("click", openSetup);
$("results-home-btn").addEventListener("click", () => showScreen("home"));
$("results-ranking-btn").addEventListener("click", () => openRanking());

$("ranking-btn").addEventListener("click", () => openRanking());
$("ranking-play-btn").addEventListener("click", openSetup);
$("ranking-home-btn").addEventListener("click", () => showScreen("home"));

document.querySelectorAll(".ranking-tab").forEach((button) => {
  button.addEventListener("click", () => {
    openRanking(button.dataset.ranking);
  });
});

$("clear-ranking-btn").addEventListener("click", () => {
  if (confirm("¿Seguro que querés borrar todos los récords de esta computadora?")) {
    writeStorage(STORAGE_KEY, []);
    renderRanking();
  }
});

$("settings-btn").addEventListener("click", () => {
  loadSettings();
  showScreen("settings");
});

$("settings-back-btn").addEventListener("click", () => {
  saveSettings();
  showScreen("home");
});

$("sound-toggle").addEventListener("change", saveSettings);
$("effects-toggle").addEventListener("change", saveSettings);

/* =========================================
   INICIO
========================================= */

updateSetupFields();
updateTopicOptions();
loadSettings();
