import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import MissionCards from "../components/MissionCards";
import ProjectModal from "../components/ProjectModal";
import ResearchCard from "../components/ResearchCard";
import ResearchFilter from "../components/ResearchFilter";
import TechnicalGroups from "../components/TechnicalGroups";
import RESEARCH_DATA, { type ResearchItem } from "../data/researchData";
import { leftGroups, rightGroups } from "../data/technicalGroups";
import { Link } from "react-router-dom";

export default function ResearchPage() {
    // derive categories from data
    const categories = useMemo(() => {
        const set = new Set<string>();
        RESEARCH_DATA.forEach((r) => set.add(r.category));
        return Array.from(set);
    }, []);

    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState<ResearchItem | null>(null);

    // client-side filter
    const filtered = RESEARCH_DATA.filter((r) => {
        if (activeCategory && r.category !== activeCategory) return false;
        if (
            query &&
            !(`${r.title} ${r.summary} ${r.tags?.join(" ")}`)
                .toLowerCase()
                .includes(query.toLowerCase())
        )
            return false;
        return true;
    });
    return (
        <div className="min-h-screen flex flex-col">
            {/* Page header */}
            <header className="bg-white border-b">
                <div className="max-w-[1180px] mx-auto px-6 py-8">
                    <div>
                        <h1 className="text-3xl font-heading text-[#073763]">Our Research</h1>
                        <p className="text-sm mt-2 text-gray-700">
                            Selected projects & publications from our labs and collaborators.
                        </p>
                    </div>
                    <div className="absolute right-6 top-6">
                        <Link
                            to="/"
                            className="text-sm text-[#073763] underline hover:text-samAccent transition"
                        >
                            ← Home
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Technical Groups comparison (Stanford left / Samgnya right) */}
                <TechnicalGroups
                    leftTitle="IITM CDOT Samgnya"
                    leftGroups={leftGroups}
                    rightGroups={rightGroups}
                />

                {/* Filter + Search */}
                <div className="mt-6">
                    <ResearchFilter
                        categories={categories}
                        active={activeCategory}
                        onCategoryChange={(c) => setActiveCategory(c)}
                        query={query}
                        onQueryChange={(q) => setQuery(q)}
                    />
                </div>

                {/* Research grid */}
                <section className="max-w-[1180px] mx-auto px-6 mt-8 mb-12">
                    {filtered.length === 0 ? (
                        <div className="text-center py-20 text-gray-600">No research items match your filters.</div>
                    ) : (
                        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {filtered.map((it) => (
                                <ResearchCard key={it.id} item={it} onOpen={(i) => setOpen(i)} />
                            ))}
                        </motion.div>
                    )}
                </section>

                {/* Mission cards (optional, reuses component) */}
                <MissionCards />

                {/* Partners marquee (optional - uncomment to use) */}
                {/* <PartnersMarquee duration={20} /> */}
            </main>

            {/* Footer */}
            <Footer />

            {/* Modal dialog for project details */}
            {open && <ProjectModal item={open} onClose={() => setOpen(null)} />}
        </div>
    );
}