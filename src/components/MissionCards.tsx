// MissionCards.tsx
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DATA = [
    {
        title: "Our Vision",
        bullets: [
            "Establish India's Quantum Secure Communication Network",
            "Deploy QKD infrastructure at scale",
            "Guide India's migration to post-quantum cryptography (PQC)"
        ]
    },
    {
        title: "Our Mission",
        bullets: [
            "Advance quantum communication for secure data networks",
            "Develop indigenous quantum solutions",
            "Foster research, innovation, and industrial collaborations"
        ]
    },
    {
        title: "Our Focus",
        bullets: [
            "Quantum Communication & QKD",
            "Quantum Cryptography & PQC",
            "Real-World Impact in defense, healthcare, finance",
            "Collaboration: Industry, academia & startups"
        ]
    }
];
type Props = {
    duration?: number; // seconds for card animation
};

export default function MissionCards({ duration = 0.9 }: Props) {
    // triggerOnce: false so animation plays every time element enters view
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.18 });

    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration,
                // smooth ease-out
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="max-w-[1180px] mx-auto px-6 my-14" aria-labelledby="mission-heading">
            <h2 id="mission-heading" className="text-2xl font-semibold text-[#073763] mb-6">Mission & Vision</h2>

            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                // animate flips depending on whether currently in view
                animate={inView ? "show" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {DATA.map((d, i) => (
                    <motion.article
                        key={d.title}
                        variants={item}
                        className="bg-white rounded-xl p-6 shadow-lg"
                        aria-labelledby={`mc-${i}`}
                        whileHover={{ scale: 1.02, translateY: -4 }}
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    >
                        <h3 id={`mc-${i}`} className="text-lg font-semibold text-[#073763] mb-3">{d.title}</h3>
                        <ul className="list-disc ml-5 text-sm text-gray-700 space-y-2">
                            {d.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
