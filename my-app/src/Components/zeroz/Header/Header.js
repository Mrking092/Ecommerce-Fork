import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBagShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import siteLogo from '../../Imgs/site-logo.png'
import HeaderStyle from './HeaderStyle.css'

export default function Header(){
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

            </div>
            <div></div>
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
                                <a href='x' onClick={shoppingCart}>
                                    <FontAwesomeIcon  icon={faBagShopping}/>
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