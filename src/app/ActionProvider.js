require('dotenv').config();
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    baseURL: process.env.URL,
    dangerouslyAllowBrowser: true
})

class ActionProvider {
    createChatBotMessage
    setState
    createClientMessage
    stateRef
    createCustomMessage

    constructor(
        createChatBotMessage,
        setStateFunc,
        createClientMessage,
        stateRef,
        createCustomMessage,
        ...rest
    ) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
        this.stateRef = stateRef;
        this.createCustomMessage = createCustomMessage;
    }

    callGenAI = async (prompt) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: "system", content: "You are a credit card advisor for the India market" },
                { role: "user", content: prompt } // Add user's prompt here
            ],
            temperature: 0.5,
            max_tokens: 100,
        });

        if (chatCompletion && chatCompletion.choices && chatCompletion.choices.length > 0) {
            return chatCompletion.choices[0].message.content;
        } else {
            console.error("Unexpected API response:", chatCompletion);
            return "I'm sorry, I couldn't process that.";
        }
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
        return "There was an error generating a response.";
    }
};


    timer = ms => new Promise(res => setTimeout(res, ms));

    generateResponseMessage = async (userMessage) => {
        const responseFromGPT = await this.callGenAI(userMessage);
        const messages = responseFromGPT.split('\n').filter((msg) => msg.trim().length > 0);
    
        for (const msg of messages) {
            const message = this.createChatBotMessage(msg);
            this.updateChatBotmessage(message);
            await this.timer(1000);
        }
    };

    respond = (message) => {
        this.generateResponseMessage(message);
    }

    updateChatBotmessage = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: prevState.messages ? [...prevState.messages, message] : [message],
        }));
    };
    
}

export default ActionProvider;