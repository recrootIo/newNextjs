import Navbar from "@/components/Navbar/Navbar";
import Backbar from "./BackBar";
import JobDetailCard from "./jobDetailCard";
import JobDetail from "./jobDetail";
import SimilarJobs from "./similarJobs";
import SubscribHome from "@/components/Home/SubscribHome";
import FooterHome from "@/components/Home/FooterHome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Backbar />
      <JobDetailCard />
      <JobDetail />
      <SimilarJobs />
      <SubscribHome />
      <FooterHome />
    </div>
  );
}
