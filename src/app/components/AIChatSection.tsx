import { useState } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

const sampleResponses = [
  "I'm Ekansh Mishra, a BTech Computer Science student specializing in AI and Software Development. I'm passionate about creating intelligent solutions!",
  "I have strong skills in Python, React, TypeScript, and Machine Learning. I love working with modern tech stacks to build scalable applications.",
  "I'm currently seeking Software Development and AI internship opportunities where I can apply my skills and continue learning.",
  "Check out my projects section to see what I've built! I've worked on AI chatbots, full-stack applications, and data visualization dashboards.",
  "I'm proficient in both frontend (React, TypeScript) and backend (Python, FastAPI) development, with a special focus on integrating AI/ML capabilities.",
];

export function AIChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: "Hi! I'm an AI assistant trained on Ekansh's portfolio. Ask me anything about his skills, projects, or experience!"
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'ai',
        content: sampleResponses[Math.floor(Math.random() * sampleResponses.length)]
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="ai-chat" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-cyan-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ask AI About Me
            </h2>
          </div>
          <p className="text-gray-400">
            Chat with an AI trained on my portfolio information
          </p>
        </div>

        <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden shadow-2xl">
          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                      : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User size={20} className="text-white" />
                  ) : (
                    <Bot size={20} className="text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                      : 'bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-white/10 p-4 bg-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects, experience..."
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400"
              />
              <button
                onClick={handleSend}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
