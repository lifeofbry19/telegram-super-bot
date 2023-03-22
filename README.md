# Telegram SuperBot

This is a bot written in Node.js with Express.js for the messaging app Telegram. It's primary feature is that it leverages OpenAIs GPT-3 model for advanced language processing. Simply promptign the bot with `@SuperBot` followed by your prompt will then fire off a request to OpenAIs API and return the response as a reply in chat. 

## Full Demo

https://user-images.githubusercontent.com/99948055/226775434-d713048c-a231-4679-9125-fad43e0835df.mov


## Features


### Leverages OpenAIs GPT Model
SuperBot is connected to the OpenAI API and utilizes the GPT-3.5-Turbo (most up to date GPT model besides GPT-4) for advanced language processing. It allows users in a telegram group chat immediate access to the powerful language model with the ease of not having to open up a web browser. I found this is particularly useful when you are going to use chatgpt to share something with someone else. You don't have to go back and forth anymore, it's all in one place! 

### Adjustable Parameters
SuperBot goes beyond what you have access to with the ChatGPT ui in that it leverages some of the customization options that OpenAI exposes with their API. Specifically, SuperBot allows you to update the temperature or the "riskiness" of GPTs replies by simply calling the `/updatetemp` command and giving it a number between 0 and 1. 

### Extra 
SuperBot also has some built in features for fun such as a dice roll feature for random number generation between 1-6 as well as a slot machine feature with random outcomes, both are demonstrated in the demo above. I plan on continuing to add to these extra features, as they can be fun to play with in a group chat. 

## Takeaways from Building
This project helped to deepen my understanding of Node.js and networking. I got some practice with setting up a webhook to listen for realtime updates to the chat, which is preferable in this case to constant polling with http reqeusts from a traditional web server. I also set up my first instance of a localhost server that has a tunnel which makes it accessible publicly, using a service called [ngrok](https://ngrok.com/product/secure-tunnels). 
