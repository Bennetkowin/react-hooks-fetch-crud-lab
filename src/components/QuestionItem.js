import React from 'react';

function QuestionItem({ question, deleteQuestion }) {
  return (
    <div>
      <p>{question.prompt}</p>
      <button onClick={() => deleteQuestion(question.id)}>Delete</button>
    </div>
  );
}

export default QuestionItem;
