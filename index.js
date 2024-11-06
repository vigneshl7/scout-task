function handleChatClick() {
    const chatCard = document.getElementById('chatCard');
    chatCard.style.display = (chatCard.style.display === 'none' || chatCard.style.display === '') ? 'block' : 'none';
}


function sendChat() {
    const messageInput = document.getElementById('messageInput');
    const trimMessage = messageInput.value.trim();

    if (trimMessage) { 
        const messageContainer = document.getElementById('Messages');
        
        const newMessage = document.createElement('div');
        newMessage.className = 'message my-message';  
        const currentTime = getCurrentTime();
        newMessage.innerHTML = `
            <div class="avatat-chat">
                <img src="/asset/image.png" alt="Avatar" class="avatar-icon">
                <span class="status-indicator online"></span>
            </div>
            <span class="message-text">${trimMessage}</span>
             <span class="time-section">${currentTime}</span>

        `;
        
        messageContainer.appendChild(newMessage);
        messageInput.value = '';

        messageContainer.scrollTop = messageContainer.scrollHeight;
    }
}
//this will execute if press enter after input text in chat
document.getElementById('messageInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && event.target.value.trim()) { 
        event.preventDefault(); 
        sendChat(); 
    }
});
window.onclick = function(event) {
    const chatCard = document.getElementById('chatCard');
    const chatButton = document.querySelector('.chat-icon');

    if (!chatCard.contains(event.target) && event.target !== chatButton) {
        chatCard.style.display = 'none';
    }
};
//get time to show in chat bot
document.getElementById("receipient-time").innerText=getCurrentTime()


function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Format minutes with leading zero
    const ampm = hours >= 12 ? 'pm' : 'am';

    hours = hours % 12 || 12; 

    return `${hours}:${minutes}${ampm}`;
}