import {
  AboutSection,
  ContactSection,
  HeroSection,
  Layout,
  ServicesSection,
} from "../components";

export default function Home() {
  return (
    <Layout title="CLEAN TIME LLC">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
