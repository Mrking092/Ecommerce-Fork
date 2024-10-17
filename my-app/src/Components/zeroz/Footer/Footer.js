import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faUser, faXmark} from '@fortawesome/free-solid-svg-icons'
import FooterStyle from './FooterStyle.css'

export default function Footer(){
    return(
        <>
            <div className='betterForDiv flex flex-col justify-center items-center'>
                <h1 className='text-white'>Better for People & the Planet</h1>
                <p className='text-white text-md'>Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate</p>
                <div className='flex justify-center gap-x-5'>
                    <button className='bg-white text-black px-10 py-3 font-semibold'>SHOP MEN</button>
                    <button className='bg-white text-black px-10 py-3 font-semibold'>SHOP WOMEN</button>
                </div>
            </div>

            <div className='Pros flex justify-between border-b'>
                <div className='border-e'>
                    <FontAwesomeIcon/>
                    <p>Secure Payment</p>
                </div>
                <div className='border-e'>
                    <FontAwesomeIcon/>
                    <p>Express Shipping</p>
                </div>
                <div className=''>
                    <FontAwesomeIcon />
                    <p>Free Return</p>
                </div>
            </div>
        </>
    )
}