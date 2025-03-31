
import React, { useState } from 'react';
import { toast } from "sonner";

const NotifyForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // This would normally connect to a backend service
    // For this static page, we'll just simulate success after a delay
    setTimeout(() => {
      toast.success("Thank you! We'll notify you when we launch.");
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Enter your email address"
          className="stellar-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email for launch notification"
        />
        <button 
          type="submit" 
          className="stellar-button whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting
            </span>
          ) : "Notify Me"}
        </button>
      </div>
      <p className="text-xs text-earthful-earth mt-2 text-center">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
};

export default NotifyForm;
