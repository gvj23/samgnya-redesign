// Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-white mt-16 border-t border-gray-200">
            <div className="max-w-[1180px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-[#0b1a2b]">

                {/* Column 1 */}
                <div>
                    <h5 className="font-semibold text-base mb-2">IITM CDOT Samgnya</h5>
                    <p className="text-gray-700 leading-relaxed">
                        IIT Madras Research Park,<br />
                        Chennai
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h5 className="font-semibold text-base mb-2">Quick Links</h5>
                    <ul className="space-y-2 text-gray-700">
                        <li className="hover:text-samAccent cursor-pointer">Initiatives</li>
                        <li className="hover:text-samAccent cursor-pointer">Research</li>
                        <li className="hover:text-samAccent cursor-pointer">Careers</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h5 className="font-semibold text-base mb-2">Contact</h5>
                    <ul className="space-y-2 text-gray-700 leading-relaxed">
                        <li>Email: info@samgnya.in</li>
                        <li>Phone: +91-XXXXXXXXXX</li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center py-4 text-xs text-gray-500 bg-[#F5F7FA] border-t">
                © {new Date().getFullYear()} Samgnya Technologies
            </div>
        </footer>
    );
}
