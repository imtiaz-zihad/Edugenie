import Chatbot from "@/components/chatbot/Chatbot";
import Chat from "@/components/chatbot/Chat";
import CourseCarousel from "@/components/CourseCarousel";
import EducatorAndSubscription from "@/components/EducatorAndSubscription/EducatorAndSubscription";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import SuccessStories from "@/components/SuccessStories";
import StudentDashboard from "@/components/studentdasboard/Studentdasboard";
import EidGreeting from "@/components/EidGreeting/EidGreeting";

export default function Home() {
  return (
    <div>
     
      <HeroBanner />
      <EidGreeting />
      <CourseCarousel />
      <HowItWorks />
      <SuccessStories />
      <Chatbot />
      <StudentDashboard />
      <EducatorAndSubscription />
      <Chat />
    </div>
  );
}
