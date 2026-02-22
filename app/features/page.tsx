"use client";

import dynamic from "next/dynamic";

const FeaturesPage = dynamic(() => import("@/components/pages/FeaturesPage"), {
    ssr: false,
});

export default function Page() {
    return <FeaturesPage />;
}