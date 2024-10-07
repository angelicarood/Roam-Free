import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // サインアップロジックをここに追加します
    console.log(`Signing up with email: ${email}`);
  };

  return (
    <div className="newsletter-signup">
      <h2>START PLANNING</h2>
      <p>
        Tell people what they can expect when they sign up with their email, like a newsletter, discounts or updates.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
