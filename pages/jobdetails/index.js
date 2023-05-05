import Backbar from "./backBar";
import JobDetailCard from "./jobDetailCard";
import JobDetail from "./jobDetail";
import SimilarJobs from "./similarJobs";
import Navbar from "../../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Backbar />
      <JobDetailCard />
      <JobDetail />
      <SimilarJobs />
    </div>
  );
}
