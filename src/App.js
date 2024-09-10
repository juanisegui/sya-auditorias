import React, { useState } from 'react';
import Checklist from './components/Checklist';

function App() {
  return (
    <div className="min-h-screen bg-green-50 p-4">
      <h1 className="text-2xl font-bold text-primary mb-4">Auditoría Hospitalaria</h1>
      <Checklist />
    </div>
  );
}

export default App;
