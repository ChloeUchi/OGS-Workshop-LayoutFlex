import "@components/Style.Module.css";
import { useNavigate } from "react-router-dom";

function StyleLearn() {
  const navigator = useNavigate();
  return (
    <div>
      <div className="flex justify-center">
        <div className="button-container">
          <button className="cm1">CLICK ME</button><br />
          <button className="cm2">CLICK ME</button><br />
          <button className="cm3">CLICK ME</button><br />
          <button className="cm4">CLICK ME</button><br />
          <button onClick={() => navigator('/layoutflexworkshop1')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>Layout Flex 1</button> <br />
          <button onClick={() => navigator('/layoutflexworkshop2')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>Layout Flex 2</button><br />
          <button onClick={() => navigator('/tailwindstyle')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>TailwindCSS</button>
          {/* <button onClick={() => navigator('/fetchapi')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>Test</button> */}
          <button onClick={() => navigator('/workshopapi')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>API</button>
          {/* <button onClick={() => navigator('/serviceapi')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>Service API</button> */}
          {/* <button onClick={() => navigator('/pokemon')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>Pokemon</button> */}
          <button onClick={() => navigator('/pokemondetails')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>Pokemon Details</button>

        </div>
      </div>

    </div>
  )
}

export default StyleLearn