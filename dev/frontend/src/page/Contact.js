import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [comments, setComments] = useState('');
  const [submittedComments, setSubmittedComments] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== '' && comments.trim() !== '') {
      const commentData = {
        name: name,
        comment: comments,
      };
      setSubmittedComments([...submittedComments, commentData]);
      setName('');
      setEmail('');
      setPhoneNumber('');
      setComments('');
    }
  };

  const renderSubmittedComments = () => {
    if (submittedComments.length === 0) {
      return null;
    }

    return (
      <div>
        <h3>Submitted Comments:</h3>
        {submittedComments.map((comment, index) => (
          <div key={index}>
            <p>
              <strong>Name:</strong> {comment.name}
            </p>
            <p>
              <strong>Comment:</strong> {comment.comment}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f1f1f1',
      }}
    >
      <h2
        style={{
          color: '#333',
          fontSize: '24px',
          marginBottom: '20px',
        }}
      >
        Contact Us
      </h2>
      <p>
        <strong>Email:</strong> TikTak@gmail.com
      </p>
      <p>
        <strong>Phone Number:</strong> 75 022 011
      </p>
      <form onSubmit={handleSubmit}>
        <label
          style={{
            display: 'block',
            marginBottom: '10px',
          }}
          htmlFor="name"
        >
          Name:
        </label>
        <input
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
          }}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label
          style={{
            display: 'block',
            marginBottom: '10px',
          }}
          htmlFor="email"
        >
          Email:
        </label>
        <input
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
          }}
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label
          style={{
            display: 'block',
            marginBottom: '10px',
          }}
          htmlFor="phoneNumber"
        >
          Phone Number:
        </label>
        <input
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginBottom: '10px',
          }}
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          required
        />

        <label
          style={{
            display: 'block',
            marginBottom: '10px',
          }}
          htmlFor="comments"
        >
          Comments:
        </label>
        <textarea
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            resize: 'vertical',
            marginBottom: '10px',
          }}
          id="comments"
          name="comments"
          value={comments}
          onChange={handleCommentsChange}
          required
        ></textarea>

        <button
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          type="submit"
        >
          Send
        </button>
      </form>

      {renderSubmittedComments()}
    </div>
  );
};

export default Contact;
