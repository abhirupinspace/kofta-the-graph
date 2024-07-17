import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import { ThirdwebProvider } from "thirdweb/react";
import "./index.css";  // Import Tailwind CSS
import Playground from "./pages/Playground";
import Minter from "./pages/Minter";
import Marketplace from "./pages/Marketplace";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThirdwebProvider>
            <BrowserRouter>
                <RemoveScrollBar />
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/playground' element={<Playground />} />
                    <Route path='/minter' element={<Minter />} />
                    <Route path='/marketplace' element={<Marketplace />} />
                </Routes>
            </BrowserRouter>
        </ThirdwebProvider>
    </React.StrictMode>
);
