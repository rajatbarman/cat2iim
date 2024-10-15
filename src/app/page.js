import CatCrackingHero from "@/components/CatCrackingModule/CatCrackingHero";
import MainComponent from "@/components/MainComponent";
import MentorFooter from "@/components/MentorFooter";

export default async function Home({ channelStats }) {
  const { viewCount, videoCount } = await fetchChannelStats();
  return (
    <section className="max-w-[1280px] m-auto">
      <MainComponent videoCount={videoCount} viewCount={viewCount} />
      <CatCrackingHero />
      <MentorFooter />
    </section>
  );
}

// Fetch YouTube channel statistics during build/runtime
async function fetchChannelStats() {
  const API_URL =
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCzyvjspYmNZcbp6JUS_HnGg&key=AIzaSyDiaFOEn6A7sFjadnf2bejDJtxF-70QW8w";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
      const channelStats = data.items[0].statistics;
      return {
        viewCount: channelStats.viewCount,
        videoCount: channelStats.videoCount,
      };
    }
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
  }

  // Return default values in case of error
  return {
    viewCount: "N/A",
    videoCount: "N/A",
  };
}