// InitiativesPreview.tsx
import { motion } from "framer-motion";
import Modal from "./UiModal";
import { useState } from "react";

type Initiative = {
    id: string;
    title: string;
    desc: string;
    long?: string;
    img: string;
    tags?: string[];
};

const INIT: Initiative[] = [
    {
        id: "qcom",
        title: "Quantum Communication",
        desc: "Secure next-generation networks using QKD.",
        long:
            "Research & development in quantum key distribution, secure links and prototypes for real-world deployments.",
        img: "/Qc.avif",
        tags: ["QKD", "Networks"]
    },
    {
        id: "qcrypto",
        title: "Quantum Cryptography",
        desc: "QKD & post-quantum security solutions.",
        long:
            "Applied research on post-quantum algorithms, hardware integration and demonstrators for secure communications.",
        img: "/sample2.jpeg",
        tags: ["PQC", "Security"]
    },
    {
        id: "innovation",
        title: "Quantum Innovation",
        desc: "R&D in computing & sensing for real-world impact.",
        long:
            "Translational projects that move lab prototypes to startup-grade products with partner collaborations.",
        img: "/sample3.jpeg",
        tags: ["R&D", "Startups"]
    }
];

export default function InitiativesPreview() {
    const [open, setOpen] = useState<Initiative | null>(null);

    return (
        <section id="initiatives" className="max-w-[1180px] mx-auto px-6 my-14">
            <h2 className="text-2xl font-semibold text-[#073763] mb-6">Highlighted Initiatives</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {INIT.map((it) => (
                    <motion.article
                        key={it.id}
                        className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer"
                        whileHover={{ scale: 1.03, y: -8 }}
                        transition={{ type: "spring", stiffness: 220, damping: 18 }}
                        onClick={() => setOpen(it)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter") setOpen(it); }}
                        aria-label={`Open details for ${it.title}`}
                    >
                        <div className="overflow-hidden">
                            <motion.img
                                src={it.img}
                                alt={it.title}
                                className="w-full h-40 object-cover"
                                whileHover={{ scale: 1.06 }}
                                transition={{ duration: 0.6 }}
                                loading="lazy"
                            />
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-[#073763]">{it.title}</h3>
                            <p className="text-sm text-gray-700 mt-2">{it.desc}</p>

                            <div className="mt-3 flex items-center justify-between">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setOpen(it); }}
                                    className="text-samAccent font-medium underline"
                                    aria-haspopup="dialog"
                                >
                                    Read more →
                                </button>
                                <div className="text-xs text-gray-400">{it.tags?.join(" • ")}</div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            {open && (
                <Modal onClose={() => setOpen(null)} title={open.title}>
                    <img src={open.img} alt="" className="w-full h-48 object-cover rounded-md mb-4" />
                    <p className="text-sm text-gray-800">{open.long}</p>
                    <div className="mt-4">
                        <strong>Tags: </strong>
                        <span className="text-sm text-gray-600">{open.tags?.join(", ")}</span>
                    </div>
                </Modal>
            )}
        </section>
    );
}
