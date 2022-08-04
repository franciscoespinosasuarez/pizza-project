import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Main } from "./pages/main";
import { Filterpiz } from "./pages/filterpiz"
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";


import { Footer } from "./component/footer";
import { ShowPizza } from "./pages/showpizza";
import { Mail } from "./pages/mail";
import { EditPizza } from "./pages/editpizza";
import { Prueba } from "./pages/prueba";

import { NewPizza } from "./pages/newpizza"; 

import { Account } from "./pages/my-account";
import { Userpage } from "./pages/userpage";
import { TestFran } from "./pages/testfran";
import { Mypizzas } from "./pages/my-pizzas";


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
                        <Route element={<Main />} path="/" />
                        {/* <Route element={<Home />} path="login" /> */}
                        <Route element={<ShowPizza />} path="/pizzas"/>
                        <Route element={<Filterpiz />} path="/filter"/>
                        <Route element={<EditPizza />} path="/editpizza" />
                        <Route element={<NewPizza />} path="/newpizza" />
                        <Route element={<Account />} path="/my-account" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<Prueba />} path="/prueba" />
                        <Route element={<Userpage />} path="/user/:id" />
                        <Route element={<TestFran />} path="/test" />
                        <Route element={<Mypizzas />} path="/my-pizzas" />
                        {/* <Route element={<Register />} path="/register" />
                        <Route element={<Login />} path="/login" /> 
                        <Route element={<Info-pizza />} path="/pizzas/:theid"/>
                        <Route element={<Mis-pizzas />} path="/my-pizzas" />
                        <Route element={<Edit-pizza />} path="/pizzas/:theid" /> se reutiliza y si eres el "creador" te deja editarla
                        <Route element={<User-menu />} path="/user/:theid" />
                        <Route element={<Change-password />} path="/change-password" /> */}
                    </Routes>
                    {/* <Footer /> */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
