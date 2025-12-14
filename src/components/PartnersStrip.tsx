// PartnersStrip.tsx

const LOGOS = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.jpeg",
    "/partner4.png",
    "/RRR.jpeg"

];

export default function PartnersStrip() {
    return (
        <section className="bg-white py-10 mt-8">
            <div className="max-w-[1180px] mx-auto px-6">
                <h4 className="text-sm font-semibold text-gray-700 text-center mb-6">Partners & Collaborators</h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
                    {LOGOS.map((logo, i) => (
                        <img
                            key={i}
                            src={logo}
                            alt={`partner ${i}`}
                            className="max-h-20 object-contain"
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}