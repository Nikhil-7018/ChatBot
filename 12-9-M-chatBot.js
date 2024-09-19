import { GoogleGenerativeAI } from "@google/generative-ai";

        const API_KEY = "Your_API_KEY"; /// Write your API key here
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        window.sendMessage = async function() {
            const userInput = document.getElementById('user-input').value;
            const chatContainer = document.getElementById('chat-container');

            chatContainer.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
            document.getElementById('user-input').value = '';

            try {
                const result = await model.generateContent(userInput);
                const botResponse = result.response.text();
                chatContainer.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
            } catch (error) {
                console.error("Error:", error);
                chatContainer.innerHTML += `<p><strong>Bot:</strong>I don't know.</p>`;
            }
 
        }