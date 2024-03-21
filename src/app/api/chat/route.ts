import { OpenAIEdgeStream } from "openai-edge-stream";

export const config = {
    runtime: "edge",
};

export async function POST(req: Request) {
    console.log('messagexxx')
    try {
        const { message } = await req.json();

        const stream = await OpenAIEdgeStream('https://api.openai.com/v1/chat/completions',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
                },

                method: 'POST',
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ content: message, role: 'user' }],
                    stream: true
                }),
            }
        )

        console.log(stream, 'stream')

        return new Response(stream);
    } catch (error) {
        console.log('AN ERROR OCCURRED IN SEND MESSAGE')
    }
}