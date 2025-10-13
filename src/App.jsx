import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  // 현재 표시할 섹션 상태 (기본: Home)
  const [activeSection, setActiveSection] = useState('Home');

  // 섹션 렌더링 함수
  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return (
          <section
            id="Home"
            className="min-h-screen bg-gray-100 flex items-center justify-center"
          >
            <h1 className="text-4xl font-bold">Home Section</h1>
          </section>
        );
      case 'Contact':
        return (
          <section
            id="Contact"
            className="min-h-screen bg-gray-200 flex items-center justify-center"
          >
            <h1 className="text-4xl font-bold">Contact Section</h1>
          </section>
        );
      case 'Apps':
        return (
          <section
            id="Apps"
            className="min-h-screen bg-gray-300 flex items-center justify-center"
          >
            <h1 className="text-4xl font-bold">Apps Section</h1>
          </section>
        );
      case 'Turm':
        return (
          <section
            id="Turm"
            className="min-h-screen bg-gray-400 flex items-center justify-center"
          >
            <h1 className="text-4xl font-bold">Turm Section</h1>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setActiveSection={setActiveSection} />
      <main className="flex-1 pt-20 pb-12">{renderSection()}</main>
      <Footer />
    </div>
  );
};

export default App;