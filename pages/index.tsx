import { ContactSection, HeroSection, Layout, Text } from "../components";

export default function Home() {
  return (
    <Layout title="cleantime.ge">
      <div className="flex justify-center items-center pt-64">
        <Text variant="subtitle">საიტი მალე დაემატება!</Text>
      </div>
      {/* <HeroSection />
      <ContactSection /> */}
    </Layout>
  );
}
