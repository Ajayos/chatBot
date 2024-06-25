// Create a function to open the chat model box
function openChatBox() {
    // Code to open the chat model box goes here
}

// Create a function to handle the button click event
function handleButtonClick() {
    openChatBox();
}

// Create a button element for the message icon
const messageIcon = document.createElement('button');
messageIcon.innerHTML = 'Message'; // You can customize the icon here

// Add a click event listener to the button
messageIcon.addEventListener('click', handleButtonClick);

// Append the button to the HTML body or any other element
document.body.appendChild(messageIcon);