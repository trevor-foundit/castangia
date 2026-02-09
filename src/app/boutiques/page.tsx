import { StoreLocator } from "@/components/StoreLocator";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Castangia 1850 | Ateliers",
    description: "Find an authorized Castangia 1850 retailer near you.",
};

export default function BoutiquesPage() {
    return (
        <main>
            <StoreLocator />
        </main>
    );
}
