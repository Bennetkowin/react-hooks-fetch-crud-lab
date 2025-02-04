import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const deleteQuestion = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
      .then(() => setQuestions((prev) => prev.filter((question) => question.id !== id)))
      .catch((error) => console.error('Error deleting question:', error));
  };

  return (
    <div>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          question={question}
          deleteQuestion={deleteQuestion}
        />
      ))}
    </div>
  );
}

export default QuestionList;
