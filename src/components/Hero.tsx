import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="relative">
            <div
                className="h-[62vh] min-h-[420px] bg-cover bg-center"
                style={{ backgroundImage: "url('/hero1.png')" }}
            >
                {/* overlay gradient for readability */}
                <div className="w-full h-full bg-gradient-to-b from-[rgba(7,55,99,0.6)] to-[rgba(245,250,253,0.0)] flex items-center">
                    <div className="max-w-[1180px] mx-auto px-6 py-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-white font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl drop-shadow-lg leading-tight"
                            style={{ lineHeight: 1.02 }}
                        >
                            Samgnya Technologies <span className="block">Foundation</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.18 }}
                            className="mt-4 text-white max-w-prose text-base md:text-lg"
                        >
                            A National Hub for Quantum Secure Communications
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 relative z-40">
                <Link
                    to="/research"
                    className="inline-block bg-[#0b4a72] text-white px-5 py-2 rounded-md shadow-md transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b4a72]/30"
                >
                    View Research
                </Link>

                <Link
                    to="/contact"
                    className="inline-block bg-white/95 p-2 rounded-md"
                    aria-label="Open contact"
                >
                    <button className="text-[#073763]">Contact</button>
                </Link>
            </div>
        </div>
            </div >
        </div >
        </section >
    );
} */}

            <div className="absolute left-0 right-0 -mt-6 top-auto bottom-24 pointer-events-none">
                <div className="max-w-[1180px] mx-auto px-6 flex items-start gap-3 pointer-events-auto z-50">
                    <Link

                        to="/research"
                        className="inline-block bg-[#0b4a72] text-white px-5 py-2 rounded-md shadow-md transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b4a72]/30"
                    >
                        View Research
                    </Link>

                    <Link
                        to=""
                        className="inline-block bg-white/95   p-2 rounded-md"
                        aria-label="Open contact"
                    >
                        <button className="text-[#073763]">Contact</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}