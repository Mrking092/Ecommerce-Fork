import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react';
import {  } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import HomeContentStyle from './HomeContentStyle.css'
import asSeen1 from '../../Imgs/zeroz/asSeen1.png'
import asSeen2 from '../../Imgs/zeroz/asSeen2.png'
import asSeen3 from '../../Imgs/zeroz/asSeen3.png'
import asSeen4 from '../../Imgs/zeroz/asSeen4.png'
import asSeen5 from '../../Imgs/zeroz/asSeen5.png'
import aboutUsImg from '../../Imgs/zeroz/aboutUsImg.jpg'
import shoes from '../../Imgs/zeroz/shoes.png'
import Rating from '@mui/material/Rating';


export default function HomeContent() {

     async function test(){
        try{
            const response = await fetch('/my-app/src/database/database.json');
            // console.log(response);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json(); 
            console.log(json);
        }catch(error){
            console.error(error.message);
        }
    }
    test()
    
    return (
        <>
            <div className='homeFirstDiv'>
                <h1 className='text-7xl w-4/12 leading-tight font-semibold text-white mb-7'>Love the Planet we walk on</h1>
                <p className='text-lg text-white w-4/12 mb-7'>
                    Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
                </p>
                <div className='flex flex-row'>
                    <button onClick={test} className='bg-white py-3 px-8 font-semibold me-7'>SHOP MEN</button>
                    <button className='bg-white py-3 px-8 font-semibold'>SHOP WOMEN</button>
                </div>
            </div>

            <div className='asSeenIn flex justify-center items-center gap-x-8'>
                <p className='text-lg font-medium -mt-1'>As seen in:</p>
                <div className='flex justify-center mx-6'>
                    <img src={asSeen1} alt="Seen in media 1" />
                    <img src={asSeen2} alt="Seen in media 2" />
                    <img src={asSeen3} alt="Seen in media 3" />
                    <img src={asSeen4} alt="Seen in media 4" />
                    <img src={asSeen5} alt="Seen in media 5" />
                </div>
            </div>

            <div className='aboutUs flex justify-center items-center gap-x-10 p-10'>
                <img className='py-20' src={aboutUsImg} alt="About us" />
                <div className='p-10 pt-5'>
                    <h6 className='text-lg py-10 text-orange-400'>About Us</h6>
                    <h2 className='text-5xl font-semibold pb-10'>
                        Selected materials designed for comfort and sustainability
                    </h2>
                    <p className='text-gray-400'>
                        Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.
                    </p>
                    <button className='font-semibold border-b-2 border-orange-400 mt-10'>READ MORE</button>
                    {/* <audio ref={audioRef} src={loginAudio} preload="auto" style={{ display: 'none' }} /> */}
                </div>
            </div>

            <div className='seeHowMadeDiv py-20'>
                <h2 className='text-5xl font-semibold text-center py-10'>See how your shoes are made</h2>
                <p className='text-gray-400 text-center mx-auto pb-5 w-5/12 font-semibold'>Urna, felis enim orci accumsan urna blandit
                egestas mattis egestas feugiat viverra ornare donec adipiscing semper aliquet integer
                risus leo volutpat nulla enim ultrices.</p>
                <div className=' makingContainer grid grid-flow-col grid-cols-3'>
                    <div className='beforeImg pt-10 w-5/12 mx-auto text-start'>
                        <h6 className='text-orange-400 font-semibold mb-3'>01.</h6>
                        <h4 className='text-2xl font-semibold mb-3'>Pet canvas</h4>
                        <p className='text-gray-400'>Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus</p>
                    </div>
                    <div className='beforeImg pt-10 w-5/12 mx-auto text-start'>
                        <h6 className='text-orange-400 font-semibold mb-3'>02.</h6>
                        <h4 className='text-2xl font-semibold mb-3'>Algae foam + vegan glue</h4>
                        <p className='text-gray-400'>Enim tincidunt donec vulputate magna pharetra mattis in</p>
                    </div>
                    <div className='shoes pt-10 row-span-2 my-auto col-start-2 row-start-1'>
                        <img className='' src={shoes}/>
                    </div>
                    <div className='afterImg pt-10 w-5/12 mx-auto text-end'>
                        <h6 className='text-orange-400 font-semibold mb-3'>03.</h6>
                        <h4 className='text-2xl font-semibold mb-3'>Organic cotton</h4>
                        <p className='text-gray-400'>A vel ipsum, sed dignissim elementum ultrices amet</p>
                    </div>
                    <div className='afterImg pt-10 w-5/12 mx-auto text-end'>
                        <h6 className='text-orange-400 font-semibold mb-3'>04.</h6>
                        <h4 className='text-2xl font-semibold mb-3'>Upcycled plastic bottles</h4>
                        <p className='text-gray-400'>Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est</p>
                    </div>
                </div>
            </div>

            <div className='ourBestSeller'>
                <div className=''>
                    <h4 className='text-2xl font-semibold py-10'>Our Best Seller</h4>
                    <button className=''>VIEW ALL BEST SELLERS</button>
                </div>
                <div>
                    <div className=''>
                        <div className=''>
                            <img src={shoes}/>
                        </div>
                        <h5 className=''>Women's each Training</h5>
                        <div className=''>
                            <p className=''>$69.90</p>
                            <p className=''>$57.90</p>
                        </div>
                        <div className=''>
                        <Rating name="half-rating-read" value={2.5} precision={0.5} readOnly />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
