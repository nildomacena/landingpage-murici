window.onload = function () {
    var config = {
        apiKey: "AIzaSyBYUNHsD_X4yxr60N9Vjgb2kZSEQA3-Egs",
        authDomain: "tradegames-2dff6.firebaseapp.com",
        databaseURL: "https://tradegames-2dff6.firebaseio.com",
        projectId: "tradegames-2dff6",
        storageBucket: "tradegames-2dff6.appspot.com",
        messagingSenderId: "374168288805"
    };
    firebase.initializeApp(config);
}

function enviar() {
    let button = document.getElementById('button-form');
    button.disabled = true;
    button.firstChild.data = 'Enviando...';
    console.log(button.firstChild.data);
    button.value = 'Enviando...'
    let nome = document.getElementById('nomeInput');
    let email = document.getElementById('emailInput');
    let mensagem = document.getElementById('mensagemInput');
    console.log(nome, email, mensagem.value.length);
    if (nome.value.length < 8 || email.value.length < 10 || mensagem.value.length < 15) {
        alert('Preencha as informações corretamente');
        button.disabled = false;
        button.firstChild.data = 'Enviar';
    }
    else {
        firebase.database().ref('mensagens').push({
            nome: nome.value,
            email: email.value,
            mensagem: mensagem.value
        }).then(_ => {
            button.disabled = false;
            button.firstChild.data = 'Enviar';
            nome.value = ''
            mensagem.value = ''
            email.value = ''
            alert('Mensagem enviada. Entraremos em contato em breve.')
        });
    }

}