import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const PORTFOLIO_CONTEXT = `
You are an AI assistant for Ekansh Mishra's portfolio website. 
Answer questions about Ekansh based on the following information:

NAME: Ekansh Mishra
EDUCATION: BTech Computer Science (AI specialization)
SKILLS: Python, React, TypeScript, JavaScript, Machine Learning, FastAPI, Node.js, SQL, Git, Docker
PROJECTS: AI chatbots, full-stack web applications, data visualization dashboards, ML models
INTERESTS: Artificial Intelligence, Software Development, Open Source
LOOKING FOR: Software Development and AI internship/job opportunities
LOCATION: India
EXPERIENCE: Strong in both frontend (React, TypeScript) and backend (Python, FastAPI) development, with focus on AI/ML integration

IMPORTANT RULES:
- Keep answers concise and friendly (2-4 sentences max)
- Only answer questions about Ekansh's skills, projects, education, and experience
- If asked something unrelated, politely redirect to portfolio topics
- Be enthusiastic and professional
`;

Deno.serve(async (req: Request) => {
    // Handle CORS
    if (req.method === "OPTIONS") {
        return new Response("ok", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
            },
        });
    }

    try {
        const { message } = await req.json();

        if (!message) {
            return new Response(JSON.stringify({ error: "message is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            });
        }

        // Use Gemini API
        const geminiApiKey = Deno.env.get("GEMINI_API_KEY");

        if (!geminiApiKey) {
            // Fallback: smart keyword-based responses
            const reply = getSmartResponse(message);
            return new Response(JSON.stringify({ reply }), {
                headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
            });
        }

        const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                { text: PORTFOLIO_CONTEXT + "\n\nUser question: " + message },
                            ],
                        },
                    ],
                    generationConfig: {
                        maxOutputTokens: 200,
                        temperature: 0.7,
                    },
                }),
            }
        );

        const geminiData = await geminiRes.json();
        const reply =
            geminiData?.candidates?.[0]?.content?.parts?.[0]?.text ||
            getSmartResponse(message);

        return new Response(JSON.stringify({ reply }), {
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ reply: getSmartResponse("") }), {
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
    }
});

function getSmartResponse(message: string): string {
    const msg = message.toLowerCase();

    if (msg.includes("skill") || msg.includes("tech") || msg.includes("language") || msg.includes("know")) {
        return "Ekansh is skilled in Python, React, TypeScript, and Machine Learning. He's comfortable with both frontend (React, TypeScript) and backend (Python, FastAPI) development, with a strong focus on integrating AI/ML capabilities into applications.";
    }
    if (msg.includes("project") || msg.includes("built") || msg.includes("work")) {
        return "Ekansh has worked on AI chatbots, full-stack web applications, and data visualization dashboards. He loves building intelligent solutions that combine modern web tech with AI capabilities. Check out the Projects section to see his work!";
    }
    if (msg.includes("experience") || msg.includes("background") || msg.includes("study") || msg.includes("education")) {
        return "Ekansh is a BTech Computer Science student specializing in AI. He has strong practical experience building real-world projects with Python, React, and ML frameworks, and is actively seeking software development and AI internship opportunities.";
    }
    if (msg.includes("contact") || msg.includes("hire") || msg.includes("reach") || msg.includes("email")) {
        return "You can reach Ekansh through the Contact section below! He's currently open to Software Development and AI internship/job opportunities. Feel free to send him a message directly from this portfolio.";
    }
    if (msg.includes("location") || msg.includes("where") || msg.includes("from")) {
        return "Ekansh is based in India and is open to both remote and on-site opportunities. He's passionate about working on challenging problems in AI and software development.";
    }
    if (msg.includes("intern") || msg.includes("job") || msg.includes("opportunit") || msg.includes("open")) {
        return "Yes! Ekansh is actively looking for Software Development and AI internship opportunities. He brings expertise in Python, React, TypeScript, and ML — feel free to reach out via the Contact section!";
    }

    return "I'm Ekansh's AI assistant! I can answer questions about his skills (Python, React, TypeScript, ML), projects, education (BTech CS with AI focus), or how to get in touch. What would you like to know?";
}
