// TechnicalGroups.tsx
import React from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";

export type Group = {
    id: string;
    title: string;
    bullets: string[];
    icon?: React.ReactNode; // optional icon per group
};

type Props = {
    leftTitle?: string;
    rightTitle?: string;
    leftGroups: Group[];
    rightGroups: Group[];
};

/**
 * Two-column technical group comparison.
 * Desktop: two columns, mirrored alignment.
 * Mobile: stacked rows with accessible accordion per cell.
 */
export default function TechnicalGroups({
    leftTitle = "",
    rightTitle = "",
    leftGroups,
    rightGroups,
}: Props) {
    const rows = Math.max(leftGroups.length, rightGroups.length);

    return (
        <section className="max-w-[1180px] mx-auto px-6 py-12">
            <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-semibold text-[#073763]">Technical Groups & Their Objectives</h2>
                {/* <div className="text-sm text-gray-600">Compare initiative focus — left vs right</div> */}
            </div>

            {/* Column headers (desktop only) */}
            <div className="hidden md:grid grid-cols-2 gap-6 mb-4 items-center">
                <div className="px-4">
                    <div className="inline-flex items-center gap-3">
                        <HiOutlineSparkles className="text-samAccent w-5 h-5" />
                        <h3 className="text-lg font-medium text-gray-700">{leftTitle}</h3>
                    </div>
                </div>
                <div className="px-4 text-right">
                    <div className="inline-flex items-center gap-3 justify-end">
                        <h3 className="text-lg font-medium text-gray-700">{rightTitle}</h3>
                        {/* <HiOutlineCollection className="text-[#0b5a5a] w-5 h-5" /> */}
                    </div>
                </div>
            </div>

            {/* Rows */}
            <div className="space-y-6">
                {Array.from({ length: rows }).map((_, i) => {
                    const left = leftGroups[i];
                    const right = rightGroups[i];

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
                        >
                            {/* Left card */}
                            <div
                                className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-samAccent hover:shadow-lg transition-shadow duration-200"
                            // for mobile make it an accordion using <details>
                            >
                                {left ? (
                                    <>
                                        <div className="flex items-start gap-3">
                                            <div className="mt-1 text-samAccent">
                                                {/* use provided icon or fallback dot */}
                                                {left.icon ?? <div className="w-3 h-3 rounded-full bg-samAccent" />}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold text-[#073763] mb-2">{left.title}</h4>

                                                <div className="hidden md:block">
                                                    <ul className="ml-4 list-disc text-sm text-gray-700 space-y-1">
                                                        {left.bullets.map((b, idx) => (
                                                            <li key={idx}>{b}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Mobile: details/accordion for readability */}
                                                <details className="md:hidden mt-2">
                                                    <summary className="cursor-pointer text-sm text-gray-600">View objectives</summary>
                                                    <ul className="mt-2 ml-4 list-disc text-sm text-gray-700 space-y-1">
                                                        {left.bullets.map((b, idx) => (
                                                            <li key={idx}>{b}</li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-sm text-gray-400 italic">—</div>
                                )}
                            </div>

                            {/* Right card */}
                            <div className="bg-white rounded-xl p-6 shadow-sm border-r-4 border-[#0b5a5a] hover:shadow-lg transition-shadow duration-200">
                                {right ? (
                                    <>
                                        <div className="flex items-start gap-3 justify-end md:justify-end">
                                            <div className="hidden md:block mr-3">
                                                {/* mirror dot on right */}
                                                {right.icon ?? <div className="w-3 h-3 rounded-full bg-[#0b5a5a]" />}
                                            </div>

                                            <div className="text-right md:text-right">
                                                <h4 className="text-lg font-semibold text-[#073763] mb-2">{right.title}</h4>

                                                <div className="hidden md:block">
                                                    <ul className="mr-4 list-disc text-sm text-gray-700 space-y-1">
                                                        {right.bullets.map((b, idx) => (
                                                            <li key={idx}>{b}</li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Mobile accordion */}
                                                <details className="md:hidden mt-2">
                                                    <summary className="cursor-pointer text-sm text-gray-600">View objectives</summary>
                                                    <ul className="mt-2 mr-4 list-disc text-sm text-gray-700 space-y-1">
                                                        {right.bullets.map((b, idx) => (
                                                            <li key={idx}>{b}</li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-sm text-gray-400 italic text-right">—</div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
