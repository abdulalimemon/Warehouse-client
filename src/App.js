import { createContext, useState } from 'react';
import './App.css';
import PageRoutes from './PageRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='app' id={theme}>
        <PageRoutes></PageRoutes>
      </div>
      <ToastContainer />
    </ThemeContext.Provider>
  );
}

export default App;
