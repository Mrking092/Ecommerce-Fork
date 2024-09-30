import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import siteLogo from '../../Imgs/site-logo.png'
import HeaderStyle from './HeaderStyle.css'

export default function Header(){
    return(
        <>
            <div className='bg-gray-100 w-full'>
                <h5 className='text-gray-400 text-center text-xs p-3'>
                    Free Express Shipping on all orders with all duties included
                </h5>
            </div>  
            <div className="header p-9 pe-0 flex ">
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
                            <li>
                                <a href='#' className='pe-8 text-black text-3xl'>
                                    <FontAwesomeIcon icon={faBagShopping}/>
                                </a>
                            </li>   
                            <li>
                                <a href='#' className='pe-6'>

                                </a>
                            </li>   
                        </div>
                    </ul>
                </div>    
            </div>
        </>
    )
}