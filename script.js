const correctAnswers = {
    q1: "c",
	q2: "e",
	q3: "b",
	q4: "a",
	q5: "a",
	q6: "e",
	q7: "b",
	q8: "b",
	q9: "a",
	q10: "d",
	q11: "a",
	q12: "a",
	q13: "c",
	q14: "b",
	q15: "e",
    // Adicione as respostas corretas das outras perguntas
};

let timeLeft = 90;
let timer = setInterval(() => {
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        submitQuiz();
    }
    timeLeft--;
}, 1000);

document.getElementById("bg-music").play();

function submitQuiz() {
    clearInterval(timer);

    let score = 0;
    const form = document.getElementById("quiz-form");

    for (let key in correctAnswers) {
        const selected = form.querySelector(input[name="${key}"]:checked);
        if (selected && selected.value === correctAnswers[key]) {
            score++;
        }
    }

    let resultText = Você acertou ${score} de 10 perguntas. ;
    resultText += score >= 7 ? "Parabéns, Sofia. Você é uma grande fã!" : "Ainda precisa assistir mais episódios!";

    document.getElementById("result").textContent = resultText;
    document.getElementById("result").classList.remove("hidden");
}