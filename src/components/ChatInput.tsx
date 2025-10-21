import { useState } from 'react';
import { Send, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatInput = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 glass-effect rounded-2xl"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
        disabled={isLoading}
        className="flex-1 bg-input border-0 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all disabled:opacity-50"
      />
      <Button
        type="submit"
        disabled={!input.trim() || isLoading}
        className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-background px-6 rounded-xl transition-all disabled:opacity-50"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
      </Button>
    </form>
  );
};

export default ChatInput;
