import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='app' id={theme}>
        <Home></Home>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
