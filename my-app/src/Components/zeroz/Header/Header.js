import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping, faUser, faXmark} from '@fortawesome/free-solid-svg-icons'
import siteLogo from '../../Imgs/site-logo.png'
import HeaderStyle from './HeaderStyle.css'
import { useState } from 'react';

export default function Header(){
    let shoppingElements = 0;
    const [cart, setCart] = useState(false);

    const shoppingCart = () => {
        setCart(!cart);
        console.log(cart);
    }
    return(
        <>
        { cart &&
        <div className='shoppingContainer'>
            <div className='shoppingDiv'>
                <FontAwesomeIcon onClick={shoppingCart} className='closeBtn text-xl absolute' icon={faXmark}/>
                <h2 className='ps-5 pb-5 mt-5 text-lg border-b font-semibold'>Shopping Cart</h2>
                <div className='flex justify-center'>
                    {shoppingElements > 0 ? "": <h5 className='noElement text-lg font-semibold text-gray-500 absolute'>No products in the cart.</h5>}
                </div>
                <div className='shoppingBtn cursor-pointer text-center py-3 mx-5 text-gray-100 text-md tracking-widest font-bold'>CONTINUE SHOPPING</div>
            </div>
            <div className='shoppingBg' onClick={shoppingCart}></div>
        </div>
        }
            <div className='shipping bg-gray-100 w-full'>
                <h5 className='text-gray-400 text-center text-xs p-3'>
                    Free Express Shipping on all orders with all duties included
                </h5>
            </div>  
            <div className="header p-9 pe-0 flex relative">
                <div className='sidebar cursor-pointer hidden'>
                    <a href='#'>
                    <div className='w-6 h-0.5 mb-1 mt-1 bg-gray-500'></div>
                    <div className='w-6 h-0.5 mb-1 bg-gray-500'></div>
                    <div className='w-6 h-0.5 mb-1 bg-gray-500'></div>
                    </a>
                </div>
                <button>
                    <a href='#'>
                    <img src={siteLogo} alt="site-logo"/>
                    </a>
                </button>
                <div className='headerLinks w-full'>
                    <ul className=' flex text-gray-400 font-medium relative'>
                        <li>
                            <a className='pe-6' href='#'>MEN</a>
                        </li>
                        <li>
                            <a className='pe-6' href='#'>WOMEN</a>
                        </li>
                        <li>
                            <a className='pe-6' href='#'>COLLECTION</a>
                        </li>
                        <li>
                            <a className='pe-6' href='#'>LOOKBOOK</a>
                        </li>
                        <li>
                            <a className='pe-6' href='#'>SALE</a>
                        </li>
                        <div className='ourStory flex'>
                            <li>
                                <a href='#' className=' whitespace-nowrap pe-6'>OUR STORY</a>
                            </li>    
                            <li>
                                <a href='#' className='pe-6'>CONTACT</a>
                            </li>   
                            <li className='icons cart ms-4 text-black text-3xl -mt-2'>
                                <a href='#' onClick={shoppingCart}>
                                    <FontAwesomeIcon  icon={faBagShopping}/>
                                    <div className='count text-sm bg-black text-white text-center'>{shoppingElements}</div>
                                </a>
                            </li>   
                            <li className='icons ms-9 text-black text-2xl -mt-1.5'>
                                <a href='#' className=''>
                                    <FontAwesomeIcon icon={faUser} />
                                </a>
                            </li>   
                        </div>
                    </ul>
                </div>    
            </div>
        </>
    )
}