import PopularCourses from "@/components/popular courses/PopularCourses";
import Banner from "./Banner";
import ContentSlider from "./ContentSlider";
import Achievement from "./Achievement";
import Solution from "./Solution";
import HomeCourses from "./HomeCourses";
import Providing from "./Providing";
import Counts from "./Counts";
import Collaboration from "@/components/collaboration/Collaboration";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <ContentSlider></ContentSlider>
          <PopularCourses></PopularCourses>
          <Achievement></Achievement>
          <Solution></Solution>
          <HomeCourses></HomeCourses>
          <Providing></Providing>
          <Counts></Counts>
          <Collaboration></Collaboration>
        </div>
    );
};

export default Home;