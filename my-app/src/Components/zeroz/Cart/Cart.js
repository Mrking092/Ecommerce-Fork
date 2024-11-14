import CartStyle from './CartStyle.css'
import { useState, useEffect } from 'react';

export default function Cart(){
    
    let products = JSON.parse(window.localStorage.getItem("item"));
    const [cartProducts, setCartProducts] = useState(false);
    const [shoesNum, setShoesNum] = useState(()=> {return products[0].shoesNumber || null});
    const [shoesTotal, setShoesTotal] = useState(() => {return shoesNum * (products.reduce((acc,item) => acc +item.price.new.replace('$',''),0)) || null});

    useEffect(() => {
        window.addEventListener('storage', () => {
            console.log(products[0].price.new);
            setShoesTotal(shoesNum * products.reduce((acc, item) => acc + item.price.new.replace('$',''),0));
            console.log(products[0].price.new);
        })
    });

    function changeShoesNum(e) {
        setCartProducts(true);
        const adjustment = e.target.innerHTML === '+' ? 1 : -1;
        setShoesNum(prevShoesNum => {
            const newShoesNum = prevShoesNum + adjustment;
            return newShoesNum > 0 ? newShoesNum : 1;
        });
    }
    useEffect(() => {
        const updatedProducts = products.map((item, index) =>
            index === 0 ? { ...item, shoesNumber: shoesNum } : item
        );
        localStorage.setItem("item", JSON.stringify(updatedProducts));
        window.dispatchEvent(new Event('storage'));
    }, [shoesNum]);

    const [coupon, setCoupon] = useState(false);
    function addCoupon(){
        
    }
    return(
        <div className='bg-[#f1f1ef] flex justify-center items-center h-[fit-content] px-[12%] py-[2%] min-w-fit'>
            <div className='bg-white w-[100%] h-[100%] my-[3%] px-[5%] min-w-fit'>
                <h1 className='text-7xl font-semibold text-center py-[5%] border-[#6e7051] border-b-4'>Cart</h1>
                <div className='flex gap-x-5 h-[100%] mt-2 mb-[2%]'>
                    <table className='table-auto w-[70%] h-[20%] border'>
                        <tr className='bg-[#f1f1ef] text-[#a0a3a4] border h-[8vh] text-lg font-semibold'>
                            <th className=''>Product</th>
                            <th className=''>Price</th>
                            <th className=''>Quantity</th>
                            <th className=''>Subtotal</th>
                        </tr>
                        { products.map(item =>
                            <tr className='border'>
                                <td className='flex items-center gap-x-[10%] ms-[5%] h-[100%]'>
                                    <p className='text-2xl text-[#6e7051] cursor-pointer'>x</p>
                                    <div className='w-[90px] p-[1%]'>
                                        <img className='' src={`${process.env.PUBLIC_URL}${item.img}`}/>
                                    </div>
                                    <div className='font-semibold text-[#6e7051]'>{item.name}</div>
                                    </td>
                                <td className='text-lg font-semibold text-[#6e7051] text-center'>{
                                        (
                                            item.price.new == item.price.old ? item.price.old :
                                            <div className='flex'>
                                                <p className='line-through text-gray-300 me-2'>{item.price.old}</p>
                                                <p className='text-black'>{item.price.new}</p>
                                            </div>
                                        )
                                    }</td>
                                <td>
                                    <div className='flex h-fit justify-center text-[#6e7051]'>
                                        <div onClick={changeShoesNum} className='select-none border px-3 pb-1 text-3xl cursor-pointer'>-</div>
                                        <div id='productsQuantity' className='border px-3 pt-1.5 text-xl select-none'>{cartProducts || ( shoesNum == item.shoesNumber) && shoesNum ? shoesNum : item.shoesNumber}</div>
                                        <div onClick={changeShoesNum} className='select-none border px-3 pb-1 text-3xl cursor-pointer'>+</div>
                                    </div>
                                </td>
                                <td className='text-center text-[#6e7051] text-lg font-semibold'>
                                    <p>${cartProducts || ( shoesNum == item.shoesNumber) ? parseFloat((shoesNum * item.price.new.replace('$', ''))).toFixed(2) : parseFloat(item.shoesNumber * item.price.new.replace('$', '')).toFixed(2)}</p>
                                    </td>
                            </tr>
                        )
                        } 
                    </table>
                    <div className='w-[30%] mb-[2%] h-[fit-content] border'>
                        <h4 className='bg-[#f1f1ef] h-[8vh] text-2xl font-semibold flex items-center px-[7%]'>Cart totals</h4>
                        <div className=' px-[7%] py-[10%] text-lg text-[#a0a3a4] font-semibold'>

                            <div className='flex border-b justify-between px-[10%] py-5'>
                                <h6>Subtotal</h6>
                                <h6 className='font-normal'>${shoesTotal.toFixed(2)}</h6>
                            </div>
                            <div className='flex border-b justify-between px-[10%] py-5'>
                                <h6>Total</h6>
                                <h6 className='font-normal '>${shoesTotal.toFixed(2)}</h6>
                            </div>
                            {coupon ?
                             <div className='w-[100%] flex gap-x-[3%] min-w-[fit-content] mt-[25%]'>
                                <input className='border h-[fit-content] w-[70%] p-2 text-[0.8rem]' type='text' placeholder='Coupon code'/>
                                <button onClick={addCoupon} className='bg-[#6e7051] text-[1rem] w-[40%] text-white'>APPLY</button>
                            </div> :
                             <p onClick={()=>setCoupon(true)} className='cursor-pointer mt-[25%]'>Have a coupon?</p>
                            }
                            <button className='bg-[#6e7051] mt-[5%] text-white p-5 w-[100%]'><a href='#'>PROCEED TO CHECKOUT</a></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}