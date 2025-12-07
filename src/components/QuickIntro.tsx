// QuickIntro.tsx (updated overlap & z-index)
import React from "react";
import { FaFlask, FaRocket, FaUsers } from "react-icons/fa";

const items = [
    { icon: <FaFlask />, title: "Research", text: "Quantum communication, QKD, post-quantum cryptography." },
    { icon: <FaRocket />, title: "Startups", text: "Incubation & productization of lab solutions." },
    { icon: <FaUsers />, title: "Ecosystem", text: "Industry–academia collaborations and partnerships." },
];

export default function QuickIntro() {
    return (
        <section className="relative -mt-12 z-20">
            <div className="max-w-[1180px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((it, idx) => (
                        <div key={it.title} className="bg-white rounded-xl p-6 shadow-xl border-l-4 border-samAccent flex flex-col justify-between">
                            <div className="text-samAccent text-2xl mb-3">{it.icon}</div>
                            <h4 className="text-lg font-semibold text-[#073763]">{it.title}</h4>
                            <p className="mt-2 text-sm text-gray-700">{it.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
