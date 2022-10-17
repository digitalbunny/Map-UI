import { Routes, Route, Outlet } from "react-router-dom"
import Index from "./views/Index"
import "./App.css"



export default function App() {
    return (
        <main className="text-zinc-700 font-inter">
            <Routes>
                <Route path="/" element={<Index />} />
            </Routes>

            <Outlet />
        </main>
    );
}

