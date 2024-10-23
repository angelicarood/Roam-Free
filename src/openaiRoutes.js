const { Configuration, OpenAIApi } = require('openai'); 

//initiate OpenAI
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message){
    const res = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        prompt: message,
        temperature: 0.9, //how creative the answer can be
        max_tokens: 256,  //max number of tokens to generate
        top_p: 1, 
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.data.choices[0].text;
}