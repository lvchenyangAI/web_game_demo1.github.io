let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessInput").value);
    attempts++;    if (userGuess === randomNumber) {
        document.getElementById("result").textContent = `恭喜，你猜对了！尝试次数：${attempts}`;
    } else if (userGuess < randomNumber) {
        document.getElementById("result").textContent = "太小了！";
    } else {
        document.getElementById("result").textContent = "太大了！";
    }
}