import Link from "next/link";
import FitCheckWidget from "@/components/FitCheckWidget";

export default function FitCheckPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-8">
      <div className="max-w-[600px] mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="font-heading text-navy text-xl">MiGreat Germany</p>
          <Link href="/" className="font-body text-navy/60 text-sm hover:text-navy transition-colors">
            ← Back
          </Link>
        </div>
        <FitCheckWidget />
      </div>
    </main>
  );
}
