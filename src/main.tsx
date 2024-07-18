import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App";
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import "./index.css";  // Import Tailwind CSS
import Playground from "./pages/Playground";
import Minter from "./pages/Minter";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThirdwebProvider } from "thirdweb/react";
import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { defineChain } from "thirdweb";
import { client } from "./client";



const queryClient = new QueryClient();


createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
        <ThirdwebProvider><ThirdwebSDKProvider>
        <RemoveScrollBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/playground' element={<Playground />} />
                    <Route path='/minter' element={<Minter />} />
                    <Route path='/marketplace' element={<Marketplace />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
            </BrowserRouter></ThirdwebSDKProvider>
        </ThirdwebProvider></QueryClientProvider>
    </React.StrictMode>
);
