import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

//NextResponse is used mainly in server side rendering
//The NextResponse object allows you to create and modify responses 
// that will be sent back to the client when handling requests on the server-side. 
// This can be useful in scenarios where you need to perform server-side logic before sending the response,
//  or when you want to return specific HTTP status codes, headers, or content.

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }
//above are logics 

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });
   
    return NextResponse.json(response.data.choices[0].message);
    //returns response[0] first answer from that
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

//post request which is serverless async function used in next js which takes req from HTTP body and does logic and sends result
//extracts userid from auth() by clerk
//exracts the req body from the http body
//destruct the messages 
//some checks are made 
//if it passes all checks then chatCompletion func is called with 3.5 version and messages 
//returns the first choices of the message
