import React from 'react'
import myImg from '@assets/pus.png'
import { FaPhone } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import logo from '@assets/cp-logo.png'
import { useNavigate } from 'react-router-dom';

function TailwindStyle() {
    const navigator = useNavigate();
    return (
        <div className='text-[#EEF5FF] p-[2em]'>
            <div className='flex flex-col'>
                <div className="card-front lg:flex justify-around content-center lg:w-[50em] lg:h-[25em] bg-gradient-to-b from-blue-400 via-blue-400 to-blue-200 lg:bg-gradient-to-r lg:from-blue-400 lg:via-blue-400 lg:to-blue-200  border rounded-xl w-[25em] h-[40em]">
                    <div className='content-center  place-items-center flex lg:flex-col justify-center'>
                        <div className='lg:bg-gradient-to-b lg:from-[#343f80] lg:via-[#3e4ba3] lg:to-transparent lg:w-[8em] lg:h-full bg-gradient-to-r from-[#343f80] via-[#3e4ba3] to-transparent h-[8em] w-full'></div>
                        <img src={myImg} alt="my image" className='h-[16rem] w-[16rem] border-4 rounded-full p-px bg-gradient-to-b from-red-400 to-transparent drop-shadow-2xl ' />
                        <div className='lg:bg-gradient-to-t lg:from-[#343f80] lg:via-[#3e4ba3] lg:to-transparent lg:w-[8em] lg:h-full bg-gradient-to-l from-[#343f80] via-[#3e4ba3] to-transparent h-[8em] w-full'></div>
                    </div>
                    <div className="logo-container  lg:flex flex-col justify-around lg:m-[0em] m-[6em]">
                        <div className=' flex justify-center'><img src={logo} alt="logo" className='h-full w-full drop-shadow-3xl' /></div>
                        <div className='text-center border-2 rounded-full bg-gradient-to-l from-blue-300 via-blue-300 to-blue-300 lg:bg-gradient-to-l lg:from-blue-300 lg:via-blue-300 lg:to-blue-300 mt-[2em]  lg:mt-[0] text-[1.5em] lg:text-[2em]'><p className='bg-gradient-to-r from-[#2a3154] via-[#FF5151] to-[#161E54] text-transparent bg-clip-text font-medium'>Chloe Uchinaga</p></div>
                    </div>
                </div><br />
                <div className="card-back lg:flex flex-row-reverse justify-around lg:w-[50em] lg:h-[25em] bg-gradient-to-b from-blue-400 via-blue-400 to-blue-200 lg:bg-gradient-to-l lg:from-blue-400 lg:via-blue-400 lg:to-blue-200 border rounded-xl w-[25em] h-[40em] ">
                    <div className="img-container content-center  place-items-center flex lg:flex-col justify-center">
                        <div className='lg:bg-gradient-to-b lg:from-[#343f80] lg:via-[#3e4ba3]lg:to-transparent lg:w-[8em] lg:h-full bg-gradient-to-r from-[#343f80] via-[#3e4ba3] to-transparent h-[8em] w-full'></div>
                        <img src={myImg} alt="my image" className='mt-[1em] lg:mt-0 h-[15rem] w-[15rem] border-4 rounded-full p-px bg-gradient-to-b from-red-400 to-transparent drop-shadow-2xl' />
                        <div className='lg:bg-gradient-to-t lg:from-[#343f80] lg:via-[#3e4ba3] lg:to-transparent lg:w-[8em] lg:h-full bg-gradient-to-l from-[#343f80] via-[#3e4ba3] to-transparent h-[8em] w-full'></div>
                    </div>
                    <div className="info-container flex flex-col justify-center place-items-center lg:justify-around  p-[2em] lg:p-[0] drop-shadow-xl">
                        <div>
                            <h1 className='text-[2.5em] lg:text-[3em] bg-gradient-to-r from-[#2a3154] via-[#FF5151] to-[#161E54] text-transparent bg-clip-text font-extrabold'>Chloe Uchinaga</h1>
                            <h2 className='text-[1.5em]'>Front-End Internship</h2>
                        </div>
                        <div className="container ml-[5em] mt-5 lg:mt-0 lg:ml-0">
                            <div className="phone flex">
                                <div className='content-center w-8 "'><FaPhone className='w-8 h-8 float-left border-r-2 border-blue-200 pr-2 mr-2' /></div>
                                <div className='ml-2'>
                                    <h1 className='font-bold'>Phone</h1>
                                    <p>0900900900</p>
                                </div>
                            </div>
                            <div className="email flex">
                                <div className='content-center w-8'><GrMail className='w-8 h-8 float-left border-r-2 border-blue-200 pr-2 mr-2' /></div>
                                <div className='ml-2'>
                                    <h1 className='font-bold'>Email</h1>
                                    <p>pitpit@gmail.love</p>
                                </div>
                            </div>
                            <div className="location flex">
                                <div className='content-center w-8'><FaLocationDot className='w-8 h-8 float-left border-r-2 border-blue-200 pr-2 mr-2' /></div>
                                <div className='ml-2'>
                                    <h1 className='font-bold'>Location</h1>
                                    <p>my heart</p>
                                </div>
                            </div>
                            <div className="website flex">
                                <div className='content-center w-8'><TbWorld className='w-8 h-8 float-left border-r-2 border-blue-200 pr-2 mr-2' /></div>
                                <div className='ml-2'>
                                    <h1 className='font-bold'>Website</h1>
                                    <p>lovelove.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <div><button onClick={() => navigator('/')} className='bg-[#0a2d3e] text-white border-solid rounded-lg h-[3em] w-[8em] mt-[2em] mb-[2em]'>Back</button></div>

        </div>
    )
}

export default TailwindStyle