import './App.css';
import "@fontsource/dancing-script";
import Hero from './hero.jpg';
import Corner from './corner.png';

const date1 = new Date();
date1.setHours(0, 0, 0, 0);
const date2 = new Date("11/09/2023");
const diffTime = date2.getTime() - date1.getTime();
const diffDays = diffTime / (1000 * 3600 * 24);

function App() {
  return (
    <div className="App bg-gray-500 bg-opacity-10">
      <header className="bg-white pt-4 mx-auto text-center grid gap-10 container max-w-screen-xl">
        <img src={Corner} className="w-[55%]"></img>
        <div className="-mt-60 grid gap-4">
        <h1 className='font-dancing text-8xl text-center text-gray-800'>Morgan & Sophie</h1>
        <div className="font-lato font-bold text-gray-700 uppercase">
        <p>9th November, 2023 - Auchen Castle</p>
        <p>{diffDays} day{diffDays !== 1 && `s`} to go!</p>
        </div>
        <img src={Corner} className="w-[55%] flex justify-self-end -scale-y-[1] -scale-x-[1] -mt-60"></img>

        </div>
        {/* <img src={Hero} alt="morgan and sophie" className="mx-auto h-[700px]"/> */}
      </header>
    </div>
  );
}

export default App;
