import Banner from "@/components/Banner";
import CommunityImpactCTA from "@/components/CommunityImpactCTA";
import FeaturedStories from "@/components/FeaturedStories";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedStories />
      <CommunityImpactCTA />
    </div>
  );
}
