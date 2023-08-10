import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FaBasketShopping, FaPhoneVolume } from "react-icons/fa6";
import LogoImg from "../../assets/logo.png";
const Menu = () => {
  return (
    // menu section 
    <section className=' bg-[#FAF7F2]'>
        
        <div className='lg:w-[1300px]  w-4/5 lg:h-[100px] h-[80px] m-auto flex flex-wrap items-center px-[7px]'>
            {/* navbar logo section  */}
            <div className='lg:w-[16%] w-[55%]'>
                <img src={LogoImg} alt='foodka logo'/>
            </div>
            {/* menu section  */}
            <div className='w-[60%] lg:block hidden'>
                <ul className='flex '>
                    <li className='font-medium mr-10 text-base font-medium leading-[50px] text-[#]'><a href='#'>HOME</a></li>
                    <li className='font-medium mr-10 text-base font-medium leading-[50px]'><a href='#'>SHOP</a></li>
                    <li className='font-medium mr-10 text-base font-medium leading-[50px]'><a href='#'>BLOG</a></li>
                    <li className='font-medium mr-10 text-base font-medium leading-[50px]'><a href='#'>ABOUT US</a></li>
                    <li className='font-medium mr-10 text-base font-medium leading-[50px]'><a href='#'>CONTACTS</a></li>

                </ul>
            </div>
            {/* cart section  */}
            <div className='lg:w-[12%] w-[20%] flex flex-wrap items-center justify-around px-3 truncate relative lg:h-[100px] h-[80px]'>
                {/* icon  */}
                <FaBasketShopping className='lg:text-3xl text-xl'/>
                {/* notify section  */}
                <div className='lg:w-6 lg:h-6 w-5 h-5 text-center bg-[#fdc913] rounded-full absolute lg:left-11 left-10 lg:top-7 top-5'>
1
                </div>
                {/* price  */}
                <p>49.50$</p>
            </div>

            {/* contact section  */}
            <div className='lg:w-[12%] w-[20%] flex flex-wrap items-center justify-around '>
            <FaPhoneVolume  className='lg:text-2xl text-lg'/>
                {/* telephone icon  */}
                <p>+997509153849</p>
            </div>

            <div className='w-[5%] lg:hidden pl-3 text-center h-auto'>
                <AiOutlineMenu className='text-2xl'/>
            </div>
        </div>

    </section>
  )
}

export default Menu