document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        const chatBox = document.getElementById('chat-box');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);

        // Simulate a received message
        setTimeout(() => {
            const receivedMessageElement = document.createElement('div');
            receivedMessageElement.classList.add('message', 'received');
            receivedMessageElement.textContent = "This is a reply.";
            chatBox.appendChild(receivedMessageElement);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);

        messageInput.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}