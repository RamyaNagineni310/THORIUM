import DescriptionSection from "@/components/DescriptionSection";
import ImagesSection from "@/components/ImagesSection";
import MailSection from "@/components/MailSection";
import MainBanner from "@/components/MainBanner";
import MapSection from "@/components/MapSection";

export default function Home() {
  return (
    <>
      <MainBanner />
      <DescriptionSection />
      <MailSection />
      <ImagesSection />
      <MapSection />
    </>
  );
}
