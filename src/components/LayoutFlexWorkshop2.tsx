import React from 'react'
import '@components/Style.LayoutFlexWorkshop2.css'
import imgCalendar from '@assets/icon-calendar.png'
import imgRestuarant from '@assets/restuarant.png'
import Arrow2 from '@assets/arrow2.png'
import holdMoney from '@assets/hand-hold-money.png'
import shopBag from '@assets/shop-bag.png'
import coinImg from '@assets/icon-coins.png'
import Arrow from '@assets/arrow.png'
import Menuham from '@assets/menu-hamburger.png'
import GolfLeaf from '@assets/gold-leaf.png'
import VisaImg from '@assets/visa-svgrepo-com.png'
import hamburgerNemu from '@assets/nemu-hamburger-white.png'
import CalendarWhite from '@assets/icon-calendar-white.png'
import downArrow from '@assets/down-arrow-weekly.png'
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

function LayoutFlexWorkshop2() {
  return (
    <div className='flex gap-2'>
      <div className='visa-card-1'>
        <div className='w-[390px] place-content-center bg-slate-50'>
          <div className='text-left font-sans m-[1.5em]'>
            <div className='flex justify-between'>
              <h3>All my accounts</h3>
              <img className='w-[20px]' src={Menuham} alt="#" />
            </div>
            <p className='text-[#d3d3d3]'>June 10, 2018</p>
          </div>
          <div className='ml-[1.5em] mr-[1.5em] border-2 rounded-full'>
            <div className='p-[1em] m-15px text-white bg-gradient-to-b from-[#415981] to-[#274376] border rounded-md'>
              <img className='pl-[5px] w-[3.5em]' src={VisaImg} alt="" />
              <p className='pr-[3.5em] text-end text-[#AAFF00] text-xs'>Available Balance</p>
              <div className='flex justify-between'>
                <img className='ml-[13px] w-[35px] ' src={GolfLeaf} alt="" />
                <h1 className='pr-[1.5em] text-2xl'>$ 7,392.00</h1>
              </div><br />
              <h1 className='text-[#8a9ebf] text-2xl text-center'>42012&nbsp;&nbsp; 3049&nbsp;&nbsp; 2800&nbsp;&nbsp; 9815</h1>
              <br />
              <div className='flex justify-between text-xs text-[#dedede]'>
                <p>EXPIRE &#9656; 02/22 </p>
                <p>CVC CODE &#9656; 230</p>
              </div>
            </div>
          </div>
          <div className='ml-[2em] mr-[2em] mt-[1em] mb-[1em] border-2 border-white shadow-lg'>
            <ul className='grid grid-cols-2 p-[10px] bg-white'>
              <li>
                <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Income</p>
                <ul className='grid grid-cols-2 justify-center pl-[2em] pr-[6em] pt-[0.3em]'>
                  <li>
                    <div className='text-green-500'>
                      <FaArrowDown/>
                    </div>
                  </li>
                  <li>
                    <p className='text-center text-[#2FD646]'>$9,302.00</p>
                  </li>
                </ul>
              </li>

              <li>
                <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Expense</p>
                <ul className='grid grid-cols-2 justify-center pl-[2em] pr-[6em] pt-[0.3em]'>
                  <li>
                  <div className='text-red-500'>
                  <FaArrowUp />
                  </div>
                  </li>
                  <li>
                    <p className='text-center text-[#FF3232]'>$2,790.00</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='pl-[2em] pr-[2em]'>
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
                  <img className='w-[10px] h-[10px] justify-self-center' src={Arrow2} alt="" />
                </div>
              </li>
              <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                <div>
                  <img className='w-[30px]' src={holdMoney} alt="" />
                </div>
                <div>
                  <p className='text-sm'>Salary Deposit</p>
                  <p className='text-xs text-[#CDCDCD]'>June 1, 2018</p>
                </div>
                <div className='flex flex-wrap'>
                  <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                  <img className='w-[10px] h-[10px] justify-self-center' src={Arrow} alt="" />
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
                  <img className='w-[10px] h-[10px] justify-self-center ' src={Arrow2} alt="" />
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
                  <img className='w-[10px] h-[10px] justify-self-center' src={Arrow} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className='visa-card-2'>
          <div className="w-[390px]">
            <div className='bg-gradient-to-b from-[#546a90] to-[#1c3667] pt-[1em]'>
              <div className='flex justify-between p-[1em] pb-[2em]'>
                <img className='w-[15px] h-[15px]' src={hamburgerNemu} alt="" />
                <img className='w-[20px]' src={CalendarWhite} alt="" />
              </div>
              <div className='text-center'>
                <p className='text-[#AAFF00] text-xs content-center'>Available Balance</p>
                <h1 className='text-2xl text-white'>$ 7,392.00</h1>
                <p className='text-[#9db0cf]'>June 9, 2018</p>
              </div>

              <div className='bg-gradient-to-b from-[#3f567d] to-[#1c3667] border border-[#3f567d] rounded m-[2em] p-[0.7em] shadow-md'>
                <h1 className='text-[#9db0cf] text-2xl text-center'>42012&nbsp;&nbsp; 3049&nbsp;&nbsp; 2800&nbsp;&nbsp; 9815</h1>
                <br />
                <div className='flex justify-between text-[#dedede] text-xs'>
                  <p>EXPIRE &#9656; 02/22 </p>
                  <p>CVC CODE &#9656; 230</p>
                </div>
              </div>
              <br />
            </div>
            <div className='ml-[2em] mr-[2em] mt-[-2.5em] border-2 border-white rounded shadow-lg bg-white'>
              <div>
                <ul className='grid grid-cols-2 p-[10px] '>
                  <li>
                    <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Income</p>
                    <ul className='grid grid-cols-2 justify-center pl-[2em] pr-[6em] pt-[0.3em]'>
                      <li>
                      <div className='text-green-500'>
                  <FaArrowUp />
                  </div>
                      </li>
                      <li>
                        <p className='text-center text-[#2FD646]'>$9,302.00</p>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className='ml-[2em] border-2 border-gray-200 rounded-full text-center w-[6em] shadow'>Expense</p>
                    <ul className='grid grid-cols-2 justify-center pl-[2em] pr-[6em] pt-[0.3em]'>
                      <li>
                      <div className='text-red-500'>
                  <FaArrowUp />
                  </div>
                      </li>
                      <li>
                        <p className='text-center text-[#FF3232]'>$2,790.00</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className='bg-slate-50 p-[1.5em]'>
                <div className='flex justify-between '>
                  <h1 className='text-xl'>Details of movements</h1>
                  <div>
                    <div className='flex'>
                  <p className='text-sm text-gray-500'>Weekly </p>
                  <img className='w-[10px] h-[7px] mt-[7px] ml-[2px]' src={downArrow}/>
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
                      <img className='w-[10px] h-[10px] justify-self-center' src={Arrow2} alt="" />
                    </div>
                  </li>
                  <li className='flex justify-between border-2 border-white rounded shadow-lg p-[0.5em] mt-[1em]'>
                    <div>
                      <img className='w-[30px]' src={holdMoney} alt="" />
                    </div>
                    <div>
                      <p className='text-sm'>Salary Deposit</p>
                      <p className='text-xs text-[#CDCDCD]'>June 1, 2018</p>
                    </div>
                    <div className='flex flex-wrap'>
                      <h1 className='text-[#2FD646]'>$1200&nbsp;&nbsp;</h1>
                      <img className='w-[10px] h-[10px] justify-self-center' src={Arrow} alt="" />
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
                      <img className='w-[10px] h-[10px] justify-self-center ' src={Arrow2} alt="" />
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
                      <img className='w-[10px] h-[10px] justify-self-center' src={Arrow} alt="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LayoutFlexWorkshop2