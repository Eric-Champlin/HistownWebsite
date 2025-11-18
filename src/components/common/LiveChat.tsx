import React, { useState } from 'react';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Chat request:', { firstName, email });
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFirstName('');
      setEmail('');
    }, 3000);
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-r from-histown-primary to-histown-accent p-4 flex items-center justify-between">
            <h3 className="text-white font-bold text-lg">Start a Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-gray-600 text-sm mb-4">
                  We'd love to chat with you! Please provide your details and we'll get back to you shortly.
                </p>
                
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-histown-primary focus:border-transparent outline-none transition-all"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-histown-primary focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-histown-accent to-histown-primary text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg"
                >
                  SEND CHAT REQUEST
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Request Sent!</h4>
                <p className="text-gray-600 text-sm">
                  We'll get back to you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-histown-accent to-histown-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transform transition-all duration-300 hover:shadow-3xl"
        aria-label="Open live chat"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
          />
        </svg>
      </button>
    </>
  );
};

export default LiveChat;
