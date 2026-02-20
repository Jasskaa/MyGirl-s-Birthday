import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import Timeline from './components/Timeline';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'quiz' | 'timeline'>('home');

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#fdfafb] text-slate-900">
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />
      
      {activeSection === 'home' && (
        <Hero onStartQuiz={() => setActiveSection('quiz')} />
      )}
      {activeSection === 'quiz' && (
        <Quiz />
      )}
      {activeSection === 'timeline' && (
        <Timeline />
      )}
    </main>
  );
};

export default App;