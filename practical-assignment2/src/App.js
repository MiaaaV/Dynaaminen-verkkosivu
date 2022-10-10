import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme, darkerTheme } from './components/themes';
import { GlobalStyles } from './components/global';
import Home from './pages/Home';
import Random from './pages/Random';

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme === "dark" ? setTheme('darker') : setTheme('dark');
  }

  return (
    <>
      <div className='container'>

        <ThemeProvider theme={theme === 'dark' ? darkTheme : darkerTheme}>
          <>
            <GlobalStyles />
            <h6>pssst!! need a darker browser?</h6>
            <button className='home-btn' onClick={toggleTheme}>Click here!</button>
            <button>
              <a className='home-link' href='/'>Home</a>
            </button>
          </>
        </ThemeProvider>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </>
  );
}

export default App;