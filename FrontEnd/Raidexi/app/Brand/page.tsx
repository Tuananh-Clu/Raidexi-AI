import Hero from "@/features/Brand/components/Hero";
import { Footer } from "@/Shared/Components/components/Footer";
import { NavBar } from "@/Shared/Components/components/NavBar";
import PartnerGrid from "@/features/Brand/components/PartnerGrid";
import QuoteSection from "@/features/Brand/components/QuoteSection";
export default function Page() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center w-full grow">
        <Hero />
        <PartnerGrid />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}
