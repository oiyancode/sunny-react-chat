import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';

const Index = () => {
  const [messages, setMessages] = useState([
    {
      text: 'Olá! Eu sou uma assistente virtual amigável e prestativa. Como posso te ajudar hoje?',
      isUser: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text) => {
    const userMessage = { text, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      console.log('Tentando conectar com OpenRouter...');
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

      if (!apiKey) {
        throw new Error('Chave da API não encontrada');
      }

      const response = await fetch(
        'https://openrouter.ai/api/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            'HTTP-Referer': window.location.origin,
          },
          body: JSON.stringify({
            model: 'meta-llama/llama-3.2-3b-instruct:free',
            messages: [
              {
                role: 'system',
                content:
                  'Você é uma assistente virtual amigável e prestativa. Responda de forma clara e detalhada em português do Brasil. Seja conversacional e útil.',
              },
              {
                role: 'user',
                content: text,
              },
            ],
            max_tokens: 500,
            temperature: 0.7,
            top_p: 0.9,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      setMessages((prev) => [...prev, { text: aiResponse, isUser: false }]);
    } catch (error) {
      console.error('Erro:', error);
      setMessages((prev) => [
        ...prev,
        {
          text: `Erro: ${error.message}`,
          isUser: false,
        },
      ]);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="glass-effect border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-background" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">
                Chatbot com IA
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Envie sua dúvida e seja respondido na hora! Estamos online 24/7!
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-6">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
          ))}
          {isLoading && (
            <div className="flex gap-3 mb-4 animate-pulse">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-background" />
              </div>
              <div className="glass-effect rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div />
        </div>
      </main>

      {/* Input Area */}
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </footer>
    </div>
  );
};

export default Index;
