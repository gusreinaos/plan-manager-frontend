import React, {FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";

const AppRoutes:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;