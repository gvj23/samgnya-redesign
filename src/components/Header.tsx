// src/components/Header.tsx
import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-40 bg-white shadow-sm">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 md:px-6 py-2">
                <div className="flex items-center gap-3">
                    <img src="/Logo1.jpeg" alt="Samgnya logo" className="h-10 w-9 object-contain" />
                    <div className="text-samNavy font-heading text-lg font-bold">IITM CDOT Samgnya Technologies Foundations</div>
                </div>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm text-[#073763]">
                    <a className="hover:underline" href="#">Home</a>

                    <div className="group relative">
                        <button className="flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
                            Initiatives ▾
                        </button>
                        <div className="absolute left-0 mt-2 bg-white rounded shadow-md p-3 hidden group-hover:block">
                            <button onClick={() => { navigate("/research"); setOpen(false); }}>Our Research</button>
                        </div>
                    </div>

                    <a className="hover:underline" href="#">Ecosystem</a>
                    <a className="hover:underline" href="#">Calls</a>
                    <a className="hover:underline" href="#">Careers</a>
                </nav>

                {/* Right icons + mobile button */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:block text-sm px-3 py-1 border rounded text-[#073763]">Info ▾</button>
                    <button className="p-2 rounded hover:bg-gray-100 md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
                        <FaBars />
                    </button>
                    <button className="p-2 rounded hover:bg-gray-100 hidden md:block"><FaSearch /></button>
                </div>
            </div>

            {/* Mobile slide-over nav */}
            <div
                className={`fixed inset-0 z-50 transform ${open ? "translate-x-0" : "translate-x-full"} transition-transform`}
                aria-hidden={!open}
            >
                <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
                <aside className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                            <img src="/Logo1.jpeg" alt="logo" className="h-8 w-8" />
                            <span className="font-semibold text-sm text-[#073763]">Samgnya</span>
                        </div>
                        <button onClick={() => setOpen(false)} aria-label="Close menu"><FaTimes /></button>
                    </div>

                    <nav className="flex flex-col gap-4 text-sm">
                        <a href="#" onClick={() => setOpen(false)}>Home</a>
                        <details>
                            <summary className="cursor-pointer">Initiatives</summary>
                            <div className="pl-4 mt-2 flex flex-col gap-2">
                                <Link to="/research" onClick={() => setOpen(false)}>Our Research</Link>
                                <a href="#" onClick={() => setOpen(false)}>Start-up Products</a>
                            </div>
                        </details>
                        <a href="#" onClick={() => setOpen(false)}>Ecosystem</a>
                        <a href="#" onClick={() => setOpen(false)}>Calls</a>
                        <a href="#" onClick={() => setOpen(false)}>Careers</a>
                    </nav>

                    <div className="mt-6">
                        <button className="w-full bg-samAccent text-white py-2 rounded">Contact</button>
                    </div>
                </aside>
            </div>
        </header>
    );
}
