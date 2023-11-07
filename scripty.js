function playGame(playerChoice) {
    document.getElementById('loadingGif').style.display = 'block';
    setTimeout(function () {
        var choices = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock'];
        var computerChoice = choices[Math.floor(Math.random() * 5)];

        document.getElementById('playerChoice').src = playerChoice + '.png';
        document.getElementById('computerChoice').src = computerChoice + '.png';

        document.getElementById('playerChoice').style.display = 'block';
        document.getElementById('computerChoice').style.display = 'block';

        if (playerChoice === computerChoice) {
            document.getElementById('result').innerText = 'Empate!';
        } else if (
            (playerChoice === 'pedra' && (computerChoice === 'tesoura' || computerChoice === 'lagarto')) ||
            (playerChoice === 'papel' && (computerChoice === 'pedra' || computerChoice === 'spock')) ||
            (playerChoice === 'tesoura' && (computerChoice === 'papel' || computerChoice === 'lagarto')) ||
            (playerChoice === 'lagarto' && (computerChoice === 'papel' || computerChoice === 'spock')) ||
            (playerChoice === 'spock' && (computerChoice === 'tesoura' || computerChoice === 'pedra'))
        ) {
            document.getElementById('result').innerText = 'Você ganhou!';
        } else {
            document.getElementById('result').innerText = 'Você perdeu!';
        }

        document.getElementById('loadingGif').style.display = 'none';
    }, 2000);
}

function toggleRules() {
    var rulesPanel = document.getElementById('rulesPanel');
    if (rulesPanel.style.display === 'none') {
        rulesPanel.style.display = 'block';
        document.getElementById('rulesButton').innerText = 'Esconder Regras';
    } else {
        rulesPanel.style.display = 'none';
        document.getElementById('rulesButton').innerText = 'Mostrar Regras';
    }
}