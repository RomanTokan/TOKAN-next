import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { input } = await req.json();

    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content:
            "You analyze stereotypes carefully, neutrally, and avoid offensive or hateful language. Explain context and nuance.",
        },
        {
          role: "user",
          content: `Analyze stereotypes about: ${input}`,
        },
      ],
    });

    return NextResponse.json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("OPENAI ERROR:", error);

    return NextResponse.json(
      { error: "AI request failed" },
      { status: 500 }
    );
  }
}