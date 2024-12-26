import About from "../components/content/about/about";
import Project from "../components/content/feacture/project";
import HeroSection from "../components/content/hero/heroSection";
import Blog from "../components/content/post/team";
// import Team from "../components/content/post/team";
import Newslatter from "../components/content/project/newslatter";


export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <Project />
      <About/>
      <Blog />
      <Newslatter />
    </div>
  )
}
