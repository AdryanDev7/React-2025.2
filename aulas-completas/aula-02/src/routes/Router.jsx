import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home";
import { Contatos } from "../pages/Contatos";
import { NotFound } from "../pages/NotFound";
import { Detalhes } from "../pages/Detalhes";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                
                <Route index element={<Home />} /> 
                <Route path="contatos" element={<Contatos />} />
                <Route path="detalhes/:id" element={<Detalhes />} />

                <Route path="*" element={<NotFound />} />
            
            </Route>
        </Routes>
    );
};