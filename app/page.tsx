import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-3xl flex flex-col items-center text-center">
        <p className="font-heading text-navy text-2xl mb-12 self-start">MiGreat Germany</p>

        <h1 className="font-heading font-bold text-navy text-[28px] sm:text-[40px] leading-tight mb-6">
          Are You in Demand in Germany?
        </h1>

        <p className="font-body text-dark text-base sm:text-lg max-w-[540px] mb-10">
          Answer 4 quick questions and find out if German employers are looking for someone like you.
        </p>

        <Link
          href="/fit-check"
          className="inline-flex items-center justify-center bg-gold text-navy font-body font-semibold text-lg px-10 py-4 rounded-btn min-h-[48px] hover:bg-[#E0B215] transition-colors duration-200 hover:-translate-y-px"
        >
          Check My Profile
        </Link>

        <p className="font-body text-navy/60 text-sm mt-4">
          Trusted by 500+ professionals from Nigeria and India
        </p>
        <p className="font-body text-navy/40 text-[13px] mt-1">
          Supported by the German Federal Agency for Employment
        </p>
      </div>
    </main>
  );
}
