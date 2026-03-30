import React, { useState } from 'react';
import { LuMessageSquareShare } from "react-icons/lu";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { ...formData, access_key: '18445b13-d5d1-4fa9-a928-b7b2977bca4e' };
    // const payload = { ...formData, access_key: 'dc202a43-1fab-4e5a-a483-d8ff2a156703' };
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Reset the form
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-xl border border-blue-100 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500/70 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl border border-blue-100 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500/70 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Enter your message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-blue-100 dark:border-slate-700 bg-white/90 dark:bg-slate-900/80 placeholder-slate-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500/70 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-3 px-6 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all ${
          status === 'submitting'
            ? 'bg-blue-400 text-white'
            : 'bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-[1.01] text-white shadow-lg shadow-blue-500/20'
        }`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
        {status !== 'submitting' && <LuMessageSquareShare className="w-5 h-5" />}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center mt-4">{errorMessage}</p>
      )}
    </form>
  );
}
