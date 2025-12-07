// src/data/technicalGroups.ts
// src/data/technicalGroups.ts
import type { Group } from "../components/TechnicalGroups";

export const leftGroups: Group[] = [
    {
        id: "l1",
        title: "QuILA - Quantum Internet with Local Access",
        bullets: [
            "Developing Metro Area Quantum Access Networks (MAQAN)",
            "Implementing secure fiber-based quantum communication",
            "Exploring new quantum communication protocols like CV-QKD & MDI-QKD",
            "Creating software-defined quantum networks"
        ],
    },
    {
        id: "l2",
        title: "PIPETA - Post-Quantum IP Encryptor and TLS Accelerator",
        bullets: [
            "Developing 10 Gbps Post-Quantum IP Encryptors",
            "Implementing quantum-resistant encryption standards (FIPS-203, FIPS-204)",
            "Creating TLS Accelerators for secure online transactions"
        ],
    },
    {
        id: "l3",
        title: "TAHQEECAT - Hybrid Quantum Secure Communication Networks",
        bullets: [
            "Establishing trusted-node-free hybrid quantum networks",
            "Developing integrated quantum photonics for secure communication",
            "Implementing entanglement-based QKD & routing"
        ],
    },
];

export const rightGroups: Group[] = [
    {
        id: "r1",
        title: "QuEPRAN - Quantum Entanglement based Photonic Repeater Advanced Network",
        bullets: [
            "Developing quantum memory systems for long-distance secure communication",
            "Building hybrid quantum repeaters for entanglement-based encryption",
            "Implementing secure quantum key distribution (QKD) networks"
        ],
    },
    {
        id: "r2",
        title: "SBQKD - Satellite-Based Quantum Key Distribution",
        bullets: [
            "Develop a quantum payload for SBQKD",
            "Demonstrate a hybrid satellite + terrestrial QKD system",
            "Develop the terrestrial infrastructure to support SBQKD"
        ],
    },
    {
        id: "r3",
        title: "Industry Collaboration",
        bullets: [
            "Partner with startups for productization",
            "Procurement with local suppliers",
            "Demonstration projects with Govt. bodies"
        ],
    },
];
