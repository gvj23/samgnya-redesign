// UiModal.tsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
};

export default function Modal({ title, children, onClose }: Props) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [onClose]);

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
            <div role="dialog" aria-modal="true" aria-label={title || "Details"} className="relative z-10 max-w-xl w-full bg-white rounded-lg p-6 shadow-xl">
                <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-[#073763]">{title}</h3>
                    <button onClick={onClose} aria-label="Close" className="text-gray-500">✕</button>
                </div>
                <div className="mt-4">{children}</div>
            </div>
        </div>,
        document.body
    );
}
