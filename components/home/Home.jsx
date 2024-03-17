import Achievement from "./Achievement";
import Banner from "./Banner";
import ContentSlider from "./ContentSlider";
import Counts from "./Counts";
import HomeCourses from "./HomeCourses";
import Providing from "./Providing";
import Solution from "./Solution";
import Collaboration from "./collaboration/Collaboration";
import PopularCourses from "./popular courses/PopularCourses";

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