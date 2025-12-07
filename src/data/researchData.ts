// src/data/researchData.ts
export type ResearchItem = {
    id: string;
    title: string;
    summary: string;
    detail: string;
    category: "Quantum Communication" | "Quantum Cryptography" | "Innovation";
    image: string;
    year?: number;
    tags?: string[];
};

const RESEARCH_DATA: ResearchItem[] = [
    {
        id: "r1",
        title: "City-to-City QKD Link",
        summary: "Prototype QKD link between two urban nodes with 10km fiber.",
        detail: "Full project details: link architecture, hardware used, performance metrics, lessons learned and roadmap for scale.",
        category: "Quantum Communication",
        image: "/Qc.avif",
        year: 2024,
        tags: ["QKD", "Field Trial"],
    },
    {
        id: "r2",
        title: "Post-Quantum Crypto Analysis",
        summary: "Study of candidate PQC algorithms against hardware signatures.",
        detail: "Full project details: algorithm comparisons, integration with network stack and security recommendations.",
        category: "Quantum Cryptography",
        image: "/sample2.jpeg",
        year: 2023,
        tags: ["PQC", "Security"],
    },
    {
        id: "r3",
        title: "Quantum Sensor Prototype",
        summary: "R&D on quantum-enhanced sensing for environmental monitoring.",
        detail: "Full project details: sensor design, calibration, partner labs and possible commercialization pathways.",
        category: "Innovation",
        image: "/sample3.jpeg",
        year: 2025,
        tags: ["Sensing", "Prototype"],
    },
    // add more as needed...
];
export default RESEARCH_DATA;