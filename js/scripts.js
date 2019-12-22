window.onload = function () {
    var instructionsPtBr = `
        <h3>Como Jogar</h3>
        <ol>
            <li>
                <p>Use o clique do mouse para pular por cima da maior quantidade de obstaculos que conseguir;</p>
            </li>

            <li>
                <p>Cada obstaculo pulado vai te dar uma quantidade de pontos diferente baseado na altura dele;</p>
            </li>

            <li>
                <p>Podem ser dados 3 pulos seguidos no total enquanto o personagem estiver no ar.</p>
                <p>A contagem zera quando ele cai</p>
            </li>
        </ol>`;

    var instructionsEnUs = `
        <h3>How To Play</h3>
        <ol>
            <li>
                <p>Use your mouse click to jump over as many obstacles as you can;</p>
            </li>

            <li>
                <p>Each jumping obstacle will give you a different amount of points based on its height;</p>
            </li>

            <li>
                <p>A total of 3 consecutive jumps can be made while the character is in the air.</p>
                <p>The count clears when it falls</p>
            </li>
        </ol>`;

    var lang = this.localStorage.getItem('language');

    if (lang === 'pt-br') {
        document.getElementById('pt-br').checked = true;
        document.getElementById('instructions').innerHTML = instructionsPtBr;
    } else if (lang === 'en-us') {
        document.getElementById('en-us').checked = true;
        document.getElementById('instructions').innerHTML = instructionsEnUs;
    }
}

function alterLanguage(input) {
    if (input.lang === 'pt-br') {
        localStorage.setItem('language', 'pt-br');
        lang = this.localStorage.getItem('language')
    } else if (input.lang === 'en-us') {
        localStorage.setItem('language', 'en-us');
        lang = this.localStorage.getItem('language')
    }

    location.reload();
}