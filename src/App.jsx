

import {Hero} from './Hero';

import { AboutUs } from "./AboutUs";
import { Header } from "./Header";



const App =() => {
  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <Hero />
    <AboutUs /> 


    </div>
  );
}

export default App;
