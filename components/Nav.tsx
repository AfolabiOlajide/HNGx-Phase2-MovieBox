import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

// local imports 
import Logo from "../assets/logo.png"
import Link from "next/link";


const Nav = () => {
    return (
        <div className="bg-red-300 grid grid-cols-3 justify-between items-center w-[80%] mx-auto py-[2rem]">
            <div className="logo flex items-center gap-4">
                <Image src={Logo} className="w-[3rem]" alt="logo" width={20} height={20} quality={100}/>
                <span className="text-white text-[1.5rem]">MovieBox</span>
            </div>
            <div className="search-box">
                <div className="search border-white rounded-md flex items-center justify-between border-[2px] px-[1rem] py-[.3rem]">
                    <input type="text" className="outline-none border-none bg-transparent w-[90%] text-white" />
                    <AiOutlineSearch className="text-white cursor-pointer text-[1.5rem]" />
                </div>
            </div>
            <div className="sign-in justify-self-end">
                <Link href={`/`}>Sign in</Link>
            </div>
        </div>
    )
}

export default Nav