import Navbar from "./Navbar/Navbar";
import GetStarted from "./GetStarted/GetStarted";
import Opportunity from "./Opportunity/Opportunity";
import Interesting from "./Interesting/Interesting";
import ImproveCareer from "./ImproveCareer/ImproveCareer";
import Testimoni from "./Testimoni/Testimoni";

export default function LandingPage() {
   return (
      <div>
         <div className='lg:h-screen'>
            <Navbar />
            <GetStarted />
            <Opportunity />
            <Interesting />
            <ImproveCareer />
            <Testimoni />
         </div>
      </div>
   );
}
