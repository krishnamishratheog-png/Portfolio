import { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, User, Sparkles, Wifi, WifiOff, Clock } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  content: string;
  isError?: boolean;
}

const BACKEND_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const API_URL = `${BACKEND_BASE}/chat`;

export function AIChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: "Hi! I'm an AI assistant trained on Ekansh's portfolio. Ask me anything about his skills, projects, or experience!",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState<'unknown' | 'online' | 'offline'>('unknown');
  const [rateLimitCooldown, setRateLimitCooldown] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Countdown timer for rate limit
  useEffect(() => {
    if (rateLimitCooldown <= 0) return;
    const t = setTimeout(() => setRateLimitCooldown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [rateLimitCooldown]);

  // Ping backend on mount to show live status
  useEffect(() => {
    fetch(BACKEND_BASE)
      .then(() => setBackendStatus('online'))
      .catch(() => setBackendStatus('offline'));
  }, []);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });

      setBackendStatus('online');

      if (!res.ok) {
        let detail = `Server returned ${res.status}`;
        try {
          const errData = await res.json();
          detail = errData.detail || detail;
        } catch { /* ignore */ }

        // Rate limit — start cooldown timer
        if (res.status === 429) {
          setRateLimitCooldown(20);
        }

        setMessages((prev) => [
          ...prev,
          { role: 'ai', content: `⚠️ ${detail}`, isError: true },
        ]);
        return;
      }

      const data = await res.json();
      const aiMessage: Message = {
        role: 'ai',
        content: data.reply || 'This information is not mentioned in the portfolio.',
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      // True network error — backend not reachable
      setBackendStatus('offline');
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          content: '🔴 Backend not reachable. Make sure the Python server is running:\n`python -m uvicorn main:app --port 8000 --reload`',
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = ['What are his skills?', 'Tell me about his projects', 'Is he available for internship?'];

  return (
    <section id="ai-chat" className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="text-cyan-400" size={28} />
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Ask AI About Me
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base">Chat with an AI trained on my portfolio information</p>

          {/* Backend status pill */}
          <div className="flex items-center justify-center mt-3">
            <span
              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border ${backendStatus === 'online'
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : backendStatus === 'offline'
                  ? 'bg-red-500/10 border-red-500/30 text-red-400'
                  : 'bg-white/5 border-white/10 text-gray-400'
                }`}
            >
              {backendStatus === 'online' ? (
                <><Wifi size={12} /> AI Backend Online</>
              ) : backendStatus === 'offline' ? (
                <><WifiOff size={12} /> AI Backend Offline</>
              ) : (
                <>· Checking backend...</>
              )}
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden shadow-2xl">
          {/* Chat Messages */}
          <div className="h-[380px] md:h-[480px] overflow-y-auto p-4 md:p-6 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2 md:gap-3 ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${message.role === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500'
                    : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                    }`}
                >
                  {message.role === 'user' ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[80%] md:max-w-[75%] rounded-2xl px-3 py-2 md:px-4 md:py-3 ${message.role === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white'
                    : message.isError
                      ? 'bg-red-500/10 border border-red-500/20 text-red-300'
                      : 'bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200'
                    }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed whitespace-pre-line">{message.content}</p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex gap-2 md:gap-3 flex-row">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-500">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions (only shown when just the greeting is visible) */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); }}
                  className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-white/10 p-3 md:p-4 bg-white/5">
            <div className="flex gap-2 md:gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={rateLimitCooldown > 0 ? `Rate limited — wait ${rateLimitCooldown}s...` : 'Ask about skills, projects, experience...'}
                disabled={loading || rateLimitCooldown > 0}
                className="flex-1 px-3 py-2.5 md:px-4 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-gray-400 disabled:opacity-60 text-sm"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim() || rateLimitCooldown > 0}
                className="px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed flex-shrink-0"
              >
                {rateLimitCooldown > 0 ? <Clock size={18} /> : <Send size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
