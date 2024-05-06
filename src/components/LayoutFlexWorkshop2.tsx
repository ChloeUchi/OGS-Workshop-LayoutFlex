import React from 'react'
import '@components/Style.LayoutFlexWorkshop2.css'
import imgCalendar from '@assets/icon-calendar.png'
import imgRestuarant from '@assets/restuarant.png'
import holdMoney from '@assets/hand-hold-money.png'
import shopBag from '@assets/shop-bag.png'
import coinImg from '@assets/icon-coins.png'
import Menuham from '@assets/menu-hamburger.png'
import GolfLeaf from '@assets/gold-leaf.png'
import VisaImg from '@assets/visa-svgrepo-com.png'
import hamburgerNemu from '@assets/nemu-hamburger-white.png'
import CalendarWhite from '@assets/icon-calendar-white.png'
import downArrow from '@assets/down-arrow-weekly.png'
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { BiDollar } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

function LayoutFlexWorkshop2() {
  const navigator = useNavigate();
  return (
    <div>
      <div className='flex flex-wrap gap-2'>
        <div className='visa-card-1 max-w-[50%]'>
          <div className='max-w-[390px] place-content-center bg-slate-50'>
            <div className='text-left font-sans m-[1.5em]'>
              <div className='flex justify-between'>
                <h3>All my accounts</h3>
                <img className='w-[20px]' src={Menuham} alt="#" />
              </div>
              <p className='text-[#d3d3d3]'>June 10, 2018</p>
            </div>
            <div>
              <div className=' relative w-[90%] mx-[1.5em] p-[1em]  text-white bg-gradient-to-r from-[#3b657c] to-[#06354f] rounded-md shadow-lg'>
                <img className='pl-[5px] w-[3.5em]' src={VisaImg} alt="" />
                <p className='mr-[1em] text-end text-[#AAFF00] text-xs'>Available Balance</p>
                <div className='flex justify-between'>
                  <img className='ml-[13px] w-[35px] ' src={GolfLeaf} alt="" />
                  <div className='flex justify-center gap-2 '>
                    <div className='w-[20px] h-[20px] mt-[8px] border-black rounded-full bg-black'><BiDollar className='w-[18px] ml-[1px] mt-[2px]' /></div>
                    <h1 className='text-2xl text-white'>7,392.00</h1>
                  </div>
                </div><br />
                <h1 className='text-[#8a9ebf] text-2xl text-center'>42012&nbsp;&nbsp; 3049&nbsp;&nbsp; 2800&nbsp;&nbsp; 9815</h1>
                <br />
                <div className='flex justify-between text-xs text-[#dedede]'>
                  <p>EXPIRE &#9656; 02/22 </p>
                  <p>CVC CODE &#9656; 230</p>
                </div>
              </div>
            </div>

            <div className='mx-[1em] my-[1em] border-2 border-white shadow-lg'>
              <ul className='rounded-md shadow-md flex gap-5 around justify-center items-center py-2 px-8 bg-white'>
                <li>
                  <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Income</p>
                  <ul className='flex justify-center pl-[2em] pr-[2em] pt-[0.3em]'>
                    <li>
                      <div className='text-green-500 mt-[4px]'>
                        <FaArrowDown />
                      </div>
                    </li>
                    <li>
                      <p className='text-center text-[#2FD646] ml-[5px]'>$9,302.00</p>
                    </li>
                  </ul>
                </li>

                <li>
                  <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Expense</p>
                  <ul className='flex justify-center pl-[2em] pr-[2em] pt-[0.3em]'>
                    <li>
                      <div className='text-red-500 mt-[5px]'>
                        <FaArrowUp />
                      </div>
                    </li>
                    <li>
                      <p className='text-center text-[#FF3232] ml-[5px]'>$2,790.00</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='px-[2em] mt-[1.5em]'>
              <div className='flex justify-between'>
                <h1 className='text-xl'>Details of movements</h1>
                <img className='w-[25px]' src={imgCalendar} alt="" />
              </div>
              <ul className='mt-[1em] bg-white'>
                <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em]'>
                  <div>
                    <img className='w-[30px]' src={imgRestuarant} alt="" />
                  </div>
                  <div>
                    <p className='text-sm'>Restuarant Manhattan</p>
                    <p className='text-xs text-[#CDCDCD]'>June 10, 2018</p>
                  </div>
                  <div className='flex flex-wrap'>
                    <h1 className='text-[#FF3232]'>$170&nbsp;&nbsp;</h1>
                    <div className='text-red-500 mt-[5px]'>
                      <FaArrowUp />
                    </div>
                  </div>
                </li>
                <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                  <div>
                    <img className='w-[30px]' src={holdMoney} alt="" />
                  </div>
                  <div className=''>
                    <p className='text-sm'>Salary Deposit</p>
                    <p className='text-xs text-[#CDCDCD]'>June 1, 2018</p>
                  </div>
                  <div className='flex flex-wrap'>
                    <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                    <div className='text-green-500 mt-[5px]'>
                      <FaArrowDown />
                    </div>
                  </div>
                </li>
                <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                  <div>
                    <img className='w-[30px]' src={shopBag} alt="" />
                  </div>
                  <div>
                    <p className='text-sm'>Central Market</p>
                    <p className='text-xs text-[#CDCDCD]'>May 28, 2018</p>
                  </div>
                  <div className='flex flex-wrap'>
                    <h1 className='text-[#FF3232]'>$50&nbsp;&nbsp;</h1>
                    <div className='text-red-500 mt-[5px]'>
                      <FaArrowUp />
                    </div>
                  </div>
                </li>
                <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                  <div>
                    <img className='w-[30px]' src={coinImg} alt="" />
                  </div>
                  <div>
                    <p className='text-sm'>Salary Deposit</p>
                    <p className='text-xs text-[#CDCDCD]'>May 1, 2018</p>
                  </div>
                  <div className='flex flex-wrap'>
                    <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                    <div className='text-green-500 mt-[5px]'>
                      <FaArrowDown />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
        <div className='visa-card-2 max-w-[50%]'>
          <div className="max-w-[390px]">
            <div className='bg-gradient-to-r from-[#3b657c] to-[#06354f] pt-[1em] mb-[2em] h-[20em]'>
              <div className='flex justify-between p-[1em] pb-[2em]'>
                <img className='w-[15px] h-[15px]' src={hamburgerNemu} alt="" />
                <img className='w-[20px]' src={CalendarWhite} alt="" />
              </div>
              <div className='text-center'>
                <p className='text-[#AAFF00] text-xs content-center'>Available Balance</p>
                <div className='flex justify-center gap-2 text-white'>
                  <div className='w-[20px] h-[20px] mt-[8px] border-black rounded-full bg-black'><BiDollar className='w-[18px] ml-[1px] mt-[2px]' /></div>
                  <h1 className='text-2xl text-white'>7,392.00</h1>
                </div>
                <p className='text-[#9db0cf]'>June 9, 2018</p>
              </div>

              <div className='bg-gradient-to-r from-[#3b657c] to-[#06354f] border-[#3f567d] rounded-md ml-[2em] mr-[2em] p-[0.7em] shadow-md'>
                <h1 className='text-[#9db0cf] text-2xl text-center'>42012&nbsp;&nbsp; 3049&nbsp;&nbsp; 2800&nbsp;&nbsp; 9815</h1>
                <br />
                <div className='flex justify-between text-[#dedede] text-xs'>
                  <p>EXPIRE &#9656; 02/22 </p>
                  <p>CVC CODE &#9656; 230</p>
                </div>
              </div>
              <br />
            </div>

            <div>
              <div className='  bg-slate-50'>
                {/* *************************** */}
                <div className='relative flex items-center justify-center h-full'>
                  <ul className="rounded-md shadow-md flex gap-10 around justify-center items-center py-2 px-8 bg-white absolute mt-[-4.5em] max-w-[100%]">
                    <li>
                      <p className=' border-2 border-gray-200 rounded-full text-center max-w-[6em] shadow'>Income</p>
                      <ul className='flex justify-center pr-[2em] pt-[0.3em]'>
                        {/* lkooiujhiu */}
                        <li>
                          <div className='text-green-500 mt-[4px]'>
                            <FaArrowUp />
                          </div>
                        </li>
                        <li>
                          <p className='text-center text-[#2FD646] ml-[5px]'>$9,302.00</p>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <p className=' border-2 border-gray-200 rounded-full text-center max-w-[6em] shadow'>Expense</p>
                      <ul className='flex justify-center  pt-[0.3em]'>
                        <li>
                          <div className='text-red-500 mt-[4px]'>
                            <FaArrowUp />
                          </div>
                        </li>
                        <li>
                          <p className='text-center text-[#FF3232] ml-[5px]'>$2,790.00</p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className='p-[1.5em] pt-[5em] w-[100%] bg-slate-50 mt-[-2.2em] '>
                  <div className='flex justify-between '>
                    <h1 className='text-xl text-gray-600'>Details of movements</h1>
                    <div>
                      <div className='flex'>
                        <p className='text-sm text-gray-500 mt-[5px]'>Weekly </p>
                        <img className='w-[10px] h-[7px] mt-[12px] ml-[3px]' src={downArrow} />
                      </div>
                    </div>
                  </div>
                  <ul className='mt-[1em] bg-white'>
                    <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em]'>
                      <div>
                        <img className='w-[30px]' src={imgRestuarant} alt="" />
                      </div>
                      <div>
                        <p className='text-sm'>Restuarant Manhattan</p>
                        <p className='text-xs text-[#CDCDCD]'>June 10, 2018</p>
                      </div>
                      <div className='flex flex-wrap'>
                        <h1 className='text-[#FF3232]'>$170&nbsp;&nbsp;</h1>
                        <div className='text-red-500 mt-[5px]'>
                          <FaArrowUp />
                        </div>
                      </div>
                    </li>
                    <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                      <div>
                        <img className='w-[30px]' src={holdMoney} alt="" />
                      </div>
                      <div>
                        <p className='text-sm '>Salary Deposit</p>
                        <p className='text-xs text-[#CDCDCD]'>June 1, 2018</p>
                      </div>
                      <div className='flex flex-wrap'>
                        <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                        <div className='text-green-500 mt-[5px]'>
                          <FaArrowDown />
                        </div>
                      </div>
                    </li>
                    <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                      <div>
                        <img className='w-[30px]' src={shopBag} alt="" />
                      </div>
                      <div>
                        <p className='text-sm'>Central Market</p>
                        <p className='text-xs text-[#CDCDCD]'>May 28, 2018</p>
                      </div>
                      <div className='flex flex-wrap'>
                        <h1 className='text-[#FF3232]'>$50&nbsp;&nbsp;</h1>
                        <div className='text-red-500 mt-[5px]'>
                          <FaArrowUp />
                        </div>
                      </div>
                    </li>
                    <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                      <div>
                        <img className='w-[30px]' src={coinImg} alt="" />
                      </div>
                      <div>
                        <p className='text-sm'>Salary Deposit</p>
                        <p className='text-xs text-[#CDCDCD]'>May 1, 2018</p>
                      </div>
                      <div className='flex flex-wrap'>
                        <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                        <div className='text-green-500 mt-[5px]'>
                          <FaArrowDown />
                        </div>
                      </div>
                    </li>
                  </ul>
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

export default LayoutFlexWorkshop2
