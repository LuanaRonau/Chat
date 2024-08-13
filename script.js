let chat = document.getElementById('chat');
let textarea = document.getElementById('textarea');


// Faz aparecer no chat as últimas mensagens (parte inferior do scroll)
window.addEventListener('load', function() {
    chat.scrollTop = chat.scrollHeight;
});


textarea.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage(textarea.value);
    }
});

function sendMessage(message) {
    if (message.trim()==='') {return};

    textarea.value = null;

    let box = document.createElement('div');
    box.classList.add('box-message');
    
    let meta = document.createElement('h2');
    const now = new Date();
    const nowFormatted = now.getHours() + ':' + now.getMinutes();
    meta.textContent = `Você - ${nowFormatted}`;
    meta.classList.add('meta', 'me');
    box.appendChild(meta);

    let ballon = document.createElement('div');
    ballon.classList.add('ballon', 'me');
    box.appendChild(ballon);

    let content = document.createElement('h2');
    content.textContent = message;
    content.classList.add('message');
    ballon.appendChild(content);

    chat.appendChild(box);

    chat.scrollTop = chat.scrollHeight;
}


function resizeTextareaHeight() {
    if (textarea.scrollHeight < 94) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }
}
