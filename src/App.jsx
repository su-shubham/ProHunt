import Nav from './components/Nav';
// import MainBody from './components/MainBody';
import Asidebar from './components/Asidebar';
import Todaylist from './components/Todaylist';
import Foot from './components/Foot';
import LandPage from './components/LandPage';
import Topics from './components/Topics';


function App() {
  return (
    <div className="overflow-hidden no-scrollbar  ">
    <header className="text-gray-600 body-font ">
      <Nav />
    </header>
    <body>
    <div className="pt-20">
        <div className="container mx-auto px-5">
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
            <div className="col-span-4 sm:col-span-4 lg:col-span-6">
              <LandPage />
            </div>
            <div className='col-span-4 sm:col-span-4 lg:col-span-4'>
              <Todaylist />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <Asidebar />
            </div>
            <div className='col-span-4 sm:col-span-4 lg:col-span-4'>
              <Topics />
            </div>
          </div>
        </div>
      </div>
    </body>
    <footer>
      <Foot/>
    </footer>
    </div>
  ); 
}

export default App;  
