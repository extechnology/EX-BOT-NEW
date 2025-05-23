import HeroSection from "@/Components/Home/Hero"
import PowerfulFeatures from "@/Components/Home/PowerfulFeatures"
import CustomChatbots from "@/Components/Home/CustomChatbots"


export default function Landing() {


  // Scroll to top when page is loaded
  window.scrollTo({ top: 0, behavior: 'smooth', });


  return (

    <main className="min-h-screen w-full bg-white dark:bg-black overflow-x-hidden">

      <HeroSection />

      <CustomChatbots />

      <PowerfulFeatures />

    </main>

  )
}
