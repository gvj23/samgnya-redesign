// src/components/ResearchCard.tsx
import { motion } from "framer-motion";
import type { ResearchItem } from "../data/researchData";

type Props = {
    item: ResearchItem;
    onOpen: (it: ResearchItem) => void;
};

export default function ResearchCard({ item, onOpen }: Props) {
    return (
        <motion.article
            whileHover={{ scale: 1.02, translateY: -6 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
            onClick={() => onOpen(item)}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") onOpen(item); }}
            role="button"
            aria-label={`Open details for ${item.title}`}
        >
            <div className="h-44 w-full overflow-hidden">
                <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                />
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#073763]">{item.title}</h3>
                    <span className="text-xs text-gray-400">{item.year ?? ""}</span>
                </div>

                <p className="text-sm text-gray-700 mt-2">{item.summary}</p>

                <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-gray-500">{item.category}</div>
                    <div className="text-xs text-gray-400">{(item.tags || []).join(" • ")}</div>
                </div>
            </div>
        </motion.article>
    );
}
