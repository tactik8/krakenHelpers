
let apikey1 = 'sk-proj-U7IWqJiLbVaTGHZ'
let apikey2 =  '3U637T3BlbkFJdXJ1xNv2W5U52d9MKijr'

let APIKEY = apikey1 + apikey2



// [{"role": "user", "content": "Say this is a test!"}],


export class KrChatGPT {

        constructor(){

                
        }

        


        async ask(messages) {
            const apiKey = APIKEY;
            const url = "https://api.openai.com/v1/chat/completions";

            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            };

            const data = {
                model: 'gpt-4o-mini',
                
                messages: messages,
            };

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data)
                });

               
                if (!response.ok) {
                    console.log(response.statusText)
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();
                return result.choices[0].message.content;
                
            } catch (error) {
                console.error("Error calling OpenAI API:", error);
                return null;
            }
        }

        

}

