let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userMsgInput = document.getElementById("userInput");
let userSendButton = document.getElementById("sendMsgBtn");
let msgContainer = document.getElementById("chatContainer");


let itemNo = 0;
userSendButton.onclick = function() {
    let msgToChatBotContainer = document.createElement("div");
    msgContainer.appendChild(msgToChatBotContainer);
    msgToChatBotContainer.classList.add("msg-to-chatbot-container");
    let msgFromChatBotContainer = document.createElement("div");
    msgContainer.appendChild(msgFromChatBotContainer);
    msgFromChatBotContainer.classList.add("msg-from-chatbot-container");

    let msgParaNew = document.createElement("p");
    msgParaNew.style.display = "inline-block";
    msgToChatBotContainer.appendChild(msgParaNew);
    msgParaNew.textContent = userMsgInput.value;
    console.log(userMsgInput.value);
    msgParaNew.classList.add("msg-to-chatbot");
    userMsgInput.value = "";
    let chatBotParaNew = document.createElement("p");
    chatBotParaNew.style.display = "inline-block";
    msgFromChatBotContainer.appendChild(chatBotParaNew);
    chatBotParaNew.textContent = chatbotMsgList[itemNo];
    chatBotParaNew.classList.add("msg-from-chatbot");
    itemNo += 1;
};
