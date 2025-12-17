import HeroSection from '@/components/hero-section';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import CallToAction from '@/components/call-to-action';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <Testimonials />
      <CallToAction />
    </div>
  );
}