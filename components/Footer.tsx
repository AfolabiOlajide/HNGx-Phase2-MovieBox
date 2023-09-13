import Link from "next/link";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-[2rem] py-[4rem]">
            {/* link icons */}
            <div className="icon-links flex gap-[3rem] text-gray-800 text-[1rem] md:text-[2rem]">
                <FaFacebookSquare className=""/>
                <FiInstagram className=""/>
                <FaTwitter className=""/>
                <FaYoutube className=""/>
            </div>
            {/* some links */}
            <div className="some-links flex gap-[3rem] text-[.7rem] md:text-[1.3rem] text-gray-800">
                <Link href={`/`}>
                    <span>Conditions of Use</span>
                </Link>
                <Link href={`/`}>
                    <span>Privacy & Policy</span>
                </Link>
                <Link href={`/`}>
                    <span>Press Room</span>
                </Link>
            </div>
            {/* copyrights */}
            <p className="text-[.7rem] md:text-base text-gray-500">&copy;2021 MovieBox by Adriana Eka Prayudha</p>
        </div>
    )
}

export default Footer