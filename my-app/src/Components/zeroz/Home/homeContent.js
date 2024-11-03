import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react';
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faStar, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPinterestP, faXTwitter , faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import HomeContentStyle from './HomeContentStyle.css'
import asSeen1 from '../../Imgs/zeroz/asSeen1.png'
import asSeen2 from '../../Imgs/zeroz/asSeen2.png'
import asSeen3 from '../../Imgs/zeroz/asSeen3.png'
import asSeen4 from '../../Imgs/zeroz/asSeen4.png'
import asSeen5 from '../../Imgs/zeroz/asSeen5.png'
import aboutUsImg from '../../Imgs/zeroz/aboutUsImg.jpg'
import shoes from '../../Imgs/zeroz/shoes.png'
import Rating from '@mui/material/Rating';
// import imageTest from '../../../database/img/female/0.jpg'


export default function HomeContent() {

    const [female, setFemale] = useState([]);
    const [male, setMale] = useState([]);

     async function test(){
        try{
            const response = await fetch('http://localhost:3000/database/database.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            setFemale(json.female);
            setMale(json.male);
        }catch(error){
            console.error(error.message);
        }
    }
    useEffect(()=>{
        test();
    }, [])

    let highRating = female.concat(male).filter((item) => item.rating >= 4.5).sort((a, b) => b.rating - a.rating);
    const [quickView, setQuickView] = useState(false);
    const [shoesSize, setShoesSize] = useState("")
    const [quickVal, setQuickVal] = useState('');
    const quickViewChange = (e) => {
        setQuickView(!quickView);
        setShoesSize(35);
        if(document.querySelector('body').style.overflow == 'hidden'){
            document.querySelector('body').style.overflow = 'visible';
        }else{
            document.querySelector('body').style.overflow = 'hidden';
        }
        // console.log(e.target.value)
        if(e.target.textContent != ''){
            setQuickVal(highRating.filter(item => item.name == e.target.textContent));
            console.log(quickVal.name);
        }else{
            setQuickVal(highRating.filter(item => ("http://localhost:3000" + item.img).toString() == e.target.src));
        }
        }
    let sizeValue = '';

    function sizeChanging(){        
        let getSize = document.querySelector('.size');
        setShoesSize(sizeValue = getSize.value || 35);
    }

    let [shoesNum, setShoesNum] = useState("1")
    function addShoes(){
        setShoesNum(++shoesNum);
    }
    function removeShoes(){
        if(shoesNum > 1)
        setShoesNum(--shoesNum);
    }

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


            <div className='ourBestSeller pb-24'>
                <div className='headerDiv flex py-10 justify-between'>
                    <h4 className='text-2xl font-semibold'>Our Best Seller</h4>
                    <button className='pt-2 border-b-2 border-orange-400 hover:border-black duration-500 font-semibold tracking-wider'>VIEW ALL BEST SELLERS</button>
                </div>
                <div className='mainGrid grid grid-flow-row grid-cols-3 gap-5 h-[100%]'>
                    {quickView &&
                        <div className='quickViewContainer'>
                            <div value={''} onClick={quickViewChange} className='quickViewBg'></div>
                            <div className='quickViewDiv h-fit flex items-center p-[1.5%]'>
                                    <div value={''} onClick={quickViewChange} className='quickViewCloseBtn absolute'>
                                        <FontAwesomeIcon icon={faX} />
                                    </div>    
                                <div className='quickViewImg h-fit w-1/2 bg-[#f1f1ef]'>
                                    <img className='w-full' src={`${process.env.PUBLIC_URL}${quickVal[0].img}`}/>
                                </div>
                                <div className='quickViewContent w-1/2 px-[3%]'>
                                    <h2 className='text-3xl pb-5'>{quickVal[0].name}</h2>
                                        <Rating className='pb-5' name="half-rating-read " value={quickVal[0].rating || 0} precision={0.5} readOnly/>
                                    <p className='pb-5 font-semibold'>Auctor eros suspendisse tellus venenatis sodales purus non pellentesque amet,
                                    nunc sit eu, enim fringilla egestas pulvinar odio feugiat consectetur egestas magna
                                    pharetra cursus risus, lectus enim eget eu et lobortis faucibus.</p>
                                        <p className='pb-5 font-semibold'>SIZE: {shoesSize || 35} </p>
                                        <select onChange={sizeChanging} defaultValue={35} className='size w-[100%] border p-2 mb-5'>
                                            <option value='35'>35</option>
                                            <option value='36'>36</option>
                                            <option value='37'>37</option>
                                            <option value='38'>38</option>
                                            <option value='39'>39</option>
                                            <option value='40'>40</option>
                                            <option value='41'>41</option>
                                            <option value='42'>42</option>
                                            <option value='43'>43</option>
                                            <option value='44'>44</option>
                                            <option value='45'>45</option>
                                        </select>
                                        <h4 className='text-2xl pb-5'>{
                                        (
                                            quickVal[0].price.new == quickVal[0].price.old ? quickVal[0].price.old :
                                            <div className='flex'>
                                                <p className='line-through text-gray-300 me-2'>{quickVal[0].price.old}</p>
                                                <p className='text-black'>{quickVal[0].price.new}</p>
                                            </div>
                                        )
                                    }</h4>
                                        <div className='addToCartContainer flex justify-between pb-[8%] border-b border-gray-200'>
                                            <div className='flex h-fit'>
                                                <div onClick={removeShoes} className='select-none border px-3 pb-1 text-3xl cursor-pointer'>-</div>
                                                <div  className='border px-3 pt-1.5 text-xl cursor-pointer'>{shoesNum || 1}</div>
                                                <div onClick={addShoes} className='select-none border px-3 pb-1 text-3xl cursor-pointer'>+</div>
                                            </div>
                                            <button className='bg-[#6e7051] whitespace-nowrap text-white px-5'>ADD TO CART</button>
                                        </div>
                                        <div className='productShare flex gap-x-5 pt-[5%]'>
                                            <p className='font-semibold -mt-1'>SHARE: </p>
                                            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faEnvelope} />
                                            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faPinterestP} />
                                            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faXTwitter} />
                                            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faFacebook} />
                                            <FontAwesomeIcon className='text-xl cursor-pointer' icon={faInstagram} />
                                        </div>    
                                </div>
                            </div>
                        </div>
                    }
                    {highRating.map((item,index) =>
                        <div value={index} className='text-center flex flex-col relative'>
                            <img  value={index} onClick={quickViewChange} className='cursor-pointer' src={`${process.env.PUBLIC_URL}${item.img}`}/>
                            <h5  value={index} onClick={quickViewChange} className='cursor-pointer text-xl pt-3'>{item.name}</h5>
                            <div className='flex justify-center pt-3'>
                                {
                                    item.price.old == item.price.new ?
                                    <p className='text-gray-500 font-bold'>{item.price.old}</p> :
                                    <>
                                    <div className='sale bg-[#6e7051]'>Sale!</div>
                                    <p className='line-through text-gray-200 font-bold me-2'>{item.price.old}</p>
                                    <p className='text-gray-500 font-bold'>{item.price.new}</p>
                                </>
                                }
                            </div>
                            <div className='pt-3'>
                            <Rating name="half-rating-read" value={item.rating || 0} precision={0.5} readOnly />
                            </div>
                        </div>
                )}
                </div>
            </div>
        </>
    );
}
