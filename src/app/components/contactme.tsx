"use client"
import React, { useState } from 'react';

const ContactMe: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0" id='contact'>
        <iframe
          width="100%"
          height="100%"
          title="map"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.7)' }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex ">
        <div className="lg:w-1/3 md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md hover:bg-gradient-to-bl from-blue-400 to-red-400 ">
          <h2 className="text-stone-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-stone-600">We value your feedback!</p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-stone-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-stone-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-stone-600">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded border focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-stone-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-gradient-to-bl from-blue-600 to-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-rose-500 rounded text-lg"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
            {success && (
              <p className="text-xl text-stone-500 mt-3">Thank you for your feedback!</p>
            )}
            <p className="text-xl text-stone-500 mt-3">Your feedback helps us improve!</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;