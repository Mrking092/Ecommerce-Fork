import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import {  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';
import HomeContentStyle from './HomeContentStyle.css';
import asSeen1 from '../../Imgs/zeroz/asSeen1.png';
import asSeen2 from '../../Imgs/zeroz/asSeen2.png';
import asSeen3 from '../../Imgs/zeroz/asSeen3.png';
import asSeen4 from '../../Imgs/zeroz/asSeen4.png';
import asSeen5 from '../../Imgs/zeroz/asSeen5.png';
import aboutUsImg from '../../Imgs/zeroz/aboutUsImg.jpg';
import loginAudio from '../../Imgs/zeroz/loginCheckout.mp3';

export default function HomeContent() {
    const audioRef = useRef(null);
    const playAudio = async () => {
            if (audioRef.current) {
                await audioRef.current.play();
            }
    };
    useEffect(() => {
        window.addEventListener('click', playAudio, { once: true });
        return () => {
            window.removeEventListener('click', playAudio);
        };
    }, []);

    return (
        <>
            <div className='homeFirstDiv'>
                <h1 className='text-7xl w-4/12 leading-tight font-semibold text-white mb-7'>Love the Planet we walk on</h1>
                <p className='text-lg text-white w-4/12 mb-7'>
                    Bibendum fermentum, aenean donec pretium aliquam blandit tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.
                </p>
                <div className='flex flex-row'>
                    <button className='bg-white py-3 px-8 font-semibold me-7'>SHOP MEN</button>
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
                    <audio ref={audioRef} src={loginAudio} preload="auto" style={{ display: 'none' }} />
                </div>
            </div>
        </>
    );
}
