window.onload = function() {
    var lang = this.localStorage.getItem('language');

    if (lang === 'pt-br') {
        document.getElementById('pt-br').checked = true;
    } else if (lang === 'en-us') {
        document.getElementById('en-us').checked = true;
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