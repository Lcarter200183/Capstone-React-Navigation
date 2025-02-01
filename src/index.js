import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const root = createRoot(window.bodyTag);
 root.render(
 <BrowserRouter>
    <Routes>
        <Route>HOME</Route>
        <Route>GALLERY</Route>
        <Route>CONTACT</Route>
        <Route>ABOUT</Route>

    </Routes>
 </BrowserRouter>);
   


    

