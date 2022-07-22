import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/main";
import { Main } from "./pages/main";
import { Filterpiz } from "./pages/filterpiz"
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";


    
    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        {/* si no hay login, la main es login y te direcciona a él  y cambiar HOME por main*/}
                        <Route element={<Filterpiz />} path="/filter" />
                        <Route element={<Home />} path="/" />

                        {/* <Route element={<Register />} path="/register" />
                        <Route element={<Login />} path="/login" /> 
                        <Route element={<Info-pizza />} path="/pizzas/:theid"/>
                        <Route element={<Mis-pizzas />} path="/my-pizzas" />
                        <Route element={<Crear-pizza />} path="/create-pizza" />
                        <Route element={<Edit-pizza />} path="/pizzas/:theid" /> se reutiliza y si eres el "creador" te deja editarla
                        <Route element={<User-menu />} path="/user/:theid" />
                        <Route element={<Change-password />} path="/change-password" /> */}
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
