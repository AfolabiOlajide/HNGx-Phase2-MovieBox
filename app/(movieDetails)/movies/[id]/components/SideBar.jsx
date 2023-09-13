"use client"
import Image from "next/image";
import { usePathname } from "next/navigation"
import { GrHomeRounded } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import { LiaTvSolid } from "react-icons/lia";
import { BsCalendar3 } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";


// local imports 
import Logo from "@/assets/logo.png";
import Link from "next/link";

const dashLinks = [
    {
        title: "home",
        icon: GrHomeRounded,
        link: "/"
    },
    {
        title: "movies",
        icon: BiCameraMovie,
        link: "/moviesList"
    },
    {
        title: "tv Series",
        icon: LiaTvSolid,
        link: ""
    },
    {
        title: "upcoming",
        icon: BsCalendar3,
        link: ""
    },
]

const SideBar = () => {
    const pathname = usePathname();
    const path = pathname.split('/')[1];

    return (
        <div className="hidden lg:block border-r-[1px] border-gray-400">
            <div className="logo flex items-center gap-[2rem] p-[1.2rem] mb-[3rem]">
                <Image src={Logo} className="w-[3rem]" alt="logo" width={20} height={20} quality={100}/>
                <span className="text-black text-[1.5rem]">MovieBox</span>
            </div>
            {/* dashlink */}
            <div className="dash-links">
                <div className="link ">
                    {
                        dashLinks.map(dashLink => (
                            <Link key={dashLink.title} href={dashLink.link} className={`flex items-center gap-[2rem] p-[2rem] text-gray-600 text-[1.3rem] ${dashLink.title === path ? "bg-red-200/60 border-r-main border-r-[.5rem]" : ""} hover:pl-[3rem] trans`}>
                                <dashLink.icon className={`${dashLink.title === path ? "text-black" : ""}`}/>
                                <span className={`capitalize ${dashLink.title === path ? "text-main" : ""}`}>{dashLink.title}</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
            {/* play */}
            <div className="play p-[2rem]">
                <div className="border-[2px] border-red-400 rounded-[1.6rem] bg-red-100/30 p-[2rem]">
                    <h3 className="text-gray-700">Play movie quizes and earn free tickets</h3>
                    <p className="text-gray-500">50k people are playing now</p>
                    <button className="text-main bg-red-300/40 py-[.6rem] px-[1rem] rounded-[2rem] block mx-auto mt-[1rem]">Start playing</button>
                </div>
            </div>
            {/* logout */}
            <div className="logout">
                <Link href="" className={`flex items-center gap-[2rem] p-[2rem] text-gray-600 text-[1.3rem] hover:pl-[3rem] trans`}>
                    <RiLogoutBoxRLine className={``}/>
                    <span className={`capitalize`}>Log out</span>
                </Link>
            </div>
        </div>
    )
}

export default SideBar