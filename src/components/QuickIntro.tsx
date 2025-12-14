// QuickIntro.tsx (updated overlap & z-index)
import { motion } from "framer-motion";
import { FaFlask, FaRocket, FaUsers } from "react-icons/fa";

const items = [
    { icon: <FaFlask />, title: "Research", text: "Quantum communication, QKD, post-quantum cryptography." },
    { icon: <FaRocket />, title: "Startups", text: "Incubation & productization of lab solutions." },
    { icon: <FaUsers />, title: "Ecosystem", text: "Industry–academia collaborations and partnerships." },
];

export default function QuickIntro() {
    return (
        // smaller negative margin so the overlap is gentle and predictable
        <section className="relative -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 z-20">
            <div className="max-w-[1180px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((it, index) => (
                        <motion.article
                            key={it.title}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.08 }}
                            viewport={{ once: false, amount: 0.18 }}
                            className="bg-white rounded-xl p-6 shadow-xl border-l-4 border-samAccent flex flex-col justify-between relative z-10 min-h-[150px]"
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-samAccent text-2xl">{it.icon}</div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-[#073763]">{it.title}</h4>
                                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">{it.text}</p>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}


