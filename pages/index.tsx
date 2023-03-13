import {
  AboutSection,
  ContactSection,
  HeroSection,
  Layout,
  ReviewSection,
  ServicesSection,
} from "../components";

export default function Home() {
  return (
    <Layout title="CLEAN TIME LLC">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <ReviewSection />
    </Layout>
  );
}
