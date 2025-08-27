import { HashRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, FooterSection } from "./components";

const App = () => {
  return (
    <HashRouter>
        <div className="relative z-0 bg-primary">
            {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> //TODO: remove these classes for no background */}
            {/* TODO: https://www.youtube.com/shorts/89IGS83-wVc?feature=share */}
            <div>
                <Navbar/>
                <Hero/>
            </div>

            <About/>
            <Experience/>
            <Tech/>
            <Works/>
            {/* <Feedbacks/> */}
            <div className="relative z-0">
                <Contact/>
                <StarsCanvas/>
            </div>
            <FooterSection/>
        </div>
    </HashRouter>    
  );
};

export default App;
