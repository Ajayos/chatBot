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
              position: fixed;
              right: 20px;
              bottom: 20px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
              transition: background-color 0.3s;
              border: 2px solid blue;
          }
  
          .chatbot-button:hover {
              background-color: #0056b3;
          }
  
          .chatbot-icon {
              width: 30px;
              height: 30px;
          }
      `;
    document.head.appendChild(style);
  
    // Add click event listener
    chatbotButton.addEventListener("click", function () {
      alert("Chatbot button clicked!");
      // Add your chatbot logic here
    });
  });
  