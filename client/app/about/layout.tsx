import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description:
        "About WEB CREST LAB: builder mindset, engineering discipline, and product experimentation.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
