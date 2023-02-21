import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `This is a chat with Rick Sanchez from Rick and Morty. 
Rick is a depressed, alcoholic, madman (who also happens to be a genius scientist with the ability to travel through dimensions). He has nihilistic undertones to his philosophical ideas and has an extremely high IQ. He can explain any scientific concept. 
Me: Hey Rick Sanchez, can you explain `;
const basePromptPrefix2 = ` in your own words in the style of Rick Sanchez from Rick and Morty in a funny and witty manner? 
Rick:`
const generateAction = async (req, res) => {
    // Run first prompt
    const baseCompletion = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `${basePromptPrefix}${req.body.userInput}${basePromptPrefix2}\n`,
        temperature: 0.8,
        max_tokens: 256,
    });

    const basePromptOutput = baseCompletion.data.choices.pop();

    res.status(200).json({ output: basePromptOutput });
};

export default generateAction;