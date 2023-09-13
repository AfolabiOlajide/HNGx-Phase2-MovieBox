import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { FaGripLines } from "react-icons/fa";

// local imports 
import Logo from "../assets/logo.png"
import Link from "next/link";


const Nav = () => {
    return (
        <div className="bg-black md:bg-black/10 py-[2rem] relative md:absolute top-0 right-0 left-0 z-40">
            <div className="w-[90%] md:w-[80%] mx-auto">
                <div className="flex md:grid md:grid-cols-3 justify-between items-center">
                    <Link href={'/'}>
                        <div className="logo flex items-center gap-4">
                            <Image src={Logo} className="w-[3rem]" alt="logo" width={20} height={20} quality={100}/>
                            <span className="text-white text-[1.5rem]">MovieBox</span>
                        </div>
                    </Link>
                    <div className="hidden md:block search-box">
                        <div className="search border-white rounded-md flex items-center justify-between border-[2px] px-[1rem] py-[.3rem]">
                            <input type="text" className="outline-none border-none bg-transparent w-[90%] text-white" />
                            <AiOutlineSearch className="text-white cursor-pointer text-[1.5rem]" />
                        </div>
                    </div>
                    <div className="sign-in justify-self-end flex items-center gap-[2rem]">
                        <Link href={`/`} className="text-white">Sign in</Link>
                        {/* hamburger */}
                        <div className="ham bg-main p-[.5rem] rounded-[50%] cursor-pointer">
                            <FaGripLines className="text-white text-1rem"/>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden search-box w-full mt-[2rem]">
                    <div className="search border-white w-full rounded-md flex items-center justify-between border-[2px] px-[1rem] py-[.3rem]">
                        <input type="text" className="outline-none border-none bg-transparent w-[90%] text-white" />
                        <AiOutlineSearch className="text-white cursor-pointer text-[1.5rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav