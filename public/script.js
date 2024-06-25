document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.querySelector(".chatbot-by-ajay-os");

  // Check if the container is found
  if (!chatbotContainer) {
    console.error('Element with class "chatbot-by-ajay-os" not found.');
    return;
  }

  // Create and style the button
  const chatbotButton = document.createElement("div");
  chatbotButton.classList.add("chatbot-button");
  chatbotButton.innerHTML = `
      <svg class="chatbot-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30px" height="30px">
          <path fill="#ffffff" d="M32,2C15.4,2,2,15.4,2,32s13.4,30,30,30s30-13.4,30-30S48.6,2,32,2z"/>
          <circle cx="22" cy="24" r="4" fill="#007bff"/>
          <circle cx="42" cy="24" r="4" fill="#007bff"/>
          <path fill="#007bff" d="M32,46c-6.6,0-12-5.4-12-12h4c0,4.4,3.6,8,8,8s8-3.6,8-8h4C44,40.6,38.6,46,32,46z"/>
      </svg>
  `;

  chatbotContainer.appendChild(chatbotButton);

  // Add styles
  const style = document.createElement("style");
  style.textContent = `
      body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: relative;
      }

      .chatbot-button {
          width: 60px;
          height: 60px;
          background-color: #007bff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 20px;
          cursor: pointer;
          position: absolute;
          right: 20px;
          bottom: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: background-color 0.3s;
          z-index: 999;
          border: 2px solid blue;
      }

      .chatbot-button:hover {
          background-color: #0056b3;
      }

      .chatbot-icon {
          width: 30px;
          height: 30px;
      }

      .chatbot-window {
          width: 300px;
          height: 400px;
          background-color: #ffffff;
          border: 1px solid #ccc;
          border-radius: 10px;
          position: absolute;
          right: 20px;
          bottom: 80px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1000;
      }

      .chatbot-header {
          background-color: #007bff;
          color: #fff;
          padding: 10px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          text-align: center;
          display: flex;
          justify-content: space-between;
          align-items: center;
      }

      .chatbot-header .close-button {
          cursor: pointer;
          color: #fff;
          background: none;
          border: none;
          font-size: 16px;
      }

      .chatbot-header .close-button:hover {
          color: #f44336;
      }

      .chatbot-messages {
          flex: 1;
          padding: 10px;
          overflow-y: auto;
          position: relative;
          z-index: 1001;
      }

      .chatbot-input {
          display: flex;
          padding: 10px;
          border-top: 1px solid #ccc;
      }

      .chatbot-input input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-right: 10px;
      }

      .chatbot-input button {
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
      }

      .chatbot-input button:hover {
          background-color: #0056b3;
      }

      .message {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          max-width: 100%;
      }

      .message.user {
          justify-content: flex-end;
      }

      .message.bot {
          justify-content: flex-start;
      }

      .message img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
      }

      .message.user img {
          order: 2;
          margin-right: 0;
          margin-left: 10px;
      }

      .message p {
          background-color: #f1f1f1;
          padding: 10px;
          border-radius: 10px;
          max-width: 70%;
      }

      .message.user p {
          background-color: #007bff;
          color: #fff;
      }

      .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999; /* Ensure it's above the chatbot window */
          display: none;
      }

  `;
  document.head.appendChild(style);

  // Initial messages array
  let messages = [
    { message: "Hello! How can I assist you today?", sender: "bot" },
    { message: "Hi! I need some help with my account.", sender: "user" },
    { message: "Sure, I'd be happy to help. What do you need assistance with?", sender: "bot"}
  ];

  // Function to add a message to the chatbot window
  function addMessage(message, sender) {
    const chatbotMessages = document.querySelector(".chatbot-messages");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);

    // Set message content based on sender
    if (sender === "bot") {
      messageElement.innerHTML = `
      <svg class="avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30" height="30">
        <rect x="14" y="10" width="36" height="44" rx="10" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
        <rect x="28" y="4" width="8" height="10" rx="2" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
        <circle cx="22" cy="22" r="4" fill="#007bff"/>
        <circle cx="42" cy="22" r="4" fill="#007bff"/>
        <rect x="24" y="32" width="16" height="4" fill="#007bff"/>
      </svg>
      <p>${message}</p>`;
    } else if (sender === "user") {
      messageElement.innerHTML = `
              <p>${message}</p>
              <svg class="avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30" height="30">
                <circle cx="32" cy="20" r="12" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
                <rect x="24" y="12" width="16" height="8" fill="#000000"/>
                <rect x="24" y="32" width="16" height="20" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
                <rect x="8" y="36" width="16" height="4" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
                <rect x="40" y="36" width="16" height="4" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
                <rect x="24" y="52" width="6" height="10" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
                <rect x="34" y="52" width="6" height="10" fill="#ffffff" stroke="#007bff" stroke-width="2"/>
              </svg>`;
    }

    chatbotMessages.appendChild(messageElement);

    // Scroll to the bottom of the messages
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Add click event listener to the button to open the chatbot window
  chatbotButton.addEventListener("click", function () {
    // Check if chatbot window already exists
    let chatbotWindow = document.querySelector(".chatbot-window");
    if (!chatbotWindow) {
      // Create chatbot window
      chatbotWindow = document.createElement("div");
      chatbotWindow.classList.add("chatbot-window");

      chatbotWindow.innerHTML = `
              <div class="chatbot-header">
                  Chatbot
                  <button class="close-button">X</button>
              </div>
              <div class="chatbot-messages"></div>
              <div class="chatbot-input">
                  <input type="text" placeholder="Type a message...">
                  <button>Send</button>
              </div>
          `;

      document.body.appendChild(chatbotWindow);

      // Add initial messages
      messages.forEach((msg) => {
        addMessage(msg.message, msg.sender);
      });

      // Add event listener for the send button
      const sendButton = chatbotWindow.querySelector(".chatbot-input button");
      sendButton.addEventListener("click", function () {
        const input = chatbotWindow.querySelector(".chatbot-input input");
        const messageText = input.value.trim();
        if (messageText) {
          // Add user message to the chat
          addMessage(messageText, "user");

          // Simulate bot response after a delay (for demonstration)
          setTimeout(function () {
            const botResponse =
              "Thank you for your message. We are here to help!";
            addMessage(botResponse, "bot");
          }, 1000);

          input.value = "";

          // Focus on the input field after sending message
          input.focus();
        }
      });

      // Close chatbot window when clicking on close button
      const closeButton = chatbotWindow.querySelector(".close-button");
      closeButton.addEventListener("click", function () {
        document.body.removeChild(chatbotWindow);
        document.body.removeChild(overlay);
      });

      // Create overlay to close chatbot window on outside click
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      document.body.appendChild(overlay);

      // Close chatbot window when clicking outside of it
      overlay.addEventListener("click", function () {
        document.body.removeChild(chatbotWindow);
        document.body.removeChild(overlay);
      });

      const inputField = chatbotWindow.querySelector(".chatbot-input input");
      inputField.focus();
    }
  });
});
