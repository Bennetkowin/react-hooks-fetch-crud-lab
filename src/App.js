import React, { useState } from 'react';
import AdminNavBar from './components/AdminNavBar';
import QuestionList from './components/QuestionList';
import QuestionForm from './components/QuestionForm';

function App() {
  const [view, setView] = useState('list'); // 'list' or 'form'

  return (
    <div>
      <AdminNavBar />
      {view === 'list' ? <QuestionList /> : <QuestionForm />}
    </div>
  );
}

export default App;
