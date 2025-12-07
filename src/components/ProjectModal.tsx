// src/components/ProjectModal.tsx
import React from "react";
import UiModal from "./UiModal";
import type { ResearchItem } from "../data/researchData";

export default function ProjectModal({ item, onClose }: { item: ResearchItem; onClose: () => void }) {
    return (
        <UiModal onClose={onClose} title={item.title}>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-sm text-gray-800">{item.detail}</p>

            <div className="mt-4">
                <strong>Category: </strong><span>{item.category}</span>
            </div>

            <div className="mt-2 text-sm text-gray-600"><strong>Tags:</strong> {(item.tags || []).join(", ")}</div>
        </UiModal>
    );
}
