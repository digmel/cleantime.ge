import {
  ContactSection,
  HeroSection,
  Layout,
  ServicesSection,
} from "../components";

export default function Home() {
  return (
    <Layout title="cleantime.ge">
      <HeroSection />
      <ServicesSection />
      {/* <ContactSection /> */}
    </Layout>
  );
}
