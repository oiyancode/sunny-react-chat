import { Bot, User } from "lucide-react";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div
      className={`flex gap-3 mb-4 animate-slide-up ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
          <Bot className="w-5 h-5 text-background" />
        </div>
      )}
      
      <div
        className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-gradient-to-r from-primary to-accent text-background"
            : "glass-effect text-foreground"
        }`}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {message}
        </p>
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center flex-shrink-0">
          <User className="w-5 h-5 text-background" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
