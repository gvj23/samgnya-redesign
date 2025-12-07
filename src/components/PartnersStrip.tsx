// PartnersStrip.tsx

const LOGOS = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.jpeg",
    "/partner4.png",

];

export default function PartnersStrip({
    duration = 10, // seconds, shorter = faster
}: { duration?: number }) {
    // duplicate logos for seamless infinite scroll
    const items = [...LOGOS, ...LOGOS];

    return (
        <section className="bg-[#F5FAFD] py-8 mt-8">
            <div className="max-w-[1180px] mx-auto px-6">
                <h4 className="text-base font-semibold text-gray-700 tracking-wide text-center mb-6">
                    PARTNERS & COLLABORATORS
                </h4>

                <div className="relative overflow-hidden">
                    {/* track: duplicated logos */}
                    <div
                        className="marquee flex items-center gap-10"
                        style={{ animationDuration: `${duration}s` }}
                        aria-hidden="false"
                        role="list"
                    >
                        {items.map((logo, i) => (
                            <div key={`${logo}-${i}`} role="listitem" className="flex-none">
                                <img
                                    src={logo}
                                    alt={`partner ${i % LOGOS.length}`}
                                    className="h-16 sm:h-20 lg:h-24 object-contain opacity-95"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}