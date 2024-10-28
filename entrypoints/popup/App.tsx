
import './App.css';

function App() {
  const closePopup = () => {
    // Logic to close the popup
    window.close(); // This will close the current window (popup)
  };

  return (
    <>
      
       <div className='flex flex-col items-center p-[30px] gap-3'> <img src="/wxt.svg" alt="Logo" className="h-[72px] w-[72px] bg-black rounded-full object-cover" />

       <h1 className='text-lg font-bold'>ChatGpt Writer</h1></div>
       <div className='pl-[30px] pr-[30px] '>
        <p className='text-base font-semibold text-slate- mb-2 text-center'>Welcome to ChatGPT Writer</p>
        <p className='text-sm text-center'>ChatGPT Writer is a Chrome extension that helps you generate messages faster and more effectively. It uses AI to suggest text as you write, so you can spend less time
        typing and more time on what matters.</p>
        <span className='text-sm text-center'>created by Vishal Rathod</span>
        {/* <div className='mt-4 flex justify-center items-center'><button className='bg-black text-white pb-[6px] pt-[6px] w-52 rounded-md hover:bg-slate-950'>Get Started</button></div>
       </div> */}
       <div className='mt-4 flex justify-center items-center'>
        <button 
          className='bg-black text-white pb-[6px] pt-[6px] w-52 rounded-md hover:bg-slate-950' 
          onClick={closePopup} // Added onClick event
        >
          Get Started
        </button>
      </div>
      </div>
     
    </>
  );
}

export default App;