import { useEffect, useState } from 'react'
import Navbar from '../src/scenes/Navbar'
import { SelectedPage } from './shared/types'
import Home from './scenes/home';
function App() {
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home)
   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY === 0) {
         setIsTopOfPage(true);
         setSelectedPage(SelectedPage.Home);
       }
       if (window.scrollY !== 0) setIsTopOfPage(false);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App
