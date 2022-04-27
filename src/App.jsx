import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Navigation/Navigation';
import AboutUs from './View/AboutUs/AboutUs';
import BlogPost from './View/BlogPost/BlogPost';
import ContactUs from './View/ContactUs/ContactUs';
import LandingPage from './View/LandingPage/LandingPage';
import Login from './View/Login/Login';
import Signup from './View/Signup/Signup';
import { createTheme, ThemeProvider } from '@mui/material';
import Footer from './View/Footer/Footer';


const theme = createTheme()

function App() {
  return (
    <div id="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto' }}>
            <Navigation />
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/contact' element={<ContactUs />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/blog-post' element={<BlogPost />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
