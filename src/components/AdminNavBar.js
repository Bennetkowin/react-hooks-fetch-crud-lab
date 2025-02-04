import React from 'react';

function AdminNavBar({ setView }) {
  return (
    <nav>
      <button onClick={() => setView('list')}>View Questions</button>
      <button onClick={() => setView('form')}>Add Question</button>
    </nav>
  );
}

export default AdminNavBar;
