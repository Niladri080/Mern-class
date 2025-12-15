import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorks";
import KeyFeaturesSection from "../components/KeyFeatures";
import TrustSecuritySection from "../components/TrustSecurity";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection/>
        <KeyFeaturesSection />
        <TrustSecuritySection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
