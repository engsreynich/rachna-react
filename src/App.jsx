
import About from './Layout/About';
import Component from './Layout/Component';
import Docs from './Layout/Docs';
import Footer from './Layout/Footer';
import Home from './Layout/Home';
import Navbar from './Layout/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout (){
    return(
        <>
        <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='docs' element={<Docs/>}/>
                <Route path='component' element={<Component/>}/>
                <Route path='About' element={<About/>}/>
            </Routes>
        <Footer/>
        </>
    );
}


function App() {
    return (
        <>
        <BrowserRouter>
            <Layout/>
        </BrowserRouter>
        </>
    );
}

export default App;