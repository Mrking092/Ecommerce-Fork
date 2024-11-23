import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebookF, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import siteLogo from '../../Imgs/zeroz/site-logo.png'
import AccountStyle from './AccountStyle.css'

export default function Account() {
    const [active, setActive] = useState('login');

    return (
        <>
            <div className="flex h-[100vh] w-[100vw] bg-[#262b2c] justify-center items-center">
                <div className="z-0 p-[2%] h-[50%] flex flex-col justify-center min-h-fit w-[25vw] rounded-s-2xl bg-white">
                    <h2 className="text-4xl font-bold text-center mb-[5%]">Sign in</h2>
                    <div className="flex justify-center gap-x-[2%]">
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faFacebookF} /> 
                        </div>
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faXTwitter} /> 
                        </div>
                    </div>
                    <p className="text-center mt-[5%] mb-[3%] font-semibold">Login with Email & Password</p>
                    <form className="">
                        <input required className="w-[100%] bg-[#eee] mb-[3%] p-[1.5%] ps-[3%] rounded" type="email" placeholder="Email" />
                        <input required className="w-[100%] bg-[#eee] mb-[3%] p-[1.5%] ps-[3%] rounded" type="password" placeholder="Password" />
                        <div className="flex justify-center">
                            <button className="py-[2%] px-[10%] bg-[#6e7051] tracking-widest font-semibold text-[1rem] mt-[2%] text-white p-3 duration-[0.8s] hover:bg-[#262b2c] rounded">SIGN UP</button>
                        </div>
                    </form>
                </div>

                <div className="z-1 p-[2%] h-[50%] flex flex-col justify-center min-h-fit w-[25vw] rounded-e-2xl bg-white">
                    <h2 className="text-4xl font-bold text-center mb-[5%]">Create Account</h2>
                    <div className="flex justify-center gap-x-[2%]">
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faFacebookF} /> 
                        </div>
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </div>
                        <div className="p-[2%] aspect-square border rounded px-[3%] shadow-md cursor-pointer duration-[0.5s] hover:bg-slate-50">
                            <FontAwesomeIcon icon={faXTwitter} /> 
                        </div>
                    </div>
                    <p className="text-center mt-[5%] mb-[3%] font-semibold">Register with E.mail</p>
                    <form className="">
                        <input required className="w-[100%] bg-[#eee] mb-[3%] p-[1.5%] ps-[3%] rounded" type="text" placeholder="Name" />
                        <input required className="w-[100%] bg-[#eee] mb-[3%] p-[1.5%] ps-[3%] rounded" type="email" placeholder="Email" />
                        <input required className="w-[100%] bg-[#eee] mb-[3%] p-[1.5%] ps-[3%] rounded" type="password" placeholder="Password" />
                        <div className="flex justify-center">
                            <button className="py-[2%] px-[10%] bg-[#6e7051] tracking-widest font-semibold text-[1rem] mt-[2%] text-white p-3 duration-[0.8s] hover:bg-[#262b2c] rounded">SIGN UP</button>
                        </div>
                    </form>
                </div>

            <div className="absolute flex h-[100vh] w-[100vw] bg-[#262b2c] justify-center items-center">
                <div className={`p-[2%] h-[50%] flex flex-col justify-center items-center min-h-fit w-[25vw] rounded-2xl duration-[1s] bg-[#6e7051]${
                    active === 'signup' ? ' signupActive' : ''}`}> 
                    <div className="flex justify-center">
                        <img className="w-[300px] h-[50px]" src={siteLogo} alt="site-logo"/>
                    </div>
                    <p className="text-center text-white mt-[5%] mb-[3%] w-[40%]  font-semibold">Create an account  to Join us</p>
                    <button id="signup" onClick={() => setActive('signup')} className="py-[2%] px-[10%] border text-white tracking-widest font-semibold text-[1rem] mt-[2%] border-white p-3 rounded hover:text-black hover:bg-white duration-[0.8s]">SIGN UP</button>
                </div>
                <div className={`p-[2%] h-[50%] flex flex-col justify-center items-center min-h-fit w-[25vw] rounded-2xl duration-[1.5s] bg-[#6e7051]
                    ${active === 'login' ? ' loginActive' : ''}`}> 
                    <div className="flex justify-center">
                        <img className="w-[300px] h-[50px]" src={siteLogo} alt="site-logo"/>
                    </div>
                    <p className="text-center text-white mt-[5%] mb-[3%] w-[40%] font-semibold">Login to Access your account</p>
                    <button id="login" onClick={() => setActive('login')} className="py-[2%] px-[10%] border text-white tracking-widest font-semibold text-[1rem] mt-[2%] border-white p-3 rounded hover:text-black hover:bg-white duration-[0.8s]">LOGIN</button>
                </div>
            </div>
            </div>
        </>
    )
}