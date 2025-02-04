import React, { useState } from 'react';

function QuestionForm({ addQuestion }) {
  const [questionData, setQuestionData] = useState({
    prompt: '',
    answers: ['', '', '', ''],
    correctIndex: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(questionData),
    })
      .then((res) => res.json())
      .then((newQuestion) => {
        addQuestion(newQuestion);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="prompt"
        value={questionData.prompt}
        onChange={handleInputChange}
        placeholder="Enter question"
      />
      {/* Add answer inputs here */}
      <button type="submit">Add Question</button>
    </form>
  );
}

export default QuestionForm;
