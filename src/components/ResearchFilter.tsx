// src/components/ResearchFilter.tsx
import React from "react";

type Props = {
    categories: string[];
    active: string | null;
    onCategoryChange: (cat: string | null) => void;
    query: string;
    onQueryChange: (q: string) => void;
};

export default function ResearchFilter({ categories, active, onCategoryChange, query, onQueryChange }: Props) {
    return (
        <div className="max-w-[1180px] mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex gap-3 flex-wrap">
                    <button
                        className={`px-3 py-1 rounded-full text-sm ${active === null ? "bg-samNavy text-white" : "bg-white border"}`}
                        onClick={() => onCategoryChange(null)}
                        aria-pressed={active === null}
                    >
                        All
                    </button>

                    {categories.map((c) => (
                        <button
                            key={c}
                            className={`px-3 py-1 rounded-full text-sm ${active === c ? "bg-samAccent text-white" : "bg-white border text-[#073763]"}`}
                            onClick={() => onCategoryChange(active === c ? null : c)}
                            aria-pressed={active === c}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <input
                        value={query}
                        onChange={(e) => onQueryChange(e.target.value)}
                        className="px-3 py-2 rounded-md border w-64 text-sm"
                        placeholder="Search research..."
                        aria-label="Search research"
                    />
                </div>
            </div>
        </div>
    );
}
