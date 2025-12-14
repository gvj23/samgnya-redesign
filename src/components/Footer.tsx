// Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-white mt-16 border-t border-gray-200">
            <div className="max-w-[1180px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-[#0b1a2b]">

                {/* Column 1 */}
                <div>
                    <h5 className="font-semibold text-base mb-2">Samgnya Technologies Foundation</h5>
                    <p className="text-gray-700 leading-relaxed">
                        A National Hub for Quantum Secure Communications
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h5 className="font-semibold text-base mb-2">Quick Links</h5>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="/research" className="hover:text-samAccent">Our Research</a></li>
                        <li><a href="/#initiatives" className="hover:text-samAccent">Initiatives</a></li>
                        <li><a href="/#partners" className="hover:text-samAccent">Partners</a></li>
                    </ul>
                </div>

                {/* Column 3 — replace email/phone with contact form link */}
                <div>
                    <h5 className="font-semibold text-base mb-2">Contact</h5>
                    <p className="text-gray-700">
                        For enquiries, please use our <a href="/contact" className="text-[#073763] underline">Contact form</a>.
                    </p>
                </div>

            </div>

            <div className="text-center py-4 text-xs text-gray-500 bg-[#F5F7FA] border-t">
                © {new Date().getFullYear()} Samgnya Technologies Foundation
            </div>
        </footer>
    );
}
