import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import About from './Layout/About';
import Component from './Layout/Component';
import Docs from './Layout/Docs';
import Home from './Layout/Home';

function Layout({ darkMode, toggleDarkMode }) {
    return (
        <>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Routes>
                <Route index element={<Home />} />
                <Route path='docs' element={<Docs />} />
                <Route path='component' element={<Component />} />
                <Route path='about' element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Darkmode Fun
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    return (
        <>
            <BrowserRouter>
                <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </BrowserRouter>
        </>
    );
}

export default App;