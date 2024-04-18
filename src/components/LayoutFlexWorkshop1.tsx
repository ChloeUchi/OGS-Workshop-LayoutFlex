import React from 'react'
import "@components/Style.LayoutFlexWorkshop1.css"
import menu_bar from '@assets/menu_bar.png'
// import arrow_right_icon from 'assets/arrow_right_icon.png'
import airport_icon from '@assets/airport_icon.png'
import easy_booking_icon from '@assets/easy_booking_icon.png'
import group_icon from '@assets/group_icon.png'
import alone_with_nature from '@assets/alon_with_naturejpg.jpg'
import { BsArrowLeftCircle, BsFillArrowRightCircleFill } from 'react-icons/bs'
import the_beach from '@assets/the_beach.jpg'
import airport_thailand from '@assets/airport_thailand.jpg'
import moutain_nature from '@assets/moutain_nature.jpg'
import { FaStar } from "react-icons/fa";



function LayoutFlexWorkshop1() {
  return (
    <div>
        <div className='nav-container'>
            <div>
            <p>Island</p>
            </div>
            <div>
            <ul>
            <li>Our tour</li>
            <li>About us</li>
            <li>About us</li>
            <li>Booking</li>
            <li>FAQ</li>
            </ul>
            </div>
            <div><img src={menu_bar} className='menu-bar-img'/></div>
        </div>
        <div className='section1'>
        <h1>Explore the sights <br /> of the Azores </h1>
        <p>A place where noture and adventure unite</p>
        <button>Book now</button>
        <div className="iconbox">
        <BsArrowLeftCircle className="iconbox-img" /> <BsFillArrowRightCircleFill className="iconbox-img2"/>
        </div>
        {/* <div><img src={arrow_right_icon} className='arrow-right-icon'/></div> */}
        </div>
        <div className='section2 p-[1.5em] '>
                <h1>Top values for you</h1>
                <p>Try variety of benefirts when using our services</p>
                <ul>
                    <li>
                        <a>
                            <img src={airport_icon}/>
                            <span>Airport pickup</span>
                            <p>xxxxxxxx xxxxxxxx xxxx <br />xxxxxxxxxxxxx</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={easy_booking_icon}/>
                            <span>Easy booking</span>
                            <p>xxxxxxxx xxxxxxxx xxxx <br />xxxxxxxxxxxxx</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={group_icon}/>
                            <span>Best tour guide</span>
                            <p>xxxxxxxx xxxxxxxx xxxx <br />xxxxxxxxxxxxx</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={group_icon}/>
                            <span>Lots of promos</span>
                            <p>xxxxxxxx xxxxxxxx xxxx <br />xxxxxxxxxxxxx</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='section3'>
                <h1>Choose your tour</h1>
                <div className="card-container">
                <div className="card1">
                        <img src={alone_with_nature} />
                        <div className='flex absolute mt-[-15.3em] ml-[8.6em] bg-gray-100  rounded-full w-[70px] h-[26px] bg-opacity-30 gap-2 content-center'>
                        <p className='text-white'>5.0</p>
                        <span><FaStar className='text-white'/></span>
                        </div>
                        <div className='in-card z-20'>
                        <div>
                        <p>Alone with nature</p>
                        <p>$ 100</p>
                        </div>
                        <BsFillArrowRightCircleFill className='icon-in-card'/>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={the_beach}/>
                        <div className='flex absolute mt-[-15.3em] ml-[8.6em] bg-gray-100  rounded-full w-[70px] h-[26px] bg-opacity-30 gap-2 content-center'>
                        <p className='text-white'>5.0</p>
                        <span><FaStar className='text-white'/></span>
                        </div>
                        <div className='in-card'>
                        <div>
                        <p>The beach</p>
                        <p>$ 200</p>
                        </div>
                        <BsFillArrowRightCircleFill className='icon-in-card'/>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={moutain_nature}/>
                        <div className='flex absolute mt-[-15.3em] ml-[8.6em] bg-gray-100  rounded-full w-[70px] h-[26px] bg-opacity-30 gap-2 content-center'>
                        <p className='text-white'>5.0</p>
                        <span><FaStar className='text-white'/></span>
                        </div>
                        <div className='in-card'>
                        <div>
                        <p>Mountain nature</p>
                        <p>$ 150</p>
                        </div>
                        <BsFillArrowRightCircleFill className='icon-in-card'/>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={airport_thailand}/>
                        <div className='flex absolute mt-[-15.3em] ml-[8.6em] bg-gray-100  rounded-full w-[70px] h-[26px] bg-opacity-30 gap-2 content-center'>
                        <p className='text-white'>5.0</p>
                        <span><FaStar className='text-white'/></span>
                        </div>
                        <div className='in-card'>
                        <div>
                        <p>Airport thailand</p>
                        <p>$ 80</p>
                        </div>
                        <BsFillArrowRightCircleFill className='icon-in-card'/>
                        </div>
                    </div>
                </div>
                <div className='button-see'>
                    <button className='button-see-all'>See all</button>
                </div>
                
            </div>
            
    </div>

  )
}

export default LayoutFlexWorkshop1