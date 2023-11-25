import './Home.css'
import SideNav from "../Components/Navigations/SideNav";
import TimeLine from "../Components/Timeline/TimeLine";

const Home = () => {
  return (
    <div className='home'>
      <div className="home-nav">
        <SideNav />
      </div>
      <div className="home-timeline">
        <TimeLine />
      </div>
    </div>
  );
};

export default Home;
