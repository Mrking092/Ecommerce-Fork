import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import siteLogo from '../../Imgs/zeroz/site-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDolly, faLock } from '@fortawesome/free-solid-svg-icons';


export default function Checkout() {
    const [country, setCountry] = useState([]);
    async function fetchCounties() {
        try {
            const response = await fetch('https://countriesnow.space/api/v0.1/countries');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json(); // Use await here as well
            setCountry(json.data.map(item => item.country));
        } catch (error) {
            console.error('Error:', error.message); // Improved error handling
        }
    }
    fetchCounties();
    const data = JSON.parse(window.localStorage.getItem("item"));
    console.log();
    return(
        <>
            <a className='flex justify-center py-[1%] cursor-pointer'>
                <img src={siteLogo}/>
            </a>
            <div className='bg-[#f1f1ef] flex justify-center items-center h-[fit-content] px-[15%] py-[2%] min-w-fit'>
                <div className='bg-white w-[100%] h-[100%] my-[3%] px-[5%] min-w-fit'>
                    <h1 className='text-7xl font-semibold text-center py-[5%]'>Checkout</h1>
                    <div className='flex gap-x-[5%]'>
                        <form className='w-[55%]'>
                            <h3 className='border-b w-fit border-[#ddd] py-[2%] text-2xl font-bold'>Customer information</h3>
                            <div className='mt-[3%]'>
                                <input required type='text' placeholder='Username or Email Address *' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                            </div>
                            <h3 className='border-b border-[#ddd] py-[2%] text-2xl font-bold'>Billing details</h3>
                            <div className='mt-[3%]'>
                                <div className='flex gap-x-[3%]'>
                                    <input required placeholder='First name *' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                    <input required placeholder='Last name *' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                </div>
                                <input placeholder='Company name' className='border mt-[3%] p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                <Autocomplete
                                    required
                                    className='mt-[3%]'
                                    disablePortal
                                    options={country}
                                    renderInput={(params) => <TextField {...params} label="Country/Region *" />}
                                    />                   
                                <div className='flex gap-x-[3%] mt-[3%]'>
                                    <input placeholder='House number and street name' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                    <input placeholder='Apartment, suite, unit, etc.' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                </div>         
                                <div className='flex gap-x-[3%] mt-[3%]'>
                                    <input required placeholder='Town / City *' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                    <input required placeholder='State *' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                    <input required placeholder='ZIP Code *' className='border p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                                </div>         
                                    <input required placeholder='Phone *' className='border mt-[3%] p-[1.5%] rounded text-lg text-black w-full border-[#ddd]'/>
                            </div>
                            <h3 className='border-b border-[#ddd] py-[2%] text-2xl font-bold'>Additional information</h3>
                            <textarea className='border mt-[3%] p-[1.5%] rounded text-lg text-black w-full border-[#ddd]' placeholder='Notes about your order, e.g. spectial notes for delivery.'/>
                            <h3 className='py-[2%] text-2xl font-bold'>payments</h3>
                            <div className='mt-[1%] px-[2%] mb-[10%]'>
                                <div className='flex p-[3%] gap-x-[2%] border-t-4 border-[#6e7051] bg-[#f7f6f7] '>
                                    <FontAwesomeIcon className='text-2xl mt-1.5 text-[#6e7051]' icon={faDolly} />
                                    <p className='text-md font-semibold text-[#6e7051]'>Sorry, it seems that there are no available payment methods.
                                    Please contact us if you require assistance or wish to make alternate arrangements.
                                    </p>
                                </div>
                                <button className=' bg-[#6e7051] tracking-widest	 font-semibold text-[1rem] mt-[2%] text-white p-3 w-[100%] duration-[0.8s] hover:bg-[#262b2c]'><a className='flex justify-center items-center gap-x-[2%]' href='#'>
                                <FontAwesomeIcon className='text-sm' icon={faLock} />
                                <p>PLACE ORDER ${data.reduce((acc,item) => acc + +item.price.new.replace('$','') ,0 ).toFixed(2)}</p>
                                </a></button>
                            </div>
                        </form>

                        <div className='w-[45%]'>
                        <h3 className='w-fit py-[2%] text-2xl font-bold'>Your order</h3>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}