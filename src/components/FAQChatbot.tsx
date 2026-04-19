import { useState, useRef, useEffect } from 'react';
import { faqChatbotData } from '../data/faqChatbotData';
import './FAQChatbot.css';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function FAQChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi! 👋 I\'m the FixMyRide assistant. Ask me anything about our services, pricing, booking, or anything else!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Improved keyword matching algorithm with better scoring
  const findBestMatch = (userInput: string): string => {
    const userWords = userInput
      .toLowerCase()
      .split(/\s+/)
      .filter(w => w.length > 2);

    if (userWords.length === 0) {
      return "Please ask me a question about our services! 😊";
    }

    let bestMatch = null;
    let highestScore = 0;

    faqChatbotData.forEach(faq => {
      let score = 0;
      const faqKeywords = faq.keywords.map(k => k.toLowerCase());
      const faqQuestion = faq.question.toLowerCase();

      // Check how many user words match FAQ keywords (exact or partial)
      userWords.forEach(userWord => {
        faqKeywords.forEach(keyword => {
          if (keyword === userWord) {
            score += 3; // Exact match worth more
          } else if (keyword.includes(userWord) && userWord.length > 3) {
            score += 1.5;
          } else if (userWord.includes(keyword) && keyword.length > 3) {
            score += 1;
          }
        });
      });

      // Bonus if question contains most keywords from user input
      const matchedKeywords = userWords.filter(word =>
        faqKeywords.some(kw => kw.includes(word))
      );
      if (matchedKeywords.length > 0) {
        score += matchedKeywords.length * 0.5;
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = faq;
      }
    });

    // Only return if we have a confident match (score >= 2)
    if (bestMatch && highestScore >= 2) {
      return bestMatch.answer;
    }

    // Default response for no good match
    return `I'm not sure about that. 🤔 Common topics I can help with:\n\n• Services & pricing\n• Booking & appointments\n• Paint colors & finishes\n• Service duration & timings\n• Discounts & packages\n• Warranty & guarantees\n• Technicians & certifications\n• Delivery & location\n\nFeel free to ask anything else!`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot thinking and generate response
    setTimeout(() => {
      const botResponse = findBestMatch(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const quickQuestions = [
    'What services do you offer?',
    'How much do services cost?',
    'How do I book?',
    'Are you available 24/7?'
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Close chat" : "Open chat"}
      >
        <span className="chatbot-icon">
          {isOpen ? '✕' : '💬'}
        </span>
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>FixMyRide Assistant</h3>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map(message => (
              <div
                key={message.id}
                className={`message ${message.sender}`}
              >
                <div className="message-bubble">
                  {message.text}
                </div>
                <span className="message-time">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-bubble typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div className="quick-questions">
              <p>Quick questions:</p>
              <div className="quick-buttons">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    className="quick-btn"
                    onClick={() => handleQuickQuestion(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSendMessage} className="chatbot-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="chatbot-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="send-btn"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
