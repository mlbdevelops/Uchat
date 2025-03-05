// DOM Elements
const chatList = document.getElementById('chat-list');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Firebase References
const chatsRef = db.collection('chats');
const messagesRef = db.collection('messages');

// Fetch and display chat list
chatsRef.onSnapshot((snapshot) => {
  chatList.innerHTML = '';
  snapshot.forEach((doc) => {
    const chat = doc.data();
    const li = document.createElement('li');
    li.textContent = chat.name;
    li.addEventListener('click', () => loadChat(doc.id));
    chatList.appendChild(li);
  });
});

// Load chat messages
function loadChat(chatId) {
  chatWindow.innerHTML = '';
  messagesRef
    .where('chatId', '==', chatId)
    .orderBy('timestamp')
    .onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        const message = doc.data();
        const messageElement = document.createElement('div');
        messageElement.textContent = `${message.sender}: ${message.text}`;
        chatWindow.appendChild(messageElement);
      });
    });
}

// Send message
sendButton.addEventListener('click', () => {
  const text = messageInput.value.trim();
  if (text) {
    messagesRef.add({
      chatId: selectedChatId,
      sender: auth.currentUser.email,
      text: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    messageInput.value = '';
  }
});