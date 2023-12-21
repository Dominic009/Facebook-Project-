import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App font-abc flex flex-col md:justify-center h-[100vh]">
    
    <div className='md:flex md:flex-row md:justify-around md:items-center'>

      {/* heading section */}
      <div className='p-5 md:w-[500px] md:-mt-[100px]'>

       <h1 className="text-[65px] text-[#006eff] font-semibold mt-[5px] md:-ml-[80px] tracking-normal ">facebook</h1>


        <p className="text-2xl md:text-[30px] pl-12 md:pl-19 pr-12 text-center md:text-start md:w-[600px] font-light">Facebook helps you connect and share with the people in your life</p>
       
       
       </div>




      {/* Log in section */}

      <div className='flex justify-center mt-[10px]'>

        <div className='flex flex-col gap-3 w-[395px] h-[340px] bg-white pt-4 pl-4 pr-4 rounded-lg relative shadow-lg mt-[80px] md:mt-0'>

          <input className='focus:outline-[#006eff] focus:outline focus:outline-1 border border-grey-600 p-3 rounded-md text-md shadow-inner' type='text' placeholder='Email address or phone number' required></input>

          <input className='focus:outline-[#006eff] focus:outline focus:outline-1 border border-grey-600 p-3 rounded-md text-md shadow-inner' type='password' placeholder='Password' required></input>
          




          <button className='bg-[#1877F2] p-2 rounded-md font-semibold text-white text-xl mt-[8px] h-[45px]'>Log in</button>

          <span className='text-blue-600 text-sm mb-1'><a href="#" className=' hover:underline'>Forgotten password?</a></span>
        
        <div className='border border-b-1 border-gray-200 mb-1'></div>

          <button className=' new-account bg-[#42B72A] absolute bottom-[50px] text-white p-3 font-semibold rounded-md text-lg'>Create new account</button>
        
        </div>
        <div className='absolute bottom-[70px] text-sm'><b><a href="#" className='hover:underline'>Create a Page </a></b> for a celebrity, brand or business </div>

      </div>



    </div>





































































    </div>
  );
}

export default App;
