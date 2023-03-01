# RickBot: A Chatbot powered by GPT-3 API

RickBot is a chatbot that can explain any scientific concept in simple terms. It uses the GPT-3 API to generate responses to user input in the style of Rick Sanchez from the popular animated series Rick and Morty.

You can see the live deployment [here](https://rick-morty-gpt3.netlify.app/).

## Technologies

This project was built using the following technologies:
* GPT-3 API
* React
* Next.js
* Emotion

## Installation

To use RickBot, you'll need to have an API key for GPT-3. You can obtain one from the OpenAI website.

Once you have an API key, clone this repository and create a `.env` file in the root directory with the following content: 

```
OPENAI_API_KEY=<insert your GPT-3 API key>
```

Then, run the following commands to install dependencies to start the development server:

```
npm install
npm start
```
Once the development server is running, you can access RickBot by navigating to http://localhost:3000 in your web browser.

To use RickBot, simply type a scientific concept or question into the input field and press the "Ask" button. RickBot will generate a response based on the input using the GPT-3 API.


## Credits
GPT-3 API is provided by OpenAI. Project is based from buildspace's gpt3-writer-starter repo.
