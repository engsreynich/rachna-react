import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
    const [darkMode, setDarkMode] = useState(
        () => localStorage.getItem('darkMode') === 'true' // Initialize darkMode from localStorage
    );

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.documentElement.classList.toggle('dark', newDarkMode);
        localStorage.setItem('darkMode', newDarkMode); // Save darkMode state to localStorage
    };

    useEffect(() => {
        // Apply dark mode class on initial render based on localStorage
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <BrowserRouter>
            <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </BrowserRouter>
    );
}

export default App;