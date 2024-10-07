import React, { useState } from 'react';

const EmailSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // メールアドレスを送信するロジックを追加
    console.log('Email submitted:', email);
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h2 className="text-3xl font-bold mb-4">START PLANNING</h2>
      <p className="text-center mb-6">
        Tell people what they can expect when they sign up with their email, like a newsletter, discounts or updates.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-80 p-2 border border-gray-400 rounded mb-4"
        />
        <button
          type="submit"
          className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;


